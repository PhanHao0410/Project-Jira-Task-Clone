import { DialogActions, DialogContent } from '@mui/material';
import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const CreateProjectContain = styled.div`
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

export const CreateProjectContent = styled.div`
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
  .input-error {
    border: 1px solid #ff4d4f;
    &:hover {
      border: 1px solid #ff4d4f;
    }
    &:focus {
      border: none;
      outline: 1px solid #ff4d4f;
      box-shadow: 0 0 0 2px RGB(255 199 199);
    }
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
  .show-error {
    color: #ff4d4f;
    margin-left: 5px;
    font-size: 14px;
    padding-top: 3px;
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
      background-color: lightgray;
      padding: 1rem;
      border: 1px solid #ccc;
    }
    .toolbar-class {
      border: 1px solid #ccc;
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

export const DialogContentContain = styled(DialogContent)`
  width: 100%;
  .add-show-user-projects {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${devices.maxlg} {
      display: block;
    }
  }
`;

export const AddMemberForProject = styled.div`
  width: 50%;
  &:nth-child(2) {
    width: 47%;
  }
  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20px;
    padding-left: 15px;
  }
  .list-user-contain {
    width: 100%;
    height: 370px;
    overflow-y: auto;
    .user-item-contain {
      padding: 15px 0;
      border-bottom: 1px solid rgb(240, 240, 240);
      margin-right: 20px;
      margin-left: 15px;
      .user-item-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .error-assign-user {
        margin-left: 10px;
        margin-top: 8px;
        color: RGB(210 36 36);
        font-size: 12px;
      }
    }
    .inform-user {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        margin-right: 15px;
      }
      h5 {
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 8px;
      }
      p {
        color: rgb(178, 178, 178);
        font-size: 12px;
      }
    }
    .btn-add {
      min-height: 0px;
      min-width: 0px;
      padding: 4px 12px;
      background-color: rgb(29, 78, 216);
      color: white;
      text-transform: none;
      &:hover {
        background-color: RGB(62 112 249);
      }
    }
    .btn-remove {
      min-height: 0px;
      min-width: 0px;
      padding: 4px 12px;
      background-color: rgb(185, 28, 28);
      color: white;
      text-transform: none;
      &:hover {
        background-color: RGB(243 49 49);
      }
    }
  }
  .error-get-user-projectid {
    width: 100%;
    height: 100%;
    img {
      height: 150px;
      width: 100%;
    }
    h5 {
      margin-top: 10px;
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: RGB(203 203 203);
    }
  }
`;

export const SearchProjectContain = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 15px;
  p {
    width: 150px;
    font-weight: 500;
    font-size: 16px;
  }
  .input-search-contain {
    position: relative;
    width: 200px;
  }
  input {
    width: 100%;
    position: relative;
    height: 35px;
    border: 1px solid RGB(222 222 222);
    border-radius: 4px;
    font-size: 16px;
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

export const DialogActionsContain = styled(DialogActions)`
  .btn-dialog-action {
    min-height: 0px;
    min-width: 0px;
    padding: 4px 12px;
    background-color: rgb(29, 78, 216);
    color: white;
    text-transform: none;
    &:hover {
      background-color: RGB(62 112 249);
    }
  }
`;
