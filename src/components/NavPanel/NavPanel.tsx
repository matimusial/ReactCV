import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

interface NavPanelProps {
  onMenuClick: () => void;
}

const NavPanel: React.FC<NavPanelProps> = ({ onMenuClick }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const links: Array<{ key: string; href: string }> = [
    { key: 'home', href: '#home' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'stack', href: '#stack' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: !isMobile ? 'center' : 'end',
          alignItems: 'center',
        }}
      >
        {isMobile ? (
          <IconButton onClick={onMenuClick} edge="end" aria-label="menu" sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: '1.5rem' }}>
            {links.map(({ key, href }) => (
              <Button
                key={key}
                href={href}
                sx={{
                  color: key === 'home' ? 'var(--color-green)' : '#ccc',
                  fontWeight: key === 'home' ? 600 : 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  transform: key === 'home' ? 'scale(1.12)' : 'scale(1)',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    color: 'var(--color-green)',
                    transform: 'scale(1.12)',
                  },
                }}
              >
                {t(`nav.${key}`)}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavPanel;
