/* React & NPM */
import { CssBaseline, ThemeProvider } from '@mui/material';

/* Components */
import { ColorModeContext, useMode } from '@/hooks/theme';


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
          <main className='content'>
            Hello World
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
