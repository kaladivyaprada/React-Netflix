import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <div class="net">
        <div class="h1">
           <h1>NETFLIX</h1>
        </div>
           <div class="flix">
              <h2>Sign In</h2>
              <script src="validation.js"></script>
              <form name="myform">
                <div class="text">
                 <input type="text" placeholder="Email or phone number" name='email' required></input>
                 <br></br>
                 <input type="password" placeholder="Password" name='pass' required></input>
                 <br></br>
                 </div>
                 <div id="abc">
                 <a href="https://www.netflix.com/in/"><input type="button" value="Sign In" onClick="validation()"></input><br></br></a>
                 </div>
                 <div id="box">
                 <input type="checkbox" name="text"></input>Remember me <a href="#">Need help?</a>
                   </div>
                   <div id="aaa">
                       New to Netflix?<u><a herf="#">Sign-up now</a></u>
                   </div>
                   <div class="con">
                This page is protected by Google reCAPTCHA to<br></br>
                ensure your're not a bot . <a href="#">Learn more</a>
            </div>

              </form>
           </div>
       </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
