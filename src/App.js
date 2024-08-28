import './App.css';
import UserData from "./components/UserData";
import UserLink from "./components/UserLink";

function App() {
  return (
    <div>
      <UserData userName="Pawani Jayalath" userEmail="pawani@gmail.com"/>
      <UserData userName="Hasun Sithmika" userEmail="sithmika@gmail.com"/>
      <UserData userName="Sahan Randunu" userEmail="randunu@gmail.com"/>
      <UserData userName="Kavmini Thathsarani" userEmail="kthathsarani@gmail.com"/>
      <UserData userName="Hasira Manoj" userEmail="mhasira@gmail.com"/>

      
      <UserLink link="https://github.com/asiripr" label="Asiri's GitHub"/>
      <UserLink link="https://x.com/asiripramodaya" label="Asiri's X"/>
      
    </div>
  );
}


export default App;
