import React, { useState } from 'react';

import { Button } from '@mui/material';
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

import AppBar from '../../components/AppBar';
import history from '../../utils/history';
import {
  ProjectsContain,
  TitleProjectContain,
  SearchProjectContain,
  TableContain,
  PaginationContain,
  ProjectsContentContain,
  ProjectContentItem,
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
  const [valueSearch, setValueSearch] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar />
      <ProjectsContain>
        <TitleProjectContain>
          <h3>Projects</h3>
          <Button className="btn-create-project">Create project</Button>
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
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>Id</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon className="icon-up" />
                      <ArrowDropDownSharpIcon className="icon-down" />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>Project name</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon className="icon-up" />
                      <ArrowDropDownSharpIcon className="icon-down" />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>Category name</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon className="icon-up" />
                      <ArrowDropDownSharpIcon className="icon-down" />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div className="title-table-contain">
                    <h3>Creator</h3>
                    <div className="icon-contain">
                      <ArrowDropUpSharpIcon className="icon-up" />
                      <ArrowDropDownSharpIcon className="icon-down" />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">Members</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">15902</TableCell>
                <TableCell
                  align="left"
                  className="body-project-name"
                  onClick={() => history.push(`/${15698}/board`)}
                >
                  Reactjs
                </TableCell>
                <TableCell align="left">Du an web</TableCell>
                <TableCell align="left">Tri Tho Thanh</TableCell>
                <TableCell align="left">
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
                </TableCell>
                <TableCell align="left">
                  <div
                    className="option-contain"
                    onClick={handleClick}
                    role="presentation"
                    style={anchorEl && { backgroundColor: 'RGB(97 101 105)' }}
                  >
                    <MoreHorizIcon />
                  </div>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Project settings</MenuItem>
                    <MenuItem onClick={handleClose}>Move to trash</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContain>
        <ProjectsContentContain>
          <ProjectContentItem>
            <li>
              <h5>Project name</h5>
              <p style={{ color: 'rgb(29 78 216)' }}>ahihi1234</p>
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
                >
                  <DriveFileRenameOutlineIcon />
                </span>
                <span
                  style={{
                    color: 'rgb(223,57,57)',
                    cursor: 'pointer',
                  }}
                >
                  <DeleteForeverIcon />
                </span>
              </div>
            </li>
          </ProjectContentItem>
        </ProjectsContentContain>
        <PaginationContain>
          <Pagination count={3} variant="outlined" shape="rounded" />
        </PaginationContain>
      </ProjectsContain>
    </>
  );
};

export default Projects;
