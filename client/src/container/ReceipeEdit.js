import React, {Component} from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getRecipeEdit, editRecipe } from '../actions/RecipeAction';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class ReceipeEdit extends Component {
    constructor(props){
        super(props);
        this.state={
            editForm: {
                name:'',
                type:'',
                total_grams:''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount(){
        this.props.getRecipeEdit(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProp){
        const {name, type, total_grams} = nextProp.recipedata;
        this.setState({ editForm: {name, type, total_grams}})
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({ editForm: { ...this.state.editForm, [name]: value}})
    }
    submitForm() {
        this.props.editRecipe(this.props.match.params.id, this.state.editForm);
        this.props.history.push('/list-recipes');
    }
    render() {
        const { name, type, total_grams } = this.state.editForm;
        return (
            <div>
                <MuiThemeProvider>
                    <div style={{textAlign: 'center'}}>
                        <TextField
                            floatingLabelText="name"
                            value={name}
                            name="name"
                            onChange = {this.handleChange}
                        />
                        <br/>
                        <TextField
                            floatingLabelText="type"
                            name="type"
                            value={type}
                            onChange = {this.handleChange}
                        />
                        <br/>
                        <TextField
                            floatingLabelText="total_grams"
                            name="total_grams"
                            value={total_grams}
                            onChange = {this.handleChange}
                        />
                        <br/>
                        <RaisedButton label="Save" primary={true} style={style} onClick={this.submitForm} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
function mapStateToProps(state){
    return{
        recipedata:  state.recipe.data
    }
}
export default connect(mapStateToProps, { getRecipeEdit, editRecipe })(ReceipeEdit);