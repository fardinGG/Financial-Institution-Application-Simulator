import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


let theme = createTheme({
    
  });
  theme = createTheme(theme, {
    palette: {
      roktoLaal: theme.palette.augmentColor({
        color: {
          main: '#e30909',
        },
        name: 'roktoLaal',
      }),
    },
  });

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a color="inherit" href="#">
        T Bank Inc.
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



function CreateAccount() {
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(images/background.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 4, bgcolor: 'red' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create an Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="Full Name"
                label="Full Name"
                name="fullname"
                autoComplete="fullname"
                autoFocus
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="DOB"
                label="Date Of Birth"
                name="DOB"
                type="date"
                autoComplete="dob"
                autoFocus
                
                InputLabelProps={{
                  shrink: true, // Ensures the label stays above the field
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter your Password"
                type="password"
                id="password"
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Re-Enter your Password"
                type="password"
                id="password"
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
              />
              
              <Button
                type="submit"
                color="roktoLaal"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create an Account
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link to='/Login'>Already Have an Account? Log In</Link>
                  
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


export default CreateAccount