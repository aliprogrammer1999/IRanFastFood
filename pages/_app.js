import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps }) {

  return (<AnimatePresence>
    <Component {...pageProps} />
  </AnimatePresence>
  )
}
export default App
