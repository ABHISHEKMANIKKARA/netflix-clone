import './App.css';
import Banner from './component/Banner/Banner';
import Navbar from './component/Navbar/Navbar';
import Slider from './component/Slider/Slider';
import {original,action} from './urls';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Banner />
       <Slider title="Netflix Originals" url={original} />
       <Slider title="Action" url={action} isSmall={true}/>
    </div>
  );
}

export default App;
