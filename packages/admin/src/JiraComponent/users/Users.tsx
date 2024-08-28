import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import Pagination from '@mui/material/Pagination';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import ErrorIcon from '@mui/icons-material/Error';
import AppBar from '../../components/AppBar';
import {
  UserContain,
  ClearUserContain,
  TableContain,
  PaginationContain,
  ProjectsContentContain,
  ProjectContentItem,
  BootstrapDialog,
  MenuContain,
} from './styles';

const Users = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCancel = Boolean(anchorEl);
  const handleClickMenuCancel = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenuCancel = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRowsPerPage(Number(event.target.value));
    setPage(1);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  return (
    <>
      <AppBar />
      <UserContain>
        <ClearUserContain>Clear filters and sorters</ClearUserContain>
        <TableContain>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>No</h3>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>Name</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon className="icon-up" />
                      <ArrowDropDownSharpIcon className="icon-down" />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>User ID</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon className="icon-up" />
                      <ArrowDropDownSharpIcon className="icon-down" />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>Email</h3>
                  </div>
                </TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">1</TableCell>
                <TableCell align="left">huuu</TableCell>
                <TableCell align="left">2417</TableCell>
                <TableCell align="left">phanhao@gmail.com</TableCell>
                <TableCell align="left">113</TableCell>
                <TableCell align="left">
                  <div>
                    <span onClick={handleClickOpen} role="presentation">
                      <DriveFileRenameOutlineIcon className="edit-icon" />
                    </span>
                    <span onClick={handleClickMenuCancel} role="presentation">
                      <DeleteForeverIcon className="cancel-icon" />
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContain>
        <ProjectsContentContain>
          <ProjectContentItem>
            <li>
              <h5>No</h5>
              <p style={{ color: 'rgb(29 78 216)' }}>1</p>
            </li>
            <li>
              <h5>Name</h5>
              <p>huhuh</p>
            </li>
            <li>
              <h5>User ID</h5>
              <p>2417</p>
            </li>
            <li>
              <h5>Email</h5>
              <p>phanhao@gmail.com</p>
            </li>
            <li>
              <h5>Phone Number</h5>
              <p>113</p>
            </li>
            <li>
              <h5>Action</h5>
              <div>
                <span>
                  <DriveFileRenameOutlineIcon className="edit-icon" />
                </span>
                <span>
                  <DeleteForeverIcon className="cancel-icon" />
                </span>
              </div>
            </li>
          </ProjectContentItem>
        </ProjectsContentContain>
        <PaginationContain>
          <Pagination
            count={700 / rowsPerPage}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '10px',
            }}
          >
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                value={rowsPerPage.toString()}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={10}>
                  <p>10 / page</p>
                </MenuItem>
                <MenuItem value={20}>20 / page</MenuItem>
                <MenuItem value={50}>50 / page</MenuItem>
                <MenuItem value={100}>100 / page</MenuItem>
              </Select>
            </FormControl>
          </div>
        </PaginationContain>
        <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title">Edit User</DialogTitle>
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
          <DialogContent dividers className="dialog-content">
            <Typography gutterBottom>
              <div className="input-item-contain">
                <p>
                  Id<span>*</span>
                </p>
                <input value="12345" className="input-value-default" disabled />
              </div>
            </Typography>
            <Typography gutterBottom>
              <div className="input-item-contain">
                <p>
                  Email<span>*</span>
                </p>
                <input />
              </div>
            </Typography>
            <Typography gutterBottom>
              <div className="input-item-contain">
                <p>
                  Name<span>*</span>
                </p>
                <input />
              </div>
            </Typography>
            <Typography gutterBottom>
              <div className="input-item-contain">
                <p>Phone number</p>
                <input />
              </div>
            </Typography>
            <Typography gutterBottom>
              <div className="input-item-contain">
                <p>
                  Password<span>*</span>
                </p>
                <input />
                <span>Password is required</span>
              </div>
            </Typography>
            <Typography gutterBottom>
              <div className="input-item-contain">
                <p>
                  Password confirmation<span>*</span>
                </p>
                <input />
                <span>Password confirmation is required</span>
              </div>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button className="btn btn-update" onClick={handleClose}>
              Update
            </Button>
            <Button className="btn btn-cancel" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </BootstrapDialog>
        <MenuContain
          id="basic-menu"
          anchorEl={anchorEl}
          open={openCancel}
          onClose={handleCloseMenuCancel}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <div className="content-contain">
            <div className="title-delete">
              <span>
                <ErrorIcon className="icon-warning" />
              </span>
              <p>Are you sure to delete this user?</p>
            </div>
            <div className="delete-action">
              <Button className="btn btn-no" onClick={handleCloseMenuCancel}>
                No
              </Button>
              <Button className="btn btn-yes">Yes</Button>
            </div>
          </div>
        </MenuContain>
      </UserContain>
    </>
  );
};

export default Users;
