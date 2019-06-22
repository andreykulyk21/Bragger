import React from "react";
import { Twit } from './Twit/Twit'
import { Provider } from './Twit/Provider'


export const Home = () => (

  <div>
    <div className="mb-2 fixedMenuFix">
      <input type="text" className="form-control" placeholder="What's up?" />
      <button className="btn  btn-warning btn-block"><span>Post</span></button>
    </div>

    <Provider>
      {data =>
        data.map(({ date, author, message }) => (<Twit date={date} author={author} message={message} />))}
    </Provider>

  </div>
);