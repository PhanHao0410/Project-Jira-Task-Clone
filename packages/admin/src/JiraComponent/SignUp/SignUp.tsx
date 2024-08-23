import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { SignUpContain, FormSignUpContain, InputContain } from './styles';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SignUpContain>
      <FormSignUpContain>
        <h3>Register CyberBugs</h3>
        <InputContain>
          <span>
            <PersonOutlineIcon className="icon-input" />
          </span>
          <input placeholder="name" />
          <p className="show-error">Name is requied!</p>
        </InputContain>
        <InputContain>
          <span>
            <MailOutlineIcon className="icon-input" />
          </span>
          <input placeholder="email" />
          <p className="show-error">Email is requied!</p>
        </InputContain>
        <InputContain>
          <span>
            <PhoneEnabledIcon className="icon-input" />
          </span>
          <input placeholder="phone number" />
          <p className="show-error">Phone number is requied!</p>
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
        <Button className="btn-submit">Register</Button>
        <p className="direct-signUp">
          {`Already have an account?`}
          <span>Login now</span>
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
    </SignUpContain>
  );
};

export default SignUp;
