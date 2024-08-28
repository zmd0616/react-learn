function Son(props) {
    return <div>this is son children:{props.children}</div>
}

function App() {
    return (<div className="App">
        <Son>
            <div>helloworld</div>
            <span>this is span</span>
            <div>
                <button>click me</button>
            </div>
        </Son>
    </div>);
}

export default App;
