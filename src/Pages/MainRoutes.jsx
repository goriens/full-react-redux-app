import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../Components/RequireAuth";
import { Books } from "./Books";
import { EditBook } from "./EditBook";
import { Login } from "./Login";
import { SingleBook } from "./SingleBook";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route
          path="/book/:id/edit"
          element={
            <RequireAuth>
              <EditBook />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not found</h1>} />
      </Routes>
    </div>
  );
};
