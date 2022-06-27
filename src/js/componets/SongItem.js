import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { changeSong, changeId } from "../redux/features/changeSong";
import {
    Box,
} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';



export default function SongItem({ song }) {
    const id = useSelector(state => state.changeSong.id)
    const dispatch = useDispatch()


    const handleChange = () => {
        dispatch(changeSong(song.src))
        dispatch(changeId(song.id))
    }

    const showBtnPause = () => song.id === id


    return (
        <Box className="song-item">
            <Box>
                <img className="song-item__img" height={100} width={90} src="https://i.imgur.com/sCbrzQa.png" />
            </Box>
            <Box className="song-info">
                <Box className="song-info__text">Pop Inglés HITS</Box>
                <Box >
                    <IconButton
                        onClick={handleChange}
                        aria-label="play">
                        {showBtnPause() ?
                            <PauseCircleIcon color="green" className="song-info__button" />
                            :
                            <PlayCircleIcon color="green" className="song-info__button" />
                        }
                    </IconButton>
                </Box>
            </Box>
        </Box>

    )
}
