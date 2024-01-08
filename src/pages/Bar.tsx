/* REACT & NPM */
import { Box } from '@mui/material'



/* Components */
import Header from '@/components/header/Header';
import BarChart from '@/components/barchart/BarChart'


const Bar = () => {
  return (
    <Box m='20px'>
        <Header title='Bar Chart' subtitle='Simple Bar Chart' />
        <Box height='75vh'>
            <BarChart />
        </Box>
    </Box>
  )
};

export default Bar;