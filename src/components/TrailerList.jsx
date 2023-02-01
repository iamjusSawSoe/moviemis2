import React, { useState, useEffect  } from 'react'
import apiConfig from '../api/apiConfig';
import { ImCross } from "react-icons/im";

const TrailerList = (props) => {
    const [trailer, setTrailer] = useState([])

    const getTrailer = async () => {
        const url = `${apiConfig.baseUrl}${props.category}/${props.id}/videos${apiConfig.apiKey}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setTrailer(responseJson.results);
      };
    
    useEffect(() => {
        getTrailer();
        
    }, [props.category, props.id]);

console.log(props);

  return (
    <div className="border-0 bItem rounded-lg shadow-lg relative flex flex-col w-[1600px] md:w-[1300px]  outline-none focus:outline-none bg-black">
    
        {trailer.slice(0,1).map((videos,index)=> (
            <div key={index}>
            <div className='absolute right-0 bg-black w-[65px] h-[60px] '>
            <ImCross
                className=" bg-black  cursor-pointer text-white text-[18px] leading-7 mx-5 my-6 hover:text-secondary"
                onClick={props.close}
                />
            </div>
            
                <iframe
                   src={`https://www.youtube.com/embed/${videos.key}?rel=0&fs=0&modestbranding=1`}
                height={props.height-50}
                width="100%"
                title="video"
                allowfullscreen
            ></iframe>
            </div>
        ))}
    </div>
  )
}

export default TrailerList