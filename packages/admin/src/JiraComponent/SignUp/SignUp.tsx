import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import history from '../../utils/history';
import path from '../../constants/clientPath';
import { useStoreMobx } from '../../mobx/hook';
import {
  SignUpContain,
  FormSignUpContain,
  InputContain,
  DialogSignUpSuccessContain,
  DialogSignUpErrorContain,
} from './styles';

interface ISignUp {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}
const SignUp = () => {
  const {
    rootStore: { signUpStore },
  } = useStoreMobx();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUp>();
  const signUpData = signUpStore.getDataSignUp;
  const errorSignUp = signUpStore.getErrorData;
  const [showPassword, setShowPassword] = useState(false);
  const [openDialogSuccess, setOpenDialogSuccess] = useState(false);
  const [openDialogError, setOpenDialogError] = useState(false);

  useEffect(() => {
    if (signUpData.statusCode === 200) {
      setOpenDialogSuccess(true);
    } else if (errorSignUp) {
      setOpenDialogError(true);
    }
  }, [signUpData, errorSignUp]);

  const handleCloseDialogSuccess = () => {
    setOpenDialogSuccess(false);
    signUpStore.setResetState();
    history.push(path.ROOT);
  };

  const handleCloseDialogError = () => {
    setOpenDialogError(false);
    signUpStore.setResetState();
  };

  const submitSignUp = (data) => {
    if (data) {
      signUpStore.fetchSignUp(data);
    }
  };
  return (
    <SignUpContain>
      <FormSignUpContain onSubmit={handleSubmit(submitSignUp)}>
        <h3>Register CyberBugs</h3>
        <InputContain>
          <span>
            <PersonOutlineIcon className="icon-input" />
          </span>
          <input
            className={errors.name?.message ? 'input-err' : ''}
            placeholder="name"
            {...register('name', {
              required: 'Name must be a text!',
              pattern: {
                value: /^[a-zA-Z0-9 ]{1,50}$/,
                message: `Name isn't special characters!`,
              },
            })}
          />
          <p className="show-error">{errors.name?.message}</p>
        </InputContain>
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
            <PhoneEnabledIcon className="icon-input" />
          </span>
          <input
            className={errors.phoneNumber?.message ? 'input-err' : ''}
            placeholder="phone number"
            {...register('phoneNumber', {
              required: 'Phone number is required!',
              pattern: {
                value: /^[0]+[0-9]{9}$/,
                message: 'Phone number must be a number. Number first is 0!',
              },
            })}
          />
          <p className="show-error">{errors.phoneNumber?.message}</p>
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
          Register
        </Button>
        <p className="direct-signUp">
          Already have an account?
          <span onClick={() => history.push(path.ROOT)} role="presentation">
            Login now
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
      </FormSignUpContain>
      <DialogSignUpSuccessContain
        open={openDialogSuccess}
        onClose={handleCloseDialogSuccess}
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
          <h3>Successfully register!</h3>
          <p>Please log in to continue!</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialogSuccess}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignUpSuccessContain>
      <DialogSignUpErrorContain
        open={openDialogError}
        onClose={handleCloseDialogError}
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
          <p>{errorSignUp}</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialogError}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignUpErrorContain>
    </SignUpContain>
  );
};

export default observer(SignUp);
