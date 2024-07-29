
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import loginimg from "../../assets/Images/loginpage.png";

const Component = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center; 
   justify-content: center; 
   width: 90%;
   max-width: 400px;
   margin: auto;
   padding: 20px;
   min-height: 100vh; 

   @media (max-width: 600px) {
     width: 100%; 
   }
`;


const Image = styled('img')({
    width: '100%', 
    maxWidth: '500px',
    margin: 'auto',
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

    & > button,& > p {
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

const Login = () => {
    return (
        <Component>
            <Loginimg>
                <Image src={loginimg} alt="loginimg" /> 
            </Loginimg>

            <Wrapper>
                <TextField label="Username" variant="filled" fullWidth />
                <TextField label="Password" type="password" variant="filled" fullWidth />
                <Button variant="contained" fullWidth>Login</Button>
                <CenteredText variant="body2">OR</CenteredText>
                <Button variant="outlined" fullWidth>Create an Account</Button>
            </Wrapper>
        </Component>
    );
};

export default Login;

