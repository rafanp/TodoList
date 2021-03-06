import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Typography
} from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InboxIcon from "@material-ui/icons/Inbox";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles/index";
import TodoList from "./TodoList"

class TodoScreen extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                <Typography>
                    Todo List
                </Typography>
                <TodoList />
            </div>
        );
    }
}

const styles = {
    checkbox: {
        color: "white",
        '&$checked': {
            color: "white",
        },
    },
    content: {
        width: '400px'
    },
    checked: {},
    dragHandleIcon: {
        color: 'white'
    },
    boxWhiteTitle: {
        fontSize: 14,
        fontWeight: 600,
        textAlign: "center",
        color: "white",
        marginTop: 5,
        marginBottom: 5,
    }
};

// Put the thing into the DOM!
export default withStyles(styles)(TodoScreen);
