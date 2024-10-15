import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import BugReportIcon from '@mui/icons-material/BugReport';
import ReportIcon from '@mui/icons-material/Report';
import { useStoreMobx } from '../../mobx/hook';
import { Data } from '../../types/Requests';
import WordEmbed from '../../components/word-embed';

import {
  CardItemContent,
  DialogCradItemContain,
  MenuTaskContain,
  DialogCardItemContentContain,
  DetailDialogCardItemContain,
  PriorityContentContain,
  MenuItemContain,
  DialogTimeTrackingContain,
  DialogSignInErrorContain,
  DialogDeleteTask,
} from './styles';

interface Props {
  data: Data;
  isDragging: boolean;
}

const CardItem = ({ data, projectId, dataUserByProject, clickTaskItem }) => {
  const {
    rootStore: { projectDetailStore },
  } = useStoreMobx();
  const dataTaskDetail = projectDetailStore.getDataTaskDetail;
  const dataUpdateTask = projectDetailStore.getDataUpdateTask;
  const errorUpdateTask = projectDetailStore.getErrorUpdateTask;
  const dataUpdatePriority = projectDetailStore.getDataUpdatePriority;
  const errorUpdatePriority = projectDetailStore.getErrorUpdatePriority;
  const errorUpdateEstimate = projectDetailStore.getErrorUpdateEstimate;
  const errorUpdateTimeTracking = projectDetailStore.getErrorUpdateTimeTracking;
  const dataUpdateTimeTracking = projectDetailStore.getDataUpdateTimeTracking;
  const errorDeleteTask = projectDetailStore.getErrorDeleteTask;
  const dataDeleteTask = projectDetailStore.getDataDeleteTask;
  const dataUpdateEstimate = projectDetailStore.getDataUpdateEstimate;

  const [open, setOpen] = React.useState(false);
  const [openDeleteTask, setOpenDeleteTask] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showDetail, setShowDetail] = useState<boolean>(true);
  const [projectCategory, setProjectCategory] = React.useState('');
  const [valuePriority, setValuePriority] = useState('hight');
  const [showEstimate, setShowEstimate] = useState(false);
  const [valueEstimate, setValueEstimate] = useState<any>();
  const [sliderSpent, setSliderSpent] = useState<string>('');
  const [idTask, setIdTask] = useState<number>();
  const [openErrorCardItem, setOpenErrorCardItem] = useState(false);
  const [valueAssignees, setValueAssignees] = useState<any>();
  const [anchorElPriority, setAnchorElPriority] =
    React.useState<null | HTMLElement>(null);
  const [openTimeTracking, setOpenTimeTracking] = React.useState(false);
  const openPriority = Boolean(anchorElPriority);
  useEffect(() => {
    if (open && idTask) {
      projectDetailStore.fetchTaskDetail(idTask);
    }
    if (dataUpdateTimeTracking?.content) {
      setOpenTimeTracking(false);
      setSliderSpent('');
    }
    if (dataUpdateEstimate?.content) {
      setShowEstimate(false);
      projectDetailStore.setResetStateUpdateEstimate();
    }
  }, [
    open,
    dataUpdateTask,
    dataUpdatePriority,
    dataUpdateEstimate,
    dataUpdateTimeTracking,
  ]);

  useEffect(() => {
    if (
      errorUpdateTask?.content ||
      errorUpdatePriority?.content ||
      errorUpdateEstimate?.content ||
      errorUpdateTimeTracking?.content ||
      errorDeleteTask?.content
    ) {
      setOpenErrorCardItem(true);
    } else {
      setOpenErrorCardItem(false);
    }
  }, [
    errorUpdateTask,
    errorUpdatePriority,
    errorUpdateEstimate,
    errorUpdateTimeTracking,
    errorDeleteTask,
  ]);

  useEffect(() => {
    const commonIds = dataUserByProject
      .map((item) => item.userId)
      .filter((id) =>
        dataTaskDetail?.assigness?.some((item) => item.id === id),
      );
    const filteredArray1 = dataUserByProject.filter((item) =>
      commonIds.includes(item.userId),
    );
    setValueAssignees(filteredArray1);
    setValueEstimate(dataTaskDetail?.originalEstimate);
  }, [dataTaskDetail, errorUpdateEstimate]);

  const handleClickOpenTimeTracking = () => {
    setOpenTimeTracking(true);
  };

  const handleCloseTimeTracking = () => {
    setOpenTimeTracking(false);
    setSliderSpent('');
  };
  const handleClickPriority = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPriority(event.currentTarget);
  };
  const handleClosePriority = () => {
    setAnchorElPriority(null);
  };
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClickTask = (idType) => {
    setAnchorEl(null);
    const dataTaskCopy = { ...dataTaskDetail, typeId: idType };
    projectDetailStore.fetchUpdateTask(dataTaskCopy);
  };

  const handleClickOpen = (id) => {
    setIdTask(id);
    setOpen(true);
  };

  const handleClose = () => {
    setIdTask(null);
    projectDetailStore.setResetStateTaskDetail();
    setOpen(false);
  };

  const handleCloseDialogDeleteTask = () => {
    setOpenDeleteTask(false);
  };

  const handleClickDeleteTask = () => {
    projectDetailStore.fetchDeleteTaskProject(idTask);
  };

  const handleChange = (event: SelectChangeEvent) => {
    const taskId = dataTaskDetail?.taskId;
    const statusId = event.target.value.toString();
    projectDetailStore.fetchUpdateStatus({ taskId, statusId });
  };

  const handleCloseHideError = () => {
    setOpenErrorCardItem(false);
    projectDetailStore.setResetStateUpdateTask();
    projectDetailStore.setResetStateUpdateTask();
    projectDetailStore.setResetStateUpdatePriority();
    projectDetailStore.setResetStateUpdateEstimate();
    projectDetailStore.setResetStateUpdateTimeTracking();
    projectDetailStore.setResetStateDeleteTask();
  };

  const handleAssignees = (e, newValue) => {
    const check = newValue.map((item) => item.userId);
    const dataTaskCopy = { ...dataTaskDetail, listUserAsign: [...check] };
    projectDetailStore.fetchUpdateTask(dataTaskCopy);
  };

  const handleUpdateTaskPriority = (id) => {
    if (id !== dataTaskDetail?.priorityTask?.priorityId) {
      const priorityId = id;
      const taskId = idTask;
      projectDetailStore.fetchUpdatePriority({ priorityId, taskId });
    }
  };

  const handleClickSetUpEstimate = () => {
    const originalEstimate = Number(valueEstimate);
    const taskId = idTask;
    projectDetailStore.fetchUpdateEstimate({ originalEstimate, taskId });
  };

  const handleClickUpdateTimeTracking = () => {
    if (sliderSpent.length > 0) {
      const taskId = idTask;
      const timeTrackingSpent =
        dataTaskDetail?.timeTrackingSpent + Number(sliderSpent);

      const timeTrackingRemaining = (
        dataTaskDetail?.timeTrackingRemaining - Number(sliderSpent)
      ).toString();
      projectDetailStore.fetchUpdateTimeTracking({
        taskId,
        timeTrackingSpent,
        timeTrackingRemaining,
      });
    } else {
      setOpenTimeTracking(false);
    }
  };

  return (
    <>
      <CardItemContent
        draggable
        style={{ cursor: 'pointer' }}
        onClick={() => handleClickOpen(data.taskId)}
      >
        <h3>{data.taskName}</h3>
        <div className="inform-contain">
          <div className="priority-contain">
            {data.taskTypeDetail?.id === 1 ? (
              <BugReportIcon className="icon-priority-bug" />
            ) : (
              <CheckBoxIcon className="icon-priority" />
            )}
            <p
              className={
                data.priorityTask.priorityId === 1
                  ? 'text-priorityTask-err'
                  : 'text-priorityTask'
              }
            >
              {data.priorityTask.priority}
            </p>
          </div>
          <AccountCircleIcon className="icon-avatar" />
        </div>
      </CardItemContent>
      <DialogCradItemContain
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            minWidth: '80%',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <div
            className="task-contain"
            onClick={handleClickMenu}
            role="presentation"
          >
            {dataTaskDetail?.taskTypeDetail?.id === 1 ? (
              <>
                <BugReportIcon className="icon-bug" />
                <p>Bug</p>
              </>
            ) : (
              <>
                <CheckBoxIcon className="icon-task" />
                <p>New task</p>
              </>
            )}
          </div>
          <div className="action-delete-contain">
            <span onClick={() => setOpenDeleteTask(true)} role="presentation">
              <DeleteOutlineIcon className="icon-delete" />
            </span>
            <span onClick={handleClose} role="presentation">
              <CloseIcon />
            </span>
          </div>
        </DialogTitle>
        <DialogCardItemContentContain>
          <div className="description-comment-contain">
            <h3>{dataTaskDetail.taskName}</h3>
            <div className="description-contain">
              <h3>Description</h3>
              {!showDescription ? (
                <div
                  className="add-descrition"
                  onClick={() => setShowDescription(true)}
                  role="presentation"
                >
                  {dataTaskDetail.description?.length > 7 ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dataTaskDetail?.description,
                      }}
                    />
                  ) : (
                    'Add a description...'
                  )}
                </div>
              ) : (
                <div className="word-embed-description">
                  {dataTaskDetail?.description && (
                    <WordEmbed textEditor={dataTaskDetail?.description} />
                  )}
                  <Button className="btn btn-save">Save</Button>
                  <Button
                    className="btn btn-cancel"
                    onClick={() => setShowDescription(false)}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
            <div className="description-contain">
              <h3 className="title-comment">Comments</h3>
              <div className="comment-content">
                <div className="avatar-comment">ha</div>
                {!showComments ? (
                  <div
                    className="add-comment"
                    onClick={() => setShowComments(true)}
                    role="presentation"
                  >
                    Add a comment...
                  </div>
                ) : (
                  <div className="word-embed-description word-comment">
                    <WordEmbed />
                    <Button className="btn btn-save">Save</Button>
                    <Button
                      className="btn btn-cancel"
                      onClick={() => setShowComments(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="infor-task-contain">
            <FormControl
              sx={{
                minWidth: 120,
                width: '100%',
                display: 'inline-block',
                height: '30px',
              }}
            >
              <Select
                value={Number(dataTaskDetail?.statusId)}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={1}>Backlog</MenuItem>
                <MenuItem value={2}>Selected For Development</MenuItem>
                <MenuItem value={3}>In Progress</MenuItem>
                <MenuItem value={4}>Done</MenuItem>
              </Select>
            </FormControl>
            <DetailDialogCardItemContain>
              <div
                className="show-detail-carditem"
                onClick={() => setShowDetail(!showDetail)}
                role="presentation"
              >
                <h3>Details</h3>
                <span>
                  {!showDetail ? (
                    <KeyboardArrowRightIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </span>
              </div>

              <ul
                className={`${
                  showDetail
                    ? 'detail-content-contain'
                    : 'detail-content-contain hide-detail'
                }`}
              >
                <li>
                  <h3>Assignees</h3>
                  <Autocomplete
                    multiple
                    id="size-small-outlined-multi"
                    size="small"
                    // value={checkTestArray(
                    //   dataUserByProject,
                    //   dataTaskDetail?.assigness,
                    // )}
                    value={valueAssignees}
                    onChange={(event, newvalue) =>
                      handleAssignees(event, newvalue)
                    }
                    fullWidth={true}
                    options={dataUserByProject}
                    getOptionLabel={(dataUserByProject) =>
                      dataUserByProject.name
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Choose assignees..."
                      />
                    )}
                  />
                </li>
                <li>
                  <h3>Priority</h3>
                  <PriorityContentContain>
                    <div
                      className="priority-content"
                      onClick={handleClickPriority}
                      role="presentation"
                    >
                      {dataTaskDetail?.priorityTask?.priorityId === 1 && (
                        <>
                          <ExpandLessIcon
                            style={{
                              color: ' rgb(255, 95, 59)',
                            }}
                          />
                          <p>Hight</p>
                        </>
                      )}
                      {dataTaskDetail?.priorityTask?.priorityId === 2 && (
                        <>
                          <SyncAltIcon
                            style={{
                              color: ' rgb(251,190,72)',
                              paddingRight: '5px',
                            }}
                          />
                          <p>Medium</p>
                        </>
                      )}
                      {dataTaskDetail?.priorityTask?.priorityId === 3 && (
                        <>
                          <KeyboardArrowDownIcon
                            style={{
                              color: ' rgb(0,101,255)',
                            }}
                          />
                          <p>Low</p>
                        </>
                      )}
                      {dataTaskDetail?.priorityTask?.priorityId === 4 && (
                        <>
                          <KeyboardDoubleArrowDownIcon
                            style={{
                              color: ' rgb(0,101,255)',
                            }}
                          />
                          <p>Lowest</p>
                        </>
                      )}
                    </div>
                    <MenuItemContain
                      id="basic-menu"
                      anchorEl={anchorElPriority}
                      open={openPriority}
                      onClose={handleClosePriority}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem
                        className={
                          dataTaskDetail?.priorityTask?.priorityId === 1
                            ? 'priority-active'
                            : ''
                        }
                        onClick={() => {
                          handleUpdateTaskPriority(1);
                          setAnchorElPriority(null);
                        }}
                      >
                        <ExpandLessIcon
                          style={{
                            color: ' rgb(255, 95, 59)',
                            transform: 'translateY(-2px)',
                          }}
                        />
                        <p style={{ fontSize: '15px' }}>Hight</p>
                      </MenuItem>
                      <MenuItem
                        className={
                          dataTaskDetail?.priorityTask?.priorityId === 2
                            ? 'priority-active'
                            : ''
                        }
                        onClick={() => {
                          handleUpdateTaskPriority(2);
                          setAnchorElPriority(null);
                        }}
                      >
                        <SyncAltIcon
                          style={{
                            color: ' rgb(251,190,72)',
                            paddingRight: '3px',
                          }}
                        />
                        <p style={{ fontSize: '15px' }}>Medium</p>
                      </MenuItem>
                      <MenuItem
                        className={
                          dataTaskDetail?.priorityTask?.priorityId === 3
                            ? 'priority-active'
                            : ''
                        }
                        onClick={() => {
                          handleUpdateTaskPriority(3);
                          setAnchorElPriority(null);
                        }}
                      >
                        <KeyboardArrowDownIcon
                          style={{
                            color: ' rgb(0,101,255)',
                          }}
                        />
                        <p style={{ fontSize: '15px' }}>Low</p>
                      </MenuItem>
                      <MenuItem
                        className={
                          dataTaskDetail?.priorityTask?.priorityId === 4
                            ? 'priority-active'
                            : ''
                        }
                        onClick={() => {
                          handleUpdateTaskPriority(4);
                          setAnchorElPriority(null);
                        }}
                      >
                        <KeyboardDoubleArrowDownIcon
                          style={{
                            color: ' rgb(0,101,255)',
                          }}
                        />
                        <p style={{ fontSize: '15px' }}>Lowest</p>
                      </MenuItem>
                    </MenuItemContain>
                  </PriorityContentContain>
                </li>
                <li>
                  <h3>Estimate</h3>
                  {!showEstimate ? (
                    <div
                      className="estimate-content"
                      onClick={() => setShowEstimate(true)}
                      role="presentation"
                    >
                      <span>{`${dataTaskDetail?.originalEstimate}m`}</span>
                    </div>
                  ) : (
                    <div className="input-estimate-contain">
                      <input
                        value={valueEstimate}
                        onChange={(e) => setValueEstimate(e.target.value)}
                      />
                      <div className="action-estimate-contain">
                        <Button
                          className="btn"
                          onClick={handleClickSetUpEstimate}
                        >
                          <CheckIcon style={{ transform: 'scale(0.8)' }} />
                        </Button>
                        <Button
                          className="btn"
                          onClick={() => setShowEstimate(false)}
                        >
                          <ClearIcon style={{ transform: 'scale(0.8)' }} />
                        </Button>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <h3>Time tracking</h3>
                  <div
                    className="time-tracking-contain"
                    onClick={handleClickOpenTimeTracking}
                    role="presentation"
                  >
                    {dataTaskDetail?.timeTrackingSpent && (
                      <Slider
                        max={dataTaskDetail?.originalEstimate}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        value={dataTaskDetail?.timeTrackingSpent}
                      />
                    )}
                    <div className="time-tracking-title">
                      <p>{`${dataTaskDetail?.timeTrackingSpent}m spent`}</p>
                      <p>{`${
                        Number(dataTaskDetail?.originalEstimate) -
                        Number(dataTaskDetail?.timeTrackingSpent)
                      }m remaining`}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </DetailDialogCardItemContain>
          </div>
        </DialogCardItemContentContain>
      </DialogCradItemContain>
      <MenuTaskContain
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => handleClickTask(1)}
          className={`menu-item ${
            dataTaskDetail?.taskTypeDetail?.id === 1 ? 'menu-item-selected' : ''
          }`}
        >
          <BugReportIcon className="icon-bug-item" />
          <p>Bug</p>
        </MenuItem>
        <MenuItem
          onClick={() => handleClickTask(2)}
          className={`menu-item ${
            dataTaskDetail?.taskTypeDetail?.id === 2 ? 'menu-item-selected' : ''
          }`}
        >
          <CheckBoxIcon className="icon-newtask-item" />
          <p>New task</p>
        </MenuItem>
      </MenuTaskContain>
      <DialogTimeTrackingContain
        open={openTimeTracking}
        onClose={handleCloseTimeTracking}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '70%',
            minWidth: '380px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Time tracking</DialogTitle>
        <DialogContent id="dialog-content-contain">
          <div>
            {dataTaskDetail?.timeTrackingSpent && (
              <Slider
                value={dataTaskDetail?.timeTrackingSpent + Number(sliderSpent)}
                max={dataTaskDetail?.originalEstimate}
                aria-label="Default"
                valueLabelDisplay="auto"
                step={1}
              />
            )}
            <div className="dialog-timetracking-slider">
              <p>{`${
                dataTaskDetail?.timeTrackingSpent + Number(sliderSpent)
              }m spent`}</p>
              <p>{`${
                Number(dataTaskDetail?.originalEstimate) -
                Number(dataTaskDetail?.timeTrackingSpent) -
                Number(sliderSpent)
              }m remaining`}</p>
            </div>
          </div>
          <h3>{`The original estimate for this issue was ${dataTaskDetail?.originalEstimate}m.`}</h3>
          <div className="input-contain">
            <div className="input-dialog-item">
              <p>Time spent</p>
              <input
                value={sliderSpent}
                onChange={(e) => setSliderSpent(e.target.value)}
              />
            </div>
            <div className="input-dialog-item">
              <p>Time remaining</p>
              <input
                value={(
                  Number(dataTaskDetail?.originalEstimate) -
                  Number(dataTaskDetail?.timeTrackingSpent) -
                  Number(sliderSpent)
                ).toString()}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions id="action-dialog-timetracking">
          <Button
            onClick={handleClickUpdateTimeTracking}
            className="btn btn-save"
          >
            Save
          </Button>
          <Button onClick={handleCloseTimeTracking} className="btn btn-cancel">
            Cancel
          </Button>
        </DialogActions>
      </DialogTimeTrackingContain>
      <DialogSignInErrorContain
        open={openErrorCardItem}
        onClose={handleCloseHideError}
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
          <h3>User is not assign!</h3>
          <p>You are not the owner of this project</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseHideError}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignInErrorContain>
      <DialogDeleteTask
        open={openDeleteTask}
        onClose={handleCloseDialogDeleteTask}
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
          <ReportIcon className="icon-error-title" />
          <h5>Delete this task?</h5>
        </DialogTitle>
        <DialogContent id="dialog-content">
          <p>
            {`You're about to permanently delete this issue, its comments and
            attachments, and all of its data.If you're not sure, you can resolve
            or close this issue instead.`}
          </p>
        </DialogContent>
        <DialogActions id="dialog-action">
          <Button
            onClick={handleClickDeleteTask}
            autoFocus
            className="btn-submit"
          >
            Delete
          </Button>
          <Button onClick={handleCloseDialogDeleteTask} className="btn-cancel">
            Cancel
          </Button>
        </DialogActions>
      </DialogDeleteTask>
    </>
  );
};

export default observer(CardItem);
