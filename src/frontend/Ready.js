import React from 'react'
import Typography from '@mui/material/Typography'

function Ready() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "black", marginTop: "2rem", flexDirection: "column",paddingBottom:"40px" }}>
            <Typography variant="h6" style={{ color: "white",padding:"8px" }} align='center'>
                Ready to watch? Enter your email to create or restart your membership.
            </Typography>
            <div style={{ width: "90%", maxWidth: "36rem", display: "flex", justifyContent: "center", alignItems: "center",flexWrap:"wrap",gap:"16px",padding:"8px" }}>
                <input type="email" placeholder="Email address" style={{width:"70%", maxWidth: "20rem",height:"2rem"}} />
                <button style={{ width: "10rem",height:"2.4rem",color:"white",backgroundColor:"red",border:"none",borderRadius:"4px" }}>Get Started</button>
            </div>

        </div>
    )
}

export default Ready