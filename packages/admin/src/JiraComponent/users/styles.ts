import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import Menu from '@mui/material/Menu';
import { devices } from '../DeviceScreen';

export const UserContain = styled.div`
  width: 100vw;
  height: 100%;
  padding-top: 80px;
  font-size: 1rem;
  line-height: 1.5715;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  padding: 80px 50px 30px;
  color: rgba(0, 0, 0, 0.85);
  position: relative;
  @media ${devices.maxmd} {
    padding: 80px 30px 30px;
  }
`;

export const ClearUserContain = styled.div`
  display: inline-block;
  margin: 30px 0;
  border: 1px solid RGB(209 213 219);
  padding: 4px 12px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: rgb(42, 153, 255);
    border: 1px solid rgb(42, 153, 255);
  }
  &:active {
    box-shadow: RGB(208 232 255) 0px 1px 2px, RGB(208 232 255) 0px 2px 4px,
      RGB(208 232 255) 0px 4px 8px, RGB(208 232 255) 0px 8px 16px,
      RGB(208 232 255) 0px 16px 32px, RGB(208 232 255) 0px 32px 64px;
    transition: all 0.3s;
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
    }
  }
  .css-34nofg-MuiTableRow-root {
    height: 100%;
    border-bottom: 1px solid rgb(225, 225, 225);

    &:hover {
      background-color: rgb(250, 250, 250);
    }

    .edit-icon {
      color: rgb(37, 84, 217);
      margin-right: 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: RGB(42 153 255);
        transform: scale(1.2);
        transition: all 0.3s;
      }
    }
    .cancel-icon {
      color: rgb(223, 57, 57);
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: RGB(240 92 92);
        transform: scale(1.2);
        transition: all 0.3s;
      }
    }
  }
`;

export const PaginationContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 6px 14px;
  }
  .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
    li {
      font-weight: 600 !important;
    }
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
    .edit-icon {
      color: rgb(37, 84, 217);
      margin-right: 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: RGB(42 153 255);
        transform: scale(1.2);
        transition: all 0.3s;
      }
    }
    .cancel-icon {
      color: rgb(223, 57, 57);
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: RGB(240 92 92);
        transform: scale(1.2);
        transition: all 0.3s;
      }
    }
  }
`;
export const BootstrapDialog = styled(Dialog)`
  #customized-dialog-title {
    font-size: 16px;
    font-weight: 600;
  }
  .dialog-content {
    min-width: 500px;
    @media ${devices.maxsm} {
      min-width: 380px;
    }
  }
  .input-item-contain {
    margin-bottom: 20px;
    p {
      font-weight: 500;
      margin-bottom: 3px;
      span {
        color: red;
        padding-left: 5px;
      }
    }
    input {
      width: 100%;
      height: 35px;
      padding: 0 10px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid RGB(203 203 203);
      &:hover {
        border: 1px solid #40a9ff;
      }
      &:focus {
        outline: 1px solid #40a9ff;
        box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.2);
        border: none;
      }
    }
    .input-value-default {
      cursor: not-allowed;
      background-color: RGB(238 238 238);
      color: RGB(163 163 163);
      &:hover {
        border: none;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    span {
      font-size: 13px;
      color: rgb(255, 80, 82);
      font-weight: 400;
      margin-left: 3px;
    }
  }
  .btn {
    padding: 4px 10px;
    border-radius: 4px;
    text-transform: none;
  }
  .btn-update {
    color: white;
    background-color: rgb(29, 78, 216);
    &:hover {
      background-color: RGB(66 114 246);
    }
  }
  .btn-cancel {
    color: black;
    background-color: RGB(174 174 174);
    &:hover {
      background-color: RGB(202 202 202);
    }
  }
`;

export const MenuContain = styled(Menu)`
  .content-contain {
    padding: 0px 20px;
    .title-delete {
      display: flex;
      align-items: center;
      p {
        font-size: 16px;
      }
    }
    .icon-warning {
      transform: scale(0.8);
      margin-right: 5px;
      color: rgb(250, 173, 20);
    }
    .delete-action {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .btn {
        padding: 2px 8px;
        text-transform: none;
        min-width: 10px;
        min-height: 10px;
      }
      .btn-no {
        color: rgb(75, 75, 75);
        border: 1px solid RGB(188 186 186);
        margin-right: 8px;
        &:hover {
          border: 1px solid RGB(70 166 255);
          color: RGB(70 166 255);
        }
      }
      .btn-yes {
        color: white;
        background-color: RGB(54 157 252);
        &:hover {
          background-color: RGB(88 172 251);
        }
      }
    }
  }
`;
