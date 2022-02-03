// import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */}
      <div>
      <img className='photo' src={employee.profileImg} alt='profile_image'></img>
        <h1>{employee.name}</h1>
        <p>Location</p>
        <h3>{employee.location}</h3>
        <p>Blood group</p>
        <h3>{employee.bloodGroup}</h3>
        <p>Age</p>
        <h3>{employee.age}</h3>
      </div>
    
      
    </div>
  )
}



export default App;
