import React,{Component} from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import EditPage from "./EditPage";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {detailsFetch} from '../action';
import {editDetails} from '../editAction';
import Snackbar from '@material-ui/core/Snackbar';
class DisplayJsonComponent extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            dialogOpen:false,
            dialogType:'',
            snackBarOpen:false,
            currentDetail:''
        };
        this.edit = this.edit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillMount(){
        this.props.detailsFetch();
    }

    edit=(event,postDetail)=>{
      this.setState({dialogOpen:true,dialogType:'Edit',currentDetail:postDetail}); 
    }

    handleClose=()=>{
        this.setState({dialogOpen:false,dialogType:''});
    }

    handleChange = (e) => {
        let changedValue = this.state.currentDetail;
        if(e.target.value === ''){
            changedValue[e.target.name] = e.target.value.substring(0, e.target.value.length()-1);
        }
        else{changedValue[e.target.name] = e.target.value;}
        this.setState({
            currentDetail:changedValue
        })
    }

    handleEditDetails = () => {
        this.props.editDetails(this.state.currentDetail);
        this.setState({dialogOpen:false,snackBarOpen:true});
    }

render()
{
    return(
        <div>
                {this.props.postDetail.map((postDetail,index )=>{
                return <Paper elevation={3} > <h1 style={{color:'red'}} > ID:</h1> <h1 style={{marginLeft:150,marginTop:-60}}>  {postDetail.id}</h1> 
                <h1 style={{color:'red'}} > Name: </h1>  <h1 style={{marginLeft:150,marginTop:-60}}>{postDetail.customer_name}</h1>
                <h1 style={{color:'red'}}> E-mail: </h1>  <h1 style={{marginLeft:150,marginTop:-60}} >{postDetail.customer_email}</h1>
                <h1 style={{color:'red'}}> Product: </h1>  <h1 style={{marginLeft:150,marginTop:-60}}>{postDetail.product}</h1>
                <h1 style={{color:'red'}}> Quantity: </h1>  <h1 style={{marginLeft:150,marginTop:-60}}> {postDetail.quantity}</h1>
                <Button onClick={(e) => this.edit(e,postDetail)} style={{marginLeft:1000,marginTop:-500}} variant="contained" color="primary">
                    Edit</Button>
                <Button style={{marginLeft:1000,marginTop:-400}} variant="contained" color="primary">
                    Delete</Button>
                </Paper>
                 })}
                 <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.dialogOpen}>
                   {this.state.dialogOpen ? <EditPage dialogType={this.state.dialogType} currentDetail={this.state.currentDetail} handleEditDetails={this.handleEditDetails} handleChange={this.handleChange}/>:<div/>}
                </Dialog> 
                <Snackbar open={this.state.snackBarOpen} autoHideDuration={3000}  anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}/>
                
        </div>
    );
}
}

export const mapStateToProps = (state) => ({
    postDetail: state.PostDetails
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
    detailsFetch,
    editDetails
}, dispatch);

DisplayJsonComponent.propTypes = {
    classes: PropTypes.object.isRequired

};

const connectedDisplayComponent = connect(mapStateToProps, mapDispatchToProps)(DisplayJsonComponent);

export default connectedDisplayComponent;
