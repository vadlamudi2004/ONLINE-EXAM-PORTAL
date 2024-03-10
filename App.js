import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Register from './componenets/Register.js';
import Front from './componenets/front';
import Loginform from './componenets/loginform';
// import Fun from './componenets/fun'
import Chatbot from './componenets/Chatbot.js';
import Contactnew from './componenets/Contactnew';
import Dashboard from './componenets/Dashboard';
import Exam from './componenets/Exam';
import Header1 from './componenets/Header';
import PaytmQRCode from './componenets/PaytmQrcode.js';
import AddStudent from './componenets/main/AddStudent';
import Addmarks from './componenets/main/Addmarks';
import EditMarks from './componenets/main/EditMarks';
import InAddMarks from './componenets/main/InAddMarks';
import SearchID from './componenets/main/Searchid.js';
import ViewMarks from './componenets/main/ViewMarks';
import Viewdetails from './componenets/main/Viewdetails';
import Viewquery from './componenets/main/Viewquery';
import Main from './componenets/main/home';
import SDashboard from './componenets/student/SDashboard';
import SViewMarks from './componenets/student/SViewMarks';
import SViewdetails from './componenets/student/SViewdetails';
import Sendquery from './componenets/student/Sendquery';
import Shome from './componenets/student/Shome';
import Totalpoints from './componenets/student/Totalpoints';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
    
            <Route path='/' element={<Front/>} />
            <Route path='/Loginform' element={<Loginform/>}/>
            <Route path='/reg' element={<Register/>}/>
          
            <Route path='/Header1' element={<Header1/>}/>
            <Route path='/contactnew' element={<Contactnew/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/main' element={<Main/>}  />
            <Route path='/Shome' element={<Shome/>}/>
            <Route path='/AddStudent' element={<AddStudent/>}/>
            <Route path='/Viewdetails' element={<Viewdetails/>}/>
            <Route path='/AddMarks' element={<Addmarks/>}/>
            <Route path='/Search' element={<SearchID/>}/>
            <Route path='/ViewMarks' element={<ViewMarks/>}/>
            <Route path='/EditMarks' element={<EditMarks/>}/>
            <Route path='/Enroll' element={<PaytmQRCode/>}/>
            <Route path='/SDashboard' element={<SDashboard/>}/>
            <Route path='/SViewMarks' element={<SViewMarks/>}/>
            <Route path='/InAddMarks'  element={<InAddMarks/>}/>
            <Route path='/Totalpoints'  element={<Totalpoints/>}/>
            <Route path='/SViewdetails' element={<SViewdetails/>}/>
            <Route path='/Sendquery' element={<Sendquery/>}/>
            <Route path='/Viewquery' element={<Viewquery/>}/>
            <Route path='/Exam' element={<Exam/>}/>
            <Route path='/chatbot' element={<Chatbot/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
