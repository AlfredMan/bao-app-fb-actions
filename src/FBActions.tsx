// http://127.0.0.1:3000/?mode=verifyEmail&oobCode=mDILMMzyesaTNCQriWztuAYpL6Yzl8k01U1uKh0FNMgAAAGCiJ8ALg&apiKey=AIzaSyDqoX52nqdqjFFZW6dJgo48dR2MW8y7Ep8&lang=en
// import { Auth } from "firebase/auth";
import { auth, firebaseApp } from "./firebase/firebaseClient";
import React, { useEffect, useState } from "react";
import { applyActionCode, Auth } from "firebase/auth";
export const FBActions = () => {
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [mode, setMode] = useState("");
  const [oobCode, setOobCode] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [continueUrl, setContinueUrl] = useState("");
  const [lang, setLang] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const mode = getParameterByName("mode");
    setMode(mode);
    const actionCode = getParameterByName("oobCode");
    setOobCode(actionCode);
    setApiKey(getParameterByName("apiKey"));
    setContinueUrl(getParameterByName("continueUrl"));
    setLang(getParameterByName("lang") || "en");
    setRole(getParameterByName("role"));

    switch (mode) {
      case "resetPassword":
        // Display reset password handler and UI.
        // handleResetPassword(auth, actionCode, continueUrl, lang);
        // handleResetPassword(auth, actionCode, continueUrl, lang)
        break;
      case "recoverEmail":
        // Display email recovery handler and UI.
        // handleRecoverEmail(auth, actionCode, lang);

        // not handling

        break;
      case "verifyEmail":
        // Display email verification handler and UI.
        handleVerifyEmail({ auth, actionCode, continueUrl, lang });
        break;
      default:
        // Error: invalid state.mode.
        handleError();
        break;
    }
  }, []);
  const getParameterByName = (name: string) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) {
      return "";
    } else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  };

  /*

const passwordResetSuccessCallback = () => {
  setMode( 'complete')
  setHasError (false)
  setMessaage("Password reset success callback fired.")
}

const verificationSuccessCallback = () => {
  setMode( 'complete')
  setHasError (false)
  setMessaage("Email verification success callback fired.")

}


const confirmPasswordReset = () => {
//   let self = this
// Save the new password.
//   let auth = app.auth()
let actionCode = this.actionCode
let newPassword = this.passwordConfirm

auth.confirmPasswordReset(actionCode, newPassword).then(function (resp) {
  // Password reset has been confirmed and new password updated.

  state.mode = 'loading'
  state.hasError = false
  state.message = 'Your password has been reset.'
  updateUI()

  setTimeout(function () {
    passwordResetSuccessCallback()
  }, 300)

}).catch(function (error) {
  state.mode = 'loading'
  state.hasError = true
  // message = 'Something went wrong please try again later or contact our team.'
  state.message = `${error.message}<br><br>Please try again later or contact our team.`
  updateUI()
  // Error occurred during confirmation. The code might have expired or the
  // password is too weak.
})
}

const processEmailActions = () => {
//   let self = this

// Get the action to complete.
state.mode = getParameterByName('mode')
// Get the one-time code from the query parameter.
state.actionCode = getParameterByName('oobCode')
// (Optional) Get the API key from the query parameter.
state.apiKey = getParameterByName('apiKey')
// (Optional) Get the continue URL from the query parameter if available.
state.continueUrl = getParameterByName('continueUrl')
// (Optional) Get the language code if available.
state.lang = getParameterByName('lang') || 'en'

state.role = getParameterByName('role')


console.log({state})


// Configure the Firebase SDK.
// This is the minimum configuration required for the API to be used.
var config = {
  'apiKey': state.apiKey // This key could also be copied from the web
  // initialization snippet found in the Firebase console.
}
// var app = firebase.initializeApp(config);
// var auth = app.auth();
//   let auth = app.auth()

state.mode = 'loading'
state.message = 'Loading...'
updateUI()

// error = false
// state.mode = 'verifyEmail'
// // message = 'You have successfully verified.'

// return;
// setTimeout(function () {
//   // Handle the user management action.
//   switch (state.mode) {
//     case 'resetPassword':
//       // Display reset password handler and UI.
//       // handleResetPassword(auth, actionCode, continueUrl, lang);
//       handleResetPassword(auth, actionCode, continueUrl, lang)
//       break
//     case 'recoverEmail':
//       // Display email recovery handler and UI.
//       // handleRecoverEmail(auth, actionCode, lang);
      
//       // not handling

//       break
//     case 'verifyEmail':
//       // Display email verification handler and UI.
//       handleVerifyEmail(auth, actionCode, continueUrl, lang)
//       break
//     default:
//       // Error: invalid state.mode.
//       handleError()
//       break
//   }
// }, 300)


function handleResetPassword (auth, actionCode, continueUrl, lang) {
  console.log('handlePasswordReset')
  // Localize the UI to the selected language as determined by the lang
  // parameter.
  var accountEmail

  // Verify the password reset code is valid.
  auth.verifyPasswordResetCode(actionCode).then(function (email) {
    var accountEmail = email
    // TODO: Show the reset screen with the user's email and ask the user for
    // the new password.
    // confirmPasswordReset(actionCode, newPassword)

    state.email = accountEmail
    state.actionCode = actionCode
    state.mode = 'resetPassword'
    state.hasError = false
    updateUI()

  }).catch(function (error) {
    state.mode = 'error'
    // message = 'Something went wrong please try again later or contact our team.'
    // message = error.message
    state.message = `${error.message}<br><br>Please try again later or contact our team.`
    state.hasError = true
    console.log(error)
    updateUI()
    // Invalid or expired action code. Ask user to try to reset the password
    // again.
  })
}
*/

  const handleVerifyEmail = async ({
    auth,
    actionCode,
    continueUrl,
    lang,
  }: {
    auth: Auth;
    actionCode: string;
    continueUrl: string;
    lang: string;
  }) => {
    console.log("handleVerifyEmail");
    console.log(auth, actionCode, continueUrl, lang);

    // Localize the UI to the selected language as determined by the lang
    // parameter.
    // Try to apply the email verification code.

    try {
      const resp = await applyActionCode(auth, actionCode);
      const message =
        "Thank you for verifying your email address. Redirecting...";

      // auth.applyActionCode(actionCode).then(function (resp) {
      // Email address has been verified.
      console.log("auth.applyActionCode:", resp);
      // state.hasError = false
      setHasError(false);
      // state.mode = 'verifyEmail'
      // setMode("verifyEmail")
      // message = 'You have successfully verified.'
      // state.message = 'Thank you for verifying your email address. Redirecting...'
      setMessage("Thank you for verifying your email address. Redirecting...");
      // setTimeout(function () {
      // verificationSuccessCallback()
      // }, 4000)

      // TODO: Display a confirmation message to the user.
      // You could also provide the user with a link back to the app.

      // TODO: If a continue URL is available, display a button which on
      // click redirects the user back to the app via continueUrl with
      // additional state determined from that URL's parameters.
    } catch (error) {
      setHasError(true);
      // state.mode = 'verifyEmail'
      // state.mode = 'error'
      // message = 'Something went wrong please try again later or contact our team.'
      // message = `${error.message} Please try again later or contact our team.`
      setMessage(
        `${
          // (error as unknown as Error)?.message + "<br><br>" ?? ""
          (error as unknown as Error)?.message + "\n\n" ?? ""
        }`
      );
      // updateUI()

      console.log(error);
      // Code is invalid or expired. Ask the user to verify their email address
      // again.
    }
  };

  const handleError = () => {
    setMode("error");
    setMessage(
      `Error. Your URL is invalid. Please try again later or contact our team.`
    );
  };

  return (
    <div className="App">
      <section className="w-full h-full flex justify-center">
        <div className="max-w-screen-lg mt-16">
          {/* <div className="px-2">mode: {mode}</div>
          <div>oobCode: {oobCode}</div>
          <div>apiKey: {apiKey}</div> */}
          <div> {message}</div>
          {hasError && <div>Please try again later or contact our team.</div>}
          {/* <div>continueUrl: {continueUrl}</div>
          <div>lang: {lang}</div>
          <div>role: {role}</div> */}
        </div>
      </section>
    </div>
  );
};

export default FBActions;
