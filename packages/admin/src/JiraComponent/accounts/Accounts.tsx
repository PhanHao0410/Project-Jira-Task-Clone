import React from 'react';

import AppBar from '../../components/AppBar';

import {
  AccountContain,
  AccountContent,
  FormInputAccountContain,
} from './styles';
import { Button } from '@mui/material';

const Accounts = () => {
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
            <form>
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
                <input />
              </div>
              <div className="input-item-contain">
                <p>
                  Name<span>*</span>
                </p>
                <input />
              </div>
              <div className="input-item-contain">
                <p>Phone number</p>
                <input />
              </div>
              <div className="input-item-contain">
                <p>
                  Password<span>*</span>
                </p>
                <input />
                <span>Password is required</span>
              </div>
              <div className="input-item-contain">
                <p>
                  Password confirmation<span>*</span>
                </p>
                <input />
                <span>Password confirmation is required</span>
              </div>
              <div className="account-action">
                <Button className="btn btn-update">Update</Button>
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
