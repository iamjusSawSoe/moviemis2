import React, { useState, useEffect } from "react";
import apiConfig from "../../api/apiConfig";
import { FaPlay } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";

const ListGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const responseGetList = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setItems(responseJson.results);
  };

  const responseLoadMore = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setItems([...items, ...responseJson.results]);
    setPage(page + 1);
  };

  const getListRequest = async () => {
    if (props.category === "movies") {
      const url = `${apiConfig.baseUrl}movie/popular/${apiConfig.apiKey}&page=1`;
      responseGetList(url);
    } else {
      const url = `${apiConfig.baseUrl}tv/popular/${apiConfig.apiKey}&page=1`;
      responseGetList(url);
    }
  };

  useEffect(() => {
    getListRequest();
  }, [props.category]);

  const loadMore = async () => {
    if (props.category === "movies") {
      const url = `${apiConfig.baseUrl}movie/popular/${apiConfig.apiKey}&page=${
        page + 1
      }`;
      responseLoadMore(url);
    } else {
      const url = `${apiConfig.baseUrl}tv/popular/${apiConfig.apiKey}&page=${
        page + 1
      }`;
      responseLoadMore(url);
    }
  };

  console.log(items);
  return (
    <section className="my-14 mx-16">
      <div className=" grid grid-cols-auto gap-6">
        {items.map((item, index) => (
          <Link to={`/${props.category}/${item.id}`}>
            <div className="group w-[200px] h-[400px]" key={index}>
              <div className="   h-[305px] w-[200px] rounded-3xl group-hover:scale-[1.05] group-hover:border-[3px]  group-hover:ease-in-out hover:duration-150 group-hover:border-secondary ">
                <FaPlay className=" cursor-pointer absolute my-32 mx-20 text-4xl invisible group-hover:visible group-hover:ease-in-out group-hover:duration-500 z-50 text-transparent group-hover:text-secondary" />
                <img
                  src={apiConfig.w500Image(item.poster_path)}
                  className=" h-[300px] rounded-3xl object-fill cursor-pointer  group-hover:brightness-[.45]"
                />
              </div>
              <h1 className="text-white text-[16px] mt-3 group-hover:scale-[0.95] group-hover:ease-in-out group-hover:duration-150  group-hover:text-secondary ">
                {item.original_title || item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex justify-center items-center">
        <Button
          styles=" rounded-full py-1 px-8 font-[400] hover:font-[800] ease-in-out duration-500  "
          text="Load More..."
          onClick={loadMore}
        />
      </div>
    </section>
  );
};

export default ListGrid;
