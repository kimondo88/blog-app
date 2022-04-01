import './App.css';
import Nav from './feature/navbar/navbar'
import Content from './feature/content/content'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <div className='parallax parralax-first'></div>
      <Content/>
      <div className='parallax parallax-second'></div>
    </div>
  );
}

export default App;
