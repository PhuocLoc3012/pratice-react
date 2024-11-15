import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice'; // name import

import styles from './styles.module.css'

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {

    const dispatch = useDispatch()

    // Get the state in redux to render this layout
    const count = useSelector(state => state.count) // state.cái mình đăng kí trên store

    const handleIncreaseClick = () => {
        const action = increase() //action creator --> return về 1 object action
        console.log(action);
        dispatch(action)
    }
    const handleDecreaseClick = () => {
        const action =  decrease() //action creator --> return về 1 object action
        console.log(action);
        dispatch(action)
    }
    return (
        <div className={styles.counter}>
            Count: {count}

            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
            </div>
            
            <div>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;