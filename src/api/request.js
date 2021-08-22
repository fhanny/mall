import axios from 'axios'
import { ElMessage } from 'element-plus'
const TOKEN_INVALID = 'token认证失败,请重新登录'
const NETWORK_ERR = '网络请求异常，请稍后重试'

const url = "https://www.fastmock.site/mock/ad03952159471f89cad0864ef31a0a52/api"
const axiosInstance = axios.create({
  baseURL: url,
  timeout: 8000

})

axiosInstance.interceptors.request.use(req => {
  const headers = req.headers;
  if (headers.Authorization) headers.Authorization = 'Bear Jack'
  return req
})

axiosInstance.interceptors.response.use(res => {
  const {status,data,msg} = res.data
  if (status == 0) {
    return data
  } else if(status == 10) {
    window.location.href= '/#/login'
  } else {
    ElMessage.error(msg)
    return Promise.reject(msg)
  }

})
function request(options) {
  if (options.methods.toLowerCase() === 'get') {
    options.params = options.data
  }
  axiosInstance.defaults.baseURL = url
  return axiosInstance(options)

}
export default request

