import { Box, TextField, Button } from "@mui/material";
import { BoxTitle, Title } from './styles';

export const SignBox = ((): JSX.Element => {
  return (
    <Box sx={{ width: '500px', height: '500px', padding: '15px' }}>
      <BoxTitle>
        <Title>Sign In</Title>
      </BoxTitle>
      
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />

      <Button variant="contained">Sign in</Button>
    </Box>
  )
});