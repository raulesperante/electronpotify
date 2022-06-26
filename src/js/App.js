import React from "react";
import {
    Grid,
    Box,
} from "@mui/material"
import MediaPlayer from "./componets/mediaPlayer";
import Sidebar from "./componets/Sidebar";
import SongItem from "./componets/SongItem";
import { ASSETS } from "./helpers/constants";

const SONGS = {
    1: {
        author: "Author",
        title: "Title",
        src: "src/js/assets/audios/3_am_West_End.mp3"
    },
    2: {
        author: "Author",
        title: "Title",
        src: "src/js/assets/audios/Backbeat.mp3"
    },
    3: {
        author: "Author",
        title: "Title",
        src: "src/js/assets/audios/Bit_Bit_Loop.mp3"
    },
    4: {
        author: "Author",
        title: "Title",
        src: "src/js/assets/audios/Chronos.mp3"
    },
    5: {
        author: "Author",
        title: "Title",
        src: "src/js/assets/audios/Hippety_Hop.mp3"
    },
    6: {
        author: "Author",
        title: "Title",
        src: "src/js/assets/audios/Meditating_Beat.mp3"
    },
}


export default function App() {

    React.useEffect(() => {
        // const audio = new Audio(SONGS[1].src)
        // audio.play()

    }, [])

    return <>
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
                            <SongItem />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item className="secondItems">
                    <Grid item container xs={12}>
                        <Grid item xs={4}>
                            <SongItem />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem />
                        </Grid>
                        <Grid item xs={4}>
                            <SongItem />
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
