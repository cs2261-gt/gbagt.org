import { Box, Typography } from '@mui/material';

export default function Navbar() {

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
                    backgroundColor: unselectedBg
                }}>
                    <Typography variant="h2" color={ unselectedText }>
                        About
                    </Typography>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: selectedBg
                }}>
                    <Typography variant="h2" color={ selectedText }>
                        Resources
                    </Typography>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: unselectedBg
                }}>
                    <Typography variant="h2" color={ unselectedText }>
                        Documentation
                    </Typography>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: unselectedBg
                }}>
                    <Typography variant="h2" color={ unselectedText }>
                        Hall of Fame
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

}