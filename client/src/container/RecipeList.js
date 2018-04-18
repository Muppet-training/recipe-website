import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipe } from '../actions/RecipeAction';
import Grid from '../component/Grid';

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipelist: {
                name: '',
                type: '',
                total_grams: ''
            }
        };
    }

    componentDidMount(){
        this.props.getRecipe();
    }

    componentWillReceiveProps(nextProp){
        this.setState({ recipelist: nextProp.recipedata})
    }

    render() {
        console.log('recipelist is ', this.state.recipelist);
        return (
            <div>
                <Grid recipelist={this.state.recipelist} />
            </div>
        );
    }
}

const style = {
    margin: 15
};
function mapStateToProps(state){
    return{
        recipedata:  state.recipe.data
    }
}
export default connect(mapStateToProps, { getRecipe })(RecipeList);