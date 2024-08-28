import { createContext, useContext } from "react";

// 1.创建上下文对象
const MsgContext = createContext()
// 2.顶层组件 通过Provider组件提供数据
// 3.在底层组件 通过useContext钩子函数使用数据
function A() {
    return (
        <div>
            this is A component
            <B />
        </div>
    )
}

function B() {
    // 接受Provider中value值
    const msg = useContext(MsgContext)
    return (
        <div>
            this is B component, {msg}
        </div>
    )
}

function App() {
    const msg = 'this is app msg'
    return (<div className="App">
        {/* value中用来传递数据 */}
        <MsgContext.Provider value={msg}>
            this is App
            <A />
        </MsgContext.Provider>
    </div>);
}

export default App;
