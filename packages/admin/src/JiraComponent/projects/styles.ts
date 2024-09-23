import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import { Menu } from '@mui/material';

import { devices } from '../DeviceScreen';

export const ProjectsContain = styled.div`
  padding-top: 100px;
  color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5715;
  padding: 80px 30px 0;
`;

export const TitleProjectContain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  h3 {
    font-size: 24px;
    line-height: 1.35;
    font-weight: 600;
  }
  .btn-create-project {
    background-color: rgb(29, 78, 216);
    font-size: 16px;
    text-transform: none;
    font-weight: 500;
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    &:hover {
      background-color: RGB(52 97 219);
    }
  }
`;

export const SearchProjectContain = styled.div`
  position: relative;
  width: 250px;
  margin-bottom: 30px;
  input {
    position: relative;
    height: 35px;
    border: 1px solid RGB(222 222 222);
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    padding-left: 15px;
    padding-right: 60px;
    transition: all 0.3s;
    &:hover {
      border: 1px solid #40a9ff;
      transition: all 0.3s;
    }
    &:focus {
      outline: 1px solid #40a9ff;
      border: none;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      transition: all 0.3s;
    }
  }
  .icon-find {
    position: absolute;
    z-index: 2;
    top: 6px;
    right: 8px;
    transform: scale(0.8);
  }
  .icon-cancel {
    transform: scale(0.6);
  }
  span {
    position: absolute;
    z-index: 2;
    top: 6px;
    right: 30px;
    color: RGB(193 193 193);
    cursor: pointer;
    &:hover {
      color: RGB(161 162 163);
    }
  }
`;

export const TableContain = styled.table`
  width: 100%;
  margin-bottom: 30px;
  @media ${devices.maxmd} {
    display: none;
  }
  .css-15wwp11-MuiTableHead-root {
    background-color: rgb(250, 250, 250);
    th {
      border-right: 1px solid rgb(225, 225, 225);
      &:last-child {
        border-right: none;
      }
    }
    .title-table-contain {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon-contain {
        position: relative;
        margin-right: 10px;
      }
      .icon-up {
        position: absolute;
        z-index: 2;
        top: -15px;
        color: RGB(181 181 181);
      }
      .icon-down {
        color: RGB(181 181 181);
        position: absolute;
        z-index: 2;
        top: -5px;
      }
      .icon-selected {
        color: rgb(24, 144, 255);
      }
    }
  }

  .css-34nofg-MuiTableRow-root {
    height: 100%;
    border-bottom: 1px solid rgb(225, 225, 225);

    &:hover {
      background-color: rgb(250, 250, 250);
    }

    .body-project-name {
      color: rgb(52, 88, 216);
      cursor: pointer;
    }
    .name-member-item {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: rgb(221, 221, 221);
      border: 2px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:nth-child(2) {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 25px;
      }
      &:nth-child(3) {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 50px;
        background-color: rgb(253, 227, 207);
        color: rgb(246, 108, 16);
      }
    }
    .option-contain {
      height: 35px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: RGB(221 221 221);
      }
    }
  }
`;

export const PaginationContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    border: 1px solid rgb(44, 153, 255);
    color: rgb(44, 153, 255);
    background-color: white;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s;
    &:hover {
      background-color: white;
      font-size: 16px;
      font-weight: 600;
      border: 1px solid rgb(44, 153, 255);
    }
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root:hover {
    border: 1px solid rgb(44, 153, 255);
    color: rgb(44, 153, 255);
    background-color: white;
  }
`;

export const ProjectsContentContain = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 30px;
  @media ${devices.md} {
    display: none;
  }
`;

export const ProjectContentItem = styled.ul`
  padding: 20px 0;
  border-bottom: 1px solid rgb(242, 242, 242);

  li {
    display: flex;
    align-items: center;
    padding: 5px 20px;
    h5 {
      font-size: 14px;
      font-weight: 600;
      width: 35%;
    }
    p {
      font-size: 14px;
    }
    .name-member-item {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: rgb(221, 221, 221);
      border: 2px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:nth-child(2) {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 25px;
      }
      &:nth-child(3) {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 50px;
        background-color: rgb(253, 227, 207);
        color: rgb(246, 108, 16);
      }
    }
  }
`;

export const DialogContain = styled(Dialog)`
  padding: 0px 20px;
  #alert-dialog-title {
    display: flex;
    align-items: center;
    span {
      margin-right: 20px;
      margin-top: 10px;
      color: rgb(251, 192, 77);
      transform: scale(1.3);
    }
    p {
      font-size: 18px;
    }
  }
  #alert-dialog-action {
    margin-bottom: 10px;
    .btn {
      padding: 3px 12px;
      text-transform: none;
      color: white;
    }
    .btn-cancel {
      background-color: rgb(29, 78, 216);
      &:hover {
        background-color: RGB(78 121 239);
      }
    }
    .btn-delete {
      background-color: rgb(220, 38, 38);
      &:hover {
        background-color: RGB(249 98 98);
      }
    }
  }
`;

export const DialogSignInErrorContain = styled(Dialog)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  box-sizing: border-box;
  #alert-dialog-title {
    width: 100px;
    height: 100px;
    margin: 30px auto;
    border: 5px solid #a5dc86;
    border-radius: 50%;
    animation: animationErrorIcon 0.5s;
    .x-mark-contain {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: animateXMark 0.8s;
      .x-mark-item {
        height: 5px;
        background-color: #a5dc86;
        border-radius: 2px;
        position: absolute;
      }
      .x-mark-left {
        width: 47px;
        left: 10px;
        top: 28px;
        transform: rotate(-45deg);
      }
      .x-mark-right {
        width: 25px;
        left: -4px;
        top: 35px;
        transform: rotate(45deg);
      }
    }
  }
  #dialog-content {
    height: 100%;
    text-align: center;
    .image-error-contain {
      width: 100%;
      display: flex;
      justify-content: center;
      .image-error-item {
        width: 100%;
        height: 180px;
        @media ${devices.maxpn} {
          width: 100%;
          height: 150px;
        }
      }
    }
    h3 {
      font-size: 18px;
      width: 100%;
    }
    p {
      display: flex;
      justify-content: center;
      color: RGB(130 130 130);
    }
  }
  .btn-dialog {
    color: white;
    padding: 10px 25px;
    min-height: 0px;
    min-width: 0px;
    background-color: RGB(115 209 252);
    margin-bottom: 15px;
    margin-right: 15px;
    &:hover {
      background-color: RGB(77 192 246);
    }
  }
  @keyframes animationErrorIcon {
    0% {
      transform: rotateX(100deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }
  @keyframes animateXMark {
    0% {
      transform: scale(0.4);
      margin-top: 26px;
      opacity: 0;
    }
    50% {
      transform: scale(0.4);
      margin-top: 26px;
      opacity: 0;
    }
    80% {
      transform: scale(1.15);
      margin-top: -6px;
    }
    100% {
      transform: scale(1);
      margin-top: 0;
      opacity: 1;
    }
  }
`;

export const MenuActionContain = styled(Menu)`
  .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
`;
