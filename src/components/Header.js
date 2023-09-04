import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isShowGptSearchEnabled = useSelector(
    (store) => store?.gptSlice?.showGptSearch
  );

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when the comonent unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user ? (
        <div className="p-4 flex cursor-pointer">
          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded mx-4"
            onClick={handleGptSearch}
          >
            {isShowGptSearchEnabled ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 h-12  " src={USER_ICON} alt="usericon" />
          <button className="text-white font-bold" onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
