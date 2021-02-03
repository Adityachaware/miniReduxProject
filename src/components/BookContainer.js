import React from 'react';
import {buyBook} from '../Redux/index';
import {connect} from 'react-redux';
import {useState} from 'react'

const BookContainer = (props) => {

    const [number, setNumber] = useState(1);

   const  updateNumber =(event) =>{
    setNumber(event.target.value);
    console.log(number);
   }
    return (
        <div>
            <h1>Number of Books- {props.numberOfBooks}</h1>
            <input type="text" value={number} onChange={updateNumber}></input>
            <button onClick={()=>props.buyBook(number)}>Buy{number} Books-</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        numberOfBooks:state.numberOfBooks
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        buyBook:function(number){
            dispatch(buyBook(number));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (BookContainer);
