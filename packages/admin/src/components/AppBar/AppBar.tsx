import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';

import {
  AppBarContain,
  AppBarRightContain,
  ShowSelectProjectContain,
  AppBarActionContain,
  MenuShowContain,
  DrawerCreateTaskContain,
  FormCreateTaskContain,
} from './styles';

const AppBar = () => {
  const [numberTag, setNumberTag] = useState('3');
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [project, setProject] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [taskType, setTaskType] = React.useState('');
  const [estimateHour, setEstimateHour] = React.useState('0');
  const [spentHour, setSpentHour] = React.useState('0');

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

  const [anchorElSetting, setAnchorElSetting] =
    React.useState<null | HTMLElement>(null);
  const openSetting = Boolean(anchorElSetting);

  const [anchorElAccount, setAnchorElAccount] =
    React.useState<null | HTMLElement>(null);
  const openAccount = Boolean(anchorElAccount);

  const handleOpenSetting = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSetting(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorElSetting(null);
  };
  const handleOpenAccount = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElAccount(event.currentTarget);
  };
  const handleCloseAccount = () => {
    setAnchorElAccount(null);
  };

  const handleClickCreatTask = () => {
    setNumberTag('3');
    setOpenDrawer(true);
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
                numberTag === '1' ? 'select-item select-active' : 'select-item'
              }
              onClick={() => setNumberTag('1')}
              role="presentation"
            >
              Projects
              <span>
                <ExpandMoreIcon />
              </span>
            </p>
            <ShowSelectProjectContain className="select-item-show">
              <p>View all projects</p>
              <p>Create projects</p>
            </ShowSelectProjectContain>
          </div>
          <div>
            <p
              className={
                numberTag === '2' ? 'select-item select-active' : 'select-item'
              }
              onClick={() => setNumberTag('2')}
              role="presentation"
            >
              Users
            </p>
          </div>
          <div>
            <p
              className={
                numberTag === '3' ? 'select-item select-active' : 'select-item'
              }
              onClick={handleClickCreatTask}
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
            onClick={handleOpenAccount}
            role="presentation"
          >
            HA
          </div>
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
          <MenuItem onClick={handleCloseSetting} className="menu-item">
            User management
          </MenuItem>
        </div>
        <div>
          <h3>Jira Settings</h3>
          <MenuItem onClick={handleCloseSetting} className="menu-item">
            Projects
          </MenuItem>
        </div>
      </MenuShowContain>
      <MenuShowContain
        id="basic-menu"
        anchorEl={anchorElAccount}
        open={openAccount}
        onClose={handleCloseAccount}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div>
          <h3 style={{ textTransform: 'uppercase' }}>Haotech1</h3>
          <MenuItem onClick={handleCloseAccount} className="menu-item">
            Profiles
          </MenuItem>
        </div>

        <MenuItem
          onClick={handleCloseAccount}
          className="menu-item"
          style={{ borderTop: '1px solid RGB(220 220 220)' }}
        >
          Log out
        </MenuItem>
      </MenuShowContain>
      <DrawerCreateTaskContain
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(true)}
      >
        <Box
          sx={{ width: '50vw' }}
          role="presentation"
          onClick={() => setOpenDrawer(true)}
        >
          <div className="title-drawer">
            <h3>Create Task</h3>
            <span>
              <CloseIcon />
            </span>
          </div>
          <Divider />
          <FormCreateTaskContain>
            <form>
              <div className="field-item-contain">
                <p className="title-item">Project</p>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth className="input-field-item">
                    <InputLabel id="demo-simple-select-label">
                      Projects
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={project}
                      label="Projects"
                      onChange={handleChangeProject}
                      className="select-mui"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div className="show-error">
                  * You can only create tasks of your own projects!
                </div>
              </div>
              <div className="field-item-contain">
                <p className="title-item">Task name</p>
                <input placeholder="Task name" />
                <div
                  className="show-error"
                  style={{ marginTop: '1px', color: 'red' }}
                >
                  Task name is requied!
                </div>
              </div>
              <div className="field-item-contain">
                <p className="title-item">Status</p>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth className="input-field-item">
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      onChange={handleChangeStatus}
                      className="select-mui"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                }}
              >
                <div className="field-item-contain field-item-45">
                  <p className="title-item">Priority</p>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth className="input-field-item">
                      <InputLabel id="demo-simple-select-label">
                        Priority
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={priority}
                        label="Priority"
                        onChange={handleChangePriority}
                        className="select-mui"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="field-item-contain field-item-45">
                  <p className="title-item">Task Type</p>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth className="input-field-item">
                      <InputLabel id="demo-simple-select-label">
                        TaskType
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={taskType}
                        label="TaskType"
                        onChange={handleChangeTaskType}
                        className="select-mui"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="field-item-contain">
                <p className="title-item">Assigners</p>
                <input placeholder="Assigners" />
                <div
                  className="show-error"
                  style={{ marginTop: '1px', color: 'red' }}
                >
                  Assigners is requied!
                </div>
              </div>
              <div style={{ paddingTop: '5px' }}>
                <p className="title-item">Time Tracking</p>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px 0 0px',
                  }}
                >
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
                <textarea />
              </div>
            </form>
          </FormCreateTaskContain>
        </Box>
      </DrawerCreateTaskContain>
    </AppBarContain>
  );
};

export default AppBar;
