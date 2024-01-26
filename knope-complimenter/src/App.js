import './App.css';
import { BuildCompliment, User } from './Complimenter';

function App() {
  return (
    // Background is the parent element
    <div className='App-background'>

      <div className='App-title'> Welcome to the <br/> Knope Complimenter! </div>
      <div className='App-subtitle'> Gas up your friend à la Leslie Knope </div>

      <div className='Input-fields'>
        <label> Enter a friend's name:
          <input type="text" onChange={(e) => User.name = e.target.value}/>
        </label>
        <br/>

        <label> Enter the friend's profession:
          <input type="text" onChange={(e) => User.profession = e.target.value} />
        </label>
      </div>
        
      {/* Generate compliment */}
      <BuildCompliment />

    </div>
  );
}

export default App;