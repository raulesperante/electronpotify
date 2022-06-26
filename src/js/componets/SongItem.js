import React from "react";
import {
    Box,
} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';



export default function SongItem() {
    return (
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

    )
}
