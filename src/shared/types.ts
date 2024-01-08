import {Theme } from '@mui/material';


export type ColorModeType = 'dark' | 'light';

export type formatDateType = number | Date;

export type ColorModeContextType = {
    toggleColorMode: () => void;
    
};

export type ExtendedTheme = Theme & ColorModeContextType;