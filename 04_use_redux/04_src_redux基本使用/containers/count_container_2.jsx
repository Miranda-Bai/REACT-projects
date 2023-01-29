//引入UI组件
import Count from '../components/Count'
// import Test from '../components/Test'
//从react-redux中引入connect方法
import {connect} from 'react-redux'
//引入action_creator
import {
	createIncrementAction,
	createDecrementAction
} from '../redux/count_action_creator'


//创建好为Count服务的容器组件，并且为Count组件传递了：(1).状态 (2).操作状态的方法。
export default connect(
	state => ({number:state}),
    /* state=>{
        // state本身是一个对象 {count: val} 直接返回state即可
        // console.log("count-container:", state)
        return state
    }, */
	//复杂的写法，如下：
	/* dispatch => (
		{
			jia:(value)=>{dispatch(createIncrementAction(value))},
			jian:(value)=>{dispatch(createDecrementAction(value))}
		}
	) */
	//精简的写法，如下：备注:connect底层会将精简版所写的对象，加工成复杂写法
	{
		jia:createIncrementAction,
		jian:createDecrementAction
	}
)(Count)

