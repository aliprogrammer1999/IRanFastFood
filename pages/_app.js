import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App({ Component, pageProps }) {

  return (<AnimatePresence>
    <Component {...pageProps} />
  </AnimatePresence>
  )
}
export default App
