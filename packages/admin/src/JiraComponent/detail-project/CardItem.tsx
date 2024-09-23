import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MenuItem from '@mui/material/MenuItem';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
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
} from './styles';

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
  isDragging: boolean;
}
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
];

const CardItem = ({ data, handleDragging }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [typeTask, setTypeTask] = useState('bug');
  const [showDescription, setShowDescription] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showDetail, setShowDetail] = useState<boolean>(true);
  const [projectCategory, setProjectCategory] = React.useState('');
  const [valuePriority, setValuePriority] = useState('hight');
  const [showEstimate, setShowEstimate] = useState(false);
  const [valueEstimate, setValueEstimate] = useState('2');
  const [sliderSpent, setSliderSpent] = useState<number>(1);
  const [anchorElPriority, setAnchorElPriority] =
    React.useState<null | HTMLElement>(null);
  const [openTimeTracking, setOpenTimeTracking] = React.useState(false);

  const handleClickOpenTimeTracking = () => {
    setOpenTimeTracking(true);
  };

  const handleCloseTimeTracking = () => {
    setOpenTimeTracking(false);
  };
  const openPriority = Boolean(anchorElPriority);
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
  const handleClickTaskBug = () => {
    setAnchorEl(null);
    setTypeTask('bug');
  };
  const handleClickTaskNew = () => {
    setAnchorEl(null);
    setTypeTask('newTask');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${data.id}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  const handleChange = (event: SelectChangeEvent) => {
    setProjectCategory(event.target.value);
  };

  return (
    <>
      <CardItemContent
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{ cursor: 'pointer' }}
        onClick={handleClickOpen}
      >
        <h3>{data.content}</h3>
        <div className="inform-contain">
          <div className="priority-contain">
            <CheckBoxIcon className="icon-priority" />
            <p>{data.priority}</p>
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
            {typeTask === 'bug' ? (
              <>
                <ReportGmailerrorredIcon className="icon-bug" />
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
            <span>
              <DeleteOutlineIcon className="icon-delete" />
            </span>
            <span onClick={handleClose} role="presentation">
              <CloseIcon />
            </span>
          </div>
        </DialogTitle>
        <DialogCardItemContentContain>
          <div className="description-comment-contain">
            <div className="description-contain">
              <h3>Description</h3>
              {!showDescription ? (
                <div
                  className="add-descrition"
                  onClick={() => setShowDescription(true)}
                  role="presentation"
                >
                  Add a description...
                </div>
              ) : (
                <div className="word-embed-description">
                  <WordEmbed />
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
                value={projectCategory}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <p>Done</p>
                </MenuItem>
                <MenuItem value={20}>Backlog</MenuItem>
                <MenuItem value={30}>In Progress</MenuItem>
                <MenuItem value={40}>Selected For Development</MenuItem>
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
                    fullWidth={true}
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
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
                      {valuePriority === 'hight' && (
                        <>
                          <ExpandLessIcon
                            style={{
                              color: ' rgb(255, 95, 59)',
                            }}
                          />
                          <p>Hight</p>
                        </>
                      )}
                      {valuePriority === 'medium' && (
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
                      {valuePriority === 'low' && (
                        <>
                          <KeyboardArrowDownIcon
                            style={{
                              color: ' rgb(0,101,255)',
                            }}
                          />
                          <p>Low</p>
                        </>
                      )}
                      {valuePriority === 'lowest' && (
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
                          valuePriority === 'hight' ? 'priority-active' : ''
                        }
                        onClick={() => {
                          setValuePriority('hight');
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
                          valuePriority === 'medium' ? 'priority-active' : ''
                        }
                        onClick={() => {
                          setValuePriority('medium');
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
                          valuePriority === 'low' ? 'priority-active' : ''
                        }
                        onClick={() => {
                          setValuePriority('low');
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
                          valuePriority === 'lowest' ? 'priority-active' : ''
                        }
                        onClick={() => {
                          setValuePriority('lowest');
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
                      <span>{`${valueEstimate}m`}</span>
                    </div>
                  ) : (
                    <div className="input-estimate-contain">
                      <input
                        value={valueEstimate}
                        onChange={(e) => setValueEstimate(e.target.value)}
                      />
                      <div className="action-estimate-contain">
                        <Button className="btn">
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
                    <Slider
                      max={Number(valueEstimate)}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      value={sliderSpent}
                    />
                    <div className="time-tracking-title">
                      <p>{`${sliderSpent}m spent`}</p>
                      <p>{`${
                        Number(valueEstimate) - sliderSpent
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
          onClick={handleClickTaskBug}
          className={`menu-item ${
            typeTask === 'bug' ? 'menu-item-selected' : ''
          }`}
        >
          <ReportGmailerrorredIcon className="icon-bug-item" />
          <p>Bug</p>
        </MenuItem>
        <MenuItem
          onClick={handleClickTaskNew}
          className={`menu-item ${
            typeTask === 'newTask' ? 'menu-item-selected' : ''
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
            <Slider
              value={Number(sliderSpent)}
              max={Number(valueEstimate)}
              aria-label="Default"
              valueLabelDisplay="auto"
              step={1}
              onChange={(e) => setSliderSpent(e.target.value)}
            />
            <div className="dialog-timetracking-slider">
              <p>{`${sliderSpent}m spent`}</p>
              <p>{`${Number(valueEstimate) - sliderSpent}m remaining`}</p>
            </div>
          </div>
          <h3>{`The original estimate for this issue was ${valueEstimate}m.`}</h3>
          <div className="input-contain">
            <div className="input-dialog-item">
              <p>Time spent</p>
              <input
                value={sliderSpent.toString()}
                onChange={(e) => setSliderSpent(Number(e.target.value))}
              />
            </div>
            <div className="input-dialog-item">
              <p>Time remaining</p>
              <input value={(Number(valueEstimate) - sliderSpent).toString()} />
            </div>
          </div>
        </DialogContent>
        <DialogActions id="action-dialog-timetracking">
          <Button onClick={handleCloseTimeTracking} className="btn btn-save">
            Save
          </Button>
          <Button onClick={handleCloseTimeTracking} className="btn btn-cancel">
            Cancel
          </Button>
        </DialogActions>
      </DialogTimeTrackingContain>
    </>
  );
};

export default CardItem;
