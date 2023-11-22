/**
 * src/pages/Home.jsx
 *
 * created by Lynchee on 7/28/23
 */

import React, { useState, useRef, useEffect } from 'react';
import { isIP } from 'is-ip';
import { useNavigate } from 'react-router-dom';
import lz from 'lz-string';

import Characters from '../components/Characters';
import Button from '@mui/material/Button';
import { getHostName } from '../utils/urlUtils';
import { signInWithGoogle } from '../components/Auth/SignIn';

const Home = ({
  isMobile,
  selectedCharacter,
  setSelectedCharacter,
  isPlaying,
  characterGroups,
  setCharacterGroups,
  setCharacterConfirmed,
  characterConfirmed,
  token,
  setToken,
  isLoggedIn,
  shouldPlayAudio,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Get characters
  useEffect(() => {
    setLoading(true);

    // Get host
    const scheme = window.location.protocol;
    const url = scheme + '//' + getHostName() + '/characters';
    let headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        setCharacterGroups(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  }, [setCharacterGroups, token]);

  const handleNextClick = async () => {
    const compressedCharacter = lz.compressToEncodedURIComponent(
      JSON.stringify(selectedCharacter)
    );
    const interval = setInterval(() => {
      shouldPlayAudio.current = true;
      clearInterval(interval);

      // TODO(UI): Hide loading animation
    }, 500);
    navigate(
      '/conversation?isCallViewParam=false&character=N4IgxgFghgTlYBcCmMD6BLAJiAXCAjAKwDsALAEzmH7kCclpYARqU5gBwAMTT TAZknpR xJCAA0IAHZQAtuLwAlJAC9JIAM4B7AK4wwikJiT8ougDYINAN23pDGbHgCiMABoB3bUygBNdAA5TnxaAAUAawBPAGUbACsANQ1zBAhtNFkFXBANdDkoAHMkVH0LHIgEBAAHTRwAenrNBAyipAA6Qu1tQoskKGr0TXawbTl6qE1NIYQLKPrdTRRS6ottKEx6 IBJcgBVAGZdCMSADyRCuSYLFxiALVP2bYBHCABFQM1pADYD vJOOQDvgaJwALREUjEfDgwicMBgYhMJFgoHkTBg0jcYhg2j4di0TEsdj8KFgTiEJCcdrxaqFFI2KAIWBOXDSSwWKRVTQ5FwAGRciRcgVQfIAggAhGJ5TSoVLpGC4MwWJYAXyAA&preferredLanguage=English&selectedDevice=default&selectedModel=gpt-3.5-turbo-16k&useSearchParam=false&useMultiOnParam=false&useEchoCancellationParam=false'
    );
  };

  const handleCreateCharacter = () => {
    if (!isLoggedIn.current) {
      signInWithGoogle(isLoggedIn, setToken).then(() => {
        if (isLoggedIn.current) {
          navigate('/create');
        }
      });
    } else {
      navigate('/create');
    }
  };

  return (
    <div className='home'>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <p className='header'>Choose Your Meditation Coach</p>

          <Characters
            isMobile={isMobile}
            characterGroups={characterGroups}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
            isPlaying={isPlaying}
            characterConfirmed={characterConfirmed}
          />

          <Button
            variant='contained'
            onClick={handleNextClick}
            fullWidth
            size='large'
            disabled={!selectedCharacter}
            sx={{
              '&.Mui-disabled': {
                backgroundColor: '#BEC5D9',
                color: '#636A84',
              },
              textTransform: 'none',
            }}
          >
            Next
          </Button>
        </>
      )}
    </div>
  );
};

export default Home;
