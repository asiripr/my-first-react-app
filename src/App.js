import './App.css';

function App() {
  // const userName = "Gamage";
  // const description = (
  //   <div>
  //     <h2>School</h2>
  //     <p>My school is Morawaka Kanishta Vidyalaya</p>
  //   </div>
  // );
  return (
    // <div>
    //   <h2>This is Asiri</h2>
    //   <p>Hi World. Asiri Started to learn React</p>
    //   {/* /<h3>userName</h3> we cant use variables in the code like this*/}
    //   {/* we can use following methodology */}
    //   <h3>{userName}</h3>
    //   {description}
    // </div>
    <div>
      <UserData />
      <UserData />
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
export default App;
