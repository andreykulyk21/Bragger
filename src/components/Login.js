

import React from "react";
import {Field, Form} from 'react-final-form'
import {
  withRouter
} from "react-router-dom";
import { login } from "../api/Api";

const LoginUnwrapped = ({history}) => (
  <div className="FormCenter">
    <Form onSubmit={async ({ nickName, password }) => {
      await login(nickName, password)
      history.push('/home')
    }
    }
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="FormField">
            <Field
              name="nickName"
            >
              {({ input, meta }) =>
                (<div>
                  <input {...input} type="text" id="email" className="FormField__Input" placeholder="Enter your nickname" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>)}
            </Field>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <Field
              name="password"
            >
              {({ input, meta }) =>
                (<div>
                  <input {...input} type="password" className="FormField__Input" placeholder="Enter your password" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>)}
            </Field>
          </div>

          <div className="FormField">
            <div className="FormField">
              <button type="submit" className="FormField__Button mr-20">Sign In</button>
            </div>
          </div>
        </form>)} />

    <div className="FormField">
      <form method="get" action="/Sign_Up">
        <button className="FormField__Button mr-20">Sign Up</button>
      </form>
    </div>
  </div >

);

export const Login = withRouter(LoginUnwrapped)