import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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
import HeaderB from '../../components/header';
import { Alert } from '@mui/material';
import axios from 'axios';



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
  const [error, setError] = React.useState('');
  const [accountCreated, setAccountCreated] = React.useState(false);
  const navigate = useNavigate();

  const generateUniqueAccountNumber = () => {
    const existingAccountNumbers = []; // Array to store existing account numbers
  
    // Populate existing account numbers from Google Sheet or any other source
    // For now, let's assume you have an array of existing account numbers
  
    // Generate a random 7-digit number
    let accountNumber = Math.floor(1000000 + Math.random() * 9000000);
  
    // Check if the generated number already exists
    while (existingAccountNumbers.includes(accountNumber)) {
      // If the number exists, generate a new one
      accountNumber = Math.floor(1000000 + Math.random() * 9000000);
    }
  
    // Once a unique number is generated, return it
    return accountNumber;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    const formData = {
      _id: generateUniqueAccountNumber(),  // Ensure this matches your backend expected data
      fullname: data.get('fullname'),
      dob: formatDate(data.get('DOB')),
      email: data.get('email'),
      password,
      accountNumber: generateUniqueAccountNumber(),
    };
    

    try {
      const response = await axios.post('http://localhost:5002/api/createAccount', formData);
      if (response.status === 201) {
        setAccountCreated(true);
        setTimeout(() => {
          navigate('/Login', { state: { accountCreated: true } });
        }, 2000);
      }
    } catch (error) {
      console.error('Error creating account:', error);
      setError('Error creating account. Please try again.');
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
  };

  
  

  

  return (
    <ThemeProvider theme={theme}>
      <HeaderB />
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
            {error && <Alert severity="error">{error}</Alert>}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="fullname"
                label="Full Name"
                name="fullname"
                autoComplete="fullname"
                autoFocus
                InputLabelProps={{
                    shrink: true, 
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
                  shrink: true,
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
                name="confirmPassword"
                label="Re-Enter your Password"
                type="password"
                id="confirmPassword"
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
              />
              
              <Button type="submit" color="roktoLaal" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
      {accountCreated && (
        <div>
          <p>Account created!</p>
          {/* You can style the message or add other elements here */}
        </div>
      )}
    </ThemeProvider>
  );
}


export default CreateAccount