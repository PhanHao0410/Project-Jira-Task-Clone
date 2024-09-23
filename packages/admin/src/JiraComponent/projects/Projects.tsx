import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Button, patch } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Pagination from '@mui/material/Pagination';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ReportIcon from '@mui/icons-material/Report';

import AppBar from '../../components/AppBar';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { useStoreMobx } from '../../mobx/hook';
import {
  ProjectsContain,
  TitleProjectContain,
  SearchProjectContain,
  TableContain,
  PaginationContain,
  ProjectsContentContain,
  ProjectContentItem,
  DialogContain,
  DialogSignInErrorContain,
  MenuActionContain,
} from './styles';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}));

const Projects = () => {
  const {
    rootStore: { logInStore },
  } = useStoreMobx();
  const {
    rootStore: { projectsStore },
  } = useStoreMobx();
  const [valueSearch, setValueSearch] = useState('');
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [rowPerPage, setRowPerPage] = useState(1);
  const [dataPagi, setDataPagi] = useState([]);
  const [selectAction, setSelectAction] = useState('');
  const [keyUrlSearch, setKeyUrlSearch] = useState('');
  const [arrangeId, setArrangeId] = useState<number>(0);
  const [arrangeProject, setArrangeProjects] = useState(0);
  const [arrangeCategory, setArrangeCategory] = useState(0);
  const [arrangeCreator, setArrangeCreator] = useState(0);
  const [openErrorDelete, setOpenErrorDelete] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dataLogIn = logInStore.getLoginData;
  const Datas = projectsStore.getDataProjects;
  const DeleteError = projectsStore.getDeleteErrorData;
  useEffect(() => {
    if (dataLogIn && dataLogIn.content) {
      setOpenSignIn(true);
    }
    if (DeleteError) {
      setOpenErrorDelete(true);
    }
  }, [dataLogIn, DeleteError]);

  useEffect(() => {
    projectsStore.fetchAllProjects(keyUrlSearch);
  }, [keyUrlSearch]);

  useEffect(() => {
    const rowPrevious: number = rowPerPage * 10 - 10;
    const rowNext: number = rowPerPage * 10;
    const dataCopy = [...Datas];
    if (arrangeId === 2) {
      setDataPagi(
        dataCopy?.sort((a, b) => b.id - a.id)?.slice(rowPrevious, rowNext),
      );
    } else if (arrangeId === 1) {
      setDataPagi(
        dataCopy?.sort((a, b) => a.id - b.id)?.slice(rowPrevious, rowNext),
      );
    } else if (arrangeProject === 1) {
      setDataPagi(
        dataCopy
          ?.sort((a, b) => a.projectName.localeCompare(b.projectName))
          ?.slice(rowPrevious, rowNext),
      );
    } else if (arrangeProject === 2) {
      setDataPagi(
        dataCopy
          ?.sort((a, b) => b.projectName.localeCompare(a.projectName))
          ?.slice(rowPrevious, rowNext),
      );
    } else if (arrangeCategory === 1) {
      setDataPagi(
        dataCopy
          ?.sort((a, b) => a.categoryName.localeCompare(b.categoryName))
          ?.slice(rowPrevious, rowNext),
      );
    } else if (arrangeCategory === 2) {
      setDataPagi(
        dataCopy
          ?.sort((a, b) => b.categoryName.localeCompare(a.categoryName))
          ?.slice(rowPrevious, rowNext),
      );
    } else if (arrangeCreator === 1) {
      setDataPagi(
        dataCopy
          ?.sort((a, b) => a.creator.name.localeCompare(b.creator.name))
          ?.slice(rowPrevious, rowNext),
      );
    } else if (arrangeCreator === 2) {
      setDataPagi(
        dataCopy
          ?.sort((a, b) => b.creator.name.localeCompare(a.creator.name))
          ?.slice(rowPrevious, rowNext),
      );
    } else {
      setDataPagi(Datas?.slice(rowPrevious, rowNext));
    }
    if (valueSearch) {
      const timeOutId = setTimeout(
        () => setKeyUrlSearch(`?keyword=${valueSearch}`),
        500,
      );
      return () => clearTimeout(timeOutId);
    }
    if (!valueSearch) {
      setKeyUrlSearch('');
    }
  }, [
    rowPerPage,
    arrangeId,
    Datas,
    valueSearch,
    arrangeProject,
    arrangeCategory,
    arrangeCreator,
  ]);

  const handleCloseOpenSignIn = () => {
    setOpenSignIn(false);
    logInStore.setResetState();
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id) => {
    setAnchorEl(event.currentTarget);
    setSelectAction(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectAction('');
  };

  const handleClickDeleteProject = () => {
    setAnchorEl(null);
    setOpenDialogDelete(true);
  };
  const handleClickDeleteProjectMatches = (id) => {
    setOpenDialogDelete(true);
    setSelectAction(id);
  };
  const handleClickEditProject = () => {
    history.push(`/pj/${4567}/edit`);
    setAnchorEl(null);
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
  };

  const handleArrangeId = () => {
    setArrangeProjects(0);
    setArrangeCategory(0);
    setArrangeCreator(0);
    if (arrangeId === 0) {
      setArrangeId(1);
    } else if (arrangeId === 1) {
      setArrangeId(2);
    } else {
      setArrangeId(0);
    }
  };

  const handleArrangeProjectName = () => {
    setArrangeId(0);
    setArrangeCategory(0);
    setArrangeCreator(0);
    if (arrangeProject === 0) {
      setArrangeProjects(1);
    } else if (arrangeProject === 1) {
      setArrangeProjects(2);
    } else {
      setArrangeProjects(0);
    }
  };

  const handleArrangeCategory = () => {
    setArrangeId(0);
    setArrangeProjects(0);
    setArrangeCreator(0);
    if (arrangeCategory === 0) {
      setArrangeCategory(1);
    } else if (arrangeCategory === 1) {
      setArrangeCategory(2);
    } else {
      setArrangeCategory(0);
    }
  };

  const handleArrangeCreator = () => {
    setArrangeId(0);
    setArrangeProjects(0);
    setArrangeCategory(0);
    if (arrangeCreator === 0) {
      setArrangeCreator(1);
    } else if (arrangeCreator === 1) {
      setArrangeCreator(2);
    } else {
      setArrangeCreator(0);
    }
  };

  const handleConfirmDeleteProjects = () => {
    const projectId = selectAction;
    setOpenDialogDelete(false);
    projectsStore.fetchDeleteProjects(selectAction);
  };

  const handleCloseErrorDelete = () => {
    setOpenErrorDelete(false);
    setSelectAction('');
  };

  return (
    <>
      <AppBar />
      <ProjectsContain>
        <TitleProjectContain>
          <h3>Projects</h3>
          <Button
            className="btn-create-project"
            onClick={() => history.push(path.CREATEPROJECT)}
          >
            Create project
          </Button>
        </TitleProjectContain>
        <SearchProjectContain className="search-contain">
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
        </SearchProjectContain>
        <TableContain>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  style={{ cursor: 'pointer' }}
                  onClick={handleArrangeId}
                >
                  <div className="title-table-contain">
                    <h3>Id</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon
                        className={`icon-up ${
                          arrangeId === 1 ? 'icon-selected' : ''
                        }`}
                      />
                      <ArrowDropDownSharpIcon
                        className={`icon-down ${
                          arrangeId === 2 ? 'icon-selected' : ''
                        }`}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  align="left"
                  onClick={handleArrangeProjectName}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="title-table-contain">
                    <h3>Project name</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon
                        className={`icon-up ${
                          arrangeProject === 1 ? 'icon-selected' : ''
                        }`}
                      />
                      <ArrowDropDownSharpIcon
                        className={`icon-down ${
                          arrangeProject === 2 ? 'icon-selected' : ''
                        }`}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  align="left"
                  onClick={handleArrangeCategory}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="title-table-contain">
                    <h3>Category name</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon
                        className={`icon-up ${
                          arrangeCategory === 1 ? 'icon-selected' : ''
                        }`}
                      />
                      <ArrowDropDownSharpIcon
                        className={`icon-down ${
                          arrangeCategory === 2 ? 'icon-selected' : ''
                        }`}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  align="left"
                  onClick={handleArrangeCreator}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="title-table-contain">
                    <h3>Creator</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon
                        className={`icon-up ${
                          arrangeCreator === 1 ? 'icon-selected' : ''
                        }`}
                      />
                      <ArrowDropDownSharpIcon
                        className={`icon-down ${
                          arrangeCreator === 2 ? 'icon-selected' : ''
                        }`}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">Members</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataPagi &&
                dataPagi.length > 0 &&
                dataPagi.map((item, ind) => {
                  return (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{item.id}</TableCell>
                      <TableCell
                        align="left"
                        className="body-project-name"
                        onClick={() => history.push(`/projec/${1546}/board`)}
                      >
                        {item.projectName}
                      </TableCell>
                      <TableCell align="left">{item.categoryName}</TableCell>
                      <TableCell align="left">{item.creator.name}</TableCell>
                      <TableCell
                        align="left"
                        style={{
                          display: 'flex',
                          borderBottom: 'none',
                        }}
                      >
                        <div style={{ position: 'relative' }}>
                          {item.members?.slice(0, 2).map((member) => {
                            return (
                              <Tooltip
                                title={member.name}
                                arrow
                                placement="top"
                                key={member.userId}
                              >
                                <img
                                  className="name-member-item"
                                  src={member.avatar}
                                  alt="image_avatar"
                                />
                              </Tooltip>
                            );
                          })}

                          {item.members?.length > 2 && (
                            <LightTooltip
                              title={
                                <React.Fragment>
                                  <div
                                    style={{ display: 'flex', padding: '10px' }}
                                  >
                                    {item.members?.slice(2).map((member) => {
                                      return (
                                        <Tooltip
                                          title={member.name}
                                          arrow
                                          placement="top"
                                          key={member.userId}
                                        >
                                          <img
                                            src={member.avatar}
                                            alt="image_avatar"
                                            style={{
                                              width: '35px',
                                              height: '35px',
                                              borderRadius: '50%',
                                              backgroundColor:
                                                'rgb(221,221,221)',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              marginRight: '2px',
                                              fontWeight: '400',
                                            }}
                                          />
                                        </Tooltip>
                                      );
                                    })}
                                  </div>
                                </React.Fragment>
                              }
                              arrow
                              placement="top"
                            >
                              <div className="name-member-item">+1</div>
                            </LightTooltip>
                          )}
                        </div>
                      </TableCell>
                      <TableCell align="left">
                        <div
                          className="option-contain"
                          onClick={(e) => handleClick(e, item.id)}
                          role="presentation"
                        >
                          <MoreHorizIcon />
                        </div>
                        <MenuActionContain
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClickEditProject}>
                            Project settings
                          </MenuItem>
                          <MenuItem onClick={handleClickDeleteProject}>
                            Move to trash
                          </MenuItem>
                        </MenuActionContain>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContain>
        <ProjectsContentContain>
          {dataPagi &&
            dataPagi.length > 0 &&
            dataPagi.map((item) => {
              return (
                <ProjectContentItem key={item.id}>
                  <li>
                    <h5>Project name</h5>
                    <p
                      style={{ color: 'rgb(29 78 216)', cursor: 'pointer' }}
                      onClick={() => history.push(`/projec/${1546}/board`)}
                      role="presentation"
                    >
                      {item.projectName}
                    </p>
                  </li>
                  <li>
                    <h5>Category name</h5>
                    <p>{item.categoryName}</p>
                  </li>
                  <li>
                    <h5>Creator</h5>
                    <p>{item.creator.name}</p>
                  </li>
                  <li>
                    <h5>Members</h5>
                    <div>
                      <div style={{ position: 'relative', display: 'flex' }}>
                        {item.members?.slice(0, 2).map((member) => {
                          return (
                            <Tooltip
                              title={member.name}
                              arrow
                              placement="top"
                              key={member.userId}
                            >
                              <img
                                className="name-member-item"
                                src={member.avatar}
                                alt="image_avatar"
                              />
                            </Tooltip>
                          );
                        })}

                        {item.members?.length > 2 && (
                          <LightTooltip
                            title={
                              <React.Fragment>
                                <div
                                  style={{ display: 'flex', padding: '10px' }}
                                >
                                  {item.members?.slice(2).map((member) => {
                                    return (
                                      <Tooltip
                                        title={member.name}
                                        arrow
                                        placement="top"
                                        key={member.userId}
                                      >
                                        <img
                                          src={member.avatar}
                                          alt="image_avatar"
                                          style={{
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgb(221,221,221)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '2px',
                                            fontWeight: '400',
                                          }}
                                        />
                                      </Tooltip>
                                    );
                                  })}
                                </div>
                              </React.Fragment>
                            }
                            arrow
                            placement="top"
                          >
                            <div className="name-member-item">+1</div>
                          </LightTooltip>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <h5>Actions</h5>
                    <div>
                      <span
                        style={{
                          marginRight: '30px',
                          color: 'rgb(37,84,217)',
                          cursor: 'pointer',
                        }}
                        onClick={handleClickEditProject}
                        role="presentation"
                      >
                        <DriveFileRenameOutlineIcon />
                      </span>
                      <span
                        style={{
                          color: 'rgb(223,57,57)',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleClickDeleteProjectMatches(item.id)}
                        role="presentation"
                      >
                        <DeleteForeverIcon />
                      </span>
                    </div>
                  </li>
                </ProjectContentItem>
              );
            })}
          {/* <ProjectContentItem>
            <li>
              <h5>Project name</h5>
              <p
                style={{ color: 'rgb(29 78 216)', cursor: 'pointer' }}
                onClick={() => history.push(`/projec/${1546}/board`)}
                role="presentation"
              >
                ahihi1234
              </p>
            </li>
            <li>
              <h5>Category name</h5>
              <p>Dự án di động</p>
            </li>
            <li>
              <h5>Creator</h5>
              <p>dat</p>
            </li>
            <li>
              <h5>Members</h5>
              <div>
                <div style={{ position: 'relative' }}>
                  <Tooltip title="Hung" arrow placement="top">
                    <div className="name-member-item">HU</div>
                  </Tooltip>
                  <Tooltip title="Hen" arrow placement="top">
                    <div className="name-member-item">HE</div>
                  </Tooltip>
                  <LightTooltip
                    title={
                      <React.Fragment>
                        <div style={{ display: 'flex', padding: '10px' }}>
                          <Tooltip title="HU" arrow placement="top">
                            <div
                              style={{
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                                backgroundColor: 'rgb(221,221,221)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '10px',
                                fontWeight: '400',
                              }}
                            >
                              HU
                            </div>
                          </Tooltip>
                        </div>
                      </React.Fragment>
                    }
                    arrow
                    placement="top"
                  >
                    <div className="name-member-item">+1</div>
                  </LightTooltip>
                </div>
              </div>
            </li>
            <li>
              <h5>Actions</h5>
              <div>
                <span
                  style={{
                    marginRight: '30px',
                    color: 'rgb(37,84,217)',
                    cursor: 'pointer',
                  }}
                  onClick={handleClickEditProject}
                  role="presentation"
                >
                  <DriveFileRenameOutlineIcon />
                </span>
                <span
                  style={{
                    color: 'rgb(223,57,57)',
                    cursor: 'pointer',
                  }}
                  onClick={handleClickDeleteProject}
                  role="presentation"
                >
                  <DeleteForeverIcon />
                </span>
              </div>
            </li>
          </ProjectContentItem> */}
        </ProjectsContentContain>
        <PaginationContain>
          <Pagination
            count={Math.ceil(Datas?.length / 10)}
            variant="outlined"
            shape="rounded"
            onChange={(e, page) => setRowPerPage(page)}
          />
        </PaginationContain>
        <DialogContain
          open={openDialogDelete}
          // onClose={handleCloseDialogDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span>
              <ReportIcon />
            </span>
            <p>Are you sure to delete reactjs</p>
          </DialogTitle>

          <DialogActions id="alert-dialog-action">
            <Button
              onClick={handleCloseDialogDelete}
              className="btn btn-cancel"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmDeleteProjects}
              className="btn btn-delete"
            >
              Delete
            </Button>
          </DialogActions>
        </DialogContain>
      </ProjectsContain>
      <DialogSignInErrorContain
        open={openSignIn}
        onClose={handleCloseOpenSignIn}
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
          <p>Logged in successfully!</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseOpenSignIn}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignInErrorContain>
      <DialogSignInErrorContain
        open={openErrorDelete}
        onClose={handleCloseErrorDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '30%',
            minWidth: '380px',
          },
        }}
      >
        <DialogContent id="dialog-content">
          <div className="image-error-contain">
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt="image_error"
              className="image-error-item"
            />
          </div>
          <h3>{DeleteError}</h3>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseErrorDelete}
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

export default observer(Projects);
