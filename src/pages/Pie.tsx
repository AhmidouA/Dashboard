/* REACT & NPM */
import { Box } from '@mui/material'



/* Components */
import Header from '@/components/header/Header';
import PieChart from '@/components/piechart/PieChart';


const Pie = () => {
  return (
    <Box m='20px'>
        <Header title='Pie Chart' subtitle='Simple Pie Chart' />
        <Box height='75vh'>
            <PieChart />
        </Box>
    </Box>
  )
};

export default Pie;