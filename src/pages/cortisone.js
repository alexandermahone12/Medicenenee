import React from 'react';
import '../pagescss/cortisone.css'
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

initLightboxJS("3E75-39D4-3522-BE16", "Individual");
const Cortisone = () => {
  return (
    <div>
      
      <h1 className='title00'>Cortisone acetate</h1>
      <h1 className = 'title10'>What is this drug used for?</h1>
      <h2 className = 'info10'>It is used for many health problems like blood problems, <br></br>adrenal gland problems, swelling, or skin rashes.</h2>

      <h1 className = 'title20'>What are some things I need to tell my doctor <br></br>before taking this drug?</h1>
      <h2 className = 'info20'>•If you are allergic to this drug; any foods; any other drugs;<br></br> or any other substances.<br></br>•If you have a fungal infection.</h2>

      <h1 className = 'title30'>What are some side effects of this drug?</h1>
      <h2 className = 'info30'>•Sweating a lot<br></br>•Upset stomach and nausea<br></br>•Restlessness</h2>

      <h1 className = 'title40'>How and when should I take this drug?</h1>
      <h2 className = 'info40'>Use this drug as ordered by your doctor.<br></br> Talk to your doctor before stopping taking this drug,<br></br> you need to stop gradually.<br></br>If you miss a dose, instantly take the dose you missed.<br></br>Make sure to never take 2 doses at the same time.</h2>

      <h1 className = 'title50'>How do I store this drug?</h1>
      <h2 className = 'info50'>•This drug should be stored at room temperature. <br></br> •Throw away unused drugs. Check if there are drug <br></br>take-back programs in your area.<br></br> •Store the drug in a dry place. </h2>

      <h1 className = 'title60'>Does this drug require a prescription?</h1>
      <h2 className = 'info60'>Yes</h2>

      <div className='slideshow'>
      <SlideshowLightbox showThumbnails="true" theme="lightbox" className='images'>
        <img src='https://www.eipico.com.eg/DataImages/PRDS/Product_Image293.png' alt='Cortisone1' />
        <img src='' alt='Cortisone2' />  

      
      </SlideshowLightbox> 



      </div>

      
    </div>

  );
};

export default Cortisone;