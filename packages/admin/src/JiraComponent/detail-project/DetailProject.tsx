import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AppBar from '../../components/AppBar';
import { useDragAndDrop } from './useDragAndDrop';
import { ContainerCards } from './ContainerCard';
import { Data, Status } from '../../types/Requests';
import { datas } from './TotalData';
import {
  DetailProjectContain,
  TitleDetailContail,
  StateTaskProjectContain,
  DialogContain,
  ListUsersProjectContain,
  ListUserAddContent,
} from './styles';

const typesHero: Status[] = ['backlog', 'selected', 'progress', 'done'];

const DetailProject = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(datas);
  return (
    <>
      <AppBar />
      <DetailProjectContain>
        <div className="direct-page">
          <span>Projects</span>/ Reactjs
        </div>
        <TitleDetailContail>
          <h3>Board</h3>
          <div className="members-contain">
            <h6>Members</h6>
            <div className="member-item">DA</div>
            <div className="member-item" />
            <div className="member-item">DA</div>
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
          {typesHero.map((item, ind) => {
            return (
              <ContainerCards
                items={listItems}
                status={item}
                key={item}
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
          Add members to project<span>reactjs</span>
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
              <input />
              <SearchIcon className="icon-find-search" />
              <HighlightOffIcon className="icon-close-search" />
            </div>
          </div>
          <ListUsersProjectContain>
            <div className="list-useradd-contain">
              <h3>Not yet added</h3>
              <ListUserAddContent>
                <div className="user-add-item">
                  <div className="infor-user-add">
                    <div className="avatar-user">he</div>
                    <div>
                      <h5>hehehe</h5>
                      <p>User ID: 2456</p>
                    </div>
                  </div>
                  <Button className="btn-add">Add</Button>
                </div>
              </ListUserAddContent>
            </div>
            <div className="list-useradd-contain">
              <h3>Already in project</h3>
              <ListUserAddContent>
                <div className="user-add-item">
                  <div className="infor-user-add">
                    <div className="avatar-user">he</div>
                    <div>
                      <h5>hehehe</h5>
                      <p>User ID: 2456</p>
                    </div>
                  </div>
                  <Button className="btn-object-user">Remove</Button>
                </div>
              </ListUserAddContent>
            </div>
          </ListUsersProjectContain>
        </DialogContent>
      </DialogContain>
    </>
  );
};

export default DetailProject;
