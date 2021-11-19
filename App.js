
import './App.css';
import PasswordField from './components/PasswordField/PasswordField';
import UnorderedList from './components/UnorderedList/UnorderedList';
function App() {

  return (

    <div>
      <label htmlFor="usrname" className="usrname">Username</label>
      <label htmlFor="password">Password</label>
      <PasswordField />
      <UnorderedList />
    </div>

  );
}

export default App;
