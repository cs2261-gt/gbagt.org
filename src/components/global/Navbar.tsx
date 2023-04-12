import { useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function Navbar() {

    const [selection, setSelection] = useState(1);

    const unselectedBg: string = "neutral.light";
    const selectedBg: string = "background.default";

    const unselectedText: string = "background.default";
    const selectedText: string = "neutral.light";

    return (
        <Box sx={{
            width: "100%", 
            px: 1,
            py: 1,
            backgroundColor: "background.default"
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                backgroundColor: unselectedBg
            }}>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: selection === 1 ? selectedBg : unselectedBg
                }} onClick={ () => setSelection(1) }>
                    <Typography variant="h2" color={ selection === 1 ? selectedText : unselectedText }>
                        About
                    </Typography>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: selection === 2 ? selectedBg : unselectedBg
                }} onClick={ () => setSelection(2) }>
                    <Typography variant="h2" color={ selection === 2 ? selectedText : unselectedText }>
                        Resources
                    </Typography>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: selection === 3 ? selectedBg : unselectedBg
                }} onClick={ () => setSelection(3) }>
                    <Typography variant="h2" color={ selection === 3 ? selectedText : unselectedText }>
                        Documentation
                    </Typography>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: selection === 4 ? selectedBg : unselectedBg
                }} onClick={ () => setSelection(4) }>
                    <Typography variant="h2" color={ selection === 4 ? selectedText : unselectedText }>
                        Hall of Fame
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

}