import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';

import pkg from './package.json'

const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [sass({ insert: true }), typescript(), alias({
    entries: [
      { find: 'util', replacement: path.resolve(projectRootDir, 'src', 'util') },
      { find: 'components', replacement: path.resolve(projectRootDir, 'src', 'components') },
      { find: 'styled', replacement: path.resolve(projectRootDir, 'src', 'styled') },
    ]
  })],
  external: ['react', 'react-dom', '@material-ui/core', '@material-ui/icons', '@material-ui/lab']
}
