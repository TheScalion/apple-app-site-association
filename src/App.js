import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Input from './common/button';
import Exercise1 from './exercises/Exercise1';
import Exercise2 from './exercises/Exercise2';
import Exercise3 from './exercises/Exercise3';
import Exercise4 from './exercises/Exercise4';
import Exercise5 from './exercises/Exercise5';
import Exercise6 from './exercises/Exercise6';
import Exercise7 from './exercises/Exercise7';
import Exercise8 from './exercises/Exercise8';
import Exercise9 from './exercises/Exercise9';

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div style={{ margin: 30 }}>
        <Input value={"Exercise 1"} onClick={() => { navigate("/") }} />
        <Input value={"Exercise 2"} onClick={() => { navigate("/exe2") }} />
        <Input value={"Exercise 3"} onClick={() => { navigate("/exe3") }} />
        <Input value={"Exercise 4"} onClick={() => { navigate("/exe4") }} />
        <Input value={"Exercise 5"} onClick={() => { navigate("/exe5") }} />
        <Input value={"Exercise 6"} onClick={() => { navigate("/exe6") }} />
        <Input value={"Exercise 7"} onClick={() => { navigate("/exe7") }} />
        <Input value={"Exercise 8"} onClick={() => { navigate("/exe8") }} />
        <Input value={"Exercise 9"} onClick={() => { navigate("/exe9") }} />
      </div>
      <Routes>
        <Route path="/" element={<Exercise1 />} />
        <Route path="/exe2" element={<Exercise2 />} />
        <Route path="/exe3" element={<Exercise3 />} />
        <Route path="/exe4" element={<Exercise4 />} />
        <Route path="/exe5" element={<Exercise5 />} />
        <Route path="/exe6" element={<Exercise6 />} />
        <Route path="/exe7" element={<Exercise7 />} />
        <Route path="/exe8" element={<Exercise8 />} />
        <Route path="/exe9" element={<Exercise9 />} />
      </Routes>
    </>
  );
}

export default App;
