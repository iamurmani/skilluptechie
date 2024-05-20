import React, { useState } from 'react';
import { TextField, Button, IconButton, Container, Typography, Box, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/admin/loginAdmin', {
                username,
                email,
                password,
            });
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.jwt);
            toast.success('Login successful!');
        } catch (error) {
            console.error('Error logging in:', error.response.data);
            setError('Login failed. Please check your credentials and try again.');
            toast.error('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <>
            <Container
                component="main"
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    bgcolor: 'transparent',
                    overflow: { xs: 'hidden', md: 'auto' },
                    position: 'relative',
                    minHeight: '100vh',
                    pb: 10
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        mt: 3,
                    }}
                >
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: { xs: 3, md: 0 } }}
                    >
                        <iframe
                            src="https://lottie.host/embed/51045ba4-55bf-40a2-813a-8abf68fa2ee3/OH5MLrt1xP.json"
                            width="100%"
                            height="400px"
                            style={{ maxWidth: '100%' }}
                            title="Lottie Animation"
                        ></iframe>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '400px',
                            ml: { md: 6 },
                        }}
                    >
                        <Typography variant="h5" component="h2" sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 3 }}>
                            <span className='font-bold'>Login to your Account</span>
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="username"
                                    label="User Name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="email"
                                    label="Email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ mb: 3, position: 'relative' }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="password"
                                    label="Password"
                                    type={passwordVisible ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={togglePasswordVisibility}
                                                edge="end"
                                            >
                                                {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        ),
                                    }}
                                />
                            </Box>
                            {error && (
                                <Typography color="error" sx={{ mb: 3 }}>
                                    {error}
                                </Typography>
                            )}
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 3 }}>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Container>
            <svg
                viewBox="0 0 1440 320"
                height="150px"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    zIndex: -1
                }}
            >
                <path fill="#5AB2FF" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,160C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <ToastContainer />
        </>
    );
}

export default LoginPage;
