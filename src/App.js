import './App.css';

function App() {
  return (
    <div>
      <UserData userName="Pawani Jayalath" userEmail="pawani@gmail.com"/>
      <UserData userName="Hasun Sithmika" userEmail="sithmika@gmail.com"/>
      <UserData userName="Sahan Randunu" userEmail="randunu@gmail.com"/>
      <UserData userName="Kavmini Thathsarani" userEmail="kthathsarani@gmail.com"/>
      <UserData userName="Hasira Manoj" userEmail="mhasira@gmail.com"/>
      
    </div>
  );
}
// UserData component
const UserData = (props) =>{
  return(
    <div>
      <h2>{props.userName}</h2>
      <p>{props.userEmail}</p>
    </div>
  );
}; 

// another user componet
const UserLink = () => {
  return(
    <div>
      <a href='https://github.com/asiripr' target='_blank'>Asiri's GitHub</a>
    </div>
  );
}
export default App;
