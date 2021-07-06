import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"

let maxLength20 = maxLengthCreator(20);

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength20]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength20]} type={"password"}/>
      </div>
      <div>
        <Field placeholder={Input} name={"rememberMe"} component="checkbox"/> remember me
      </div>
      { props.error && <div className={s.formSummaryError}>
        {props.error}
      </div> }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const submitFunction = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submitFunction}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);
