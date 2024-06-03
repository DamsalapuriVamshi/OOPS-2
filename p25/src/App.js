import logo from './logo.svg';
import './App.css';
import Bus from './classes/Bus';
import Airplane from './classes/Airplane';

function App() {
  let garuda = new Bus();
  
  
  console.log(garuda.noOfWheels);
  console.log(garuda.noOfSeats);
  console.log(garuda.noOfDriver);
  

  garuda.transport();
  garuda.window();
  garuda.destination();
  garuda.speed();



console.log("-----------Airplane-----------")
  let aeroplane = new Airplane();
  console.log(aeroplane.noOfWheels);
  console.group(aeroplane.noOfSeats);
  console.log(aeroplane.noOfDriver);

  aeroplane.transport();
  aeroplane.window();
  aeroplane.destination();
  aeroplane.speed();


  aeroplane.calculteResult();
  aeroplane.calculteResult(10);
  aeroplane.calculteResult(10,20);
  aeroplane.calculteResult(10,20,30  );


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
