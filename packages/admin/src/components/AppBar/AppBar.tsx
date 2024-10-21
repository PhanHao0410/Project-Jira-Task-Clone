import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { useMediaQuery } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreMobx } from '../../mobx/hook';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import {
  removeToken,
  removeLoginInfo,
  getLoginInfo,
} from '../../utils/localStorage';

import {
  AppBarContain,
  AppBarRightContain,
  ShowSelectProjectContain,
  AppBarActionContain,
  MenuShowContain,
  DrawerCreateTaskContain,
  FormCreateTaskContain,
  DialogCreateTaskSuccess,
  DialogCreateTaskFail,
} from './styles';

interface ICreateTaskForm {
  project: string;
  taskName: string;
  description: string;
  statusId: string;
  priorityId: number;
  taskTypeId: number;
  assignerId: number;
}

const AppBar = (props) => {
  const {
    rootStore: {
      projectsStore,
      appbarStore,
      createProjectStore,
      projectDetailStore,
    },
  } = useStoreMobx();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ICreateTaskForm>();

  const navigate = useLocation();

  const matches = useMediaQuery('(max-width: 960px)');
  const userSignIn = JSON.parse(getLoginInfo());
  const dataAllProject = projectsStore.getDataProjects;
  const dataStatus = appbarStore.getDataStatus;
  const dataPriority = appbarStore.getDataPriority;
  const dataTaskType = appbarStore.getDataTaskType;
  const dataUserProject = createProjectStore.getDataUserByProjectId;
  const dataCreateTask = projectDetailStore.getDataCreateTask;
  const errorCreateTask = projectDetailStore.getErrorCreateTask;
  const ProjectName = watch('project');
  const [valueProject, setValueProject] = useState<number>();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [project, setProject] = React.useState('');
  const [status, setStatus] = React.useState(1);
  const [priority, setPriority] = React.useState('');
  const [taskType, setTaskType] = React.useState('');
  const [estimateHour, setEstimateHour] = React.useState('0');
  const [spentHour, setSpentHour] = React.useState('0');
  const [listAssignees, setListAssignees] = useState([]);
  const [anchorElSetting, setAnchorElSetting] =
    React.useState<null | HTMLElement>(null);
  const openSetting = Boolean(anchorElSetting);

  const [anchorElAccount, setAnchorElAccount] =
    React.useState<null | HTMLElement>(null);
  const openAccount = Boolean(anchorElAccount);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  useEffect(() => {
    if (openDrawer) {
      projectsStore.fetchAllProjects('');
      appbarStore.fetchDataStatus();
      appbarStore.fetchDataPriority();
      appbarStore.fetchDataTaskType();
      if (valueProject) {
        createProjectStore.fetchUserByProjectId(valueProject);
      }
    }
  }, [openDrawer, valueProject]);

  useEffect(() => {
    if (ProjectName) {
      setValueProject(Number(ProjectName));
    } else {
      setValueProject(dataAllProject[0]?.id);
    }
  }, [ProjectName, dataAllProject]);

  useEffect(() => {
    if (dataCreateTask?.content) {
      setOpenSuccess(true);
    } else if (errorCreateTask?.content) {
      setOpenFail(true);
    } else {
      setOpenFail(false);
      setOpenSuccess(false);
    }
  }, [dataCreateTask, errorCreateTask]);

  const handleChangeProject = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const handleChangePriority = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };
  const handleChangeTaskType = (event: SelectChangeEvent) => {
    setTaskType(event.target.value as string);
  };

  const handleOpenSetting = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSetting(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorElSetting(null);
  };
  const handleOpenAccount = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElAccount(event.currentTarget);
  };

  const handleClickAccount = () => {
    setAnchorElAccount(null);
    history.push(path.ACCOUNTS);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
    projectDetailStore.setResetStateCreateTask();
  };

  const handleCloseCreateFail = () => {
    setOpenFail(false);
    projectDetailStore.setResetStateCreateTask();
  };

  const handleLogOutAccount = () => {
    setAnchorElAccount(null);
    removeToken();
    removeLoginInfo();
    history.push(path.ROOT);
  };

  const handleAssignees = (e, newValue) => {
    const check = newValue.map((item) => item.userId);
    setListAssignees(check);
  };

  const handleSubmitCreateTask = (data) => {
    const description = convertToHTML(editorState.getCurrentContent());
    const listUserAsign = listAssignees;
    const originalEstimate = Number(estimateHour);
    const timeTrackingSpent = Number(spentHour);
    const timeTrackingRemaining = originalEstimate - timeTrackingSpent;
    const priorityId = Number(data.priorityId);
    const projectId = data.project;
    const statusId = data.statusId;
    const taskName = data.taskName;
    const typeId = Number(data.taskTypeId);
    projectDetailStore.fetchCreateTaskProject({
      description,
      listUserAsign,
      originalEstimate,
      timeTrackingSpent,
      timeTrackingRemaining,
      priorityId,
      projectId,
      statusId,
      taskName,
      typeId,
    });
  };

  return (
    <AppBarContain>
      <AppBarRightContain>
        <div className="logo-contain">
          <img src="https://demo3.cybersoft.edu.vn/ico.png" alt="image_logo" />
          <h3>Jira</h3>
        </div>
        <div className="selected-contain">
          <div className=" select-project">
            <p
              className={
                navigate.pathname.slice(0, 7) === '/projec'
                  ? 'select-item select-active'
                  : 'select-item'
              }
            >
              Projects
              <span>
                <ExpandMoreIcon />
              </span>
            </p>
            <ShowSelectProjectContain className="select-item-show">
              <p
                onClick={() => history.push(path.PROJECTS)}
                role="presentation"
              >
                View all projects
              </p>
              <p
                onClick={() => history.replace(path.CREATEPROJECT)}
                role="presentation"
              >
                Create projects
              </p>
            </ShowSelectProjectContain>
          </div>
          <div>
            <p
              className={
                navigate.pathname.slice(0, 7) === '/users'
                  ? 'select-item select-active'
                  : 'select-item'
              }
              onClick={() => history.push(path.USERS)}
              role="presentation"
            >
              Users
            </p>
          </div>
          <div>
            <p
              className="select-item "
              onClick={() => setOpenDrawer(true)}
              role="presentation"
            >
              Create Task
            </p>
          </div>
        </div>
      </AppBarRightContain>
      <AppBarActionContain>
        <Tooltip title="Settings">
          <div
            className="setting-contain"
            onClick={handleOpenSetting}
            role="presentation"
          >
            <SettingsIcon />
          </div>
        </Tooltip>
        <Tooltip title="Your profile and settings">
          <div
            className="avatar-account"
            role="presentation"
            onClick={handleOpenAccount}
            style={{ backgroundImage: `url(${userSignIn?.avatar})` }}
          />
        </Tooltip>
      </AppBarActionContain>
      <MenuShowContain
        id="basic-menu"
        anchorEl={anchorElSetting}
        open={openSetting}
        onClose={handleCloseSetting}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div>
          <h3>Atlassian Admin</h3>
          <MenuItem
            onClick={() => {
              setAnchorElSetting(null);
              history.push(path.USERS);
            }}
            className="menu-item"
          >
            User management
          </MenuItem>
        </div>
        <div>
          <h3>Jira Settings</h3>
          <MenuItem
            onClick={() => {
              setAnchorElSetting(null);
              history.push(path.PROJECTS);
            }}
            className="menu-item"
          >
            Projects
          </MenuItem>
        </div>
      </MenuShowContain>
      <MenuShowContain
        id="basic-menu"
        anchorEl={anchorElAccount}
        open={openAccount}
        onClose={() => setAnchorElAccount(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div>
          <h3 style={{ textTransform: 'uppercase' }}>Haotech1</h3>
          <MenuItem onClick={handleClickAccount} className="menu-item">
            Profiles
          </MenuItem>
        </div>

        <MenuItem
          onClick={handleLogOutAccount}
          className="menu-item"
          style={{ borderTop: '1px solid RGB(220 220 220)' }}
        >
          Log out
        </MenuItem>
      </MenuShowContain>
      <DrawerCreateTaskContain
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={matches ? { width: '90vw' } : { width: '50vw' }}
          role="presentation"
        >
          <form onSubmit={handleSubmit(handleSubmitCreateTask)}>
            <div className="title-drawer">
              <h3>Create Task</h3>
              <span onClick={() => setOpenDrawer(false)} role="presentation">
                <CloseIcon />
              </span>
            </div>
            <Divider />
            <FormCreateTaskContain>
              <div className="field-item-contain">
                <p className="title-item">Project</p>
                {dataAllProject && dataAllProject.length > 0 && (
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ minWidth: 120, width: '100%' }}>
                      <Select
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        {...register('project', {
                          required: 'Project is required',
                        })}
                        defaultValue={dataAllProject[0].id}
                      >
                        {dataAllProject &&
                          dataAllProject.length > 0 &&
                          dataAllProject.map((item, ind) => {
                            return (
                              <MenuItem
                                value={item.id}
                                key={`${item.id}${ind}`}
                              >
                                {item.projectName}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                )}
                <div className="show-error">
                  * You can only create tasks of your own projects!
                </div>
                <div
                  className="show-error"
                  style={{
                    color: 'red',
                    fontWeight: '400',
                    marginTop: '3px',
                    marginLeft: '5px',
                  }}
                >
                  {errors.project?.message}
                </div>
              </div>
              <div className="field-item-contain">
                <p className="title-item">Task name</p>
                <input
                  placeholder="Create task"
                  {...register('taskName', {
                    required: ' Task name is required',
                  })}
                />
                {errors.taskName?.message && (
                  <div
                    className="show-error"
                    style={{ marginTop: '1px', color: 'red' }}
                  >
                    {errors.taskName?.message}
                  </div>
                )}
              </div>
              {dataStatus && dataStatus.length > 0 && (
                <div className="field-item-contain">
                  <p className="title-item">Status</p>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ minWidth: 120, width: '100%' }}>
                      <Select
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        defaultValue={dataStatus[0].statusId}
                        {...register('statusId')}
                      >
                        {dataStatus.map((item) => {
                          return (
                            <MenuItem value={item.statusId} key={item.statusId}>
                              {item.statusName}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              )}
              <div className="field-number-contain">
                {dataPriority && dataPriority.length > 0 && (
                  <div className="field-item-contain field-item-45">
                    <p className="title-item">Priority</p>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl sx={{ minWidth: 120, width: '100%' }}>
                        <Select
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                          defaultValue={dataPriority[0].priorityId}
                          {...register('priorityId')}
                        >
                          {dataPriority.map((item) => {
                            return (
                              <MenuItem
                                value={item.priorityId}
                                key={item.priorityId}
                              >
                                {item.priority}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                )}
                {dataTaskType && dataTaskType.length > 0 && (
                  <div className="field-item-contain field-item-45">
                    <p className="title-item">Task Type</p>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl
                        sx={{
                          minWidth: 120,
                          width: '100%',
                          textTransform: 'uppercase',
                        }}
                      >
                        <Select
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                          defaultValue={dataTaskType[0].id}
                          {...register('taskTypeId')}
                        >
                          {dataTaskType.map((item) => {
                            return (
                              <MenuItem
                                value={item.id}
                                key={item.id}
                                sx={{ textTransform: 'uppercase' }}
                              >
                                {item.taskType}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                )}
              </div>
              <div className="field-item-assign">
                <p className="title-item">Assigners</p>
                <Autocomplete
                  multiple
                  id="size-small-outlined-multi"
                  size="small"
                  onChange={(event, newvalue) =>
                    handleAssignees(event, newvalue)
                  }
                  fullWidth
                  options={dataUserProject}
                  getOptionLabel={(dataUserProject) => dataUserProject.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Choose assignees..."
                      {...register('assignerId')}
                    />
                  )}
                />
              </div>
              <div style={{ paddingTop: '5px' }}>
                <p className="title-item">Time Tracking</p>
                <div className="field-number-contain">
                  <div className="field-item-contain field-item-45">
                    <p className="title-item">Total Estimated Hours</p>
                    <input
                      placeholder="estimate"
                      type="number"
                      min="0"
                      value={estimateHour}
                      onChange={(e) => setEstimateHour(e.target.value)}
                    />
                  </div>
                  <div className="field-item-contain field-item-45">
                    <p className="title-item">Hours spent</p>
                    <input
                      placeholder="spent"
                      type="number"
                      min="0"
                      max={estimateHour}
                      value={spentHour}
                      onChange={(e) => setSpentHour(e.target.value)}
                    />
                  </div>
                </div>
                <Slider
                  max={Number(estimateHour)}
                  value={Number(spentHour)}
                  min={0}
                  valueLabelDisplay="auto"
                  shiftStep={1}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '15px 0',
                  }}
                >
                  <h3>{`${spentHour} hour(s) spent`}</h3>
                  <h3>{`${estimateHour} hour(s) remaining`}</h3>
                </div>
              </div>
              <div
                className="field-item-contain"
                style={{ paddingTop: '10px' }}
              >
                <p className="title-item">Description</p>
                <div>
                  <Editor
                    defaultEditorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    // {...register('description', {
                    //   required: 'Description is required',
                    // })}
                  />
                  {/* {errors.description?.message && (
                    <p style={{ color: 'red' }}>
                      {errors.description?.message}
                    </p>
                  )} */}
                </div>
              </div>
            </FormCreateTaskContain>
            <div className="drawer-action-content">
              <Button
                className="btn btn-cancel"
                onClick={() => setOpenDrawer(false)}
              >
                Cancel
              </Button>
              <Button className="btn btn-submit" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </DrawerCreateTaskContain>
      <DialogCreateTaskSuccess
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '30%',
            minWidth: '380px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="x-mark-contain">
            <span className="x-mark-item x-mark-left" />
            <span className="x-mark-item x-mark-right" />
          </div>
        </DialogTitle>
        <DialogContent id="dialog-content">
          <h3>Welcome to Jira!</h3>
          <p>{dataCreateTask?.message}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccess} autoFocus className="btn-dialog">
            ok
          </Button>
        </DialogActions>
      </DialogCreateTaskSuccess>
      <DialogCreateTaskFail
        open={openFail}
        onClose={handleCloseCreateFail}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '30%',
            minWidth: '380px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="x-mark-contain">
            <span className="x-mark-item x-mark-left" />
            <span className="x-mark-item x-mark-right" />
          </div>
        </DialogTitle>
        <DialogContent id="dialog-content">
          <h3>Awwww!</h3>
          <p>{errorCreateTask?.content}</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseCreateFail}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogCreateTaskFail>
    </AppBarContain>
  );
};

export default observer(AppBar);
