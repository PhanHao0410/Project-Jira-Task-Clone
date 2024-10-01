import styled from 'styled-components';
import { Dialog, DialogContent, Menu } from '@mui/material';
import { devices } from '../DeviceScreen';

export const DetailProjectContain = styled.div`
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;
  line-height: 1.5715;
  position: relative;
  padding-top: 80px;
  padding: 110px 50px 30px;
  .direct-page {
    font-size: 15px;
    color: rgb(0 0 0 / 85%);
    margin-bottom: 20px;
    span {
      color: RGB(176 176 176);
      padding-right: 5px;
      cursor: pointer;
      &:hover {
        color: RGB(70 166 255);
      }
    }
  }
`;

export const TitleDetailContail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.35;
    color: rgb(0 0 0 / 85%);
    width: 25%;
  }
  .members-contain {
    display: flex;
    align-items: center;
    h6 {
      font-size: 15px;
      margin-right: 1rem;
      font-weight: 600;
    }
    .member-item {
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin-right: 5px;
    }
    .plus-item {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid rgb(221, 221, 221);
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        color: RGB(70 166 255);
        border-color: RGB(70 166 255);
      }
      &:active {
        color: RGB(70 166 255);
        border-color: RGB(70 166 255);
      }
    }
  }
  @media ${devices.maxmd} {
    display: block;
    h3 {
      width: 100%;
    }
    .members-contain {
      width: 100%;
    }
  }
`;

export const StateTaskProjectContain = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media ${devices.maxlg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.maxsm} {
    grid-template-columns: repeat(1, 1fr);
  }
  .task-item {
    height: 100%;
    width: 100%;
    background-color: rgb(243, 244, 246);
    padding: 6px;
    .title-task {
      text-transform: uppercase;
      padding: 2px 8px;
      margin-bottom: 10px;
      display: inline-block;
      font-size: 12px;
      border-radius: 4px;
      font-weight: 500;
    }
  }
`;
export const CardContain = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(243, 244, 246);
  padding: 6px;
  .title-task {
    text-transform: uppercase;
    padding: 2px 8px;
    margin-bottom: 10px;
    display: inline-block;
    font-size: 12px;
    border-radius: 4px;
    font-weight: 500;
  }
  .title-backlog {
    background-color: rgb(229, 231, 235);
  }
  .title-selected {
    background-color: rgb(199, 210, 254);
  }
  .title-progress {
    background-color: rgb(191, 219, 254);
  }
  .title-done {
    background-color: rgb(167, 243, 208);
  }
  .add-task {
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 2px;
    p {
      font-weight: 500;
    }
    &:hover {
      background-color: RGB(206 206 206);
    }
  }
`;
export const CardItemContent = styled.div`
  padding: 10px 8px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 10px;
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .inform-contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .priority-contain {
      display: flex;
      align-items: center;
      p {
        padding: 2px 4px;
        color: rgb(193, 54, 54);
        font-size: 13px;
        border: 1px solid rgb(193, 54, 54);
        border-radius: 3px;
        line-height: 0.8rem;
      }
      .icon-priority {
        margin-right: 3px;
        color: rgb(75, 173, 232);
        transform: scale(0.9);
      }
    }
    .icon-avatar {
      color: rgb(204, 204, 204);
      transform: scale(1.2);
    }
  }
`;

export const DialogContain = styled(Dialog)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  #customized-dialog-title {
    span {
      color: rgb(29, 79, 216);
      padding-left: 5px;
    }
  }
  #dialog-content {
    .search-contain {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      @media ${devices.maxmd} {
        display: block;
      }
      p {
        width: 30%;
        color: rgb(0 0 0 / 85%);
        font-weight: 500;
        font-size: 16px;
        @media ${devices.maxmd} {
          width: 100%;
          margin-bottom: 10px;
        }
      }
      input {
        height: 35px;
        border: 1px solid RGB(204 204 204);
        border-radius: 4px;
        font-size: 18px;
        padding-left: 15px;
        padding-right: 50px;
        position: relative;
        width: 100%;
        &:hover {
          border-color: #40a9ff;
        }
        &:focus {
          border: none;
          outline: 1px solid #40a9ff;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
      }
      .icon-find-search {
        position: absolute;
        z-index: 2;
        top: 5px;
        right: 5px;
        transform: scale(0.9);
      }
      .icon-close-search {
        position: absolute;
        z-index: 3;
        top: 5px;
        right: 25px;
        transform: scale(0.7);
        cursor: pointer;
        color: RGB(172 171 171);
        &:hover {
          color: RGB(130 129 129);
        }
      }
    }
  }
`;

