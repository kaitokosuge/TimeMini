'use client';
import React from 'react';
import { useTimer } from './useTimer/useTimer';
import TimeView from './components/TimeView/TimeView';

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
            <div>
                <TimeView seconds={seconds} />
            </div>
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
