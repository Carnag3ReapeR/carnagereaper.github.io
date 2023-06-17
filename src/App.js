import './App.css';
import Navbar from "./Components/Navbar"
import Test from "./Components/Test"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Gaming from "./Components/Gaming"
import Videos from "./Components/Videos"
import Contact from "./Components/Contact"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle,faCode,faPerson, faMailBulk, faInfo, faFile, faGamepad, faHeadset} from '@fortawesome/free-solid-svg-icons';
import { Routes,Route, Navigate } from 'react-router-dom';

function App() {
  library.add(faInfoCircle,faCode,faPerson,faMailBulk,faInfo,faFile,faGamepad,faHeadset)
  return (
    <div className='App bg-black text-blue-800'>
      <Navbar/>
        <Routes>  
        <Route path="*" element={<Navigate to="/About" replace />} />        
          <Route path="/Test" element={<Test/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Gaming" element={<Gaming/>}/>
          <Route path="/Videos" element={<Videos/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </div>
   
  );
}

export default App;
