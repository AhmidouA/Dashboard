/* REACT & NPM */
import { Box } from '@mui/material'
import { useTheme } from '@mui/material';



/* Components */
import Header from '@/components/header/Header';
import GeographyChart from '@/components/geographychart/GeographyChart';
import { tokens } from '@/hooks/theme'


const Line = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return (
    <Box m='20px'>
        <Header title='Geography Chart' subtitle='Simple Geography Chart' />
        <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
            <GeographyChart />
        </Box>
    </Box>
  )
};

export default Line;