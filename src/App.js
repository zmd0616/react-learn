function App() {
    // 基础绑定
    // const handleClick = () => {
    //     console.log("button被点击了")
    // }
    // return (<div className="App">
    //     <button onClick={handleClick}>click me</button>
    // </div>);

    // 事件绑定e
    // const handleClick = (e) => {
    //     console.log("button被点击了", e)
    // }
    //
    // return (<div className="App">
    //     <button onClick={handleClick}>click me</button>
    // </div>);

    // 传递自定义参数
    // const handleClick = (name) => {
    //     console.log("button被点击了", name)
    // }
    // return (<div className="App">
    //     <button onClick={() => handleClick('jack')}>click me</button>
    // </div>);

    // 既传递自定义参数，又传递事件对象ane
    const handleClick = (name, e) => {
        console.log("button被点击了", name, e)
    }
    return (<div className="App">
        <button onClick={(e) => handleClick('jack', e)}>click me</button>
    </div>);
}

export default App;
