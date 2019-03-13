/*
 * $on事件绑定
 * 		$on(事件名称，回调函数)
 * $emit事件触发
 * 		$emit(事件名称，传递的参数)
 * $off事件解绑
 * 		$off(事件名称，解绑的函数)
 */

var Eventlist = {
		
}

const $on = ( EventName , callback )=>{
	if( !(Eventlist[EventName])){
		Eventlist[EventName]=[];
	}
	Eventlist[EventName].push(callback);
}

const $emit = ( EventName , params )=>{
	if( !Eventlist[EventName] )return;
	let Eventlists = Eventlist[EventName];
	Eventlists.map((callback)=>{
		console.log(callback)
		params?callback(params):callback();
	})
}
const $off = ( EventName , cb )=>{
	if( !Eventlist[EventName] ) return;
	let Eventlists = Eventlist[EventName];
	if(cb){
		Eventlist[EventName]=Eventlists.filter((callback)=>{
			return cb!=callback;
		})
	}else{
		Eventlists.length = 0;
	}
}

//此处一定要传出去用
export default{
	$on,
	$off,
	$emit
}

/*
function fn(val){
	console.log(1,val);
}
function fn1(val){
	console.log(2,val);
}

$on("handle",fn);
$on("handle",fn1);
$off("handle",fn)

$emit("handle",123)
//用node运行该文件 看封装是否正确
* */
