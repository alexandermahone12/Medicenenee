import React from 'react';
import SearchBar from "../Components/SearchBar";
import BookData from "../Data.json";
const Home = () => {
  return (
    <div>
      <h1>Find Medicines</h1>
      <SearchBar placeholder="Enter a medicine..." data={BookData} />
    </div>
  );
};

export default Home;
