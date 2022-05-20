import React, { useReducer } from 'react'

import classes from "./Input.module.css"
import { Validate } from '../../Shared/util/validators';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: Validate(action.val, action.validators)
            };
        case 'TOUCH': { return { ...state, isTouched: true } }
        default: return state;
    }
};

const Input = props => {
    // const required = () => { props.required ? required : '' }
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        istouched: false,
        isValid: false
    })


    const onTouchHandlar = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    const onChangeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };
    return (
        <div className={props.childClass ? props.childClass : `form-outline mb-4 text-warning fs-3`}>

            <label className={`form-label ${!inputState.isValid && inputState.isTouched && classes.notValidInput}`}
                htmlFor={props.inputId}>{props.label} </label>

            <input className={`form-control fs-3 ${!inputState.isValid && inputState.isTouched && classes.notValidInput}`}
                type={props.inputType ? props.inputType : `text`}
                id={props.inputId}
                autoComplete="on"
                placeholder={props.placeholder}
                onBlur={onTouchHandlar}
                onChange={onChangeHandler}
                value={inputState.value}
            />

            {!inputState.isValid && inputState.isTouched && <p className={``}>{props.errorText}</p>}
        </div>
    )
}


export default Input;