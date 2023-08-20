import React from 'react'
import "./Body.css"
import Header from './header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './songRow'

import { useDataLayerValue } from './DataLayer'
function Body({spotify}) {
    const [{dw}, dispatch] = useDataLayerValue()
    console.log(dw)
    return (
        <div className = 'body'>
        <Header spotify = {spotify}/>
     <div className = "body__info">
        <img src = {dw?.images[0].url}/>
        <div className = "body__infoText">
<strong>
    PLAYLIST
</strong>
<h2>
    Discover Weekly
</h2>
<p>
{dw?.description}
</p>
        </div>
        </div>
        <div className = "body__song">
            <div className = "body__icon">
                <PlayCircleFilledIcon className = "body__shuffle"/>
                <FavoriteIcon fontSize = "large"/>
                <MoreHorizIcon/>

            </div>
            {dw?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
            </div>
        </div>

    )
}

export default Body
