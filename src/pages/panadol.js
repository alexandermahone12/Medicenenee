import React from 'react';

import '../pagescss/panadol.css';
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'




initLightboxJS("3E75-39D4-3522-BE16", "Individual");

const Panadol = () => {
  
  return (
    
    <div className = 'panadol'>
      
      <h1>Paracetamol</h1>
      <h2 class='one'>This drug is used for pain relief. Some of the side effects of this drug are: an upset stomach or throwing up, trouble sleeping, headache. If an allergic reaction stars to ocurr after taking this drug, immediatly call your doctor. In addition, one when should be careful when consuming this drug, since taking more than 4000 milligrams a day can lead to serious liver damage and could cause death.</h2>

      <h2 class = 'two'>This drug should be consumed once every 6 hours. If you miss a dose(one pill), do not take two doses at once.</h2>
      <div className='slideshow'>
      <SlideshowLightbox showThumbnails="true" theme="lightbox" className='images'>
        <img src='https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format' alt='panado1' />
        <img src='https://www.abibapharmacia.com/wp-content/uploads/2022/08/Diptamp-650-Tab.png' alt='panadol2' />  

      
      </SlideshowLightbox> 



      </div>

      
    </div>
    
  );
};



export default Panadol;

