import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/feature/counter'
import styles from './Counter.module.css'

export default function Item() {
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="incrementByAmount 2 value"
                    onClick={() => dispatch(incrementByAmount(Number(2)))}
                >
                    incrementByAmount
                </button>
            </div>
        </div>
    )
}