import '../styles/main.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip} from 'react-toastify';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition= {Flip}
/>

    </>
  )
}
