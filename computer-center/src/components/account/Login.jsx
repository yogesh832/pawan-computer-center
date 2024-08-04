import { Box, TextField, Button, styled, Typography } from "@mui/material";
import loginimg from "../../assets/Images/loginpage.png";

const Login = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '30px', fontWeight: '700', fontSize: '60px' }}>Join Us</h1>
            <Component>
                <Loginimg>
                    <Image src={loginimg} alt="loginimg" />
                </Loginimg>

                <Wrapper>
                    <TextField label="Username" variant="filled" fullWidth sx={{ maxWidth: '100%', marginBottom: '16px' }} />
                    <TextField label="Password" type="password" variant="filled" fullWidth sx={{ maxWidth: '100%', marginBottom: '16px' }} />
                    <Button variant="contained" fullWidth>Login</Button>
                    <CenteredText variant="body2">OR</CenteredText>
                    <Button variant="outlined" fullWidth>Create an Account</Button>
                </Wrapper>
            </Component>
        </>
    );
};

export default Login;

const Component = styled(Box)`
   display: flex;
   flex-direction: row;
   align-items: center; 
   justify-content: center; 
   margin: auto;
   padding: 20px;
   min-height: 100vh; 

   @media (max-width: 600px) {
       flex-direction: column;
       padding: 20px; 
   }
`;

const Image = styled('img')({
    width: '100%', 
    maxWidth: '500px',
    margin: 'auto',
    marginRight: '40px',
    display: 'block', 
    padding: '20px 0',
});

const Loginimg = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end; 
    margin-bottom: 20px; 

    @media (max-width: 600px) {
        justify-content: center; 
    }
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    width: 100%;
   
    max-width: 500px;

    & > button, & > p {
        margin-top: 20px; 
    }

    & > * {
        margin-top: 16px; 
    }

    @media (max-width: 600px) {
        padding: 15px;
        
        & > * {
            margin-top: 12px;
        }
    }
`;

const CenteredText = styled(Typography)`
    text-align: center;
    margin: 16px 0; 
`;
