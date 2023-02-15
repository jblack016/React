import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions" />
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    First Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus quidem sed illo rem, corrupti architecto iusto quibusdam obcaecati maiores asperiores veniam, itaque ducimus minima sunt neque sequi vero pariatur!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Second Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus quidem sed illo rem, corrupti architecto iusto quibusdam obcaecati maiores asperiores veniam, itaque ducimus minima sunt neque sequi vero pariatur!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Third Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus quidem sed illo rem, corrupti architecto iusto quibusdam obcaecati maiores asperiores veniam, itaque ducimus minima sunt neque sequi vero pariatur!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Forth Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus quidem sed illo rem, corrupti architecto iusto quibusdam obcaecati maiores asperiores veniam, itaque ducimus minima sunt neque sequi vero pariatur!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Fifth Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus quidem sed illo rem, corrupti architecto iusto quibusdam obcaecati maiores asperiores veniam, itaque ducimus minima sunt neque sequi vero pariatur!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}


export default FAQ;