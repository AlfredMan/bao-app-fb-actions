// http://127.0.0.1:3000/?mode=verifyEmail&oobCode=mDILMMzyesaTNCQriWztuAYpL6Yzl8k01U1uKh0FNMgAAAGCiJ8ALg&apiKey=AIzaSyDqoX52nqdqjFFZW6dJgo48dR2MW8y7Ep8&lang=en
// import { Auth } from "firebase/auth";
import { auth, firebaseApp } from "../firebase/firebaseClient";
import React, { useEffect, useState } from "react";
import { applyActionCode, Auth, verifyPasswordResetCode } from "firebase/auth";
import { FBActionMode } from "../models/FBActions";

export const VerifyPasswordResetCodeResultCard = ({
  actionSucceedMessage,
  errorMessage,
}: {
  actionSucceedMessage?: string;
  errorMessage?: string;
}) => {
  const isLinkExpired = errorMessage?.includes("auth/invalid-action-code");
  return (
    <div className="App absolute inset-0 ">
      <section className="w-full h-full flex justify-center bg-[#f5f5f1]">
        <div className="max-w-screen-lg mt-16">
          <article className="max-w-[480px] mx-16 px-8 py-8 rounded-lg bg-white shadow">
            {actionSucceedMessage && (
              <div className="">
                <div className="bold text-2xl mb-2">
                  Your password is now reset
                </div>
                <div>
                  You can now sign into BAO Loyalty App with your username and
                  new password
                </div>
              </div>
            )}
            {errorMessage && (
              <div className="">
                <div className="bold text-2xl mb-2">Password reset failed</div>
                {isLinkExpired && <div>Password reset link expired. Reset password again from the app</div>}
                {!isLinkExpired && (
                  <>
                    <div>{errorMessage}</div>
                    <div>
                      Please try again later or contact our team through
                      support@baolondon.com.
                    </div>
                  </>
                )}
              </div>
            )}
            {/* <div>continueUrl: {continueUrl}</div>
          <div>lang: {lang}</div>
          <div>role: {role}</div> */}
          </article>
        </div>
      </section>
    </div>
  );
};

export default VerifyPasswordResetCodeResultCard;
