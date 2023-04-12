import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import EmulatorFrame from "./EmulatorFrame";


export default function SampleComponent() {

    return (
        <>
            <Box sx={{
                py: 5,
                textAlign: 'center'
            }}>
                <Typography variant="h1">
                    MEDIA DEVICE ARCHITECTURE
                </Typography>
                <Box sx={{ py: 5, mx: 4 }}>
                    <Divider color="#AAAAAA" />
                </Box>
                <Typography variant="h3" pb={10} >
                    CS 2261 @ GT
                </Typography>
                <Box sx={{ width: "480px", height: "320px", m: "auto"}}>
                    <EmulatorFrame game="" />
                </Box>
                <Typography variant="h1" color="secondary.main" >
                    Think
                </Typography>
                <Typography variant="h2" color="tertiary.main" >
                    of a
                </Typography>
                <Typography variant="h3" color="secondary.main" >
                    creative
                </Typography>
                <Typography variant="h4" color="tertiary.main" >
                    name
                </Typography>
                <Typography variant="h5" color="secondary.main" >
                    on the spot
                </Typography>
                <Typography variant="h6" color="primary.main" >
                    More coming soon :D
                </Typography>
            </Box>
        </>
    )
}