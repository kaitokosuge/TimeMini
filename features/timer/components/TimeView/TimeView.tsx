import React from 'react';
import { useTimer } from '../../useTimer/useTimer';

export default function TimeView({ seconds }: { seconds: number }) {
    const { formatTime } = useTimer();
    return <div className="text-6xl mt-10">{formatTime(seconds)}</div>;
}
