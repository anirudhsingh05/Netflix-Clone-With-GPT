import { useState } from "react";
import Headers from "./Headers";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInFrom);
  };

  return (
    <div>
      <Headers />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl pb-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md bg-transparent border-2 border-neutral-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-md bg-transparent border-2 border-neutral-600"
        />
        <input
          type="password"
          placeholder={isSignInFrom ? "Password" : "Create Password"}
          className="p-4 my-4 w-full rounded-md bg-transparent border-2 border-neutral-600"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-md">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUp}>
          {!isSignInFrom
            ? "Already registered?  Sign In Here"
            : "New to Netflix? Sign up now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
