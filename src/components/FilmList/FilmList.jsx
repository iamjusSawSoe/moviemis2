import React, { useState, useEffect, useRef } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import apiConfig from "../../api/apiConfig";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";
import { DetailModal } from "../index";

const FilmList = (props) => {
  SwiperCore.use([Autoplay]);

  const [items, setItems] = useState([]);
  const [itemId, setItemid] = useState("");
  const [detailModal, setDetailModal] = useState(false);
  const swiperRef = useRef(null);

  const getListRequest = async () => {
    const url = `${apiConfig.baseUrl}${props.category}/${props.type}/${apiConfig.apiKey}&page=1`;
    const response = await fetch(url);
    const responseJson = await response.json();

    setItems(responseJson.results);
  };

  useEffect(() => {
    getListRequest();
  }, []);

  const openModalDetail = (id) => {
    setDetailModal(!detailModal);
    swiperRef.current.swiper.autoplay.stop();
    setItemid(id);
  };

  return (
    <section className=" mx-10 my-10">
      <div className="flex justify-between items-center">
        <h1 className="  text-white text-[40px] leading-3 sm:text-2xl font-bold">
          {props.name}
        </h1>
        <Link to={`/${props.category === "movie" ? "movies" : "series"}`}>
          <Button
            styles=" rounded-full py-1 px-8 font-[400] hover:font-[800] ease-in-out duration-500  "
            text="More..."
          />
        </Link>
      </div>

      <div className=" mt-8">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView="auto"
          loopedSlides={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="group xl:w-[11.5%] md:w-[15.1%] lmd:w-[20%] sm:w-[24.2%] ss:w-[28%] w-[45%] h-[320px]"
            >
              <div
                className="h-[305px] rounded-3xl hover:scale-[1.05] hover:border-[3px]  hover:ease-in-out hover:duration-150 hover:border-secondary "
                onClick={() => openModalDetail(item.id)}
              >
                <FaPlay className=" cursor-pointer absolute my-32 mx-20 text-4xl invisible group-hover:visible group-hover:ease-in-out group-hover:duration-500 z-50 text-transparent group-hover:text-secondary" />
                <img
                  src={apiConfig.w500Image(item.poster_path)}
                  className=" h-[300px] rounded-3xl object-fill cursor-pointer group-hover:brightness-[.45]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {detailModal && (
        <DetailModal
          openModalDetail={() => openModalDetail()}
          itemId={itemId}
          itemCategory={props.category}
          itemType={props.type}
        />
      )}
    </section>
  );
};

export default FilmList;
