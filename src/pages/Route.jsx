import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./Home";
import App from "../App";
import Login from "./Login";
import Register from "./Register";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./CookiePolicy";
import Home_Details from "./home_Details";
import AllArtifacts from "./AllArtifacts";
import AddArtifactForm from "./AddArtifacts";
import PrivateRoute from "./Privateroute";
import LikedArtifacts from "./LikedArtifacts";
import MyArtifacts from "./MyArtifacts";
import Update from "./update";
import Error from "./Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Home_Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/Home",
        Component: Home,
      },

      {
        path: "/AllArtifacts",
        Component: AllArtifacts,
      },
      {
        path: "/AddArtifactForm",
        element: <AddArtifactForm />,
      },
      {
        path: "/LikedArtifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts />
          </PrivateRoute>
        ),
      },

      {
        path: "/MyArtifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/Register",
        Component: Register,
      },
      {
        path: "/TermsOfUse",
        Component: TermsOfUse,
      },
      {
        path: "/PrivacyPolicy",
        Component: PrivacyPolicy,
      },
      {
        path: "/CookiePolicy",
        Component: CookiePolicy,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
