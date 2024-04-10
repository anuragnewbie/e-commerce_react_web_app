import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";

const Login = () => {
    const [ userEmail, setUserEmail ] = React.useState('');
    const [ userPassword, setUserPassword ] = React.useState('');

    // handling user login
    const handleUserLogin = (event) => {
        event.preventDefault();

        let userObj = {
            username: userEmail,
            password: userPassword
        }

        axios
            .post("https://fakestoreapi.com/auth/login", userObj)
            .then((res) => {
                if(res.status === 200) {
                    localStorage.setItem('token', res?.data?.token);
                    window.location.href = '/allProducts';
                }
            })
            .catch(error => {
                console.log(error);
                alert(error?.response?.data);
            });
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography sx={{ textAlign: 'center', marginBottom: '10px' }} component="h1" variant="h5">
          Login
        </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={ userEmail }
            onChange={ (event) => { setUserEmail(event.target.value) } }
            autoComplete="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={ userPassword }
            onChange={ (event) => { setUserPassword(event.target.value) } }
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={ (event) => { handleUserLogin(event) } }
          >
            Sign In
          </Button>
      </div>
    </Container>
  );
}

export default Login;
