import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CSS from 'csstype';

interface EmulatorProps {
    game: string;
    img?: string;
    width?: string;
    height?: string;
    initialState?: boolean;
}

export default function EmulatorFrame({ game, img = "/logo-gbagt.png", width = "480px", height = "320px", initialState = false } : EmulatorProps) {

    const gameStyles: CSS.Properties = {
        width: width,
        height: height,
        display: "block",
        margin: "0 auto"
    };

    const imageStyles: CSS.Properties = {
        width: width,
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -2
    };

    const gamePath: string = "/player.html" + game;    
    const imagePath: string = img;

    const [active, setActive] = useState(initialState);
    const handleClick = () => { setActive(true); };

    return (
        <Box sx={{ 
            width: width, 
            height: height, 
            position: "relative",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {active
                ? <iframe title="GBA Emulator" src={ gamePath } style={ gameStyles } />
                : <>
                    <img alt="" src={ imagePath } style={ imageStyles } />
                    <IconButton onClick={ handleClick }>
                        <PlayArrowRoundedIcon sx={{ width: "50%", height: "50%", m: "auto" }} />
                    </IconButton>
                </>
            }
        </Box>
    )
    
}