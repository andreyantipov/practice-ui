import { signal } from '@preact/signals-react'

const count = signal<number>(0);

export const PreactSignalButton = () => {

    const handleIncrement = () => {
        count.value++
    }

    return (<button onClick={handleIncrement}>test button {count.value}</button>)
}