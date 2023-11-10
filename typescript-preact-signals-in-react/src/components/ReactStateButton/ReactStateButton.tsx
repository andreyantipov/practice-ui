import { useState } from 'react'

let variableState = 0

export const ReactStateButton = () => {
    const [state, setState] = useState<number>(0)

    const handleIncrement = () => {
        setState(value => value += 1)
        variableState++
    }

    return (<button onClick={handleIncrement}>test button {state} {variableState}</button>)
}