import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { removeRecipe } from '../actions/RecipeAction';


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class Grid extends Component {

    constructor(props){
        super(props);
        this.state = { deleteId: null }
    }

    removeRecipe(e,id){
        e.preventDefault();
        this.props.removeRecipe(id);
        this.setState({ deleteId: id })
    }

    render(){
        const style = {
            margin: 12,
        };
        const recipeList = this.props.recipelist.length && this.props.recipelist.filter((recipe) => {
            return this.state.deleteId !== recipe._id;
        });
        const recipeRow = recipeList && recipeList.length && recipeList.map((recipe) => {
            return <TableRow key={recipe._id}>
                <TableRowColumn>{recipe.name}</TableRowColumn>
                <TableRowColumn>{recipe.type}</TableRowColumn>
                <TableRowColumn>{recipe.total_grams}</TableRowColumn>
                <TableRowColumn>
                    <Link to={`/edit-recipe/${recipe._id}`}>
                        <RaisedButton label="edit" primary={true} style={style} />
                    </Link>
                    <RaisedButton label="delete" secondary={true} style={style} onClick={(e) => this.removeRecipe(e, recipe._id)} />
                </TableRowColumn>
            </TableRow>
        });
        return(
            <div>
                <div>{this.props.deleteMsg ? this.props.deleteMsg : ''}</div>
                <Link to="/add-recipe">
                    <FloatingActionButton style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Link>
                <Table selectable={false} >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Type</TableHeaderColumn>
                            <TableHeaderColumn>Total_Grams</TableHeaderColumn>
                            <TableHeaderColumn>Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {recipeRow}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        deleteMsg:  state.recipe.deleteMsg
    }
}
export default connect(mapStateToProps, { removeRecipe })(Grid);
