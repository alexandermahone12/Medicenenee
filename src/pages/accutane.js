import React from 'react';

import '../pagescss/accutane.css';
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'




initLightboxJS("3E75-39D4-3522-BE16", "Individual");

const Accutane = () => {
  
  return (
    
    <div>
      
      <h1 className='title0'>Accutane</h1>
      <h1 className = 'title1'>What is this drug used for?</h1>
      <h2 className = 'info1'>It is used to treat severe acene.</h2>

      <h1 className = 'title2'>What are some things I need to tell my doctor <br></br>before taking this drug?</h1>
      <h2 className = 'info2'>•If you are allergic to this drug; any foods; any other drugs;<br></br> or any other substances.<br></br>•If you are planning to get pregnant</h2>

      <h1 className = 'title3'>What are some side effects of this drug?</h1>
      <h2 className = 'info3'>•Signs of depression<br></br>•Dry mouth, skin, or eyes.<br></br>•Swelling.</h2>

      <h1 className = 'title4'>How and when should I take this drug?</h1>
      <h2 className = 'info4'>Use this drug as ordered by your doctor.<br></br> Take with a full glass of water. <br></br>If you miss a dose skip it<br></br>Swallow whole. Do not chew, break, or crush.</h2>

      <h1 className = 'title5'>How do I store this drug?</h1>
      <h2 className = 'info5'>•This drug should be stored at room temperature. <br></br> •Protect the drug from the sun or any light. <br></br> •Store the drug in a dry place. </h2>

      <h1 className = 'title6'>Does this drug require a prescription?</h1>
      <h2 className = 'info6'>Yes</h2>

      <div className='slideshow'>
      <SlideshowLightbox showThumbnails="true" theme="lightbox" className='images'>
        <img src='https://www.rxaccutane.com/assets/img/accutane-products_mob.png' alt='Accutane' />
        <img src='' alt='Accutane2' />  

      
      </SlideshowLightbox> 



      </div>

      
    </div>
    
  );
};



export default Accutane;