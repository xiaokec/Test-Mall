import axios from 'axios'

//创建实例
const instance = axios.create({
				baseURL:'http://152.136.185.210:8000/api/n3/',
				timeout:5000
			})

//拦截器
      	//请求
      	instance.interceptors.request.use(config =>{
      		return config
      	},err =>{
      		console.log(err)
      	})

        //响应
      	instance.interceptors.response.use(res =>{
      		return res.data
      	},err =>{
      		console.log(err)
      	})


export function request(config){
	return instance(config)
}
