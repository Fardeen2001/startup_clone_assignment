import React from "react";

const Signup = () => {
  return (
    <div className="md:w-[400px] bg-backgroundLight rounded-[10px] p-8 flex flex-col mx-auto h-auto mt-10 md:mt-0">
      <h3 className="text-heading text-xl md:text-[42px] font-bold title-font mt-4 text-center">
        Sign Up Now
      </h3>
      <div className="relative mt-8">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="w-full bg-white rounded-full border border-gray focus:border-slate-400 placeholder:text-text placeholder:text-lg placeholder:font-medium focus:ring-2 focus:ring-slate-200 text-lg text-gray outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mt-5">
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Your Password"
          className="w-full bg-white rounded-full border border-gray  focus:ring-2 focus:ring-indigo-200 placeholder:text-text placeholder:text-lg placeholder:font-medium text-lg outline-none text-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="flex my-8">
        <div className="checkbox mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" rx="6" fill="#25DAC5" />
            <path
              d="M7.19999 12.5996L10.3765 15.5996L16.8 9.59961"
              stroke="#1E0E62"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p className="text-text text-base font-normal">
          I agree to the Terms of Services.
        </p>
      </div>
      <button className="text-white bg-actionSecondary border-0 py-2 px-8 focus:outline-none hover:bg-backgroundDark rounded-full text-lg font-medium">
        Sign In
      </button>
      <div className="divider flex text-text text-gray justify-center items-center my-7">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="3"
            viewBox="0 0 145 3"
            fill="none"
          >
            <path
              d="M1.49847 1.5H143.068"
              stroke="#EBEAED"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p className="mx-4">or</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="3"
            viewBox="0 0 145 3"
            fill="none"
          >
            <path
              d="M1.49847 1.5H143.068"
              stroke="#EBEAED"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <button className="text-white bg-twitter border-0 py-2 px-8 focus:outline-none hover:bg-backgroundDark rounded-full text-lg font-medium">
        Login Via Twitter
      </button>
      <p className="text-lg font-medium text-text mt-8 mx-auto">
        Do you have an Account?{" "}
        <span className="text-actionPrimary">
          <a href="#signIn">Sign In</a>
        </span>
      </p>
    </div>
  );
};

export default Signup;
