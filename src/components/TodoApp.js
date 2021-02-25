import React, {Component} from 'react';
import logo from '../logo.svg';
import './TodoApp.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import 'react-datepicker/dist/react-datepicker.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import moment from "moment";
import FormDialog from './FormDialog';
export class TodoApp extends Component {
    constructor(props) {
        super(props);
        const listItems =[{description: "some description text", name: "Santiago Carrillo", email: "sancarbar@gmail", status:"ready", dueDate: moment()},
        {description: "some description text", name: "Edwin Rodriguez", email: "correo@gmail", status:"ready", dueDate: moment()}];

        this.state = {items: listItems, description:"", name:"", email:"", status:"", dueDate: moment(), open:false};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleOpenChange = this.handleOpenChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="App">
                <TodoList todoList={this.state.items}/>
                <FormDialog
                    open = {this.state.open}
                    state = {this.state}
                    handleDescriptionChange = {this.handleDescriptionChange}
                    handleNameChange = {this.handleNameChange}
                    handleEmailChange = {this.handleEmailChange}
                    handleStatusChange = {this.handleStatusChange}
                    handleDateChange = {this.handleDateChange}
                    handleOpenChange = {this.handleOpenChange}
                    handleSubmit = {this.handleSubmit}
                />
                <Fab size="medium" color="primary" aria-label="add" margin="theme.spacing(1)">
                    <AddIcon onClick = {this.handleOpenChange}/>
                </Fab>
            </div>

        );
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleOpenChange(boolean) {
        this.setState({
            open: boolean
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.description.length || !this.state.name.length || !this.state.email.length || !this.state.status.length)
            return;

        const newItem = {
            description: this.state.description,
            name: this.state.name,
            email: this.state.email,
            status: this.state.status,
            dueDate: this.state.dueDate
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            name: '',
            email: '',
            status: '',
            dueDate: moment()
        }));
        this.handleOpenChange(false);
    }
}
export default TodoApp;
