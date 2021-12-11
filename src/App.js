
import './App.css';
import Calendar1 from './components/Calendar1';

function App() {  
  return (
    <div className="App">
      <span className='text' style={{color:"#ed6617",fontSize:'60px',fontWeight:'bolder'}}>Calendar</span>
      <div className='calendar'>
      <Calendar1/>
      </div>
      
    </div>
  );
}

export default App;
