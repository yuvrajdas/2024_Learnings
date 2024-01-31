import './App.css';
import ClassComponentUser from './ClassComponentUser';
function App() {
  function Hello() {
    return (
      <>
        <h1>I am Hello Component</h1>
      </>
    );
  }
  return (
    <>
      <ClassComponentUser />
      <Hello />
      <h1>Hello</h1>
    </>
  );
}

export default App;
