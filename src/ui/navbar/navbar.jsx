import './navbar.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import IconButtonsDark from '../buttons/switchStyle';
import BurggerMenu from '../buttons/burgger-menu';
import GTranslateIcon from '@mui/icons-material/GTranslate';

import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';


export default function Navbar({ mode, setMode }) {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const title = "< Carlos Dev />";
    
    
    return (
        <div className="navbar-personality" style={{ color: theme.palette.background }}>

            <header>
                <h3 color='primary'> {title} </h3>
            </header>
            <nav className='link-navbar'>
                <ul>
                    <li>
                        <Link to="/">
                            <p style={{ color: theme.palette.primary.contrastText }}>
                                {t('navAboutMe')}
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/proyects">
                            <p style={{ color: theme.palette.primary.contrastText }}>{t('navProyects')}</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='button-container'>
                <Stack>
                    <IconButton aria-label='burggerMenu' onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
                        <GTranslateIcon sx={{ color: theme.palette.primary.contrastText }} /> <p className='languaje-change' style={{ color: theme.palette.primary.contrastText }}>{t('navLanguaje')}</p>
                    </IconButton>
                </Stack>
                <IconButtonsDark mode={mode} setMode={setMode} id="icon" />
                <div className='burgger-button'>
                    <BurggerMenu />
                </div>
            </div>
        </div >
    )
}
Navbar.propTypes = {
    mode: PropTypes.string.isRequired,
    setMode: PropTypes.func.isRequired
}