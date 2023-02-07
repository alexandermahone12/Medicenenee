import React from 'react';

import '../pagescss/aspirin.css';
import "@fontsource/manrope";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'




initLightboxJS("3E75-39D4-3522-BE16", "Individual");

const Aspirin = () => {
  
  return (
    
    <div>
      
      <h1 className='title05'>Aspirin</h1>
      <h1 className = 'title15'>What is this drug used for?</h1>
      <h2 className = 'info15'>It is used to ease pain and fever.</h2>

      <h1 className = 'title25'>What are some things I need to tell my doctor <br></br>before taking this drug?</h1>
      <h2 className = 'info25'>•If you are allergic to this drug; any foods; any other drugs;<br></br> or any other substances.<br></br>•If you have Kidney disease or liver disease.</h2>

      <h1 className = 'title35'>What are some side effects of this drug?</h1>
      <h2 className = 'info35'>•Rectal irritation<br></br>•Upset stomach and nausea<br></br>•heartburn</h2>

      <h1 className = 'title45'>How and when should I take this drug?</h1>
      <h2 className = 'info45'>Use this drug as ordered by your doctor.<br></br> Take with or without food<br></br>Take with a full glass of water. <br></br>If you miss a dose take it instantly <br></br>Make sure to never take 2 doses at the same time.</h2>

      <h1 className = 'title55'>How do I store this drug?</h1>
      <h2 className = 'info55'>•This drug should be stored at room temperature. <br></br> •Protect the drug from the sun or any light. <br></br> •Store the drug in a dry place. </h2>

      <h1 className = 'title65'>Does this drug require a prescription?</h1>
      <h2 className = 'info65'>No</h2>

      <div className='slideshow'>
      <SlideshowLightbox showThumbnails="true" theme="lightbox" className='images'>
        <img src='http://cdn.shopify.com/s/files/1/0368/8785/5243/products/62402.png?v=1616855099' alt='Aspirin1' />
        <img src='' alt='Aspirin2' />  

      
      </SlideshowLightbox> 



      </div>

      
    </div>
    
  );
};



export default Aspirin;