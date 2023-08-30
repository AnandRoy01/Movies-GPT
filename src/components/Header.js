import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user ? (
        <div className="p-4 flex cursor-pointer">
          <img
            className="w-12 h-12  "
            src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYKetiOvJU_Tx2VRF_T5L-mZSBHXmTyFJEFdNVXxLbcuyhdG6co6YKYor3Z3dzhexDo3PmYSJI2fpYtzyhBkQctVJlVgVtI.png?r=4e1"
            alt="usericon"
          />
          <button className="text-white font-bold" onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
