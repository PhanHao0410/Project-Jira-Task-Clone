import styled from 'styled-components';

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
    }
    .avatar-content {
      font-size: 80px;
      font-weight: 400;
      text-transform: uppercase;
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: rgb(221, 221, 221);
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 200px;
      margin: 0 auto;
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
