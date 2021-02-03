import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {buyBook} from '../Redux/index';

const HookBookContainer = () => {
    const nosOfBooks = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch(buyBook)
    return (
        
        <div>
            <h1>Hook Container</h1>
    <h2>Number of Book in hooks - {nosOfBooks}</h2>
            <button onClick={()=> dispatch(buyBook())}>Buy Book</button>
        </div>
    )
}

export default HookBookContainer
