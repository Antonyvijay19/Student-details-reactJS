import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Studentslist from './components/listofstudents';
import Favouritestudents from './components/favoritestudents';
import Studentcontextprovider from './components/studentcontext';
function App() {

    return(
        <>
        <BrowserRouter>

        <Studentcontextprovider>
        <Routes>
         
          <Route path="/" element={<Studentslist/>}></Route>
          <Route path="/favouritestudents" element={<Favouritestudents/>}></Route>
         
        </Routes>
        </Studentcontextprovider>
        </BrowserRouter>
        </>
    )

}

export default App;
