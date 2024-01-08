/* React & NPM */
import { CssBaseline, ThemeProvider, Box, Theme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

/* Components */
import { ColorModeContext, useMode } from '@/hooks/theme';
import Topbar from '@/hooks/Topbar';
import Sidebar from '@/hooks/Sidebar';
import Dashboard from '@/pages/Dashboard';
import Team from '@/pages/Team'
import Contacts from '@/pages/Contacts';
import Invoices from './pages/Invoices';


function App() {

  const [theme, colorMode] = useMode();

  return (
   
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme as Partial<Theme>}>
        <CssBaseline />
        {/* Ameliore le Css et l'adpate a tous els navigateur */}
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Topbar />
              <main className='content'>
              <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              {/* <Route path='/form' element={<Form />} /> */}
              {/* <Route path='/bar' element={<Bar />} /> */}
              {/* <Route path='/pie' element={<Pie />} /> */}
              {/* <Route path='/line' element={<Line />} /> */}
              {/* <Route path='/faq' element={<FAQ />} /> */}
              {/* <Route path='/geography' element={<Geography />} /> */}
              {/* <Route path='/calendar' element={<Calendar />} /> */}
            </Routes>
          </main>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
