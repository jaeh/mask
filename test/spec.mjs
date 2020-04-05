import { is } from '@magic/test'

import { state } from '../src/app.mjs'

export default [
  { fn: state, expect: is.objectNative, info: 'state is an object' },
  { fn: state.menu, expect: is.array, info: 'state.menu is an array' },
  { fn: state.menu, expect: t => !is.empty(t), info: 'state.menu is non-empty' },
  { fn: state.branding, expect: t => !is.empty(t), info: 'state.branding is non-empty' },
  { fn: state.title, expect: t => !is.empty(t), info: 'state.title is non-empty' },
  { fn: state.description, expect: t => !is.empty(t), info: 'state.description is non-empty' },
]
