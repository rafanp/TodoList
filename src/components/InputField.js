import React from "react";
import {
    TextField,
    Button
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldInput: '',
    };
/*     this.handleAddButton = this.handleAddButton.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this); */
  }

  handleTextFieldChange(event) {
    event.preventDefault();
    this.setState({
      textFieldInput: event.target.value,
    });
  }

  handleAddButton(event) {
    event.preventDefault();
    this.props.handleAddListaTarefas(this.state.textFieldInput);
 /*    const {
        textFieldInput,
      } = this.state; */
    // Use textFieldInput
  }

  render() {
    return(
      <>
        <TextField  onChange={(e) => this.handleTextFieldChange(e)} />
        <Button
          startIcon={<AddIcon />}
          onClick={(e) => this.handleAddButton(e)}
        />
      </>
    );
  }
}

export default InputField;
