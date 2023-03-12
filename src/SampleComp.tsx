import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SampleComp() {

    return (
        <>
            <Box sx={{
                width: '100vw',
                height: '100vh',
                py: 10
            }}>
                <Paper sx={{
                    elevation: 5,
                    mx: 'auto',
                    maxWidth: 'sm',
                    borderRadius: '2vh',
                    overflow: 'hidden',
                    textAlign: 'center'
                }}>
                    <Box sx={{ width: 'sm', height: 'sm', py: 5 }}>
                        <Typography>
                            GBA GT!
                        </Typography>
                    </Box>
                    <iframe src="../player.html" width="480px" height="320px"></iframe>
                </Paper>
            </Box>
        </>
    )
}