import React, { useState } from 'react'; 
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthNavbar from './AuthNavbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import { FaGithub } from "react-icons/fa";
import { useLoginUserMutation, useRegisterUserMutation } from '../../features/Users/UserApi';
import { saveUser } from '../../Slice/AuthSlice';
import { useDispatch } from 'react-redux';

function RegisterLogin() {
    const location = useLocation();
    const page = location.pathname;

    if (page === '/login') {
        return <Login />;
    } else if (page === '/register') {
        return <Register />;
    }
}

function Login() {
    const [isPro, setIsPro] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    let [loginData, setLoginData]=useState({
        email:'',
        password:''
    })

    const [loginUser, { isLoading, error }]=useLoginUserMutation();

    let dispatch=useDispatch();

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setLoginData({...loginData, [name]:value});
    }

    const handleSubmit=async (e) => { 
        e.preventDefault();
        console.log(loginData);
        try {
            const response=await loginUser({loginData});
            console.log("response ", response);
            if(response.data.statusCode == 200)
            {
                alert("User Logged In Successfully ");
                dispatch(saveUser(response.data.data));
            }
        } catch (error) {
            console.log("Error occured while login User ", error.message);
        }
    }

    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
          const githubAuthUrl = 'https://github.com/login/oauth/authorize';
          const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
          const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URL;
          console.log('Client ID:', clientId);
          console.log('Redirect URI:', redirectUri);
          window.location.href = `${githubAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}`;
          const code = new URLSearchParams(window.location.search).get('code');
          const accessToken = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              client_id: 'Iv23liPTLhAsRv9Ibdct',
              client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
              code: code,
            }),
          }).then(response => response.json()).then(data => data.access_token);
    
    
          localStorage.setItem('githubAccessToken', accessToken);
    
          setIsLoggedIn(true);
          navigate('/');
        } catch (error) {
          console.error('Error during GitHub login:', error);
        }
      };
    return <div>
        <Navbar />
        <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
            <AuthNavbar />
            <div>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col gap-[1rem] justify-center mt-[3rem]'>
                        <TextField
                            required
                            id="outlined-required"
                            name="email"
                            label="email"
                            defaultValue={loginData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            defaultValue={loginData.password}
                            onChange={handleChange}
                        />
                        <Button variant="contained" type='submit'>Login</Button>
                    </div>
                </Box>
                <button className="github-button flex items-center gap-2 mt-[2rem]" onClick={() => handleLogin()}>
                    <FaGithub />
                    <span>Login or Register via GitHub</span>
                </button>
            </div>
        </div>
    </div>
}

function Register() {
    const [isPro, setIsPro] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let [registerData, setRegisterData]=useState({
        username:'',
        email:'',
        password:''
    })

    let [registerUser, {isLoading, error}]=useRegisterUserMutation();

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setRegisterData({...registerData, [name]:value});
    }

    const handleRegister=async (e) => {
        e.preventDefault();
        console.log(registerData);
        try{
            const response=await registerUser({registerData});
            console.log(response);
            if(response.data.statusCode == 200){
                alert("User Registered Successfully ");
            }
        }catch(error){
            console.log("Error occured while registering user ", error.message);
        }
    }

    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
          const githubAuthUrl = 'https://github.com/login/oauth/authorize';
          const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
          const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URL;
          console.log('Client ID:', clientId);
          console.log('Redirect URI:', redirectUri);
          window.location.href = `${githubAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}`;
          const code = new URLSearchParams(window.location.search).get('code');
          const accessToken = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              client_id: 'Iv23liPTLhAsRv9Ibdct',
              client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
              code: code,
            }),
          }).then(response => response.json()).then(data => data.access_token);
    
    
          localStorage.setItem('githubAccessToken', accessToken);
    
          setIsLoggedIn(true);
          navigate('/');
        } catch (error) {
          console.error('Error during GitHub login:', error);
        }
      };
    return <div>
        <Navbar />
        <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
            <AuthNavbar />
            <div>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleRegister}
                >
                    <div className='flex flex-col gap-[1rem] justify-center mt-[3rem]'>
                        <TextField
                            required
                            id="outlined-required"
                            name="username"
                            label="username"
                            defaultValue={registerData.username}
                            onChange={handleChange} 
                        />
                        <TextField
                            required
                            id="outlined-required"
                            name="email"
                            label="email"
                            defaultValue={registerData.email} 
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-password-input"
                            name="password"
                            label="Password"
                            type="password"
                            defaultValue={registerData.password}
                            onChange={handleChange} 
                        />
                        <Button variant="contained" type='submit'>Register</Button>
                    </div>
                </Box>
                <button className="github-button flex items-center gap-2 mt-[2rem]" onClick={() => handleLogin()}>
                    <FaGithub />
                    <span>Login or Register via GitHub</span>
                </button>
            </div>
        </div>
    </div>
}


export default RegisterLogin; 