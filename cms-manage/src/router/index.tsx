import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import App from "App";
import List from "../views/List";
import Edit from "../views/Edit";
import Login from "../views/Login";
import Register from "../views/Register";


interface Iroute {
  path: string;
  component: React.FC;
  children?: Iroute[];
}

let routeArr: Iroute[] = [
  {
    path: "/",
    component: App,
    children: [
      { path: "edit", component: lazy(() => import("../views/Edit")) },
      { path: "list", component: lazy(() => import("../views/List")) },
    ],
  },
  { path: "/login", component: lazy(() => import("../views/Login")) },
  { path: "/register", component: lazy(() => import("../views/Register")) },
];

const MyRouter = () => (
  <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="edit" element={<Edit />} ></Route>
          <Route path="list" element={<List />} ></Route>
        </Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="register" element={<Register />} ></Route>
      </Routes>

  </Router>
);

export default MyRouter;
