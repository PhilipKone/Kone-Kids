import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  base: '/',
  jsx: 'react',
  plugins: [reactPlugin],
  optimizeDeps: {
    include: ['blockly', 'blockly/javascript']
  }
}

export default config
