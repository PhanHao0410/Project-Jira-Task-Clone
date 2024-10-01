import styled from 'styled-components';

import { Dialog } from '@mui/material';
import { devices } from '../DeviceScreen';

export const AccountContain = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  position: relative;
  font-size: 1rem;
  line-height: 1.5715;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

export const AccountContent = styled.div`
  width: 70%;
  height: 100%;
  margin: 30px auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  min-width: 680px;
  @media ${devices.maxmd} {
    display: block;
    width: 80%;
    min-width: 0;
  }
  .avatar-contain {
    width: 27%;
    @media ${devices.maxmd} {
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      max-width: 200px;
    }
  }
`;

export const FormInputAccountContain = styled.div`
  width: 65%;
  height: 100%;
  @media ${devices.maxmd} {
    width: 100%;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
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
      padding-left: 15px;
      padding-right: 70px;
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
  .password-contain {
    position: relative;
    .icon-password {
      position: absolute;
      color: rgb(117, 117, 117);
      top: 5px;
      right: 20px;
      cursor: pointer;
    }
  }
  .account-action {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    .btn {
      padding: 4px 12px;
      text-transform: none;
      font-weight: 500;
    }
    .btn-update {
      background-color: rgb(29, 78, 216);
      color: white;
      margin-right: 8px;
      &:hover {
        background-color: RGB(53 104 247);
      }
    }
    .btn-cancel {
      background-color: RGB(205 205 205);
      color: black;
      &:hover {
        background-color: RGB(226 226 226);
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
