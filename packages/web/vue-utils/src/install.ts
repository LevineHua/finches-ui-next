/*
 * @Description: 
 * @Author: Levine
 * @Date: 2022-11-03 17:45:18
 * @LastEditors: Levine
 * @LastEditTime: 2022-11-03 17:46:54
 * @FilePath: /finches-ui-next/packages/web/vue-utils/src/install.ts
 */
import type { App } from 'vue'
import type { SFCInstallWithContext, SFCWithInstall } from './typescript'

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}