import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";
import { AuthRoutes, PrivateRoutes, PublicRoutes } from "./routers";
import { AuthRoute } from "./RouterProtector";
import { PrivateRoute } from "./RouterProtector";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PublicRouters */}
        {PublicRoutes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}

        {/* AuthRouters */}
        {AuthRoutes.map(({ path, element }, idx) => (
          <Route
            key={idx}
            path={path}
            element={<AuthRoute element={element} />}
          />
        ))}

        {/* PrivetRouters */}
        {PrivateRoutes.map(({ path, element }, idx) => (
          <Route
            key={idx}
            path={path}
            element={<PrivateRoute element={element} />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
