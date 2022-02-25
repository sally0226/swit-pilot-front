import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetStyle from './css/reset';
import Router from './routes/router';

const App = () => {
  return (
    <>
      <ResetStyle />
      <RecoilRoot>
        <Router />
        <div id='root-modal' />
      </RecoilRoot>
      <ToastContainer />
    </>
  );
};

export default App;
