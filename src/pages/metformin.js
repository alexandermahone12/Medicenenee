import React from 'react';

import '../pagescss/metformin.css';
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'




initLightboxJS("3E75-39D4-3522-BE16", "Individual");

const Metformin = () => {
  
  return (
    
    <div>
      
      <h1 className='title01'>Metformin</h1>
      <h1 className = 'title11'>What is this drug used for?</h1>
      <h2 className = 'info11'>It is used to lower blood sugar in patients with high blood sugar (diabetes).</h2>

      <h1 className = 'title21'>What are some things I need to tell my doctor <br></br>before taking this drug?</h1>
      <h2 className = 'info21'>•If you are allergic to this drug; any foods; any other drugs;<br></br> or any other substances.<br></br>•If you have any of these health problems: kidney disease or liver disease</h2>

      <h1 className = 'title31'>What are some side effects of this drug?</h1>
      <h2 className = 'info31'>•Stomach pain or heartburn<br></br>•Gas<br></br>•Feeling tired or weak</h2>

      <h1 className = 'title41'>How and when should I take this drug?</h1>
      <h2 className = 'info41'>Use this drug as ordered by your doctor.<br></br> Always take with food <br></br>If you miss a dose skip the missed dose and go back to your normal time<br></br>never take two doses at the same time</h2>

      <h1 className = 'title51'>How do I store this drug?</h1>
      <h2 className = 'info51'>•This drug should be stored at room temperature. <br></br> •Protect the drug from the sun or any light. <br></br> •Store the drug in a dry place. </h2>

      <h1 className = 'title61'>Does this drug require a prescription?</h1>
      <h2 className = 'info61'>Yes</h2>

      <div className='slideshow'>
      <SlideshowLightbox showThumbnails="true" theme="lightbox" className='images'>
        <img src='https://www.simplymedsonline.co.uk/storage/products/6277/images/metformin-tablets-881655727192.png' alt='metformin1' />
        <img src='https://www.simplymedsonline.co.uk/storage/products/6265/images/meformin-modified-release-tablets-661655727294.png' alt='mitformin2' />  

      
      </SlideshowLightbox> 



      </div>

      
    </div>
    
  );
};



export default Metformin;