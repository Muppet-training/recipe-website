import React, {Component} from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getReceipe } from '../actions/ReceipeAction';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class ReceipeEdit extends Component {
    constructor(props){
        super(props);
        this.state={
            editForm: {
                title:'',
                receipe:'',
                ingrediants:''
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.getReceipe();
    }

    componentWillReceiveProps(nextProp){
        this.setState({ editForm: nextProp.receipedata})
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({ editForm: { ...this.state.editForm, [name]: value}})
    }
    render() {
        const { title, receipe, ingrediants } = this.state.editForm;
        return (
            <div>
                <MuiThemeProvider>
                    <div style={{textAlign: 'center'}}>
                        <TextField
                            floatingLabelText="Title"
                            value={title}
                            name="title"
                            onChange = {this.handleChange}
                        />
                        <br/>
                        <TextField
                            floatingLabelText="receipe"
                            name="receipe"
                            value={receipe}
                            onChange = {this.handleChange}
                        />
                        <br/>
                        <TextField
                            floatingLabelText="ingrediants"
                            name="ingrediants"
                            value={ingrediants}
                            onChange = {this.handleChange}
                        />
                        <br/>
                        <RaisedButton label="Save" primary={true} style={style} onClick={() => {console.log('submited data is', this.state.editForm)}} />
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
        receipedata:  state.receipe.data
    }
}
export default connect(mapStateToProps, { getReceipe })(ReceipeEdit);