import { useState } from "react";

const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_PASSWORD = 'PASSWORD';
const VALIDATOR_TYPE_COMFIRM_PASSWORD = 'COMFIRM_PASSWORD';



export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_PASSWORD = () => ({ type: VALIDATOR_TYPE_PASSWORD });
export const VALIDATOR_COMFIRM_PASSWORD = () => ({ type: VALIDATOR_TYPE_COMFIRM_PASSWORD });

export const Validate = (value, validators) => {
  const [password, setPassword] = useState('');
  let isValid = true;

  for (const validator of validators) {
        
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      const newLocal = /^\S+@\S+\.\S+$/;
      isValid = isValid && newLocal.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_PASSWORD) {
      setPassword(value)
      isValid = isValid && /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_COMFIRM_PASSWORD) {
      isValid = isValid && password === value;
    }
  }
  return isValid;
};

