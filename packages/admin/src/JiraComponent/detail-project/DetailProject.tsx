import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { DialogActions } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AppBar from '../../components/AppBar';
import { useDragAndDrop } from './useDragAndDrop';
import { ContainerCards } from './ContainerCard';
import { Data, Status } from '../../types/Requests';
import { useStoreMobx } from '../../mobx/hook';
import { datas } from './TotalData';
import {
  DetailProjectContain,
  TitleDetailContail,
  StateTaskProjectContain,
  DialogContain,
  ListUsersProjectContain,
  ListUserAddContent,
  DialogSignInErrorContain,
} from './styles';

const DetailProject = () => {
  const {
    rootStore: { userStore, createProjectStore, projectDetailStore },
  } = useStoreMobx();

  const idUser = useParams();

  const dataAllUser = userStore.getDataUsers;
  const dataUserByProject = createProjectStore.getDataUserByProjectId;
  const errorAssign = createProjectStore.getErrorAssignUserForProject;
  const dataAssign = createProjectStore.getErrorAssignUserForProject;
  const errorRemoveUser = createProjectStore.getErrorRemoveUserFromProject;
  const dataProjectDetail = projectDetailStore.getDataProjectDetail;
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [DataUer, setDataUser] = useState([]);
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(dataProjectDetail);

  console.log('check data detail: ', dataProjectDetail);

  useEffect(() => {
    const id = Number(idUser.codeProject);
    userStore.fetchAllUsers();
    createProjectStore.fetchUserByProjectId(id);
    projectDetailStore.fetchProjectDetail(id);
  }, []);

  useEffect(() => {
    if (errorAssign || errorRemoveUser) {
      setOpenError(true);
    }
    if (dataAllUser && dataAllUser.length > 0) {
      const dataAllUserCopy = [...dataAllUser];
      setDataUser(
        dataAllUserCopy.filter((item) =>
          item.name.toLowerCase().includes(valueSearch.toLowerCase()),
        ),
      );
    } else {
      setDataUser(dataAllUser);
    }
  }, [errorAssign, errorRemoveUser, dataAllUser, valueSearch]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseErrorDialog = () => {
    setOpenError(false);
  };

  const handleClickAddUserForProject = (id) => {
    const projectId = Number(idUser.codeProject);
    const userId = id;
    createProjectStore.fetchAssignUserProjects({ projectId, userId });
  };

  const handleRemoveUserFromProject = (id) => {
    const projectId = Number(idUser.codeProject);
    const userId = id;
    createProjectStore.fetchRemoveUserFromProject({ projectId, userId });
  };

  return (
    <>
      <AppBar />
      <DetailProjectContain>
        <div className="direct-page">
          <span>Projects</span>/ {dataProjectDetail.projectName}
        </div>
        <TitleDetailContail>
          <h3>Board</h3>
          <div className="members-contain">
            <h6>Members</h6>
            {dataUserByProject &&
              dataUserByProject.length > 0 &&
              dataUserByProject.map((item) => {
                return (
                  <img
                    src={item.avatar}
                    alt="image_avatar"
                    className="member-item"
                    key={item.userId}
                  />
                );
              })}

            <div
              className="plus-item"
              onClick={handleClickOpen}
              role="presentation"
            >
              <AddIcon />
            </div>
          </div>
        </TitleDetailContail>
        <StateTaskProjectContain>
          {dataProjectDetail &&
            dataProjectDetail.lstTask &&
            dataProjectDetail.lstTask.map((item, ind) => {
              return (
                <ContainerCards
                  items={item.lstTaskDeTail}
                  status={item.statusId}
                  key={item.statusId}
                  isDragging={isDragging}
                  handleDragging={handleDragging}
                  handleUpdateList={handleUpdateList}
                />
              );
            })}
        </StateTaskProjectContain>
      </DetailProjectContain>
      <DialogContain
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            minWidth: '80%',
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add members to project<span>{dataProjectDetail.projectName}</span>
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
        <DialogContent dividers id="dialog-content">
          <div className="search-contain">
            <p>Search users</p>
            <div style={{ position: 'relative', width: '200px' }}>
              <input
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
              />
              <SearchIcon className="icon-find-search" />
              {valueSearch && (
                <span onClick={() => setValueSearch('')} role="presentation">
                  <HighlightOffIcon className="icon-close-search" />
                </span>
              )}
            </div>
          </div>
          <ListUsersProjectContain>
            <div className="list-useradd-contain">
              <h3>Not yet added</h3>
              <ListUserAddContent>
                {DataUer &&
                  DataUer.length > 0 &&
                  DataUer.map((item) => {
                    return (
                      <div className="user-add-item" key={item.userId}>
                        <div className="infor-user-add">
                          <img
                            src={item.avatar}
                            alt="image_avatar"
                            className="avatar-user"
                          />
                          <div>
                            <h5>{item.name}</h5>
                            <p>User ID: {item.userId}</p>
                          </div>
                        </div>
                        <Button
                          className="btn-add"
                          onClick={() =>
                            handleClickAddUserForProject(item.userId)
                          }
                        >
                          Add
                        </Button>
                      </div>
                    );
                  })}
              </ListUserAddContent>
            </div>
            <div className="list-useradd-contain">
              <h3>Already in project</h3>
              <ListUserAddContent>
                {dataUserByProject &&
                  dataUserByProject.length > 0 &&
                  dataUserByProject.map((item) => {
                    return (
                      <div className="user-add-item" key={item.userId}>
                        <div className="infor-user-add">
                          <img
                            src={item.avatar}
                            alt="image_avatar"
                            className="avatar-user"
                          />
                          <div>
                            <h5>{item.name}</h5>
                            <p>User ID: {item.userId}</p>
                          </div>
                        </div>
                        <Button
                          className="btn-object-user"
                          onClick={() =>
                            handleRemoveUserFromProject(item.userId)
                          }
                        >
                          Remove
                        </Button>
                      </div>
                    );
                  })}
              </ListUserAddContent>
            </div>
          </ListUsersProjectContain>
        </DialogContent>
      </DialogContain>
      <DialogSignInErrorContain
        open={openError}
        onClose={handleCloseErrorDialog}
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
          {errorAssign ? <h3>{errorAssign}</h3> : <h3>{errorRemoveUser}</h3>}
          <p>You are not the owner of this project</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseErrorDialog}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignInErrorContain>
    </>
  );
};

export default observer(DetailProject);
