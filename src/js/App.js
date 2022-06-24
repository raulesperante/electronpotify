import React from "react";
import {
    Grid,
} from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
import { ASSETS } from "./helpers/constants";


export default function App() {

    return <>
        <Grid container className="main-container">
            <Grid xs={3}>
                <Grid className="logo-container"><img className="logo" src={ASSETS.LOGO} /></Grid>
                <Grid>
                    {/* <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List> */}

                </Grid>
            </Grid>
            <Grid xs={9}>Col1</Grid>
        </Grid>

    </>

}
