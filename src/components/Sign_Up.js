import React from "react";
import { Form, Field } from 'react-final-form';

export const Sign_Up = () => (
  <div className="FormCenter">
    <Form onSubmit={async ({ password, confirmPassword }) => {
      console.log(password, confirmPassword)
      if (password !== confirmPassword) {
        return { confirmPassword: 'Confirm Password is not equal to Password' }
      }
    }
    }
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
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
            <label className="FormField__Label" htmlFor="password">Confirm Password</label>
            <Field
              name="confirmPassword"
            >
              {({ input, meta }) =>
                (<div>
                  <input {...input} type="password" className="FormField__Input" placeholder="Confirm  Password" />
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
  </div>

);
