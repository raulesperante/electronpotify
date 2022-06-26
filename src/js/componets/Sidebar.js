import React from 'react'
import {
    Grid,
} from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function Sidebar() {
    return (
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
    )
}
