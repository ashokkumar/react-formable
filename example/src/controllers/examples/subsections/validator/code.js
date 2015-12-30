/*eslint func-style:0*/

import React, { PropTypes } from 'react';
import { Form, Input, Errors } from 'react-formable';
const { required } = require('react-formable').validators;

export default function ValidatorForm({ onChange }) {
    return <Form onChange={onChange}>
        <Errors className="formErrors" />

        <label>
            User name *
            <Input name="username"
                   type="text"
                   validators={[
                       required('username is required')
                   ]} />
        </label>

        <label>
            Password *
            <Input name="password1"
                   type="password"
                   validators={[
                       required('password is required')
                   ]} />
        </label>

        <label>
            Password Retype *
            <Input name="password2"
                   type="password"
                   validators={[
                       required('password confirm is required')
                   ]} />
        </label>

        <input type="submit" value="Submit" />
    </Form>;
}

ValidatorForm.propTypes = {
    onChange: PropTypes.func
};
