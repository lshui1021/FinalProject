import '/src/components/style/global.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Sidebar from './components/layout/sidebar';

import Home from './components/homepage/Home';
import Report from './components/report/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Sidebar />
            <Header />
            <Home/>
            <Footer/>
          </>
        }/>
        <Route path="/report" element={
          <>
            <Header />
            <Report />
          </>
        }/>
      </Routes>
    </Router>
  )
}
export default App
