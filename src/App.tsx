/* React & NPM */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

/* Components */
import { ColorModeContext, useMode } from '@/hooks/theme';
import Topbar from '@/pages/global/Topbar';
import Sidebar from '@/pages/global/Sidebar';
import Dashboard from './pages/dashboard';



function App() {

  const [ theme, colorMode ] = useMode();


  return (
   
    <ColorModeContext.Provider value={{ ...colorMode, toggleColorMode: () => {} }}>
    {/* Cette partie utilise l'opérateur de spread (...) pour créer une copie de l'objet colorMode. Ensuite, une nouvelle propriété toggleColorMode est ajoutée à cet objet, et elle est initialisée avec une fonction vide (() => {}). */}     
      <ThemeProvider theme={theme as Partial<{ toggleColorMode: () => void; }>}>
        {/* Utilisez Partial pour indiquer que le thème peut être partiel ou complet */}
        <CssBaseline />
        {/* Ameliore le Css et l'adpate a tous els navigateur */}
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              {/* <Route path='/team' element={<Team />} /> */}
              {/* <Route path='/contacts' element={<Contact />} /> */}
              {/* <Route path='/invoices' element={<Invoices />} /> */}
              {/* <Route path='/form' element={<Form />} /> */}
              {/* <Route path='/bar' element={<Bar />} /> */}
              {/* <Route path='/pie' element={<Pie />} /> */}
              {/* <Route path='/line' element={<Line />} /> */}
              {/* <Route path='/faq' element={<FAQ />} /> */}
              {/* <Route path='/geography' element={<Geography />} /> */}
              {/* <Route path='/calendar' element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
