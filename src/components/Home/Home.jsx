import React from "react";
import { WatchNow, FilmList } from "../index";
import { category, type } from "../../constants";

const Home = () => {
  return (
    <section>
      <WatchNow />
      <FilmList
        name="Popular Movie"
        category={category.movie}
        type={type.popular}
      />
      <FilmList
        name="Top Rated Movie"
        category={category.movie}
        type={type.top_rated}
      />
      <FilmList
        name="Top Rated Tv Series"
        category={category.tv}
        type={type.top_rated}
      />
      <FilmList
        name="Popular Tv Series"
        category={category.tv}
        type={type.popular}
      />
    </section>
  );
};

export default Home;
