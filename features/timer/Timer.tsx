'use client';
import React from 'react';
import { useTimer } from './useTimer/useTimer';
import TimeView from './components/TimeView/TimeView';
import TimerButton from './components/TimerButton/TimerButton';

export default function Timer() {
    const {
        startTimer,
        pauseTimer,
        resumeTimer,
        stopTimer,
        seconds,
        isActive,
        isPaused,
    } = useTimer();
    return (
        <div className="text-center">
            <TimeView seconds={seconds} />

            {!isActive && (
                <TimerButton txt={'開始'} handleClickBtn={() => startTimer()} />
            )}

            {isPaused ? (
                <>
                    {isActive && (
                        <TimerButton
                            txt={'再開'}
                            handleClickBtn={() => resumeTimer()}
                        />
                    )}
                </>
            ) : (
                <>
                    {isActive && (
                        <TimerButton
                            txt={'一時停止'}
                            handleClickBtn={() => pauseTimer()}
                        />
                    )}
                </>
            )}
            <TimerButton txt={'終了'} handleClickBtn={() => stopTimer()} />
        </div>
    );
}
