import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../components/common/FormsControls/FormsControls.jsx";
import { required } from "../utils/validators/validator.js";
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer.js";
import { Redirect } from "react-router-dom";
import  style  from '../components/common/FormsControls/FormsControls.module.scss'
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    );
};

const LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Input}
                        placeholder="Email"
                        name="email"
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        placeholder="Password"
                        name="password"
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        type="checkbox"
                        name="rememberMe"
                    />{" "}
                    Remember Me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <button>Log-in</button>
            </form>
        </>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
