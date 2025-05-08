import '/src/components/style/global.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/layout/header';
import Intro from './components/homepage/introduction';
import ProductCarousel from './components/homepage/product-carousel';
import Intern from './components/homepage/intern';

import Footer from './components/layout/footer';
import Abstract from './components/report/abstract';
import Background from './components/report/problem-background';
import Objective from './components/report/project-objective';
import Methodology from './components/report/methodology-and-tools';
import Design from './components/report/system-design';
import PreResults from './components/report/preliminary-results';
import Discussion from './components/report/discussion';
import Conclusion from './components/report/conclusion-and-future';
import Sidebar from './components/layout/sidebar';

function App() {

  return (
    <>
      <Sidebar />
      <Header />

      <Intro />
      <ProductCarousel/>
      <Intern/>
      <Footer/>
      
    </>
  )
}
export default App
