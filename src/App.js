import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import db from './firebase';

import { Button, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import firebase from 'firebase';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

function App() {



  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().text))
      setTodos(snapshot.docs.map(doc => doc.data().text))
    })
  }, [])
  const classes = useStyles();
  console.log(input);
  const addTodo = (event) => {
    event.preventDefault();
    if (input) {
     
     
      db.collection('todos').add({
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
     
    }
  }
  return (
    <div className="App" >
      <h1>Hello world </h1>
      <form >
        <InputLabel >Todo List</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button variant="contained" color="primary" type="submit" onClick={addTodo}>Add todo
        </Button>
      </form>

      <div className={classes.root} >
        <List component="nav" aria-label="main mailbox folders">
          {todos.map(todo => (
           <Todo text={todo}/>
          ))}
        </List>

      </div>

    </div>
  );
}

export default App;
