import { useState } from "react";

// 核心绑定流程
// 1.通过value属性绑定react状态
// 2.绑定onChange事件 通过事件参数e拿到输入框最新的值 反向修改到react状态

function App() {
    const [value, setValue] = useState('')
    return (<div className="App">
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
        ></input>
    </div>);
}

export default App;
