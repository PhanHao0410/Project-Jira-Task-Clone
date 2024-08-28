import styled from 'styled-components';

import { devices } from '../DeviceScreen';

export const ProjectsContain = styled.div`
  padding-top: 100px;
  color: rgba(0, 0, 0, 0.85);
  width: 100vw;
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
      &:last-child {
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
      &:last-child {
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
