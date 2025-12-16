import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyandPloicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationPolicy from './pages/CancellationRefund';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/cancel-refund' element={<CancellationPolicy />} />
      </Routes>
    </>
  )
}

export default App
