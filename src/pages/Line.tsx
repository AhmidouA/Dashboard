/* REACT & NPM */
import { Box } from '@mui/material'



/* Components */
import Header from '@/components/header/Header';
import LineChart from '@/components/linechart/LineChart';


const Line = () => {
  return (
    <Box m='20px'>
        <Header title='Line Chart' subtitle='Simple Line Chart' />
        <Box height='75vh'>
            <LineChart />
        </Box>
    </Box>
  )
};

export default Line;