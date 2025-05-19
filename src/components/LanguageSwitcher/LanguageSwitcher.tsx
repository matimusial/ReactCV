import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng: 'en' | 'pl') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={() => handleChangeLanguage('en')}>
        EN
      </Button>
      <Button variant="outlined" onClick={() => handleChangeLanguage('pl')}>
        PL
      </Button>
    </Stack>
  );
};

export default LanguageSwitcher;
