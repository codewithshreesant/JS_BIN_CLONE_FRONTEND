import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import CardApp from './Cards';

const Profeature = () => {
  const [isPro, setIsPro] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
  const features = [
    { name: 'Support JS Bin\'s continued operation', isPro: false },
    { name: 'Asset uploading', isPro: false },
    { name: 'Private bins', isPro: true },
    { name: 'Embeds & custom CSS', isPro: true },
    { name: 'Vanity URLs', isPro: true },
    { name: 'Email support', isPro: true },
    { name: 'Full, unmodified output', isPro: true },
    { name: 'Save bins to Gist', isPro: false },
    { name: 'Codecasting (unlimited)', isPro: false },
    { name: 'Live reload (unlimited)', isPro: false },
    { name: 'Custom starting code', isPro: true },
  ];

  const handleProUpgrade = () => {
    setIsPro(true);
  };

  return (
    <div className='w-full flex justify-center'>
      <div className="grid grid-cols-2 gap-8 w-[70vw]">
        <div>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <table className="w-full">
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td>{feature.name}</td>
                  <td>
                    {feature.isPro ? (
                      isPro ? (
                        <CheckIcon className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="text-gray-400">Pro</span>
                      )
                    ) : (
                      <CheckIcon className="w-5 h-5 text-green-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4">
            ...and many other features including preprocessors, linting and more
          </p>
          <p className="mt-2">
            We're also working on a full read & write API for Pro users, so watch our
            blog for the latest releases.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Pro Upgrade</h2>
          <div className="border p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">1. Sign in</h3>
                <button class="github-button flex items-center gap-2" onClick={() => handleLogin()}>
                  <FaGithub />
                  <span>Login or Register via GitHub</span>
                </button>
              <li>
                Or <span className='underline'>use your email address</span>
              </li>
            <h3 className="text-lg font-semibold mt-4">2. Payment</h3>
            <div className="flex items-center">
              <input
                type="radio"
                name="plan"
                value="yearly"
                checked={isPro}
                onChange={() => handleProUpgrade()}
                className="mr-2"
              />
              <label htmlFor="yearly">Yearly £99.99 - saving £55</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                name="plan"
                value="monthly"
                checked={!isPro}
                onChange={() => handleProUpgrade()}
                className="mr-2"
              />
              <label htmlFor="monthly">Monthly £12.99</label>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="border p-2 rounded-md w-full mt-1"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="card-number">Card details</label>
              <div className="flex">
                <input
                  type="text"
                  id="card-number"
                  placeholder="Card number"
                  className="border p-2 rounded-md w-full mr-2"
                />
                <div className="flex-shrink-0">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border p-2 rounded-md w-full mr-2"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border p-2 rounded-md w-full"
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">
              Upgrade!
            </button>
          </div>
        </div>
      </div>
      {/* <CardApp /> */}
    </div>
  );
};

export default Profeature;