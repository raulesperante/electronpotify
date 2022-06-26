import React from "react";
import {
    Grid,
    Box,
} from "@mui/material"
import MediaPlayer from "./componets/mediaPlayer";
import Sidebar from "./componets/Sidebar";
import { ASSETS } from "./helpers/constants";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'


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
                <Box className="song-item">
                    <Box>
                        <img className="song-item__img" height={100} width={90} src="https://i.imgur.com/sCbrzQa.png" />
                    </Box>
                    <Box className="song-info">
                        <Box className="song-info__text">Pop Inglés HITS</Box>
                        <Box >
                            <IconButton aria-label="play">
                                <PlayCircleIcon color="green" className="song-info__button" />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                {/* <Grid sx={{
                    width: "100%", 
                    display: "flex", 
                    justifyContent: "center"}}>
                    <MediaPlayer />
                </Grid> */}
            </Grid>
        </Grid >

    </>

}
