import React from "react";
import { reduxForm, Field } from "redux-form";
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
                    <Field component="input" placeholder="Login" name="login"/>
                </div>
                <div>
                    <Field component="input" placeholder="Password" name="password"/>
                </div>
                <div>
                    <Field component="input" type="checkbox" name="rememberMe" /> Remember Me
                </div>
                <button>Log-in</button>
            </form>
        </>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default Login;
