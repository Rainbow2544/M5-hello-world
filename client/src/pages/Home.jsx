import React, { useEffect, useState } from 'react';
import "./Home.css";
import SearchBar from '../components/SearchBar';
import Listing from '../components/Listing';
import axios from 'axios';

const Home = () => {
  const [listingArr, setListingArr] = useState([])
  useEffect(() =>{
    const getDocuments = async () => {
      try{
        const res = await axios.get("http://localhost:8080/api/documents")
        setListingArr(res.data);
        console.log(listingArr)
      }catch (err){
        throw new Error("failed to fetch!")
      }
    }
    getDocuments();
  },[])
  
  return (
    <div>
        <div className='photoBgContainer'>
          <div id="photoBgContainer--gray"></div>
          <div id="photoBgContainer__header">
            <h1>The great getaway, your way</h1>
            <p>Save at least 15% on stays worldwide, 
              from relaxing retreats to off-the-grid adventures</p>
          </div>
          
          <div id='photoBgContainer__searchBar'>
              <SearchBar />
          </div>
        </div>
        <div>
          <p>For testing purpose:</p>
          {listingArr.map((l) => {
            return (<p>{l.message}</p>)
          })}
        </div>
        <Listing/>
    </div>
  )
}

export default Home;