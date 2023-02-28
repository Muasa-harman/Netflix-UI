import React, { useEffect, useState } from 'react'
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import "./Home.css"

const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async() =>{
      try {
        const res = await fetch(`http://localhost:3001/lists/${type ? "?type=" + type : ""}
        & ${genre ? "genre=" + genre: "" }`
        ,{method:"GET"});
        {headers:{
          token:""
        }
      }
        console.log(res);
        setLists(res.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    getRandomLists();
  },[type,genre])
  return (
    <div className='home'>
      <Featured type={type}/>
      {lists.map((list)=>(
      <List list={list}/>
        
      ))}
    </div>
  )
}

export default Home