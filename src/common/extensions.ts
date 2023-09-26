import * as _ from 'lodash'
import type {RouteParams} from 'vue-router'

export const enumSize = (obj: Object) => Object.keys(obj).length / 2
export const parseIntParams = (params: any, names: string[]) => _.chain(params)
  .pick(names)
  .mapValues(v => +v)
  .value()
