import React from 'react';
import SearchBar from "../Components/SearchBar";
import BookData from "../Data.json";
const Home = () => {
  return (
    <div>
      <SearchBar placeholder="Search any medicine..." data={BookData} />
    </div>
  );
};

export default Home;
