import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addRecipe } from '../actions/RecipeAction';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class recipeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addForm: {
                name: '',
                type: '',
                total_grams: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        console.log('Add Form Values', this.state.addForm);
        this.props.addRecipe(this.state.addForm);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ addForm: { ...this.state.addForm, [name]: value } });
    }

    render() {
        const { name, type, total_grams } = this.state.addForm;
        return (
            <div>
                <MuiThemeProvider>
                    <div style={{ textAlign: 'center' }}>
                        <TextField
                            floatingLabelText="Name"
                            value={name}
                            name="name"
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Type"
                            name="type"
                            value={type}
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            floatingLabelText="Total_grams"
                            name="total_grams"
                            value={total_grams}
                            onChange={this.handleChange}
                        />
                        <br />
                        <RaisedButton
                            label="Add Recipe"
                            primary={true}
                            style={style}
                            onClick={this.submitForm}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15
};

export default connect(null, { addRecipe })(recipeAdd);