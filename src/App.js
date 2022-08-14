import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Counter from './components/Counter';

import ComponentDidUpdateDemo from './components/lifeCycleDemo/ComponentDidUpdateDemo';
import GetDerivedStateFromPropsDemo from './components/lifeCycleDemo/GetDerivedStateFromPropsDemo';
import LifeCycle from './components/lifeCycleDemo/LifeCycle';

import prodDetails from './components/search-products/data';
import MobileProducts from './components/search-products/MobileProducts';
// import Timer from './components/Timer';

import contactDetails from "./components/contact-manager/ContactInfo";
import ContactManager from "./components/contact-manager/ContactManager";
import ContactManagerAPI from './components/api-call/ContactManagerAPI';

import TaskManager from './components/task-manager/TaskManager';
import Data from './components/task-manager/TasksData'
import SelfContact from './components/self-contact/SelfContact';
import UseState from './components/functionalComponents/UseState';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Counter/>}/>
          {/* <Route path='/timer' element={<Timer/>}/> */}
          <Route path='/life' element={<LifeCycle/>}/>
          <Route path='/compupdate' element={<ComponentDidUpdateDemo/>}/>
          <Route path='/gdsfp' element={<GetDerivedStateFromPropsDemo/>}/>
          <Route path='/products' element={<MobileProducts data={prodDetails}/>}/>
          <Route path='/contact' element={<ContactManager data={contactDetails}/>}/>
          <Route path='/apicontact' element={<ContactManagerAPI/>}/>
          <Route path='/task' element={<TaskManager  data={Data}/>}/> 
          <Route path='self' element={<SelfContact/>}></Route>  
          <Route path='functional' element={<UseState/>} />    
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
