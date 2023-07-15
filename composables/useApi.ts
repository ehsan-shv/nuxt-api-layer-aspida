// eslint-disable-next-line import/no-named-default
import { default as aspida } from '@aspida/axios'
import { useHttp } from './useHttp'
import api from '~/api/$api'

export const useApi = () => {
  return api(aspida(useHttp().instance()))
}
