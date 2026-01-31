import React from 'react'
import ModeSelect from "../ModeSelect/index.jsx";
import Box from "@mui/material/Box";

const AppBar = () => {
    return (
        <Box sx={{backgroundColor: 'primary.light', height: (theme) => theme.trello.appBarHeight, width: '100%', display: 'flex', alignItems: 'center'}}>
            <ModeSelect/>
        </Box>
    )
}
export default AppBar;
