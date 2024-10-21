import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';

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
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ErrorIcon from '@mui/icons-material/Error';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useMediaQuery } from '@mui/material';
import AppBar from '../../components/AppBar';
import { useStoreMobx } from '../../mobx/hook';
import {
  UserContain,
  TableContain,
  PaginationContain,
  ProjectsContentContain,
  ProjectContentItem,
  BootstrapDialog,
  MenuContain,
  SearchProjectContain,
  ActionUserContain,
  DialogSignInSuccessContain,
  DialogSignInErrorContain,
} from './styles';

interface UpdateAccountForm {
  avatar: string;
  email: string;
  name: string;
  phoneNumber: string;
  id: number;
  password: string;
  passwordConfirmation: string;
}

const Users = () => {
  const {
    rootStore: { userStore },
  } = useStoreMobx();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UpdateAccountForm>();
  const DataUsers = userStore.getDataUsers;
  const DataDeleteUser = userStore.getDataDeleteUser;
  const errorDeleteUser = userStore.getErrorDeleteUser;
  const dataEditUser = userStore.getDataEditUser;

  const matches = useMediaQuery('(max-width: 768px)');
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [dataPagination, setDataPagination] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [arrangeName, setArrangeName] = useState(0);
  const [arrangeUserId, setArrangeUserId] = useState(0);
  const [numberPagination, setNumberPagination] = useState(0);
  const [userIdCurrent, setUserIdCurrent] = useState<number>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showPassword, setShowPassword] = useState(true);
  const [openProcessUpdate, setOpenProcessUpdate] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [openDeleteError, setOpenDeleteError] = useState(false);
  const [openDeleteSuccess, setOpenDeleteSuccess] = useState(false);
  const openCancel = Boolean(anchorEl);

  useEffect(() => {
    userStore.fetchAllUsers();
  }, [DataDeleteUser, dataEditUser]);

  useEffect(() => {
    const rowPrevious: number = page * rowsPerPage - rowsPerPage;
    const rowNext: number = page * rowsPerPage;
    const DataUserCopy = [...DataUsers];
    setNumberPagination(DataUsers.length);
    if (arrangeName === 1) {
      setDataPagination(
        DataUserCopy.sort((a, b) => a.name.localeCompare(b.name)).slice(
          rowPrevious,
          rowNext,
        ),
      );
    } else if (arrangeName === 2) {
      setDataPagination(
        DataUserCopy.sort((a, b) => b.name.localeCompare(a.name)).slice(
          rowPrevious,
          rowNext,
        ),
      );
    } else if (arrangeUserId === 1) {
      setDataPagination(
        DataUserCopy.sort((a, b) => a.userId - b.userId).slice(
          rowPrevious,
          rowNext,
        ),
      );
    } else if (arrangeUserId === 2) {
      setDataPagination(
        DataUserCopy.sort((a, b) => b.userId - a.userId).slice(
          rowPrevious,
          rowNext,
        ),
      );
    } else {
      setDataPagination(DataUsers?.slice(rowPrevious, rowNext));
    }

    if (valueSearch) {
      setNumberPagination(
        DataUserCopy.filter((item) =>
          item.name.toLowerCase().includes(valueSearch.toLowerCase()),
        ).length,
      );
      setDataPagination(
        DataUserCopy.filter((item) =>
          item.name.toLowerCase().includes(valueSearch.toLowerCase()),
        ).slice(rowPrevious, rowNext),
      );
    }
    if (matches) {
      setArrangeName(0);
      setArrangeUserId(0);
      if (valueSearch) {
        setNumberPagination(
          DataUserCopy.filter((item) =>
            item.name.toLowerCase().includes(valueSearch.toLowerCase()),
          ).length,
        );
        setDataPagination(
          DataUserCopy.filter((item) =>
            item.name.toLowerCase().includes(valueSearch.toLowerCase()),
          ).slice(rowPrevious, rowNext),
        );
      } else {
        setDataPagination(DataUsers?.slice(rowPrevious, rowNext));
      }
    }
  }, [
    rowsPerPage,
    DataUsers,
    page,
    arrangeName,
    arrangeUserId,
    valueSearch,
    matches,
  ]);

  useEffect(() => {
    if (DataDeleteUser && DataDeleteUser.content) {
      setOpenDeleteSuccess(true);
    }
    if (errorDeleteUser) {
      setOpenDeleteError(true);
    }
  }, [DataDeleteUser, errorDeleteUser]);

  useEffect(() => {
    if (dataEditUser && dataEditUser.content) {
      setOpenProcessUpdate(true);
    }
  }, [dataEditUser]);

  const handleClickMenuCancel = (
    event: React.MouseEvent<HTMLButtonElement>,
    id,
  ) => {
    setAnchorEl(event.currentTarget);
    setUserIdCurrent(id);
  };
  const handleCloseMenuCancel = () => {
    setAnchorEl(null);
    setUserIdCurrent();
  };

  const handleClickOpenEdit = (user) => {
    setOpen(true);
    setValue('id', user?.userId);
    setValue('email', user.email);
    setValue('name', user.name);
    setValue('phoneNumber', user.phoneNumber);
  };
  const handleClose = () => {
    setOpen(false);
    userStore.ResetStateEditUser();
    setError('password', null);
    setError('passwordConfirmation', null);
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

  const handleCloseOpenProcessUpdate = () => {
    setOpenProcessUpdate(false);
    userStore.ResetStateEditUser();
  };

  const handleArrangeName = () => {
    setArrangeUserId(0);
    if (arrangeName === 0) {
      setArrangeName(1);
    } else if (arrangeName === 1) {
      setArrangeName(2);
    } else {
      setArrangeName(0);
    }
  };

  const handleArrangeUserId = () => {
    setArrangeName(0);
    if (arrangeUserId === 0) {
      setArrangeUserId(1);
    } else if (arrangeUserId === 1) {
      setArrangeUserId(2);
    } else {
      setArrangeUserId(0);
    }
  };

  const handleClearFilterUser = () => {
    setArrangeName(0);
    setArrangeUserId(0);
    setValueSearch('');
  };

  const handleDeleteUser = () => {
    setAnchorEl(null);
    const id = userIdCurrent;
    userStore.fetchDeleteUser(id);
    setUserIdCurrent(null);
  };

  const handleDialogDeleteError = () => {
    setOpenDeleteError(false);
    userStore.setResetStateDeleteUser();
  };

  const handleDialogDeleteSuccess = () => {
    setOpenDeleteSuccess(false);
    userStore.setResetStateDeleteUser();
  };

  const updateInformAccountUser = (data) => {
    userStore.fetchEditUser(data);
    setOpen(false);
    setUserEdit({});
    setValue('password', '');
    setValue('passwordConfirmation', '');
  };

  return (
    <>
      <AppBar />
      <UserContain>
        <ActionUserContain>
          <SearchProjectContain className="search-contain">
            <input
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
              placeholder="Search name"
            />
            <SearchIcon className="icon-find" />
            {valueSearch && (
              <span onClick={() => setValueSearch('')} role="presentation">
                <CancelIcon className="icon-cancel" />
              </span>
            )}
          </SearchProjectContain>
          <div
            className="clear-filter-contain"
            onClick={handleClearFilterUser}
            role="presentation"
          >
            Clear filters and sorters
          </div>
        </ActionUserContain>
        <TableContain>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="table-head-contain">
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>No</h3>
                  </div>
                </TableCell>
                <TableCell
                  align="left"
                  className="table-head-arrange"
                  onClick={handleArrangeName}
                >
                  <div className="title-table-contain">
                    <h3>Name</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon
                        className={`icon-up ${
                          arrangeName === 1 ? 'icon-selected' : ''
                        }`}
                      />
                      <ArrowDropDownSharpIcon
                        className={`icon-down ${
                          arrangeName === 2 ? 'icon-selected' : ''
                        }`}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  align="left"
                  className="table-head-arrange"
                  onClick={handleArrangeUserId}
                >
                  <div className="title-table-contain">
                    <h3>User ID</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon
                        className={`icon-up ${
                          arrangeUserId === 1 ? 'icon-selected' : ''
                        }`}
                      />
                      <ArrowDropDownSharpIcon
                        className={`icon-down ${
                          arrangeUserId === 2 ? 'icon-selected' : ''
                        }`}
                      />
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
              {dataPagination &&
                dataPagination.length > 0 &&
                dataPagination?.map((item, ind) => {
                  return (
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      key={item.userId}
                      className="table-body-contain"
                    >
                      <TableCell align="left">
                        {ind + (page - 1) * rowsPerPage + 1}
                      </TableCell>
                      <TableCell align="left" className="test-phone">
                        {item.name}
                      </TableCell>
                      <TableCell align="left" className="test-phone">
                        {item.userId}
                      </TableCell>
                      <TableCell align="left" className="test-phone">
                        {item.email}
                      </TableCell>
                      <TableCell align="left" className="test-phone">
                        {item.phoneNumber}
                      </TableCell>
                      <TableCell align="left" className="test-phone">
                        <div>
                          <span
                            onClick={() => handleClickOpenEdit(item)}
                            role="presentation"
                          >
                            <DriveFileRenameOutlineIcon className="edit-icon" />
                          </span>
                          <span
                            onClick={(e) =>
                              handleClickMenuCancel(e, item.userId)
                            }
                            role="presentation"
                          >
                            <DeleteForeverIcon className="cancel-icon" />
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContain>
        <ProjectsContentContain>
          {dataPagination &&
            dataPagination.length > 0 &&
            dataPagination.map((item, ind) => {
              return (
                <ProjectContentItem key={item.userId}>
                  <li>
                    <h5>No</h5>
                    <p style={{ color: 'rgb(29 78 216)' }}>
                      {ind + (page - 1) * rowsPerPage + 1}
                    </p>
                  </li>
                  <li>
                    <h5>Name</h5>
                    <p>{item.name}</p>
                  </li>
                  <li>
                    <h5>User ID</h5>
                    <p>{item.userId}</p>
                  </li>
                  <li>
                    <h5>Email</h5>
                    <p>{item.email}</p>
                  </li>
                  <li>
                    <h5>Phone Number</h5>
                    <p className="value-item">{item.phoneNumber}</p>
                  </li>
                  <li>
                    <h5>Action</h5>
                    <div>
                      <span
                        onClick={() => handleClickOpenEdit(item)}
                        role="presentation"
                      >
                        <DriveFileRenameOutlineIcon className="edit-icon" />
                      </span>
                      <span
                        onClick={(e) => handleClickMenuCancel(e, item.userId)}
                        role="presentation"
                      >
                        <DeleteForeverIcon className="cancel-icon" />
                      </span>
                    </div>
                  </li>
                </ProjectContentItem>
              );
            })}
        </ProjectsContentContain>
        <PaginationContain>
          <Pagination
            count={Math.ceil(numberPagination / rowsPerPage)}
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
          <form onSubmit={handleSubmit(updateInformAccountUser)}>
            <DialogContent dividers className="dialog-content">
              <Typography gutterBottom>
                <div className="input-item-contain">
                  <p>
                    Id<span>*</span>
                  </p>
                  <input className="input-value-default" {...register('id')} />
                </div>
              </Typography>
              <Typography gutterBottom>
                <div className="input-item-contain">
                  <p>
                    Email<span>*</span>
                  </p>
                  <input
                    className={errors.email?.message ? 'input-err' : ''}
                    {...register('email', {
                      required: 'Email is required!',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Email không hợp lệ!',
                      },
                    })}
                  />
                  {errors.email?.message && (
                    <span className="text-error">{errors.email?.message}</span>
                  )}
                </div>
              </Typography>
              <Typography gutterBottom>
                <div className="input-item-contain">
                  <p>
                    Name<span>*</span>
                  </p>
                  <input
                    className={errors.name?.message ? 'input-err' : ''}
                    {...register('name', {
                      required: 'Name is required',
                    })}
                  />
                  {errors.name?.message && (
                    <span className="text-error">{errors.name?.message}</span>
                  )}
                </div>
              </Typography>
              <Typography gutterBottom>
                <div className="input-item-contain">
                  <p>Phone number</p>
                  <input
                    className={errors.phoneNumber?.message ? 'input-err' : ''}
                    {...register('phoneNumber', {
                      required: 'Phone number is required!',
                      pattern: {
                        value: /^[0]+[0-9]{9}$/,
                        message:
                          'Phone number must be a number. Number first is 0!',
                      },
                    })}
                  />
                  {errors.phoneNumber?.message && (
                    <span className="text-error">
                      {errors.phoneNumber?.message}
                    </span>
                  )}
                </div>
              </Typography>
              <Typography gutterBottom>
                <div className="input-item-contain">
                  <p>
                    Password<span>*</span>
                  </p>
                  <input
                    type={showPassword ? 'password' : 'text'}
                    className={errors.password?.message ? 'input-err' : ''}
                    {...register('password', {
                      required: 'Password is required!',
                      minLength: {
                        value: 6,
                        message: 'Password must have 6-50 character!',
                      },
                      maxLength: {
                        value: 50,
                        message: 'Password must have 6-50 character!',
                      },
                    })}
                  />
                  {errors.password?.message && (
                    <span className="text-error">
                      {errors.password?.message}
                    </span>
                  )}
                  <span
                    className="icon-show-password"
                    onClick={() => setShowPassword(!showPassword)}
                    role="presentation"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </span>
                </div>
              </Typography>
              <Typography gutterBottom>
                <div className="input-item-contain">
                  <p>
                    Password confirmation<span>*</span>
                  </p>
                  <input
                    type={showConfirmPassword ? 'password' : 'text'}
                    className={
                      errors.passwordConfirmation?.message ? 'input-err' : ''
                    }
                    {...register('passwordConfirmation', {
                      required: 'Password confirmation is required',
                      validate: (val: string) => {
                        if (watch('password') !== val) {
                          return 'Password confirmation does not match';
                        }
                      },
                    })}
                  />
                  {errors.passwordConfirmation?.message && (
                    <span className="text-error">
                      {errors.passwordConfirmation?.message}
                    </span>
                  )}
                  <span
                    className="icon-show-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    role="presentation"
                  >
                    {showConfirmPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </span>
                </div>
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button type="submit" className="btn btn-update">
                Update
              </Button>
              <Button className="btn btn-cancel" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </form>
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
              <Button className="btn btn-yes" onClick={handleDeleteUser}>
                Yes
              </Button>
            </div>
          </div>
        </MenuContain>
      </UserContain>
      <DialogSignInSuccessContain
        open={openProcessUpdate}
        onClose={handleCloseOpenProcessUpdate}
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
          <h3>{dataEditUser.content}</h3>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseOpenProcessUpdate}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignInSuccessContain>
      <DialogSignInSuccessContain
        open={openDeleteSuccess}
        onClose={handleDialogDeleteSuccess}
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
          <h3>{DataDeleteUser.content}</h3>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogDeleteSuccess}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignInSuccessContain>
      <DialogSignInErrorContain
        open={openDeleteError}
        onClose={handleDialogDeleteError}
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
          <h3>{errorDeleteUser}</h3>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogDeleteError}
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

export default observer(Users);
