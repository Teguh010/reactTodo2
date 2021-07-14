import React, {useState} from 'react';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
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
  const [todos, setTodos] = useState(['pergi ke pasar', 'pergi ke kantor', 'pergi ke rumahsakis']);
  const [input, setInput] = useState('');
  const classes = useStyles();
  console.log(input);
  const addTodo = (event) => {
    event.preventDefault();
    if(input){
    // console.log('its working')
    setTodos([...todos, input])
   setInput('');
   console.log(todos)
    }
  }
  return (
    <div className="App" >
      <h1>Hello world </h1>
      <FormControl >
        <InputLabel >Todo List</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button variant="contained" color="primary" type="submit" onClick={addTodo}>Add todo
        </Button>
        </FormControl>

      <div className={classes.root} >
        <List component="nav" aria-label="main mailbox folders">
          {todos.map(todo => (
          <ListItem button>
            <ListItemIcon>
                <CheckIcon />
            </ListItemIcon>
              <ListItemText primary={todo} />
          </ListItem>
          ))}
        </List>
       
      </div>
     
    </div>
  );
}

export default App;
