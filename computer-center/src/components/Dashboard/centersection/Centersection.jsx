import React from "react";
import { alignPropType } from "react-bootstrap/esm/types";

const Centersection = () =>{

    const image = {
        height:'100px', 
        width:'150px'
    };
    const container ={
        backgroundColor: '#fff', 
        padding: '20px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    };
    const linkStyle = {
        margin: '10px 0'
    };
    const alignformat =
    {
        width: '100%',
        display:'flex',
        alignItems:'center',
        gap :'200px', 
        // justifyContent:'center'
    }

    return(
        <>
        <h1>Centre Documents</h1>
        <div style={container}>
            <div style={alignformat}>
            <h4 style={{minWidth: '150px'}}>Trade License</h4>
            <a href="https://i.imgur.com/PUb5mrm.jpeg" target="_blank" style={linkStyle}><img style={image} src="https://i.imgur.com/PUb5mrm.jpeg" /></a>
            </div>
            
            <div style={alignformat}>
            <h4 style={{minWidth: '150px'}}>Address Proof</h4>
           
            <a href="https://i.imgur.com/PUb5mrm.jpeg" target="_blank" style={linkStyle}><img style={image} src="https://i.imgur.com/PUb5mrm.jpeg" /></a>
            
            <a href="https://i.imgur.com/PUb5mrm.jpeg" target="_blank" style={linkStyle}><img style={image} src="https://i.imgur.com/PUb5mrm.jpeg" /></a>
            </div>

            <div style={alignformat}>
            <h4 style={{minWidth: '150px'}}>Pan Card</h4>
            <a href="https://i.imgur.com/PUb5mrm.jpeg" target="_blank" style={linkStyle}><img style={image} src="https://i.imgur.com/PUb5mrm.jpeg" /></a>
            </div>

            <div style={alignformat}>
            <h4 style={{minWidth: '150px'}}>Voter Card</h4>
            
            <a href="https://i.imgur.com/PUb5mrm.jpeg" target="_blank" style={linkStyle}><img style={image} src="https://i.imgur.com/PUb5mrm.jpeg" /></a>
           
            <a href="https://i.imgur.com/PUb5mrm.jpeg" target="_blank" style={linkStyle}><img style={image} src="https://i.imgur.com/PUb5mrm.jpeg" /></a>
            </div>
        </div>
        </>
    )
}

export default Centersection