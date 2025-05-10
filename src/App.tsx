import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./screens/Auth/Login";
import Signup from "./screens/Auth/Signup";
import LandingPage from "./screens/LandingPage";
import Dashboard from "./screens/Dashboard/Dashboard";
import InterviewPrep from "./screens/InterviewPrep/InterviewPrep";
import NotFound from "./screens/NotFound";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </>
  );
};

export default App;
