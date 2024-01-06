/* React & NPM */
import { Box } from "@mui/material"


/* Component */
import Header from "@/components/header/Header"


const Dashboard = () => {
  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title='Dashboard' subtitle='Bienvenu sur votre Dashboard'/>
      </Box>
    </Box>
  )
}

export default Dashboard