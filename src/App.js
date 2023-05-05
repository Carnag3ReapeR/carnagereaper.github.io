import './App.css';
import Navbar from "./Components/Navbar"
import Test from "./Components/Test"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Gaming from "./Components/Gaming"
import Videos from "./Components/Videos"
import Contact from "./Components/Contact"

function App() {
  return (
    <main className='text-blue-400 bg-black body-font'> 
      <Navbar />
      <Test />
      <About />
      <Skills />
      <Gaming />
      <Videos />
      <Contact />
    </main>
  );
}

export default App;
