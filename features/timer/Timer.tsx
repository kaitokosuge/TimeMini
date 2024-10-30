'use client';
import React from 'react';
import { useTimer } from './useTimer/useTimer';

export default function Timer() {
    const {
        startTimer,
        pauseTimer,
        resumeTimer,
        stopTimer,
        formatTime,
        seconds,
        isActive,
        isPaused,
    } = useTimer();
    return (
        <div>
            <p>{formatTime(seconds)}</p>
            <button
                onClick={() => {
                    startTimer();
                }}
            >
                開始
            </button>
            <button
                onClick={() => {
                    stopTimer();
                }}
            >
                終了
            </button>
        </div>
    );
}
