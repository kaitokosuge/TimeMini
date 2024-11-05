import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

test('日本設定になっているか', () => {
    const { container } = render(
        <RootLayout>
            <></>
        </RootLayout>,
    );
    expect(container.querySelector('html')?.getAttribute('lang')).toBe('ja');
});

test('time google fontが設定されているかどうか', () => {
    const { container } = render(
        <RootLayout>
            <></>
        </RootLayout>,
    );
    expect(container.querySelector('link')?.getAttribute('href')).toBe(
        'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    );
});
