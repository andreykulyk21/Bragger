import React from "react";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router-dom";
import { register } from "../api/Api";

const Sign_UpUnwrapped = ({ history }) => (
  <div className="FormCenter">
    <Form
      onSubmit={async ({ nickName, password, confirmPassword }) => {
        if (password !== confirmPassword) {
          return { confirmPassword: "Passwords are not equal" };
        }
        await register(nickName, password);
        history.push("/home");
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="FormField">
            <Field name="nickName">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="text"
                    id="email"
                    className="FormField__Input"
                    placeholder="Enter your nickname"
                  />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <div style={{ color: "RED" }}>
                      {meta.error || meta.submitError}
                    </div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="password"
                    className="FormField__Input"
                    placeholder="Enter your password"
                  />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <div style={{ color: "RED" }}>
                      {meta.error || meta.submitError}
                    </div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Confirm Password
            </label>
            <Field name="confirmPassword">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="password"
                    className="FormField__Input"
                    placeholder="Confirm  Password"
                  />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <div style={{ color: "RED" }}>
                      {meta.error || meta.submitError}
                    </div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className="FormField">
            <div className="FormField">
              <button type="submit" className="FormField__Button mr-20">
                Sign In
              </button>
            </div>
          </div>
        </form>
      )}
    />
  </div>
);

export const Sign_Up = withRouter(Sign_UpUnwrapped);
