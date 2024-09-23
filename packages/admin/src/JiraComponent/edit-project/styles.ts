import styled from 'styled-components';

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
