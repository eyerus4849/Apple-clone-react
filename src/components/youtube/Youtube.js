import React,{useState,useEffect} from 'react'

function Youtube() {
    var [youtubevideos,setyoutubevideos]=useState([]);
    useEffect(()=>{
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyC8jNnLZTm-d7iXOnO9sMJrojVKsHQGi7Q&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10 ").then((response)=>response.json()).then((data)=>{
         const youtube = data.items;
           setyoutubevideos(()=>youtube)
        })
    },[]);
 return (
        <div className="container">
             <div className="row">
        <div className="col-12 text-center">youtube section</div>
{/* <div>{youtubevideos}</div> */}

         {youtubevideos.map((singleVideo,i) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                let vidimage=singleVideo.snippet.thumbnails.high.url;
                let vidtitle=singleVideo.snippet.title;
                let videodescription=singleVideo.snippet.description;

                let video=(<div key={i}className="col-sm-12 col-md-4">
                    
             <div > 
                 <a href={vidLink} target="_blank"><img src={vidimage}/></a> 
                       </div>
                       <h3>
                       <a href={vidLink} target="_blank">{vidtitle}</a> 
                           </h3>
                       <div>{videodescription}</div>
                       </div>);
                       return video;
                
            })
        }
        </div>
        </div>
    )
}
export default Youtube



