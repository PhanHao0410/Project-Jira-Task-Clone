import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { devices } from '../../JiraComponent/DeviceScreen';

export const AppBarContain = styled.div`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid rgb(229 231 235);
  position: fixed !important;
  z-index: 999;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.2;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const AppBarRightContain = styled.div`
  display: flex;
  align-items: center;
  .logo-contain {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 130px;
    @media ${devices.maxsm} {
      display: none;
    }
    h3 {
      font-size: 30px;
      font-weight: 500;
      padding-left: 5px;
      transition: all 0.3s;
    }
    img {
      width: 50px;
      height: 50px;
      transition: all 0.3s;
    }
    &:hover {
      h3 {
        font-size: 33px;
        transition: all 0.3s;
      }
      img {
        width: 54px;
        height: 54px;
        transition: all 0.3s;
      }
    }
  }
  .selected-contain {
    display: flex;
    align-items: center;
    height: 80px;
    .select-item {
      display: flex;
      align-items: center;
      padding: 0px 10px;
      height: 80px;
      font-weight: 600;
      font-size: 16px;
      min-width: 70px;
      color: RGB(120 120 120);
      position: relative;
      cursor: pointer;
      transition: all 0.3s;
      span {
        transform: translateY(3px);
      }
      &:hover {
        background-color: RGB(226 246 255);
      }
    }
    .select-active {
      color: RGB(33 113 194);
      transition: all 0.3s;
      border-bottom: 3px solid RGB(33 113 194);
    }
    .select-project {
      &:hover .select-item-show {
        display: block;
      }
    }
  }
`;

export const ShowSelectProjectContain = styled.div`
  min-width: 230px;
  height: 83px;
  background-color: black;
  position: absolute;
  z-index: 2;
  top: 60px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  padding: 2px 0px;
  display: none;
  p {
    color: rgb(39, 39, 39);
    padding: 10px 30px;
    cursor: pointer;
    &:hover {
      background-color: RGB(247 247 247);
    }
  }
`;

export const AppBarActionContain = styled.div`
  display: flex;
  align-items: center;
  .setting-contain {
    margin: 0 10px;
    cursor: pointer;
  }
  .avatar-account {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(221, 221, 221);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const MenuShowContain = styled(Menu)`
  h3 {
    padding: 10px 15px;
    font-weight: 600;
    color: rgb(166, 172, 183);
  }
  .menu-item {
    font-size: 15px;
    font-weight: 400;
    min-width: 230px;
    margin: 2px 0;
    height: 45px;
  }
`;

export const DrawerCreateTaskContain = styled(Drawer)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  overflow-y: hidden !important;
  height: 100vh;
  .title-drawer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    padding: 0px 30px;
    span {
      cursor: pointer;
    }
    @media ${devices.maxlg} {
      padding: 0px 15px;
    }
    h3 {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: rgb(0 0 0 / 85%);
    }
    span {
      color: RGB(155 155 155);
    }
  }
  .drawer-action-content {
    border-top: 1px solid rgb(222, 222, 222);
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .btn {
      text-transform: none;
      padding: 4px 12px;
      border: 1px solid RGB(205 205 205);
      margin-right: 10px;
    }
    .btn-cancel {
      color: black;
      &:hover {
        color: RGB(82 152 219);
        border: 1px solid RGB(82 152 219);
      }
    }
    .btn-submit {
      color: white;
      background-color: RGB(82 152 219);
      border: none;
      &:hover {
        background-color: RGB(96 142 189);
      }
    }
  }
`;

export const FormCreateTaskContain = styled.div`
  padding: 30px 50px;
  overflow-y: scroll;
  height: 84vh;
  @media ${devices.maxlg} {
    padding: 30px 15px;
  }
  .field-item-contain {
    margin-bottom: 15px;
    .title-item {
      margin-bottom: 7px;
    }
    input {
      width: 100%;
      height: 40px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid RGB(208 208 208);
      padding: 0 10px;
      :focus {
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        outline: none;
        border: 2px solid #40a9ff;
      }
      :hover {
        border: 1px solid #40a9ff;
      }
    }
    .show-error {
      margin-top: 15px;
      font-size: 12px;
      font-weight: 600;
    }
    .input-field-item {
      height: 30px;
    }
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover
      .MuiOutlinedInput-notchedOutline {
      border: 1px solid #40a9ff;
    }
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
      .MuiOutlinedInput-notchedOutline {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border-color: #40a9ff;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
      height: 13px;
      min-height: 0.4em;
      margin-top: -5px;
    }
    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
      top: -5px;
    }
  }
  .field-item-45 {
    width: 45%;

    input[type='number']::-webkit-inner-spin-button {
      width: 30px;
      height: 45px;
    }
  }
  .wrapper-class {
    padding: 1rem;
    border: 1px solid #ccc;
  }
  .editor-class {
    background-color: lightgray;
    padding: 1rem;
    border: 1px solid #ccc;
  }
  .toolbar-class {
    border: 1px solid #ccc;
    display: flex;
    width: 100%;
  }
  .field-number-contain {
    padding: 20px 0 0px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
