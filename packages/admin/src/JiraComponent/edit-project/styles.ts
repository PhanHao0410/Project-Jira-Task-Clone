import { Dialog } from '@mui/material';
import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const EditProjectContain = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 16px;
  line-height: 1.5715;
  color: rgb(0 0 0 / 85%);
  position: relative;
`;

export const EditProjectContent = styled.div`
  position: relative;
  margin: 30px auto;
  width: 60%;
  height: 100%;
  min-width: 350px;
  .title-select {
    margin-bottom: 20px;
    span {
      color: rgb(147, 147, 147);
      cursor: pointer;
      margin-right: 8px;
      transition: all 0.3s;
      &:hover {
        color: RGB(17 102 182);
        font-size: 17px;
        transition: all 0.3s;
        font-weight: 500;
      }
    }
  }
  .title-main {
    font-size: 24px;
    font-weight: 500;
  }
  .input-disable-contain {
    input {
      cursor: not-allowed;
      background-color: RGB(235 235 235);
      color: RGB(152 152 152);
      &:hover {
        border: 1px solid rgb(226, 226, 226);
      }
    }
  }
`;

export const FormInputContain = styled.div`
  width: 100%;
  margin-top: 20px;
  .title-input {
    font-weight: 500;
    margin-bottom: 8px;
    span {
      color: RGB(193 0 0);
    }
  }
  input {
    width: 100%;
    border: 1px solid rgb(226, 226, 226);
    border-radius: 4px;
    height: 30px;
    font-size: 16px;
    padding: 0 20px;
    &:hover {
      border: 1px solid #40a9ff;
    }
    &:focus {
      border: none;
      outline: 1px solid #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
  .input-err {
    border: 1px solid #ff4d4f;
    &:hover {
      border: 1px solid #ff4d4f;
    }
    &:focus {
      outline: 1px solid #ff7875;
      box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
      border: none;
    }
  }
  .show-error {
    color: red;
    font-size: 14px;
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
  .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
    font-weight: 600 !important;
  }
`;

export const DescriptionContain = styled.div`
  margin-top: 20px;
  h5 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .description-content {
    width: 100%;
    height: 100%;
    .wrapper-class {
      padding: 1rem;
      border: 1px solid #ccc;
    }
    .editor-class {
      background-color: RGB(242 242 242);
      padding: 1rem;
      border: 1px solid #ccc;
    }
    .toolbar-class {
      border: 1px solid #ccc;
      display: flex;
      width: 100%;
      color: rgb(126, 126, 126);
    }
  }
  .rdw-inline-wrapper {
    border: 1px solid rgb(144, 151, 158);
    .rdw-option-wrapper {
      width: 30px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: RGB(232 232 232);
      }
    }
  }
  .rdw-block-wrapper {
    border: 1px solid rgb(144, 151, 158);
    width: 80px;
    text-align: center;
    .rdw-dropdown-optionwrapper {
      list-style-type: none;
    }
    &:hover {
      background-color: RGB(232 232 232);
    }
  }
`;

export const CreateAction = styled.div`
  width: 100%;
  margin: 30px 0 50px;
  .btn {
    padding: 5px 12px;
    background-color: red;
    margin-right: 8px;
    font-size: 14px;
    text-transform: none;
  }
  .btn-cancel {
    color: rgb(64, 70, 83);
    background-color: rgb(209, 213, 219);
    &:hover {
      background-color: RGB(183 187 193);
    }
  }
  .btn-create {
    color: white;
    background-color: rgb(29, 78, 216);
    &:hover {
      background-color: RGB(69 107 210);
    }
  }
`;

export const DialogShowErrorUpdate = styled(Dialog)`
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
    border: 5px solid rgb(242, 116, 116);
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
        width: 57px;
        background-color: rgb(242, 116, 116);
        border-radius: 2px;
        position: absolute;
      }
      .x-mark-left {
        transform: rotate(45deg);
      }
      .x-mark-right {
        transform: rotate(-45deg);
      }
    }
  }
  #dialog-content {
    height: 100%;
    h3 {
      font-size: 24px;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
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
export const DialogShowSuccessUpdate = styled(Dialog)`
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
