import { signal, computed, useSignalEffect } from '@preact/signals-react'

// utils
const randomNumber = (min = 0, max = 0) => Math.floor(Math.random() * (max - min) + min)
const convertToText = (time: number) => {
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty"];

    if (time === 0) {
        return "zero";
    }

    if (time < 20) {
        return units[time];
    }

    const digit1 = Math.floor(time / 10);
    const digit2 = time % 10;
    return `${tens[digit1]} ${units[digit2]}`;
}

// external state
const hours = signal(0);
const minutes = signal(0);
const time = computed(() => `⧗ ${convertToText(hours.value)} hours · ${convertToText(minutes.value)} minutes`)

export const Clock = () => {

    useSignalEffect(() => {
        const iterator = setInterval(() => {
            hours.value = randomNumber(0, 23)
            minutes.value = randomNumber(0, 59)
        }, 1000)
        return () => {
            clearInterval(iterator)
        }
    })

    return (
        <div>
            <div>{time}</div>
        </div>
    )
}