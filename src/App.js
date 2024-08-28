import './App.css';

function App() {
  return (
    <div>
      <UserData />
      <UserData />
      <UserLink />
      <UserData />
      <UserData />
    </div>
  );
}
// UserData component
const UserData = () =>{
  return(
    <div>
      <h2>Sabaragamuwa</h2>
      <p>Computing</p>
    </div>
  );
}; 

// another user componet
const UserLink = () => {
  return(
    <div>
      <a href='https://github.com/asiripr'>Asiri's GitHub</a>
    </div>
  );
}
export default App;
