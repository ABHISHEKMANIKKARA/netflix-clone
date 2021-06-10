import React from 'react'
import './Banner.css'
import {api_key,base_url} from '../../constants/constants'
import axios from '../../axios'
import {useEffect,useState} from 'react'

function Banner() {
var [totalBanner,setBanner]=useState(0)
//var [first,setFirst]=useState(0)
var [movie,setMovie]  =useState() 
var [val,setVal]=useState(0)
//var i=0
function changeBanner(){
    //console.log(movie+"is")
       var i=this
        setInterval(() => {
            console.log(i.totalBanner)
            
            setVal((val)=>  
                val+1)
               // console.log(val)
               setBanner((totalBanner)=>totalBanner+1) 
        }, 5000);
    
    
    }
   
useEffect(() => {
    //var totalBanner=0
    axios.get(`/trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
        setMovie(response.data.results)
        setBanner(response.data.results.length)
    })
    //console.log(totalBanner)
    changeBanner()
    return () => {
        
    }
}, [])

    return (
        <div>
        <div style={{backgroundImage:`url(${movie?"https://image.tmdb.org/t/p/original"+movie[val].backdrop_path:""})`}} className="banner">
            <div className="content">
            <h1 className="title">{movie?movie[val].title:""}</h1>
            <div className="banner_buttons">
                <button className="buttons">Play</button>
                <button className="buttons">My List</button>
            </div>
             <h3 className="description">{movie?movie[val].overview:""}</h3>
            </div>
        <div className="fade"></div>
        </div>
        <h1>{totalBanner}</h1>
        </div>
    )
}

export default Banner;
