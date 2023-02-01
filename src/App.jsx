import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "./components";

import { Outlet } from "react-router-dom";
import AllRoutes from "./constants/AllRoutes";

const App = () => {
  return (
    <div className=" bg-primary w-full overflow-hidden">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
