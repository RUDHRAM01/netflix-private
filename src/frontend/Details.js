import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";

function Details({ title, summary }) {
    return (
        <Accordion style={{ padding: "5px", margin: "5px", width: "80%",backgroundColor:"#2d2d2d",color:"white",fontSize:"1.4rem" }}>
            <AccordionSummary
                expandIcon={<AiOutlineArrowDown style={{color:"white"}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography style={{fontSize:"1.4rem"}}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography style={{fontSize:"1.4rem"}}>
                    {summary}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Details