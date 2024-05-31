import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
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
      plugins: [
        typescript({
          target: 'es5',
          rootDir: resolve('src/'),
          declaration: true,
          declarationDir: resolve('lib/types'),
          exclude: resolve('node_modules/**'),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
  optimizeDeps: {
    exclude: ['storybook'], // 将 Storybook 或相关有问题的依赖项添加到排除列表
  },
})
