import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import path from '../../constants/clientPath';
import history from '../../utils/history';
import { useStoreMobx } from '../../mobx/hook';
import { isHavingToken } from '../../utils/localStorage';
import {
  LogInContain,
  FormLoginContain,
  InputContain,
  DialogSignInErrorContain,
} from './styles';
import { LoginStore } from './StoreLogin';

interface ILogin {
  email: string;
  password: string;
}

const LogIn = () => {
  const {
    rootStore: { logInStore },
  } = useStoreMobx();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>();

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = React.useState(false);
  const error = logInStore.getErrorData;
  const isLoading = logInStore.getLoginData;

  const handleClose = () => {
    setOpen(false);
    logInStore.setResetState();
  };

  const submitLogin = (data) => {
    if (data) {
      logInStore.fetchLogin(data);
    }
  };

  useEffect(() => {
    if (isHavingToken()) {
      history.replace(path.PROJECTS);
    } else if (error) {
      setOpen(true);
    }
  }, [isHavingToken(), error]);

  return (
    <>
      <LogInContain>
        <FormLoginContain onSubmit={handleSubmit(submitLogin)}>
          <h3>Login</h3>

          <InputContain>
            <span>
              <MailOutlineIcon className="icon-input" />
            </span>
            <input
              className={errors.email?.message ? 'input-err' : ''}
              placeholder="email"
              {...register('email', {
                required: 'Email is required!',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Email không hợp lệ!',
                },
              })}
            />
            <p className="show-error">{errors.email?.message}</p>
          </InputContain>

          <InputContain>
            <span>
              <LockIcon className="icon-input" />
            </span>
            <input
              className={errors.password?.message ? 'input-err' : ''}
              placeholder="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password is required!',
                minLength: {
                  value: 6,
                  message: 'Password must have 6-50 character!',
                },
                maxLength: {
                  value: 50,
                  message: 'Password must have 6-50 character!',
                },
              })}
            />
            <p className="show-error">{errors.password?.message}</p>
            <span
              className="icon-show-password"
              onClick={() => setShowPassword(!showPassword)}
              role="presentation"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </InputContain>
          <Button className="btn-submit" type="submit">
            Login
          </Button>
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
      <DialogSignInErrorContain
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '30%',
            minWidth: '380px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="x-mark-contain">
            <span className="x-mark-item x-mark-left" />
            <span className="x-mark-item x-mark-right" />
          </div>
        </DialogTitle>
        <DialogContent id="dialog-content">
          <h3>Awwww!</h3>
          <p>{error}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus className="btn-dialog">
            ok
          </Button>
        </DialogActions>
      </DialogSignInErrorContain>
    </>
  );
};

export default observer(LogIn);
