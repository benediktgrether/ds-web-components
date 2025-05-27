import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default {
    files: 'src/**/*.test.ts',
    nodeResolve: true,
    browsers: [playwrightLauncher({ product: 'chromium' })],
    plugins: [
        alias({
            entries: [
                {
                    find: '@components',
                    replacement: path.resolve('./src/components'),
                },
                { find: '@css', replacement: path.resolve('./src/css') },
                { find: '@layout', replacement: path.resolve('./src/layout') },
            ],
        }),
        esbuildPlugin({
            tsconfig: 'tsconfig.test.json',
        }),
    ],
};
