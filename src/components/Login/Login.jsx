import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginPage = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginPageRexudForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginPageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'name'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field id={'rememberMeCheck'} name={'rememberMeCheck'} component={'input'} type={'checkbox'}/>
                <label htmlFor="rememberMeCheck">
                    Remember me
                </label>
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginPageRexudForm = reduxForm({
    form: 'login'
})(LoginPageForm)

export default LoginPage