import * as React from 'react';
import ModalFLyer from '../ModalFlyer/modalFlyer';
import { useState } from 'react';

export default  ({image}) =>{
    const [visible,setVisible] = useState(false);

    return(
        <>
        
        
        <article className="flex flex-col  mx-auto max-w-sm  py-25 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                <div className="min-h-62">
                    <img onClick={()=>setVisible(true)} className="mx-auto" src={image} alt="" />
                </div>
                <ModalFLyer open={visible} setOpen={setVisible} image={image} />

             
            </article>
        </>
    )
}