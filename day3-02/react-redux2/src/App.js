import {useDispatch, useSelector} from 'react-redux'
// 导入actionCreater
import {inscrement, decrement, addToNum} from './store/modules/counterStore'
import {useEffect} from "react";
import { fetchChannlList } from './store/modules/channelStore'

function App() {
    const {count} = useSelector(state => state.counter)
    const { channelList } = useSelector(state => state.channel)
    const dispatch = useDispatch()

    // useEffect促发异步执行
    useEffect(() => {
        dispatch(fetchChannlList())
    }, [dispatch])

    return (<div className="App">
        <button onClick={() => dispatch(inscrement())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>

        <button onClick={() => dispatch(addToNum(10))}>add To 10</button>
        <button onClick={() => dispatch(addToNum(20))}>add To 20</button>

        <ul>
            {channelList.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    </div>);
}

export default App;
