import logo from './logo.svg';
import './App.css';
import Todo from "./component/todo"
import { Authenticator   } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
    {({signOut , user})=>(
  <main>
    <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
<Todo />
  </main>
)}
    </Authenticator>
  );
}

export default App ;
