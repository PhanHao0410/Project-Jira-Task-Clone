import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import AppBar from '../../components/AppBar';
import UILoading from '../../components/LoadingUI';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { CreateProjectForm } from '../../types/Requests';
import { useStoreMobx } from '../../mobx/hook';
import {
  CreateProjectContain,
  CreateProjectContent,
  FormInputContain,
  DescriptionContain,
  CreateAction,
  SearchProjectContain,
  DialogContentContain,
  AddMemberForProject,
  DialogActionsContain,
} from './styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const CreateProject = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<CreateProjectForm>();

  const {
    rootStore: { createProjectStore },
  } = useStoreMobx();

  const {
    rootStore: { userStore },
  } = useStoreMobx();

  const ListUsers = userStore.getDataUsers;
  const dataCreateProject = createProjectStore.getDataCreateProjects;
  const dataAssignProject = createProjectStore.getAssignUserProjectData;
  const dataUserByProjectId = createProjectStore.getDataUserByProjectId;
  const errorCreateProject = createProjectStore.getErrorData;
  const errorAssignUser = createProjectStore.getErrorAssignUserForProject;
  const dataRemoveUser = createProjectStore.getDataRemoveUserFromProject;
  const loadingCreateProject = createProjectStore.getIsLoadingCreateProject;
  const errorUserByProjectId = createProjectStore.getErrorUserByProjectId;
  const [projectCategory, setProjectCategory] =
    React.useState<number>(undefined);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [open, setOpen] = React.useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [userIdSelected, setUserIdSelected] = useState<number>();
  const [dataUsers, setDataUsers] = useState([]);
  useEffect(() => {
    userStore.fetchAllUsers();
  }, []);
  useEffect(() => {
    if (dataCreateProject && dataCreateProject.id) {
      const projectId = dataCreateProject.id;
      setOpen(true);
      createProjectStore.fetchUserByProjectId(projectId);
    }
  }, [dataCreateProject, dataAssignProject, dataRemoveUser]);

  useEffect(() => {
    const listUserCopy = [...ListUsers];
    if (valueSearch) {
      setDataUsers(
        listUserCopy.filter((item) =>
          item.name.toLowerCase().includes(valueSearch.toLowerCase()),
        ),
      );
    } else {
      setDataUsers(ListUsers);
    }
  }, [valueSearch, ListUsers]);

  const handleClose = () => {
    setOpen(false);
    createProjectStore.setResetCreateProjectState();
    createProjectStore.setResetAssignUserState();
    createProjectStore.setResetUserByProjectId();
  };

  const handleChange = (event: SelectChangeEvent) => {
    setProjectCategory(Number(event.target.value));
  };

  const handleCreatProject = (data) => {
    const description = convertToHTML(editorState.getCurrentContent());
    const categoryId: number = data.categoryId;
    const projectName: string = data.projectName;
    createProjectStore.fetchCreateProject({
      description,
      categoryId,
      projectName,
    });
  };

  const handleAddUserForProjects = (id) => {
    setUserIdSelected(id);
    createProjectStore.setResetAssignUserState();
    if (dataCreateProject && dataCreateProject.id) {
      const projectId = dataCreateProject.id;
      const userId = id;
      createProjectStore.fetchAssignUserProjects({ projectId, userId });
    }
  };

  const handleRemoveUserFromProject = (id) => {
    if (dataCreateProject && dataCreateProject.id) {
      const projectId = dataCreateProject.id;
      const userId = id;
      createProjectStore.fetchRemoveUserFromProject({ projectId, userId });
    }
  };

  const handleGoToProjectInDialog = () => {
    setOpen(false);
    history.replace(path.PROJECTS);
    createProjectStore.setResetCreateProjectState();
    createProjectStore.setResetAssignUserState();
    createProjectStore.setResetUserByProjectId();
  };

  const handleCreateNewProject = () => {
    setOpen(false);
    createProjectStore.setResetCreateProjectState();
    createProjectStore.setResetAssignUserState();
    createProjectStore.setResetUserByProjectId();
    setValue('projectName', '');
    setValue('categoryId', undefined);
    setEditorState(EditorState.createEmpty());
  };

  return (
    <>
      <AppBar />
      <CreateProjectContain>
        <CreateProjectContent>
          {loadingCreateProject ? (
            <UILoading />
          ) : (
            <form onSubmit={handleSubmit(handleCreatProject)}>
              <div className="title-select">
                <span
                  onClick={() => history.push(path.PROJECTS)}
                  role="presentation"
                >
                  Projects
                </span>
                / New project
              </div>
              <h3 className="title-main">New project</h3>
              <FormInputContain>
                <div className="title-input">
                  Project name <span>*</span>
                </div>
                <input
                  className={errors.projectName?.message ? 'input-error' : ''}
                  {...register('projectName', {
                    required: 'Project name is required',
                    onChange: () =>
                      createProjectStore.setResetCreateProjectState(),
                  })}
                />
                {errors.projectName?.message && (
                  <p className="show-error">{errors.projectName?.message}</p>
                )}
                {errorCreateProject && (
                  <p className="show-error">{errorCreateProject}</p>
                )}
              </FormInputContain>
              <FormInputContain>
                <div className="title-input">
                  Project category <span>*</span>
                </div>
                <FormControl sx={{ minWidth: 120, width: '100%' }}>
                  <Select
                    className={errors.categoryId?.message ? 'input-error' : ''}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    {...register('categoryId', {
                      required: 'Project category is required',
                      value: projectCategory,
                    })}
                  >
                    <MenuItem value={undefined}>
                      <p>Select a project category</p>
                    </MenuItem>
                    <MenuItem value={1}>Dự án Web</MenuItem>
                    <MenuItem value={2}>Dự án phần mềm</MenuItem>
                    <MenuItem value={3}>Dự án di động</MenuItem>
                  </Select>
                </FormControl>
                <p className="show-error">{errors.categoryId?.message}</p>
              </FormInputContain>
              <DescriptionContain>
                <h5>Descriptions</h5>
                <div className="description-content">
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                  />
                </div>
              </DescriptionContain>
              <CreateAction>
                <Button
                  className="btn btn-cancel"
                  onClick={() => history.push(path.PROJECTS)}
                >
                  Cancel
                </Button>
                <Button className="btn btn-create" type="submit">
                  Create
                </Button>
              </CreateAction>
            </form>
          )}
        </CreateProjectContent>
      </CreateProjectContain>
      <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            minWidth: '60%',
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add members to project
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContentContain dividers>
          <SearchProjectContain>
            <p>Search users</p>
            <div className="input-search-contain">
              <input
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
              />
              <SearchIcon className="icon-find" />
              {valueSearch && (
                <span onClick={() => setValueSearch('')} role="presentation">
                  <CancelIcon className="icon-cancel" />
                </span>
              )}
            </div>
          </SearchProjectContain>
          <div className="add-show-user-projects">
            <AddMemberForProject>
              <h3>Not yet added</h3>
              <div className="list-user-contain">
                {dataUsers &&
                  dataUsers.length > 0 &&
                  dataUsers.map((item) => {
                    return (
                      <div className="user-item-contain" key={item.userId}>
                        <div className="user-item-content">
                          <div className="inform-user">
                            <img src={item.avatar} alt="image_avatar" />
                            <div>
                              <h5>{item.name}</h5>
                              <p>User ID: {item.userId}</p>
                            </div>
                          </div>
                          <Button
                            className="btn-add"
                            onClick={() =>
                              handleAddUserForProjects(item.userId)
                            }
                          >
                            Add
                          </Button>
                        </div>
                        {errorAssignUser && userIdSelected === item.userId && (
                          <p className="error-assign-user">{errorAssignUser}</p>
                        )}
                      </div>
                    );
                  })}
              </div>
            </AddMemberForProject>
            <AddMemberForProject>
              <h3>Already in project</h3>
              <div className="list-user-contain">
                {dataUserByProjectId &&
                  dataUserByProjectId.length > 0 &&
                  dataUserByProjectId.map((item) => {
                    return (
                      <div className="user-item-contain" key={item.userId}>
                        <div className="user-item-content">
                          <div className="inform-user">
                            <img
                              src="https://ui-avatars.com/api/?name=haotech1"
                              alt="image_avatar"
                            />
                            <div>
                              <h5>{item.name}</h5>
                              <p>User ID: {item.userId}</p>
                            </div>
                          </div>
                          <Button
                            className="btn-remove"
                            onClick={() =>
                              handleRemoveUserFromProject(item.userId)
                            }
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                {errorUserByProjectId && (
                  <div className="error-get-user-projectid">
                    <img
                      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                      alt="image_error"
                      className="image-error-item"
                    />
                    <h5>{errorUserByProjectId}</h5>
                  </div>
                )}
              </div>
            </AddMemberForProject>
          </div>
        </DialogContentContain>
        <DialogActionsContain>
          <Button
            onClick={handleGoToProjectInDialog}
            className="btn-dialog-action"
          >
            Go to projects
          </Button>
          <Button
            onClick={handleCreateNewProject}
            className="btn-dialog-action"
          >
            Create new project
          </Button>
        </DialogActionsContain>
      </BootstrapDialog>
    </>
  );
};

export default observer(CreateProject);
