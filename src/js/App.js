import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
    Grid,
    Box,
    duration,
} from "@mui/material"
import MediaPlayer from "./componets/mediaPlayer";
import Sidebar from "./componets/Sidebar";
import SongItem from "./componets/SongItem";
import { ASSETS, SONGS } from "./helpers/constants";



export default function App() {
    const song = useSelector(state => state.changeSong.src)
    const audioRef = React.useRef(null)

    React.useEffect(() => {
        if (Boolean(song)) {
            const audio = audioRef.current || false
            if(audio){
                audio.src = song
                audio.play()
            }
        }
    }, [song])

    return <>
        <audio style={{display:"none"}} ref={audioRef}  src="" controls="controls"></audio>

        <Grid container className="main-container">
            <Grid item xs={2}>
                <Grid className="logo-container">
                    <img className="logo" src={ASSETS.LOGO} />
                </Grid>
                <Sidebar />
            </Grid>
            <Grid className="presentation" item container xs={10}>
                <Grid container item className="firstItems">
                    <Grid item container xs={12}>
                        <Grid item xs={4}>
                            <SongItem song={SONGS[1]} />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem song={SONGS[2]} />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem song={SONGS[3]} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item className="secondItems">
                    <Grid item container xs={12}>
                        <Grid item xs={4}>
                            <SongItem song={SONGS[4]} />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem song={SONGS[5]} />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem song={SONGS[6]} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="mediaplayer__container" >
                    <MediaPlayer />
                </Grid>
            </Grid>
        </Grid >

    </>

}
