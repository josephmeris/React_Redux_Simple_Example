import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as setEmailAddressAction from '../../actions/setEmailAddressAction';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            emailAddress: {emailAddressProperty: ""}
        }

        this.onEmailValueChange = this.onEmailValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   onEmailValueChange(e){
        const emailAddress = this.state.emailAddress;
        emailAddress.emailAddressProperty = e.target.value;
        this.setState({emailAddress});
        this.props.setEmailAddress(this.state.emailAddress.emailAddressProperty);
    }

    onSubmit(e){
        e.preventDefault();
        this.context.router.history.push('./Registration');
    }

    render(){
        return(
         <form className="row" className="home-center-welcome">
            <div className="column"><label><input type="text"
                                                  placeholder="Email Address" 
                                                  className="email-textbox-homepage"
                                                  onChange={this.onEmailValueChange} 
                                                  value={this.props.emailAddress}/></label> 
            </div>
            <div className="column"><button className="button-home-sign-up" onClick={this.onSubmit}> Start!</button></div>
         </form>        
        );
    }
}

Home.contextTypes = {
    router: PropTypes
};

function mapStateToProps(state){
    return {
        emailAddress: state.emailAddress
    }
}

function mapDispatchToProps(dispatch){
    return{
        setEmailAddress : emailAddress => dispatch(setEmailAddressAction.setEmailAddress(emailAddress))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);