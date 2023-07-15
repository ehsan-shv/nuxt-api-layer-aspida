import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class Http {
  protected axios: AxiosInstance

  public constructor(axiosConfig: {}) {
    this.axios = axios.create(axiosConfig)
  }

  public instance(_accessToken: null | string = null): AxiosInstance {
    return this.axios
  }

  public get(
    url: string,
    params?: {},
    config?: {},
  ): Promise<AxiosResponse<any>> {
    return this.axios.request({
      method: 'get',
      url,
      params,
      ...config,
    })
  }

  public post(url: string, data: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.axios.request({
      method: 'post',
      url,
      data,
      ...config,
    })
  }

  public put(url: string, data: {}, config?: {}): Promise<AxiosResponse<any>> {
    return this.axios.request({
      method: 'put',
      url,
      data,
      ...config,
    })
  }

  public patch(
    url: string,
    data: {},
    config?: {},
  ): Promise<AxiosResponse<any>> {
    return this.axios.request({
      method: 'patch',
      url,
      data,
      ...config,
    })
  }

  public delete(url: string, config?: {}): Promise<AxiosResponse<any>> {
    return this.axios.request({
      method: 'delete',
      url,
      ...config,
    })
  }
}
