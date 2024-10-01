import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '../../components/AppBar';
import { getLoginInfo } from '../../utils/localStorage';
import { useStoreMobx } from '../../mobx/hook';

import {
  AccountContain,
  AccountContent,
  FormInputAccountContain,
  DialogSignInErrorContain,
} from './styles';

interface IUpdateAccount {
  email: string;
  id: number;
  name: string;
  password: string;
  passwordConfirmation: string;
  phoneNumber: string;
}

const Accounts = () => {
  const {
    rootStore: { userStore },
  } = useStoreMobx();
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUpdateAccount>();
  const dataAllUser = userStore.getDataUsers;
  const dataAccount = JSON.parse(getLoginInfo());
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
  const dataEditUser = userStore.getDataEditUser;

  useEffect(() => {
    userStore.fetchAllUsers();
  }, [dataEditUser]);

  useEffect(() => {
    if (dataAllUser && dataAllUser.length > 0) {
      const res = dataAllUser.filter((item) => item.userId === dataAccount.id);
      setValue('email', res[0]?.email);
      setValue('name', res[0]?.name);
      setValue('phoneNumber', res[0]?.phoneNumber);
    }
  }, [dataAllUser, dataAccount]);

  useEffect(() => {
    if (dataAllUser && dataEditUser.content) {
      setOpenDialogUpdate(true);
    }
  }, [dataEditUser]);
  const updateAccount = (data) => {
    userStore.fetchEditUser(data);
    setValue('password', '');
    setValue('passwordConfirmation', '');
  };

  const handleCancelUpdate = () => {
    setValue('password', '');
    setValue('passwordConfirmation', '');
  };
  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };
  return (
    <>
      <AppBar />
      <AccountContain>
        <AccountContent>
          <div className="avatar-contain">
            <img src={dataAccount.avatar} alt="image_avatar" />
          </div>
          <FormInputAccountContain>
            <h3>{dataAccount.name}</h3>
            <form onSubmit={handleSubmit(updateAccount)}>
              <div className="input-item-contain">
                <p>
                  Id<span>*</span>
                </p>
                <input
                  value={dataAccount.id}
                  className="input-value-default"
                  {...register('id')}
                />
              </div>
              <div className="input-item-contain">
                <p>
                  Email<span>*</span>
                </p>
                <input
                  className={errors.email?.message ? 'input-err' : ''}
                  {...register('email', {
                    required: 'Email is required!',
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Email không hợp lệ!',
                    },
                  })}
                />
                {errors.email?.message && <span>{errors.email?.message}</span>}
              </div>
              <div className="input-item-contain">
                <p>
                  Name<span>*</span>
                </p>
                <input
                  className={errors.name?.message ? 'input-err' : ''}
                  {...register('name', {
                    required: 'Name must be a text!',
                    pattern: {
                      value: /^[a-zA-Z0-9 ]{1,50}$/,
                      message: `Name isn't special characters!`,
                    },
                  })}
                />
                <span>{errors.name?.message}</span>
              </div>
              <div className="input-item-contain">
                <p>Phone number</p>
                <input
                  className={errors.phoneNumber?.message ? 'input-err' : ''}
                  {...register('phoneNumber', {
                    required: 'Phone number is required!',
                    pattern: {
                      value: /^[0]+[0-9]{9}$/,
                      message:
                        'Phone number must be a number. Number first is 0!',
                    },
                  })}
                />
                <span>{errors.phoneNumber?.message}</span>
              </div>
              <div className="input-item-contain">
                <p>
                  Password<span>*</span>
                </p>
                <div className="password-contain">
                  <input
                    className={errors.password?.message ? 'input-err' : ''}
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
                  <span
                    className="icon-password"
                    onClick={() => setShowPassword(!showPassword)}
                    role="presentation"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </span>
                </div>
                <span>{errors.password?.message}</span>
              </div>
              <div className="input-item-contain">
                <p>
                  Password confirmation<span>*</span>
                </p>
                <div className="password-contain">
                  <input
                    className={
                      errors.passwordConfirmation?.message ? 'input-err' : ''
                    }
                    type={showPasswordConfirm ? 'text' : 'password'}
                    {...register('passwordConfirmation', {
                      required: 'Password confirmation is required!',
                      validate: (val: string) => {
                        if (watch('password') !== val) {
                          return 'Your passwords do no match';
                        }
                      },
                    })}
                  />
                  <span
                    className="icon-password"
                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                    role="presentation"
                  >
                    {showPasswordConfirm ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </span>
                </div>
                <span>{errors.passwordConfirm?.message}</span>
              </div>
              <div className="account-action">
                <Button className="btn btn-update" type="submit">
                  Update
                </Button>
                <Button className="btn btn-cancel" onClick={handleCancelUpdate}>
                  Cancel
                </Button>
              </div>
            </form>
          </FormInputAccountContain>
        </AccountContent>
      </AccountContain>
      <DialogSignInErrorContain
        open={openDialogUpdate}
        onClose={handleCloseDialogUpdate}
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
          <h3>{dataEditUser.content}</h3>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialogUpdate}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogSignInErrorContain>
    </>
  );
};

export default observer(Accounts);
