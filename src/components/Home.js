import React from "react";
import { Field, Form } from "react-final-form";
import { Twit } from "./Twit/Twit";
import { Provider } from "./Twit/Provider";
import { instance } from "../api/Api";

export const Home = () => (
  <div>
    <div className="mb-2 fixedMenuFix">
      <Form
        onSubmit={async ({ message }) => {
          await instance.post("http://localhost:4000/twit", {message});
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="message">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="text"
                    className="form-control"
                    placeholder="What's up?"
                  />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <button type="submit" className="btn  btn-warning btn-block">
              <span>Post</span>
            </button>
          </form>
        )}
      />
    </div>

    <Provider>
      {(twits = []) =>
        twits.map(({ date, author = "Lolik Bolik", message, id }) => (
          <Twit key={id} date={date} author={author} message={message} />
        ))
      }
    </Provider>
  </div>
);
