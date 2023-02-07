import React from 'react';

import '../pagescss/ibuprofen.css';
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'




initLightboxJS("3E75-39D4-3522-BE16", "Individual");

const Ibuprofen = () => {
  
  return (
    
    <div>
      
      <h1 className='title01'>Ibuprofen</h1>
      <h1 className = 'title11'>What is this drug used for?</h1>
      <h2 className = 'info11'>It is used to ease pain, swelling, and fever.</h2>

      <h1 className = 'title21'>What are some things I need to tell my doctor <br></br>before taking this drug?</h1>
      <h2 className = 'info21'>•If you are allergic to this drug; any foods; any other drugs;<br></br> or any other substances.<br></br>•If you have heart failure (weak heart)</h2>

      <h1 className = 'title31'>What are some side effects of this drug?</h1>
      <h2 className = 'info31'>•Stomach pain or heartburn<br></br>•Gas<br></br>•Dizziness</h2>

      <h1 className = 'title41'>How and when should I take this drug?</h1>
      <h2 className = 'info41'>Use this drug as ordered by your doctor.<br></br> Always take with food <br></br>If you miss a dose instantly take the missed dose<br></br>never take two doses at the same time</h2>

      <h1 className = 'title51'>How do I store this drug?</h1>
      <h2 className = 'info51'>•This drug should be stored at room temperature. <br></br> •Protect the drug from the sun or any light. <br></br> •Store the drug in a dry place. </h2>

      <h1 className = 'title61'>Does this drug require a prescription?</h1>
      <h2 className = 'info61'>No</h2>

      <div className='slideshow'>
      <SlideshowLightbox showThumbnails="true" theme="lightbox" className='images'>
        <img src='https://www.chemist-4-u.com/media/catalog/product/cache/f82c79c06fdfbb9bff4567c21265baf6/b/m/bmv_-_ibuprofen_200mg_24_tablets_-_mockup.png' alt='Ibuprofen' />
        <img src='' alt='Ibuprofen2' />  

      
      </SlideshowLightbox> 



      </div>

      
    </div>
    
  );
};



export default Ibuprofen;