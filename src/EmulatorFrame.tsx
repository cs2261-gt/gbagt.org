import { Box } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CSS from 'csstype';

interface EmulatorProps {
    game: string;
    img?: string;
    width?: string;
    height?: string;
}

export default function EmulatorFrame({ game, img = "/logo-gbagt.png", width = "480px", height = "320px" } : EmulatorProps) {

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

    const active: boolean = true;

    const gamePath: string = "/player.html" + game;    
    const imagePath: string = img;

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
                    <PlayArrowRoundedIcon sx={{ width: "50%", height: "50%", m: "auto" }} />
                </>
            }
        </Box>
    )
}