import React, { useState, useEffect } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "../Button";
import apiConfig from "../../api/apiConfig";

import "swiper/css";
import "swiper/css/autoplay";

const WatchNow = () => {
  SwiperCore.use([Autoplay]);
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `${apiConfig.baseUrl}movie/popular${apiConfig.apiKey}&page=1`;
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.results.slice(0, 5));
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <section>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loopedSlides={5}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full max-h-[900px] h-[900px] bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url('${apiConfig.originalImage(
                  movie.backdrop_path
                )}')`,
              }}
            >
              <div className=" w-full h-full bg-dimBlack flex justify-center items-center gap-10">
                <div className="max-w-[800px] ">
                  <h1 className="text-white font-bold text-[45px] leading-[30px] mb-10">
                    {movie.title}
                  </h1>
                  <p className=" flex text-white font-semibold text-[16px] leading-[30px] w-[650px] text-center">
                    {movie.overview}
                  </p>
                  <div className="mt-8">
                    <Button
                      styles="bg-secondary  rounded-full text-[20px] w-[180px] h-[50px] shadow-3xl shadow-dimBlack font-[400] ease-in-out duration-500 hover:font-[800] hover:shadow-5xl hover:bg-secondary hover:shadow-dimBlack  "
                      text="Watch Now"
                    />
                    <Button
                      styles=" mx-5 px-2 bg-dimBlack rounded-full text-[20px] w-[180px] h-[50px] shadow-3xl shadow-dimBlack border-2 font-[400] hover:font-[800] ease-in-out duration-500 "
                      text="Watch Trailer"
                    />
                  </div>
                </div>
                <img
                  src={apiConfig.w500Image(movie.poster_path)}
                  className=" h-[500px] rounded-3xl "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WatchNow;
