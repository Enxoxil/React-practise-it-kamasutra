import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from '../components/common/FormsControls/FormsControls.jsx';
import {required} from '../utils/validators/validator.js';
const Login = (props) => {
    const onSubmit = (formData) => {
        
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} placeholder="Login" name="login" validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} placeholder="Password" name="password" validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} type="checkbox" name="rememberMe" /> Remember Me
                </div>
                <button>Log-in</button>
            </form>
        </>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default Login;
