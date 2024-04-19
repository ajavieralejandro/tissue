import React from "react";
import { useState } from "react";
import ExhibitionCard from '../ExhibitionCard/exhibitionCard';
import './timeline.scss';
import Exhibitions from "../Exhibitions/exhibitions";
import TimelineExhibitions from "./timelineExhibitions";
import { VideoGallery } from "../VideoGallery/videoGallery";
import Card3d from "../3dCard/3dcard";
import Brota from '../Brota/brota';
import CasaSamana from '../CasaSamana/casaSamana';
import EastVillage from '../EastVillage/eastVillage';
import { useNavigate } from "react-router-dom";
const Timeline = () => {
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate('/virtual_gallery');
  }
  const[cont,setCont] = useState(0);

    return (
        <section id="exhibitions" className="h-screen w-screen">
            <div class="bg-black text-white py-2">
              <VideoGallery />
            <div  class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <div class="text-left flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <h1 class="font-bebas-neue uppercase justify-center text-3xl  font-black flex flex-col leading-none text-white">
                    Exhibitions
                </h1>
                <h1 onClick={()=>handleClick()} class="pt-12 font-bebas-neue uppercase justify-center text-3xl  font-black flex flex-col leading-none text-white">
                    Virtual Exhibitions
                </h1>
              </div>
              <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                {cont===0?<TimelineExhibitions setCont={setCont} />:null}
                {cont===1?<CasaSamana setCont={setCont}/>:null}
                {cont===2?<Brota setCont={setCont} />:null}
                {cont===3?<EastVillage setCont={setCont} />:null}

              </div>
            </div>
          </div>
          </section>

    )
}

export default Timeline;