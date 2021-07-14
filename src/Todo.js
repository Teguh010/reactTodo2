import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';

function Todo(props) {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <CheckIcon />
                </ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItem>
        </div>
    )
}

export default Todo
