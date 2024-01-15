import React from "react";
import ExhibitionCard from '../ExhibitionCard/exhibitionCard';

const TimelineExhibitions = ({setCont}) =>{
    
    return(

        <>
         <div class="container mx-auto w-full h-full">
                  
                  <div class="relative wrap  ">
             
                
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div class="x-1 py-4 text-right">
                      
                        <div onClick={()=>{setCont(1)}} class="grid grid-cols-2">
                        <ExhibitionCard   title="Casa Samana" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/1c589c4b-484e-4c70-53cb-554be7cdc000/Tissue"  />
                        <p className="pt-32 ">My first work in progress exhibition „Tissue” in Casa Samana in Buenos Aires resulted in an immersive multimedia installation including video art, site specific art, virtual reality as well as a live performance.
                        </p>
                      
                        </div>
                     </div>
                    </div>
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div  class="order-1 px-1 py-4 text-left">
                       
                        <div onClick={()=>{setCont(2)}}  class="grid grid-cols-2">
                          
                        <p className="pt-32 ">My analog fragmentation series is the work in progress of my immersive multimedia installation “Tissue”</p>
                      
                        
                        <ExhibitionCard title="Brota" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4ec33243-cb91-426d-bb88-1b9850425200/Tissue" />
</div>
                      </div>
                    </div>
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div class="order-1 w-5/12"></div>
                      <div class="px-1 py-4 text-right">
                     
                        <div onClick={()=>{setCont(3)}}  class="grid grid-cols-2">
                                             
  <ExhibitionCard title="East Village" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/b5a8e07b-7ef3-4eba-e35f-992793636a00/public" />
    
  <p className="pt-32 "> Laura your work is fascinating! Abstracting everyday materials into organic collages that reflect
       the simbiotic relationship between science and art, your process is totally unique. With textures that
       range from the wispy and delicate to the dense and saturated, your work resonates a sense of dynamisms and
       change, of thing in flux or in development</p>
                        
     
  </div>
                      </div>
                    </div>
        
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="order-1 w-5/12"></div>
        
                   
                    </div>
                  </div>
                </div>
        </>
    )
}

export default TimelineExhibitions;