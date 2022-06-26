import React from "react";
import {
    Grid,
    Box,
} from "@mui/material"
import MediaPlayer from "./componets/mediaPlayer";
import Sidebar from "./componets/Sidebar";
import SongItem from "./componets/SongItem";
import { ASSETS } from "./helpers/constants";


export default function App() {

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
                        <Grid xs={4}>
                            <SongItem />
                        </Grid>
                        <Grid xs={4}>
                            <SongItem />
                        </Grid>
                        <Grid xs={4}>
                            <SongItem />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item className="secondItems">
                    <Grid item container xs={12}>
                        <Grid xs={4}>
                            <SongItem />
                        </Grid>
                        <Grid xs={4}>
                            <SongItem />
                        </Grid>
                        <Grid xs={4}>
                            <SongItem />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{
                    width: "100%", 
                    display: "flex", 
                    justifyContent: "center"}}>
                    <MediaPlayer />
                </Grid>
            </Grid>
        </Grid >

    </>

}
