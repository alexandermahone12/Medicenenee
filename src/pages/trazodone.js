import React from 'react';

import '../pagescss/trazodone.css';
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'




initLightboxJS("3E75-39D4-3522-BE16", "Individual");

const Trazodone = () => {
  
  return (
    
    <div>
      
      <h1 className='title01'>Trazodone</h1>
      <h1 className = 'title11'>What is this drug used for?</h1>
      <h2 className = 'info11'>It is used to treat depression.</h2>

      <h1 className = 'title21'>What are some things I need to tell my doctor <br></br>before taking this drug?</h1>
      <h2 className = 'info21'>•If you are allergic to this drug; any foods; any other drugs;<br></br> or any other substances.<br></br>•If you have had a recent heart attack.</h2>

      <h1 className = 'title31'>What are some side effects of this drug?</h1>
      <h2 className = 'info31'>•Muscle pain.<br></br>•Headache.<br></br>•Weight gain or loss.</h2>

      <h1 className = 'title41'>How and when should I take this drug?</h1>
      <h2 className = 'info41'>Use this drug as ordered by your doctor.<br></br> It may take several weeks to see the full effects.<br></br>If you miss a dose instantly take the missed dose<br></br>never take two doses at the same time</h2>

      <h1 className = 'title51'>How do I store this drug?</h1>
      <h2 className = 'info51'>•This drug should be stored at room temperature. <br></br> •Protect the drug from the sun or any light. <br></br> •Store the drug in a dry place. </h2>

      <h1 className = 'title61'>Does this drug require a prescription?</h1>
      <h2 className = 'info61'>Yes</h2>

      <div className='slideshow'>
      <SlideshowLightbox showThumbnails="true" theme="lightbox" className='images'>
        <img src='https://www.ahpmedicals.com/pub/media/catalog/product/cache/765c5b8e32e646cb7720d28daaca3a0d/m/o/molipaxin_trazodone_50_mg_cap_pack_of_84_.png' alt='Trazodone1' />
        <img src='' alt='Trazodone2' />  

      
      </SlideshowLightbox> 



      </div>

      
    </div>
    
  );
};

export default Trazodone;
