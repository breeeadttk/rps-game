import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { allRoutes, ROUTE_AUTH } from 'routes/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_AUTH} />} />
      {/* Redirect to AuthPage */}
      {allRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />}>
          {route.children?.map((childRoute) => (
            <Route
              key={childRoute.path}
              path={childRoute.path}
              element={<childRoute.component />}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default AppRoutes;
