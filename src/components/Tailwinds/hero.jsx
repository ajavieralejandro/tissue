import React from "react";
import Card3 from "../Cards/card3";
const  Hero = () =>{
    return(
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4  text-gray-900">Inti
        <br class="hidden lg:inline-block" />Buenos Aires
      </h1>
      <p class="mb-8 leading-relaxed">Thank you very much for opening the doors to me @intiargentina. Fluorescence is widely used in microscopy and an important tool for observing the distribution of specific molecules. Most molecules in cells do not fluoresce. Therefore, they have to be labeled with fluorescent molecules called fluorochromes. Molecules of interest can be labeled directly, (eg, DNA with DAPI) or they can be immunolabeled with fluorochromes that are coupled to specific antibodies. Cell fixation is usually required for immunostaining.</p>
      <p class="mb-8 leading-relaxed">Thank you very much for opening the doors to me @intiargentina. Fluorescence is widely used in microscopy and an important tool for observing the distribution of specific molecules. Most molecules in cells do not fluoresce. Therefore, they have to be labeled with fluorescent molecules called fluorochromes. Molecules of interest can be labeled directly, (eg, DNA with DAPI) or they can be immunolabeled with fluorochromes that are coupled to specific antibodies. Cell fixation is usually required for immunostaining.</p>

      <div class="flex justify-center">
        <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Card3 />
    </div>
  </div>
</section>
    )
}

export default Hero;