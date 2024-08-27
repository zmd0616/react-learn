import {useState} from "react";

function App() {
    let [count, setCount] = useState(0);

    function handleClick() {
        // 直接修改，无法引发视图更新
        count++
    }

    // 修改对象状态
    const [form, setForm] = useState({name: 'jack'})
    const changeForm = () => {
        // 错误写法：直接修改
        // form.name = 'john'

        // 正确写法：setForm传入一个全新的对象
        setForm({
            ...form,
            name: 'john'
        })
    }

    return (<div className="App">
        <button onClick={handleClick}>{count}</button>
        <button onClick={changeForm}>changeForm:{form.name}</button>
    </div>);
}

export default App;
