import { render, screen } from '@testing-library/react';
import Timer from './Timer';
import { beforeEach, expect, test, vi } from 'vitest';

test('初期表示:タイマーが00:00であること', () => {
    render(<Timer />);
    expect(screen.getByText('00:01')).toBeDefined();
});
