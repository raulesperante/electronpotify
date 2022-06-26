import React from "react";
import {
    Grid,
} from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { ASSETS } from "./helpers/constants";


export default function App() {

    return <>
        <Grid container className="main-container">
            <Grid xs={3}>
                <Grid className="logo-container"><img className="logo" src={ASSETS.LOGO} /></Grid>
                <Grid className="sidebar">
                    <List>
                        <Grid className="listItem">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                        </Grid>
                        <Grid className="listItem">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SearchIcon fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText primary="Search" />
                                </ListItemButton>
                            </ListItem>
                        </Grid>
                        <Grid className="listItem">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LibraryMusicIcon fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText primary="Library" />
                                </ListItemButton>
                            </ListItem>
                        </Grid>
                    </List>

                </Grid>
            </Grid>
            <Grid xs={9}>
                <div className="mediaplayer__wrapper" style={{ backgroundImage: "url(https://i.imgur.com/sCbrzQa.png)" }}>
                    <div className="mediaplayer">
                        <div className="mediaplayer__header">
                            <div className="mediaplayer__headerName">Hidden</div>
                            <div className="mediaplayer__headerAuthor">by Miaow</div>
                        </div>
                        <div className="mediaplayer__controls">
                        </div>
                    </div>
                </div>
            </Grid>

        </Grid >

    </>

}
