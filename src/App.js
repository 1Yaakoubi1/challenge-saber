import '../src/Components/css/style.css';
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Contact from './Components/contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
