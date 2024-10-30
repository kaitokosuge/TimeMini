'use client';
import { useEffect, useState } from 'react';

export const useTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isActive && !isPaused) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isActive, isPaused]);

    const startTimer = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
    };

    const resumeTimer = () => {
        setIsPaused(false);
    };

    const stopTimer = () => {
        setIsActive(false);
        alert(`お疲れ様でした！ 時間： ${seconds} seconds`);
        setSeconds(0);
    };

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        if (hours == 0) {
            return `${String(minutes).padStart(2, '0')}:${String(
                seconds,
            ).padStart(2, '0')}`;
        }
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
            2,
            '0',
        )}:${String(seconds).padStart(2, '0')}`;
    };

    return {
        startTimer,
        pauseTimer,
        resumeTimer,
        stopTimer,
        formatTime,
        seconds,
        isActive,
        isPaused,
    };
};