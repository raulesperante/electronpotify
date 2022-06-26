import React from "react";
import {
    Grid,
} from "@mui/material"
import MediaPlayer from "./componets/mediaPlayer";
import Sidebar from "./componets/Sidebar";
import { ASSETS } from "./helpers/constants";


export default function App() {

    return <>
        <Grid container className="main-container">
            <Grid item xs={3}>
                <Grid className="logo-container">
                    <img className="logo" src={ASSETS.LOGO} />
                </Grid>
                <Sidebar />
            </Grid>
            <Grid className="presentation" item container xs={9}>
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
