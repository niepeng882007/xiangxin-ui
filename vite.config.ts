import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        typescript({
            target: 'es5',
            rootDir: resolve('src/'),
            declaration: true,
            declarationDir: resolve('lib/types'),
            exclude: resolve('node_modules/**'),
            allowSyntheticDefaultImports: true,
        }),
        postcss({
            extract: true, // 将CSS提取到单独的文件中
        }),
    ],
    css: {
        modules: {
            scopeBehaviour: 'local',
            localsConvention: 'camelCaseOnly', // 类名使用驼峰格式
            globalModulePaths: [/global\.css$/],
            exportGlobals: true,
        },
    },
    build: {
        outDir: 'lib',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'xiangxinUI',
            fileName: 'xiangxin-ui',
        },
        // css
        rollupOptions: {
            external: ['react', 'react-dom', 'antd'],
            input: 'src/index.ts',
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    antd: 'antd',
                },
            },
        },
    },
})
