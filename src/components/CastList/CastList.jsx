import React, { useState, useEffect } from "react";
import apiConfig from "../../api/apiConfig";

const CastList = (props) => {
  const [castList, setCastList] = useState([]);

  const getItemDetailRequest = async () => {
    const url = `${apiConfig.baseUrl}${props.category}/${props.id}/credits${apiConfig.apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setCastList(responseJson.cast.slice(0, 5));
  };

  useEffect(() => {
    getItemDetailRequest();
  }, [props.category, props.id]);

  return (
    <section className="my-5">
      <h1 className="  text-white text-[26px] leading-8 font-semibold my-3">
        Casts
      </h1>
      <div className="flex items-center gap-4">
        {castList.map((cast, index) => (
          <div key={index} className="group">
            <img
              src={apiConfig.w500Image(cast.profile_path)}
              className=" h-[150px] rounded-3xl object-fill group-hover:scale-[0.945] group-hover:ease-in-out group-hover:duration-150"
            />
            <h1 className="text-white text-[14px] mt-2 text-center group-hover:scale-[0.95] group-hover:ease-in-out group-hover:duration-150  group-hover:text-secondary ">
              {cast.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CastList;
