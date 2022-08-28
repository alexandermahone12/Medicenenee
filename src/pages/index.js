import React from 'react';
import SearchBar from "../Components/SearchBar";
import BookData from "../Data.json";
import '../pagescss/index.css';
import "@fontsource/manrope";
const Home = () => {
  return (
    
    <div>
      <div className="content">
        <h1 className="title">Find Medicines</h1>
      </div>

      <SearchBar placeholder="Enter a medicine..." data={BookData} />
      
    </div>
    
  );
};

export default Home;
