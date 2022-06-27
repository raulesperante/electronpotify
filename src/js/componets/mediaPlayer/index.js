import React from "react";
import {
    Grid,
} from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


export default function MediaPlayer() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="mediaplayer__wrapper" style={{ backgroundImage: "url(https://i.imgur.com/sCbrzQa.png)" }}>
            <Box className="mediaplayer">
                <Box className="mediaplayer__header">
                    <Box className="mediaplayer__headerName">Hidden</Box>
                    <Box className="mediaplayer__headerAuthor">by Miaow</Box>

                </Box>
                <Box className="mediaplayer__controls">
                    <Slider
                        className="currentTime"
                        color="orange"
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                    />
                    <Grid>
                        <Box className="clock">
                            00:00
                        </Box>
                    </Grid>
                    <Grid className="mediaplayer__buttons">
                        <Box>
                            <FastRewindIcon color="gray" className="mediaplayer__buttonFast" />
                        </Box>
                        <Box>
                            <PlayArrowIcon className="mediaplayer__playButton" />
                        </Box>
                        <Box>
                            <FastForwardIcon color="gray" className="mediaplayer__buttonFast" />
                        </Box>
                    </Grid>
                    <Stack className="volume" spacing={2} direction="row" alignItems="center">
                        <VolumeDown color="gray" />
                        <Slider color="orange" aria-label="Volume" value={value} onChange={handleChange} />
                        <VolumeUp color="gray" />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
