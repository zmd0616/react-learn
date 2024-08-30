import {useEffect, useState} from 'react'

function App() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    // 1.没有依赖项，组件初始化渲染+组件更新时执行
    // useEffect(() => {
    //     console.log('副作用函数执行了')
    // })

    // 2.空数组依赖，只在组件初始化渲染时执行一次
    // useEffect(() => {
    //     console.log('副作用函数执行了')
    // }, [])

    // 3.添加特定依赖项，组件初始化渲染+特定依赖项发生变化时候执行
    useEffect(() => {
        console.log('副作用函数执行了')
    }, [count1])

    return (<div className="App">
        <button onClick={() => setCount1(count1 + 1)}>button1:{count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>button2:{count2}</button>
    </div>);
}

export default App;
