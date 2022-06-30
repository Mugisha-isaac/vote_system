
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from "./views/SignIn";
import SingUp from './views/SingUp';

function App() {
  return (
    <Router>
      <Routes path="*">
        <Route path="/" element={<SingUp />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
