import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANG } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/GPTSlice";
import { changeLang } from "../Utils/configSlice";

const Headers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGPTSearch);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGPTSearchButton = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    // bg-gradient-to-b from-black
    <div
      className={
        showGptSearch
          ? "absolute w-[100%] px-8 pt-8 z-50 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between mt-10 md:mt-0"
          : "absolute w-[100%] px-8 pt-8 z-50 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between mt-0 md:mt-0"
      }
    >
      <img
        className="w-52 p-2 -mt-10 md:mt-2 mx-auto md:mx-8 "
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex justify-between px-2 py-4 -mt-3 md:mt-0">
          {showGptSearch && (
            <select
              className="p-2 my-2 bg-gray-900 text-white rounded-lg"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchButton}
            className="py-2 px-4 mx-0 md:mx-8 my-1 md:my-3 bg-purple-800 text-white rounded-lg"
          >
            {showGptSearch ? "Home Page" : "Gemini"}
          </button>
          <img
            className="hidden md:inline-block w-12 md:mt-3 h-12"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button onClick={handleSignOut} className="pl-2 text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Headers;
