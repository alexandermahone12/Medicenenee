import React from 'react';

import '../pagescss/panadol.css';
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'




initLightboxJS("3E75-39D4-3522-BE16", "Individual");

const Panadol = () => {
  
  return (
    
    <div>
      
      <h1 className='title0'>Paracetamol</h1>
      <h1 className = 'title1'>What is this drug used for?</h1>
      <h2 className = 'info1'>Paracetamol is used to ease pain and fever.</h2>

      <h1 className = 'title2'>What are some things I need to tell my doctor <br></br>before taking this drug?</h1>
      <h2 className = 'info2'>•If you are allergic to this drug; any foods; any other drugs;<br></br> or any other substances.<br></br>•If you have any liver disease</h2>

      <h1 className = 'title3'>What are some side effects of this drug?</h1>
      <h2 className = 'info3'>•Headaches<br></br>•Upset stomach and nausea<br></br>•Trouble sleeping</h2>

      <h1 className = 'title4'>How and when should I take this drug?</h1>
      <h2 className = 'info4'>Use this drug as ordered by your doctor. This drug is usually taken orally.<br></br> Adults should only take up to two 500mg tablets evert six hours. <br></br>Children under 16 years require a smaller dose. If you miss a dose, <br></br>skip the missed one and go back to your normal timing. <br></br>Make sure to never take 2 doses at the same time.</h2>

      <h1 className = 'title5'>How do I store this drug?</h1>
      <h2 className = 'info5'>•This drug should be stored at room temperature. <br></br> •Protect the drug from the sun or any light. <br></br> •Store the drug in a dry place. </h2>

      <h1 className = 'title6'>Does this drug require a prescription?</h1>
      <h2 className = 'info6'>No</h2>

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

