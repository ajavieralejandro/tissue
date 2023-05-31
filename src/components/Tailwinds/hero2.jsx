import React,{useState} from "react";
import Card3 from "../Cards/card3";
import Vimeo from '@u-wave/react-vimeo';
import Brota from '../Brota/brota';
import Samana from '../Exhibition/exhibition';
import ChildModal from '../Modal/modal';
import Exhibition from '../Exhibition/exhibition';
import Fade from '@mui/material/Fade';
const  Hero2 = () =>{
    const [open, setOpen] = React.useState(false);


    return(
        <section className="text-gray-600 body-font my-8 ">
        {open?<Exhibition setOpen={setOpen} itemData={itemData}/>:           <Fade timeout={2000} in={true } unmountOnExit>
  <div className="container  mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-purple-200">
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 text-white">Exhibitions</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-white">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
            </div>
          </div>
          <div  className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            
            <div onClick={()=>setOpen(true)} className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <h2 className="text-xl font-medium title-font text-gray-900 ">Casa Samana</h2>

              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/1c589c4b-484e-4c70-53cb-554be7cdc000/Tissue" />
              </div>
        
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <h2 className="text-xl font-medium title-font text-gray-900">Brota</h2>

              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4ec33243-cb91-426d-bb88-1b9850425200/Tissue" />
              </div>
           
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <h2 className="text-xl font-medium title-font text-gray-900">East Village</h2>

              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/b5a8e07b-7ef3-4eba-e35f-992793636a00/public" />
              </div>
          
            </div>
          </div>
        </div>
        </Fade>

        }
      </section>
    )
}

export default Hero2;

const itemData = [
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/474c370e-2a59-42cf-442f-11b7b2227300/public',
    title: 'Bed',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/df24f2e3-17ae-4e9f-feb2-e61259da2c00/public',
    title: 'Books',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/9b53d02c-afe8-4780-167f-4079acadff00/public',
    title: 'Sink',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0e6474d0-cd17-41cc-a7d9-f0fba0a0c500/public',
    title: 'Kitchen',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bade9527-e43c-4643-d5b0-b0cf97b0e200/public',
    title: 'Blinds',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/86ac925e-90f0-4672-5da0-a88c57e46800/public',
    title: 'Chairs',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/8fa25ec1-3057-486b-83b8-fd7b5f2fdc00/public',
    title: 'Laptop',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bb05308f-3604-441c-2423-446301bdfa00/public',
    title: 'Doors',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/7d1d39be-7478-4eb2-d463-bd1ca1e94c00/public',
    title: 'Coffee',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/40a4c57a-db1b-4f1e-14d3-c3c2ef767f00/public',
    title: 'Storage',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/69cb4309-b1cf-4226-71e7-d67eae109e00/public',
    title: 'Candle',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/31270291-169b-4114-7b33-d275484be200/public',
    title: 'Coffee table',
  },
];
