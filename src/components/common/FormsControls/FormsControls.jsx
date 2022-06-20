import React from "react";
import styles from "./FormsControls.module.scss";
import { Field } from "redux-form";
const FormControl = ({ input, meta: {touched, error}, child, ...props }) => {
    const hasError = error && touched;
    return (
        <div
            className={
                styles.formControl + " " + (hasError ? styles.error : " ")
            }
        >
            <div>{props.children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};
// Дальше говнокод надо рефакторить
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};

export const createField = (
    placeholder,
    name,
    validators,
    component,
    props = {},
    text = ""
) => (
    <div>
        <Field
            component={component}
            placeholder={placeholder}
            name={name}
            validate={validators}
            {...props}
        />
        {text}
    </div>
);
