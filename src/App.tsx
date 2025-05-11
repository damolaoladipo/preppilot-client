import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";

import Signup from "./screens/Auth/Signup";
import LandingPage from "./screens/LandingPage";
import Dashboard from "./screens/Home/Dashboard";
import InterviewPrep from "./screens/InterviewPrep/InterviewPrep";
import NotFound from "./screens/NotFound";


const Login = React.lazy(() => import("./screens/Auth/Login"));

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorHandler = (err: Error, info: any) => {
    console.log(err, "logged error");
    console.log(info, "logged error info");
  };

  return (
    <>
      <div>
        <Router>
          <Suspense fallback={<></>}>
            <ErrorBoundary
              FallbackComponent={() => <></>}
              onReset={() => {
                window.location.reload();
              }}
              onError={errorHandler}
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/interview-prep/:sessionId"
                  element={<InterviewPrep />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
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
