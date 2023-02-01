import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ListGrid from "../ListGid/ListGrid";
import { darkmoviesection } from "../../assets";

const List = () => {
  let { category } = useParams();
  const location = useLocation();
  const locationURL = location.pathname.slice(1);
  return (
    <section className="w-100 ">
      <div
        className="w-full max-h-[550px] h-[400px] bg-no-repeat"
        style={{
          backgroundImage: `url(${darkmoviesection})`,
        }}
      >
        <h1 className=" text-center text-[50px] py-48 leading-8 font-bold text-white">
          {locationURL.charAt(0).toUpperCase() + locationURL.slice(1)}
        </h1>
      </div>

      <ListGrid category={locationURL} />
    </section>
  );
};

export default List;
