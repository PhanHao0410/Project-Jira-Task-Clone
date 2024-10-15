import React, { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import BugReportIcon from '@mui/icons-material/BugReport';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CardItem from './CardItem';
import { useStoreMobx } from '../../mobx/hook';
import { Data, Status } from '../../types/Requests';
import {
  CardContain,
  MenuTaskContain,
  DialogSignInErrorContain,
} from './styles';

interface Props {
  items;
  status: Status;
  provided: any;
  projectId: any;
}
const ContainerCards = ({
  items = [],
  status,
  provided,
  projectId,
  dataUserByProject,
}) => {
  const {
    rootStore: { projectDetailStore },
  } = useStoreMobx();

  const errorCreateTask = projectDetailStore.getErrorCreateTask;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [typeTask, setTypeTask] = useState(1);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [openErrorCardItem, setOpenErrorCardItem] = useState(false);
  const openMenu = Boolean(anchorEl);

  useEffect(() => {
    if (errorCreateTask?.content) {
      setOpenErrorCardItem(true);
    } else {
      setOpenErrorCardItem(false);
    }
  }, [errorCreateTask]);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClickTask = (idType) => {
    setAnchorEl(null);
    setTypeTask(idType);
  };
  const handleCloseHideError = () => {
    setOpenErrorCardItem(false);
    projectDetailStore.setResetStateCreateTask();
  };
  const handleAddTaskForm = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      const taskName = e.target.value;
      const description = '';
      const listUserAsign = [];
      const originalEstimate = 0;
      const priorityId = 2;
      const projectid = projectId.codeProject;
      const statusId = '1';
      const timeTrackingRemaining = 0;
      const timeTrackingSpent = 0;
      const typeId = typeTask;
      projectDetailStore.fetchCreateTaskProject({
        taskName,
        description,
        listUserAsign,
        originalEstimate,
        priorityId,
        projectid,
        statusId,
        timeTrackingRemaining,
        timeTrackingSpent,
        typeId,
      });
      setShowTaskForm(false);
    }
  };
  return (
    <>
      <CardContain ref={provided.innerRef} {...provided.droppableProps}>
        {(status === '1' && (
          <p className="title-task title-backlog">backlog</p>
        )) ||
          (status === '2' && (
            <p className="title-task title-selected">
              selected for development
            </p>
          )) ||
          (status === '3' && (
            <p className="title-task title-progress">in progress</p>
          )) ||
          (status === '4' && <p className="title-task title-done">done</p>)}
        {items.map((item, index) => (
          <Draggable
            key={item.taskId}
            draggableId={item.taskId.toString()}
            index={index}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <CardItem
                  data={item}
                  key={item.taskId}
                  projectId={projectId}
                  dataUserByProject={dataUserByProject}
                />
              </div>
            )}
          </Draggable>
        ))}
        {status === '1' && (
          <>
            {!showTaskForm ? (
              <div
                className="add-task"
                onClick={() => setShowTaskForm(true)}
                role="presentation"
              >
                <AddIcon />
                <p>Create</p>
              </div>
            ) : (
              <div className="fill-stask-contain">
                <span
                  className="close-task-form"
                  onClick={() => setShowTaskForm(false)}
                  role="presentation"
                >
                  <CloseIcon className="icon-close" />
                </span>
                <textarea
                  name="postContent"
                  rows={3}
                  cols={30}
                  placeholder="What needs to be done?"
                  onKeyDown={(e) => handleAddTaskForm(e)}
                />
                <span
                  className="task-contain"
                  onClick={handleClickMenu}
                  role="presentation"
                >
                  {typeTask === 1 ? (
                    <>
                      <BugReportIcon className="icon-bug" />
                    </>
                  ) : (
                    <>
                      <CheckBoxIcon className="icon-task" />
                    </>
                  )}
                  <ExpandMoreIcon sx={{ color: 'RGB(227 227 227)' }} />
                </span>
              </div>
            )}
          </>
        )}
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
              typeTask === 1 ? 'menu-item-selected' : ''
            }`}
          >
            <BugReportIcon className="icon-bug-item" />
            <p>Bug</p>
          </MenuItem>
          <MenuItem
            onClick={() => handleClickTask(2)}
            className={`menu-item ${
              typeTask === 2 ? 'menu-item-selected' : ''
            }`}
          >
            <CheckBoxIcon className="icon-newtask-item" />
            <p>New task</p>
          </MenuItem>
        </MenuTaskContain>
      </CardContain>
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
    </>
  );
};

export default observer(ContainerCards);
