import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"

let maxLength20 = maxLengthCreator(20);

export const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", maxLength20, Input, [])}
      {createField("Password", "password", maxLength20, Input, {type: "password"})}
      {createField(null, "rememberMe", maxLength20, Input, {type: "checkbox"}, "remember me", {value: true})}
      {error && <div className={s.formSummaryError}>
        {error}
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
