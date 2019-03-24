import React, { Component } from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import actions from './Actions';
import store from './../store';

class CounterContainer extends Component {

    constructor(props) {
        super(props);
    }

    inc = () => {
        this.props.incCount(1);
        this.props.decCount(2);
    }

    dec = () => {
        this.props.decCount(1);
    }

    render() {
        return (
           <Counter 
                count = {this.props.counter.count}
                increment = {this.inc}
                decrement = {this.dec} 
           />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = {
    incCount: actions.incCount,
    decCount: actions.decCount
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
