import React from 'react';
import {connect} from 'react-redux';

class Registration extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>{`Create an account using ${this.props.emailAddress}`}</div>
        );
    }
}

function mapStateToProps(state){
    return {
        emailAddress: state.emailAddress
    }
}

export default connect(mapStateToProps) (Registration);