import './App.css';
import { BuildCompliment } from './Complimenter';

function App() {
  return (
    // Background is the parent element
    <div className='App-background'>

      <div className='App-title'> Welcome to the <br/> Knope Complimenter! </div>
      <div className='App-subtitle'> Gas up your friend à la Leslie Knope </div>
        
      {/* Generate compliment */}
      <BuildCompliment />
      
    </div>
  );
}

export default App;
