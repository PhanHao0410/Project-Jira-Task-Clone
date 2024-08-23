import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import path from '../../constants/clientPath';
import history from '../../utils/history';
import AppBar from '../../components/AppBar';

import { LogInContain, FormLoginContain, InputContain } from './styles';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <AppBar />
      <LogInContain>
        <FormLoginContain>
          <h3>Login</h3>

          <InputContain>
            <span>
              <MailOutlineIcon className="icon-input" />
            </span>
            <input placeholder="email" />
            <p className="show-error">Email is requied!</p>
          </InputContain>

          <InputContain>
            <span>
              <LockIcon className="icon-input" />
            </span>
            <input
              placeholder="password"
              type={showPassword ? 'text' : 'password'}
            />
            <p className="show-error">Password is requied!</p>
            <span
              className="icon-show-password"
              onClick={() => setShowPassword(!showPassword)}
              role="presentation"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </InputContain>
          <Button className="btn-submit">Login</Button>
          <p className="direct-signUp">
            {`Don't have an account yet?`}
            <span onClick={() => history.push(path.SIGNUP)} role="presentation">
              Register now
            </span>
          </p>
          <div className="social-contain">
            <div style={{ backgroundColor: 'rgb(59,89,152)' }}>
              <FacebookIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
          </div>
        </FormLoginContain>
      </LogInContain>
    </>
  );
};

export default observer(LogIn);
