import React, { useEffect,useState} from 'react'
import './slider.css'
import {api_key,base_url,image_url} from '../../constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'
function Slider(props) {
    var [videoIsTrue,setVideoIsTrue]=useState(false)
    var [original,setOriginal]=useState([])
    var [video,changeVideo]=useState([])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    useEffect(() => {
        axios.get(`${props.url}`).then((response)=>{
          setOriginal(response.data.results)
        })
        console.log(original[0])
        return () => {
            
        }
    }, [])
    function Handle(id){
        console.log("hii")
    var video_url=`/movie/${id}/videos?api_key=${api_key}&language=en-US`
    console.log(video_url)
    axios.get(video_url).then((response)=>{
        if(response.data.results.length!=0){
        changeVideo(response.data.results)
        //console.log(video[0])
        setVideoIsTrue(true)
        }
    })
    }
    return (
        <div className="row">
            <h2 className="title">{props.title}</h2>
            <div className="posters">
                {
                original.map((obj)=>{
                    return <img className={props.isSmall?"poster_others":"poster"} onClick={()=>{Handle(obj.id)}} src={`${image_url+obj.backdrop_path}`}></img>
                })
                
                }
            </div>
            {videoIsTrue?<YouTube videoId={video[0].key} opts={opts}  />:""}
        </div>
    )
}

export default Slider