export const ListUsersProjectContain = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  @media ${devices.maxmd} {
    display: block;
    padding-bottom: 0;
  }
  .list-useradd-contain {
    width: 48%;
    height: 100%;
    @media ${devices.maxmd} {
      width: 100%;
    }
    h3 {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
`;

export const ListUserAddContent = styled.div`
  height: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 30px;
  @media ${devices.maxmd} {
    margin-bottom: 60px;
  }

  .user-add-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid RGB(231 231 231);
  }
  .infor-user-add {
    display: flex;
    align-items: center;
    .avatar-user {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 15px;
    }
    h5 {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 7px;
    }
    p {
      font-weight: 500;
      font-size: 12px;
      color: rgb(0 0 0 / 45%);
    }
  }
  .btn-add {
    background-color: rgb(29, 78, 216);
    color: white;
    padding: 4px 10px;
    min-width: 20px;
    &:hover {
      background-color: RGB(44 94 231);
    }
  }
  .btn-object-user {
    background-color: rgb(185, 28, 28);
    color: white;
    padding: 4px 10px;
    min-width: 20px;
    &:hover {
      background-color: RGB(234 60 60);
    }
  }
`;

export const DialogCradItemContain = styled(Dialog)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  transition: all 0.5s linear;
  #alert-dialog-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .task-contain {
      display: flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 4px;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background-color: RGB(240 241 242);
        transition: all 0.3s;
      }
      .icon-task {
        transform: scale(0.7);
        color: rgb(75, 173, 232);
      }
      .icon-bug {
        transform: scale(0.7);
        color: rgb(229, 73, 58);
      }
      p {
        font-size: 16px;
        font-weight: 400;
        margin-left: 2px;
      }
    }
    .action-delete-contain {
      display: flex;
      align-items: center;
    }
    span {
      padding: 5px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-right: 5px;
      &:hover {
        background-color: RGB(240 241 242);
      }
    }
  }
`;
export const DialogCardItemContentContain = styled(DialogContent)`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  @media ${devices.maxmd} {
    display: block;
  }
  .description-comment-contain {
    width: 53%;
    max-height: 450px;
    overflow-y: auto;
    padding-right: 20px;
    .description-contain {
      margin-top: 20px;
      h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
      }
      .title-comment {
        margin-bottom: 20px;
      }
      .add-descrition {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5715;
        padding: 3px 0;
        border-radius: 4px;
        &:hover {
          background-color: rgb(229, 231, 235);
        }
      }
      .word-embed-description {
        .btn {
          padding: 4px 8px;
          text-transform: none;
          margin-right: 5px;
          color: white;
          margin-top: 20px;
        }
        .btn-save {
          background-color: rgb(29, 78, 216);
          &:hover {
            background-color: RGB(64 109 235);
          }
        }
        .btn-cancel {
          color: black;
          &:hover {
            background-color: RGB(224 224 224);
          }
        }
      }
      .comment-content {
        display: flex;

        .avatar-comment {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: rgb(221, 221, 221);
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }
        .add-comment {
          border: 1px solid rgb(233, 235, 238);
          width: 100%;
          padding: 8px 15px;
          border-radius: 4px;
          &:hover {
            border-color: RGB(216 217 218);
          }
        }
        .word-comment {
          width: 100%;
          height: 0%;
        }
      }
    }
    @media ${devices.maxmd} {
      width: 100%;
      max-height: 100%;
      padding-right: 0px;
      margin-bottom: 40px;
    }
  }
  .infor-task-contain {
    width: 44%;
    @media ${devices.maxmd} {
      width: 100%;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 5px 5px;
      background-color: rgb(229, 231, 235);
    }
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
      .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
      .MuiOutlinedInput-notchedOutline {
      border: none;
      :hover {
        border: none;
      }
    }
  }
`;
export const DetailDialogCardItemContain = styled.div`
  margin-top: 10px;
  .show-detail-carditem {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 4px;
    border: 1px solid rgb(223, 223, 223);
    padding: 8px 10px;
    background-color: rgb(250, 250, 250);
    cursor: pointer;
    h3 {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .hide-detail {
    display: none !important;
  }
  .detail-content-contain {
    border: 1px solid rgb(223, 223, 223);
    width: 100%;
    height: 100%;
    border-top: none;
    padding: 10px;
    list-style-type: none;
    transition: all 0.5s linear;
    li {
      padding: 10px 5px;
      width: 100%;
      display: flex;
      align-items: center;
      h3 {
        font-weight: 500;
        font-size: 14px;
        width: 30%;
        min-width: 80px;
      }
      .estimate-content {
        width: 100%;
        border-radius: 4px;
        padding: 8px 15px;
        &:hover {
          background-color: RGB(229 231 235);
        }
        span {
          border-radius: 4px;
          background-color: rgb(209, 213, 219);
          padding: 1px 4px;
        }
      }
      .input-estimate-contain {
        width: 100%;
        position: relative;
        input {
          width: 100%;
          padding: 6px 15px;
          font-size: 16px;
          border-radius: 4px;
          border: 1px solid RGB(202 202 202);
          :hover {
            border-color: #40a9ff;
          }
          :focus {
            box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
            border: none;
            outline: 1px solid #40a9ff;
          }
        }
        .action-estimate-contain {
          position: absolute;
          right: 0;
          .btn {
            min-width: 0;
            min-height: 0;
            color: black;
            padding: 4px 8px;
            background-color: rgb(243, 244, 246);
            margin-right: 3px;
            &:hover {
              background-color: RGB(222 222 223);
            }
            :active {
              box-shadow: 0 0 0 4px rgba(24, 144, 255, 0.2);
            }
          }
        }
      }
      .time-tracking-contain {
        width: 100%;
        transform: translateY(10px);
        border-radius: 4px;
        padding: 0 5px;
        cursor: pointer;
        &:hover {
          background-color: rgb(229, 231, 235);
        }
      }
      .time-tracking-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transform: translateY(-10px);
      }
    }
  }
`;
export const PriorityContentContain = styled.div`
  width: 100%;
  .priority-content {
    display: flex;
    align-items: center;
    padding: 8px 15px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: rgb(229, 231, 235);
    }
  }
  .priority-active {
    background-color: RGB(213 240 253) !important;
    &:hover {
      background-color: RGB(213 240 253);
    }
  }
`;
export const MenuItemContain = styled(Menu)`
  .priority-active {
    background-color: RGB(213 240 253);
    font-weight: 500;
    &:hover {
      background-color: RGB(213 240 253);
    }
  }
`;
export const MenuTaskContain = styled(Menu)`
  .menu-item {
    .icon-bug-item {
      color: rgb(229, 73, 58);
      transform: scale(1);
    }
    p {
      font-size: 16px;
      font-weight: 400;
      padding-left: 2px;
    }
    .icon-newtask-item {
      transform: scale(0.9);
      color: rgb(75, 173, 232);
    }
  }
  .menu-item-selected {
    background-color: RGB(235 245 255);
    &:hover {
      background-color: RGB(235 245 255);
    }
    p {
      font-weight: 600;
    }
  }
`;
export const DialogTimeTrackingContain = styled(Dialog)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  #dialog-content-contain {
    .dialog-timetracking-slider {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transform: translateY(-10px);
    }
    h3 {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 15px;
    }
    .input-contain {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .input-dialog-item {
      width: 47%;
      p {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 5px;
      }
      input {
        width: 100%;
        border: 1px solid RGB(202 202 202);
        border-radius: 4px;
        padding: 6px 15px;
        font-size: 16px;
        :hover {
          border-color: #40a9ff;
        }
        :focus {
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
          border: none;
          outline: 1px solid #40a9ff;
        }
      }
    }
  }
  #action-dialog-timetracking {
    padding: 20px 30px;
    .btn {
      min-width: 0;
      min-height: 0;
      padding: 4px 10px;
      text-transform: none;
    }
    .btn-save {
      background-color: rgb(29, 78, 216);
      color: white;
      &:hover {
        background-color: RGB(66 114 243);
      }
    }
    .btn-cancel {
      color: black;
      background-color: white;
      &:hover {
        background-color: RGB(202 202 202);
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
