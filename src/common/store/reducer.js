import { combineReducers } from 'redux-immutable'  //整合数据
import { reducer as headerReducer} from '../header/store'
import {reducer as homeReducer}  from '../../pages/home/component/store'
import {reducer as detailReducer} from '../../pages/detail/store/index'
import {reducer as loginReducer} from '../../pages/login/store'
const reducer = combineReducers({  // 导入出去的是整合的数据
    header: headerReducer,
    home : homeReducer,
    detail:detailReducer,
    login : loginReducer,
})
export default reducer




// 纯函数：
// 1.如果函数的调用参数相同，则永远返回相同的结果，他不依赖程序执行期间函数外部任何状态或数据的变  化，必须只依赖于其他输入参数。 
// 2. 该函数不会产生任何可观察的副作用。
//       
// 函数副作用：
// 函数副作用是指当调用函数时，除了返回的函数值之外，还对主调用函数产生附加的影响，副作用的函数不仅仅只是返回了一个值，而且还做了其他的事情。
    // 1.修改了一个变量
    // 2.直接修改数据结构
    // 3.设置一个对象的成员
    // 4.抛出一个异常或者一个错误终止
    // 5.打印到终端或读取用户输入
    // 6.读取或写入一个文件
    // 7.在屏幕上画图