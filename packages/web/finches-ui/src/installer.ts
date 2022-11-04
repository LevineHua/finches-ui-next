/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-11-03 17:52:31
 * @LastEditors: Levine
 * @LastEditTime: 2022-11-03 18:18:44
 * @FilePath: /finches-ui-next/packages/web/finches-ui/src/installer.ts
 */
import { components } from './components'

import type { Plugin } from 'vue'

export const makeInstaller = (components: Plugin[] = []): Plugin => {
  const install: Plugin['install'] = (app, options?: any) => {
    components.forEach((c) => app.use(c))
  }

  return { install }
}

export const defaultInstaller = makeInstaller(components)