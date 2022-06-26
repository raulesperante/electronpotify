import React from "react";
import {
    Grid,
} from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { ASSETS } from "./helpers/constants";


export default function App() {

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return <>
        <Grid container className="main-container">
            <Grid item xs={3}>
                <Grid className="logo-container"><img className="logo" src={ASSETS.LOGO} /></Grid>
                <Grid className="sidebar">
                    <List>
                        <Grid className="listItem">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon color="white" fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                        </Grid>
                        <Grid className="listItem">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SearchIcon color="white" fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText primary="Search" />
                                </ListItemButton>
                            </ListItem>
                        </Grid>
                        <Grid className="listItem">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LibraryMusicIcon color="white" fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText primary="Library" />
                                </ListItemButton>
                            </ListItem>
                        </Grid>
                    </List>

                </Grid>
            </Grid>
            <Grid item xs={9}>
                <div className="mediaplayer__wrapper" style={{ backgroundImage: "url(https://i.imgur.com/sCbrzQa.png)" }}>
                    <div className="mediaplayer">
                        <div className="mediaplayer__header">
                            <div className="mediaplayer__headerName">Hidden</div>
                            <div className="mediaplayer__headerAuthor">by Miaow</div>

                        </div>
                        <div className="mediaplayer__controls">
                            <Slider
                                sx={{marginTop: "-2em"}}
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                            />
                            <Grid className="mediaplayer__buttons">
                                <Box>
                                    <FastRewindIcon className="mediaplayer__buttonFast" />
                                </Box>
                                <Box>
                                    <PlayArrowIcon className="mediaplayer__playButton" />
                                </Box>
                                <Box>
                                    <FastForwardIcon className="mediaplayer__buttonFast" />
                                </Box>

                            </Grid>
                            <Stack className="volume" spacing={2} direction="row" alignItems="center">
                                <VolumeDown />
                                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                                <VolumeUp />
                            </Stack>

                        </div>
                    </div>
                </div>
            </Grid>

        </Grid >

    </>

}
