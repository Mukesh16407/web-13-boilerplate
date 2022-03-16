import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDataError, getMovieDataLoading, getMovieDataSuccess } from "../Redux/actions";


const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

 export const MoviesDashboard = () => {

  const {data, isLoading, isError} = useSelector((state)=>({
      data : state.data,
      isLoading : state.isLoading,
      isError : state.isError
  }))

  const dispatch = useDispatch()
  
//     // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    dispatch(getMovieDataLoading) 
    axios("https://movie-fake-server.herokuapp.com/data")
    .then((res)=> dispatch(getMovieDataSuccess(res.data)))
    .catch((err)=>dispatch(getMovieDataError(err)))

  }, [dispatch]);


//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
}
  return (
    <>
      <h2>Movies</h2>
  `    <select  onChange={handleFilter}>
        {/* map through the filter  */}
      </select>
      <div className = "movies-list">
       {/* map throught th movie list and display the results */}
  
       <div className="imgGrid">
       {data[0]?.map((e)=>{
         return <div key={e.id} >
           <div >
             <img src={e.image_url} alt="" />
             {<h4>Title: {e.movie_name}</h4>}
           </div>
           
         </div>
       })}
       </div>
   
      </div>`
    </>


  );
};