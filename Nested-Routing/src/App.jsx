
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';
import College from './components/College';
import Student from './components/Student';
import Department from './components/Department';
import Details from './components/Details';
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/users' element={<Users />}/>

        {/* dynamic route */}
        <Route  path='/users/:id' element = {<UserDetail />}/> 
      </Route>

      <Route path="/college" element={<College />}>
        <Route path="student" element={<Student />} />
        <Route path="department" element={<Department />} />
        <Route path="details" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
