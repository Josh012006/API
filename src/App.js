import { useState } from 'react';
import './App.css';
import UserList from './UserList';
import Alert from 'react-bootstrap/Alert';

import useFetchData from './hooks/useFetchData';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [error, setError] = useState(null);

  useFetchData('https://jsonplaceholder.typicode.com/users', setError, setListOfUsers);

  return (
    <div className='App'>
      {(error !== null) && 
        (
          <Alert variant="danger">
            <Alert.Heading>Oh! An error occured!</Alert.Heading>
            <p>
              {error}
            </p>
            <hr />
            <p className="mb-0">
              Please reload the page!
            </p>
          </Alert>
        )
      } 
      <UserList ListOfUsers={listOfUsers}></UserList>
    </div>
  );
}

export default App;
