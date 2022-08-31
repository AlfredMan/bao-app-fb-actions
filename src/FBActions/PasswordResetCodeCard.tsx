// http://127.0.0.1:3000/?mode=verifyEmail&oobCode=mDILMMzyesaTNCQriWztuAYpL6Yzl8k01U1uKh0FNMgAAAGCiJ8ALg&apiKey=AIzaSyDqoX52nqdqjFFZW6dJgo48dR2MW8y7Ep8&lang=en
// import { Auth } from "firebase/auth";
import { auth, firebaseApp } from "../firebase/firebaseClient";
import React, { useEffect, useState } from "react";
import { applyActionCode, Auth, verifyPasswordResetCode } from "firebase/auth";
import { FBActionMode } from "../models/FBActions";

export const PasswordResetCodeCard = ({
  verifyPasswordResetCodeSucceedEmail,
  oobCode,
  apiKey,
  // setNewPassword,
  executeConfirmPasswordReset,
}: {
  verifyPasswordResetCodeSucceedEmail: string;
  oobCode: string;
  apiKey: string;
  // setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  executeConfirmPasswordReset: (newPassword: string) => void;
}) => {
  const [password, setPassword] = useState("");

  const isInvalidPassword = (password: string) => {
    return password?.length < 8;
  };
  return (
    <div className="App absolute inset-0 bg-red-200 ">
      <section className="w-full h-full flex justify-center bg-[#f5f5f1]">
        <div className="max-w-screen-lg mt-16">
          <article className="max-w-[480px] mx-16 px-8 py-8 rounded-lg bg-white shadow">
            <div
              className="flex flex-col items-center"
              // onSubmit={submit}
            >
              <div className="text-lg mb-2">
                New password for {verifyPasswordResetCodeSucceedEmail}
              </div>
              <input
                className="border w-full px-2 mt-2 py-2"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              {/* <input type="submit">Change password</input> */}
              {isInvalidPassword(password)&&<div className="mt-2 text-sm italic">Password must be at least 8 characters</div>}
              <button
                className={`mt-4 bg-black text-white rounded-xl py-1 w-full ${isInvalidPassword(password)?'bg-gray-600':'bg-black'}`}
                // type="submit"
                type="button"
                disabled={isInvalidPassword(password)}
                // onClick={() => setNewPassword(password)}
                onClick={() => executeConfirmPasswordReset(password)}
              >
                Change password
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PasswordResetCodeCard;
