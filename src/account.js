import React from 'react';
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import axios from 'axios';

var loginInfo = require('./navbar.js');

var AccountInfo = React.createClass({
    getInitialState() {
    if(loginInfo.globalLoggedIn) {
        var _this = this;
            axios
                .get("http://www.cise.ufl.edu/~cheung/dataConn.php?" + "select * from users where email='" + loginInfo.globalUserName + "' and password='" + loginInfo.globalPassword + "'")
                .then(function (result) {
                    if(result.data.length > 0) {
                        _this.setState({
                            showModal: false,
                            loggedIn: true,
                            loginFailed: false,
                            errorMessage: undefined
                        });
                    } else {
                            _this.setState({ loginFailed: true });
                    }
            });
        }
        return null;
    },
    test() {
    console.log(loginInfo);
            console.log(loginInfo.globalUserName);
            console.log(loginInfo.globalLoggedIn);
            console.log(this.props.location.pathname);
            return null;
    },
    render() {
        var temp = loginInfo.globalLoggedIn;
        return (
        <div>
            {temp? (<div>LOGGED IN</div>) : (<div>Please Log In to see account information</div>)}
            <Button onClick={this.test}> test </Button>
            </div>
        );
    }
});

export default AccountInfo;

//create table weight
//(email                  varchar(50) not null,
// day                    date not null,
// weight                 numeric(5,2) not null,
// primary key(email, day)
//);
