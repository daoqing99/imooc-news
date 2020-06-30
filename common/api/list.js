import $http from '../http.js'

export const get_label = (data) => {
	return $http({
		url:'get_label',
		data
	})
	// return new Promise((reslove,reject)=>{
	// 	uniCloud.callFunction({
	// 		name:'get_label',
	// 		data
	// 	}).then((res)=>{
	// 		if(res.result.code === 200){
	// 			reslove(res.result)
	// 		} else {
	// 			reject(res.result)
	// 		}
	// 	}).catch((err)=>{
	// 		reject(err)
	// 	})
	// })
}