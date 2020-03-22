import React,{Component} from "react";
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';



class EditPage extends Component
{

render(){
return (<div><DialogTitle style={{width:600,height:600}} id="customized-dialog-title" onClose={this.handleClose}>
{this.props.dialogType}
</DialogTitle >
<h4 style={{marginTop:-550,paddingTop:0,marginLeft:0}}> Name:</h4> <TextField style={{marginTop:0,width:400,marginLeft:10}} id="outlined-basic"  variant="outlined" name={'customer_name'} value={this.props.currentDetail.customer_name} onChange={(e)=>this.props.handleChange(e)}/>
<h4 style={{marginLeft:0,marginTop:40}}> Product:</h4> <TextField style={{marginTop:0,width:400,marginLeft:10}} id="outlined-basic" variant="outlined" name={'product'} value={this.props.currentDetail.product} onChange={(e)=>this.props.handleChange(e)} />
<h4 style={{marginLeft:0}}> Quantity:</h4> <TextField style={{marginTop:0,width:400,marginLeft:10}} id="outlined-basic"  variant="outlined" name={'quality'} value={this.props.currentDetail.quantity} onChange={(e)=>this.props.handleChange(e)}/>
<h4 style={{marginLeft:0}}> Email:</h4> <TextField style={{marginTop:0,width:400,marginLeft:10}} id="outlined-basic"  variant="outlined" name={'customer_email'} value={this.props.currentDetail.customer_email} onChange={(e)=>this.props.handleChange(e)}/>
<Button style={{ marginTop:50,width:100,marginLeft:250}} onClick={this.props.handleEditDetails} variant="contained" color="primary">Save</Button>
</div>);
}
}


export default EditPage;