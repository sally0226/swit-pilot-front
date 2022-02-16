import { RecoilRoot } from 'recoil';
import ResetStyle from './css/reset';
import Router from './routes/router';

function App() {
  return (
    <>
      <ResetStyle />
      <RecoilRoot>
        <Router />
        <div id='root-modal' />
      </RecoilRoot>
    </>
  );
}

export default App;
