import React from "react";
import { Grid, Icon, IconButton } from "@material-ui/core";
import { MTableBodyRow } from "material-table";
import MailIcon from '@mui/icons-material/Mail';

const CustomRow = (props) => {

    const overlayStyle = {width : "100%", position : "absolute", padding : "3.8% 0px 0px 5%"}

    return(      
        <Grid sm = {2} style={{display : "contents"}}>
            <Grid align = "right" style = {overlayStyle}>
                <Grid >
                    <IconButton title = 'Send Mail'>
                        <MailIcon/>
                    </IconButton>
                </Grid>

            </Grid>
            <MTableBodyRow {...props}/>
        </Grid>
        
    )
}

export default CustomRow;