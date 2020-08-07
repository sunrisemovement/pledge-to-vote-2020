declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare module 'netlify-cms-widget-color/dist/es/color' {
  import { ComponentType } from 'react'
  const exports: {
    Control: ComponentType
  }
  export default exports
}
