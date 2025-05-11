import React, { useState } from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentpage, setCurrentPage] = useState("Login");

  const hangleCTA = () => {
    // if (currentpage === "Login") {
    //   navigate("/login")
    // } else if (currentpage === "Signup") {
    //   navigate("/signup")
    // }
  };

  //w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0

  return (
    <div className="w-full min-h-full bg-[#fffcef]">
      <div className="">
        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">Prep Pilot</div>
            <button
              className="bg-linear-to-r from-[#ff9324] to-[#e99a4b] text-sm font-semibold text-white py-2.5 px-7 rounded-md hover:bg-black hover:text-white border boder-white transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              {" "}
              Login? SignUp
            </button>
          </header>

          <div className="flex flex-col md:flex-row items center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-8">
            <div className="flex items-center justify-left mb-2">
              <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-2 py-2 rounded-full border border-amber-300">
                AI Powered
              </div>
            </div>

            <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
              Ace Interviews with <br/>
              <span className="text-tranparent bg-clip-text bg-[radial-gradient(circle, _#fcd760_100%)] bg-[length:200%_200%] animate-text-shine font semibold ">
                AI-Powered</span> {''}
              Learning

            </h1>

            <div className="w-full ">
              <p className="text">

              </p>

              <button className="bg" onClick={hangleCTA}>
                
              </button>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
