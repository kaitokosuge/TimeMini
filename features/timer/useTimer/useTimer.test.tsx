import { renderHook, act } from '@testing-library/react';
import { useTimer } from './useTimer';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

describe('useTimer', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test('タイマーの開始と停止', () => {
        const { result } = renderHook(() => useTimer());

        act(() => {
            result.current.startTimer();
        });
        expect(result.current.isActive).toBe(true);
        expect(result.current.isPaused).toBe(false);

        act(() => {
            vi.advanceTimersByTime(3000);
        });
        expect(result.current.seconds).toBe(3);

        act(() => {
            result.current.stopTimer();
        });
        expect(result.current.isActive).toBe(false);
        expect(result.current.seconds).toBe(0);
    });

    test('タイマーの一時停止と再開', () => {
        const { result } = renderHook(() => useTimer());

        act(() => {
            result.current.startTimer();
        });
        act(() => {
            vi.advanceTimersByTime(5000);
        });
        expect(result.current.seconds).toBe(5);

        act(() => {
            result.current.pauseTimer();
        });
        expect(result.current.isPaused).toBe(true);

        act(() => {
            vi.advanceTimersByTime(2000);
        });
        expect(result.current.seconds).toBe(5);

        act(() => {
            result.current.resumeTimer();
        });
        expect(result.current.isPaused).toBe(false);

        act(() => {
            vi.advanceTimersByTime(3000);
        });
        expect(result.current.seconds).toBe(8);
    });

    test('formatTimeがHH:MM:SS形式で時間を返すこと', () => {
        const { result } = renderHook(() => useTimer());

        expect(result.current.formatTime(0)).toBe('00:00');
        expect(result.current.formatTime(59)).toBe('00:59');
        expect(result.current.formatTime(60)).toBe('01:00');
        expect(result.current.formatTime(1000)).toBe('16:40');
        expect(result.current.formatTime(3599)).toBe('59:59');
        expect(result.current.formatTime(3600)).toBe('01:00:00');
        expect(result.current.formatTime(36000)).toBe('10:00:00');
    });
});
