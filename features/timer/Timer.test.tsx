import { render, screen, fireEvent, act } from '@testing-library/react';
import Timer from './Timer';
import { useTimer } from './useTimer/useTimer';
import { expect, test, vi } from 'vitest';

test('初期表示:タイマーが00:00であること', () => {
    render(<Timer />);
    expect(screen.getByText('00:00')).toBeDefined();
});
