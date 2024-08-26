const isLogin = false

function App() {
    return (<div className="App">
        this is app
        {/*逻辑与 &&*/}
        {isLogin && <span>this is span</span>}

        {/*三元运算*/}
        {isLogin ? <span>jack</span> : <span>loading...</span>}
    </div>);
}

export default App;
