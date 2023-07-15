import { Http } from '~/services'

export const useHttp = () =>
  new Http({
    baseURL: useRuntimeConfig().public.apiBaseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
