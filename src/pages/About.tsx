import { Box, Typography } from "@mui/material";
import SampleComponent from "../components/global/SampleComponent";

export default function About() {

    return (
        <>
            <Box sx={{
                py: 5,
                textAlign: 'center'
            }}>
                <Typography variant="h1">
                    ABOUT
                </Typography>
                <SampleComponent />
            </Box>
        </>
    )
  
}
  