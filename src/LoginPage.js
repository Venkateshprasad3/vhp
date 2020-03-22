import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const responseGoogle = (response) => {
    console.log(response);
};

export default class LoginPage extends React.Component{

    constructor() {
        super();
        this.login = this.login.bind(this);
    }

    login() {
        this.props.history.push('/Display');
    }


render() {
    return (
        <div>
            <Paper style={{height: '450px', width: '450px', margin: 'auto', marginTop: '100px'}} elevation={3}>
                <div style={{height: '350px'}}>
                    <div style={{display: 'flex'}}>
                        <Typography variant="h6" gutterBottom style={{
                            paddingBottom: '20px',
                            paddingTop: '30px',
                            marginLeft: '20px',
                            paddingRight: '150px'
                        }}>
                            Sign In
                        </Typography>
                        <img src="https://img.icons8.com/pastel-glyph/64/000000/music.png"/>
                    </div>
                    <Divider/>
                    <div>
                        <TextField style={{marginTop: '20px', marginLeft: '30px', width: '380px'}} id="outlined-basic"
                                   label="Email" variant="outlined"/>
                        <br/>
                        <TextField style={{marginTop: '20px', marginLeft: '30px', width: '380px'}} id="outlined-basic"
                                   label="Password" variant="outlined" type="password" />
                        <Button variant="contained" onClick={this.login} color="primary"
                                style={{marginTop: '30px', marginLeft: '180px'}}>
                            Login
                        </Button >
                    </div>
                </div>
                <GoogleLogin
                    clientId="322716119165-el104fu5quoinfk55nga5tlo7g99iclq.apps.googleusercontent.com"
                    render={renderProps => (
                        <GoogleButton style={{marginLeft: '30px'}} onClick={renderProps.onClick}
                                      disabled={renderProps.disabled}/>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Paper>
        </div>
    );
}

}