import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipe } from '../actions/RecipeAction';
import Grid from '../component/Grid';

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipelist: {}
        };
    }

    componentDidMount(){
        this.props.getRecipe();
    }

    componentWillReceiveProps(nextProp){
        this.setState({ recipelist: nextProp.recipedata})
    }

    render() {
        return (
            <div>
                <Grid recipelist={this.state.recipelist} />
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        recipedata:  state.recipe.data
    }
}
export default connect(mapStateToProps, { getRecipe })(RecipeList);