import React from 'react';
import { useTimer } from '../../useTimer/useTimer';

export default function TimeView({ seconds }: { seconds: number }) {
    const { formatTime } = useTimer();
    return <div>{formatTime(seconds)}</div>;
}
