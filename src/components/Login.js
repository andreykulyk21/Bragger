/*import React  from "react";


export const Login = () => (
<div>
  <h2>LOgin</h2>
  <p> bla bla bla bla</p>
  <p>2222222222222222</p>
  <p>33333333333333333</p>
</div>
)
    

 */

import React from "react";

export const Login = () => (
 
  <div className="FormCenter">
   
    <div className="FormField">
      <label className="FormField__Label" cla htmlFor="email">E-Mail Address</label>
      <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
    </div>

    <div className="FormField">
      <label className="FormField__Label" htmlFor="password">Password</label>
      <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
    </div>

    <div className="FormField">
      <button className="FormField__Button mr-20">Sign In </button>
    </div>

  </div>
        
);


