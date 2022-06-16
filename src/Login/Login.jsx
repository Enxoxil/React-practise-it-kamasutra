import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../components/common/FormsControls/FormsControls.jsx";
import { required } from "../utils/validators/validator.js";
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer.js";
import { Redirect } from "react-router-dom";
import style from "../components/common/FormsControls/FormsControls.module.scss";
import { createField } from "../components/common/FormsControls/FormsControls.jsx";
const Login = ({ isAuth, login }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    };
    if (isAuth) {
        return <Redirect to={"/profile"} />;
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    );
};

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    createField("Email", "email", [required], Input)
                    /* <Field
                        component={Input}
                        placeholder="Email"
                        name="email"
                        validate={[required]}
                    /> */
                }
                {createField("Password", "password", [required], Input, {
                    type: "password",
                })}
                {createField(
                    null,
                    "rememberMe",
                    [],
                    Input,
                    { type: "checkbox" },
                    "Remember Me"
                )}

                {error && <div className={style.formSummaryError}>{error}</div>}
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
