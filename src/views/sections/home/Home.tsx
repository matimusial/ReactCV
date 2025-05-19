import React from 'react';
import { Container, Box, Typography, Button, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Download } from '@mui/icons-material';

import NavPanel from '../../../components/NavPanel/NavPanel.tsx';
import SocialButton from '../../../components/SocialButton/SocialButton.tsx';
import VantaBackground from '../../../components/VantaBackground/VantaBackground.tsx';

import cv from '../../../assets/MateuszMusiałCV.pdf';
import avatar from '../../../assets/avatar.jpg';

function downloadCV(): void {
  const link = document.createElement('a');
  link.href = cv;
  link.download = 'MateuszMusialCV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        color: '#fff',
      }}
    >
      <VantaBackground />
      <NavPanel />
      <Container
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '6rem',
          '@media (max-width:700px)': {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '3rem',
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            '@media (max-width:700px)': {
              maxWidth: '100%',
              alignItems: 'center',
            },
          }}
        >
          <Typography variant="h5">{t('home.greeting')}</Typography>
          <Typography variant="h2" component="h1">
            {t('home.firstname')} <br />
            {t('home.lastname')}
          </Typography>
          <Typography variant="h4">
            {t('home.preintro')}{' '}
            <Box component="span" sx={{ color: 'var(--color-green)' }}>
              {t('home.lightintro')}
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ margin: '1rem 0 2rem', color: '#ccc' }}>
            {t('home.description')}
          </Typography>

          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <SocialButton href="https://www.linkedin.com/in/matimusial/" ariaLabel="LinkedIn">
              <LinkedInIcon fontSize="large" />
            </SocialButton>
            <SocialButton href="https://github.com/matimusial" ariaLabel="GitHub">
              <GitHubIcon fontSize="large" />
            </SocialButton>
          </Box>

          <Button
            variant="contained"
            endIcon={<Download />}
            onClick={downloadCV}
            sx={{
              alignSelf: 'start',
              color: 'rgb(24,26,34)',
              backgroundColor: 'var(--color-green)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px) scale(1.03)',
                boxShadow: '0 4px 10px var(--color-dark-green)',
              },
            }}
          >
            {t('home.download')}
          </Button>
        </Box>

        <Box
          sx={{
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(170,255,0,0.3) 0%, rgba(0,0,0,0) 70%)',
            boxShadow: '0 0 2px 2px rgba(170,255,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '@media (max-width:900px)': {
              width: 250,
              height: 250,
            },
            '@media (max-width:600px)': {
              width: 180,
              height: 180,
            },
            '@media (max-width:700px)': {
              display: 'none',
            },
          }}
        >
          <Avatar
            src={avatar}
            alt="profilePicture"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              boxShadow: '0 0 0 1px #0a0f0a',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
