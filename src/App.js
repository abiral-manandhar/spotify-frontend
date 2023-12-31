import React, {useEffect,useState} from 'react'
import './App.css';
import Login from './Login'
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './player'
import { useDataLayerValue } from './DataLayer'
const spotify = new SpotifyWebApi()
function App() {
  const [{user, token}, dispatch] = useDataLayerValue()
  console.log(token)
  useEffect(()=>{
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
    if(_token){
        dispatch({
          type : "SET_TOKEN",
          token : _token,
        })
      spotify.setAccessToken(_token)
      spotify.getMe().then( (user)=>{
        
        dispatch(
          {
          type: "SET_USER",
          user: user,
        })
      })
   spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type:"SET_PLAYLISTS",
        playlists: playlists
      })
   })   

   spotify.getPlaylist('37i9dQZEVXcJp0la3yRmB0')
   .then((res) =>{
    dispatch({
      type: "SET_WEEKLY",
      dw: res

    })
  })
  }
}, [])      
  

  console.log(user)
  
  return (
    <div className="app">
     {
       token?(<Player spotify = {spotify}/>):(<Login/>)
     }  
    </div>
  );
}

export default App;
