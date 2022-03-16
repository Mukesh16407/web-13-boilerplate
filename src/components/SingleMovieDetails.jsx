import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export const SingleMovieDetails = () => {

const movie = useParams()
    // make a request to get the details
    useEffect(() =>{
      axios({
        method:"get",
        url:`https://movie-fake-server.herokuapp.com/data${movie}`
        .then((res) =>{
      useDispatch(res)
        }).catch((err) =>{
          console.log(err)
        
      })
    })
  return (<>
  <h1>Single Product Page</h1>
  
  </>
  )
}
