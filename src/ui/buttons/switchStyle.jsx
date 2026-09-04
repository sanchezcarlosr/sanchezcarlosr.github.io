import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { FormControl } from '@mui/material';

import { keyframes, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const fadeIn = keyframes` 0% { opacity: 0; transform: translateY(-5px); } 50% { opacity: 0.5; transform: translateY(2px);} 100% { opacity: 1; transform: translateY(0px);} `;
const AnimatedIconButton = styled(IconButton)(
    ({ theme }) => ({

    })
);

export default function IconButtonsDark({ mode, setMode }) {
    const theme = useTheme();
    const [key, setKey] = useState(0);

    const handleClick = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
        setKey(preventKey => preventKey ? 0 : 1)
    };


    return (
        <FormControl sx={{ backgroundColor: theme.palette.primary.light, borderRadius: 1.5, opacity: 0.8, animation: `${fadeIn} 1s ease-in-out` }} key={key}>
            <Stack direction="row" spacing={1} onClick={handleClick}>
                <AnimatedIconButton>
                    {
                        mode === 'dark' ? <NightlightIcon sx={{ color: '#fff' }} /> : <LightModeIcon />
                    }
                </AnimatedIconButton>
            </Stack>
        </FormControl>
    );
}