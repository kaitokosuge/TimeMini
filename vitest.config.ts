import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'json', 'html'],
            provider: 'v8',
            exclude: [
                'lib/**/*',
                '**/*.test.tsx',
                '.next',
                'next.config.js',
                'postcss.config.js',
                'tailwind.config.ts',
                'vitest.config.ts',
                'components/ui',
            ],
        },
    },
});
