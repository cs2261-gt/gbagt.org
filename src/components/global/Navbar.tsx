import { Box, Typography } from '@mui/material';
import { useLocation, Location, Link } from 'react-router-dom';

export default function Navbar() {

    const location: Location = useLocation();

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
                    backgroundColor: location.pathname === '/' ? selectedBg : unselectedBg
                }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="h2" color={ location.pathname === '/' ? selectedText : unselectedText }>
                            About
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: location.pathname === '/resources' ? selectedBg : unselectedBg
                }}>
                    <Link to="/resources" style={{ textDecoration: 'none' }}>
                        <Typography variant="h2" color={ location.pathname === '/resources' ? selectedText : unselectedText }>
                            Resources
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: location.pathname === '/docs' ? selectedBg : unselectedBg
                }}>
                    <Link to="/docs" style={{ textDecoration: 'none' }}>
                        <Typography variant="h2" color={ location.pathname === '/docs' ? selectedText : unselectedText }>
                            Documentation
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{
                    px: 3,
                    py: 2,
                    backgroundColor: location.pathname === '/hall-of-fame' ? selectedBg : unselectedBg
                }}>
                    <Link to="/hall-of-fame" style={{ textDecoration: 'none' }}>
                        <Typography variant="h2" color={ location.pathname === '/hall-of-fame' ? selectedText : unselectedText }>
                            Hall of Fame
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )

}