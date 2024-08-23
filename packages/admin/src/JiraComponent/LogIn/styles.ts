import styled from 'styled-components';

export const LogInContain = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLoginContain = styled.form`
  width: 50%;
  padding: 0 30px;
  min-width: 400px;
  text-align: center;
  margin: 0 auto;

  h3 {
    font-size: 35px;
    font-weight: 300;
    width: 100%;
    margin-bottom: 20px;
    font-weight: 400;
  }
  .btn-submit {
    background-color: rgb(102, 117, 223);
    width: 100%;
    text-transform: none;
    color: white;
    height: 40px;
    &:hover {
      background-color: RGB(76 88 176);
    }
  }
  .direct-signUp {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 3px;
    span {
      margin-left: 5px;
      cursor: pointer;
      color: RGB(32 145 251);
    }
  }
  .social-contain {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    div {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: #1890ff;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 3px;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        filter: brightness(90%);
        transform: translateY(-2px);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
`;

export const InputContain = styled.div`
  width: 100%;
  position: relative;
  height: 75px;
  span {
    position: absolute;
    z-index: 2;
    margin-top: 10px;
    margin-left: 10px;
    .icon-input {
      font-size: 20px;
      color: rgb(55, 55, 55) !important;
    }
  }
  .icon-show-password {
    right: 10px;
    top: -2px;
    position: absolute;
    color: RGB(113 113 113);
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 0 50px 0 35px;
    font-size: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    ::placeholder {
      color: rgb(193, 195, 199);
      font-weight: 500;
    }
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      outline: 1px solid #40a9ff;
    }
    &:hover {
      border: 1px solid #40a9ff;
    }
  }
  .show-error {
    color: red;
    font-size: 14px;
  }
`;
