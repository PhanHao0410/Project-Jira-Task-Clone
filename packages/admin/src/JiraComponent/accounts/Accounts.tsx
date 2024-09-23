import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AppBar from '../../components/AppBar';

import {
  AccountContain,
  AccountContent,
  FormInputAccountContain,
} from './styles';

interface IAccount {
  email: string;
  name: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
}

const Accounts = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccount>();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const updateAccount = (data) => {
    console.log('check account: ', data);
  };
  return (
    <>
      <AppBar />
      <AccountContain>
        <AccountContent>
          <div className="avatar-contain">
            <div className="avatar-content">HA</div>
          </div>
          <FormInputAccountContain>
            <h3>haotech1</h3>
            <form onSubmit={handleSubmit(updateAccount)}>
              <div className="input-item-contain">
                <p>
                  Id<span>*</span>
                </p>
                <input value="12345" className="input-value-default" disabled />
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
                <span>{errors.email?.message}</span>
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
                      errors.passwordConfirm?.message ? 'input-err' : ''
                    }
                    type={showPasswordConfirm ? 'text' : 'password'}
                    {...register('passwordConfirm', {
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
                <Button className="btn btn-cancel">Cancel</Button>
              </div>
            </form>
          </FormInputAccountContain>
        </AccountContent>
      </AccountContain>
    </>
  );
};

export default Accounts;
