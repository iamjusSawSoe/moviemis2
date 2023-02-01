import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  List,
  Home,
  DetailModal,
  PageNotFound,
  Favourites,
} from "../components";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<List />} />
      <Route path="/movies" element={<List />}></Route>
      <Route path="/movies/:id" element={<DetailModal />} />
      <Route path="/series" element={<List />} />
      <Route path="/series/:id" element={<DetailModal />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/" exact element={<Home />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
