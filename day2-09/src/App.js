import { useState } from "react"

function Son({ onGetSonMsg }) {
    const sonMsg = 'this is son msg'
    return (
        <div>
            this is Son
            <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg from son</button>
        </div>
    )
}

function App() {
    const [msg, setMsg] = useState('')
    const getMsg = (msg) => {
        console.log(msg)
        setMsg(msg)
    }
    return (<div className="App">
        this is App, {msg}
        <Son onGetSonMsg={getMsg} />
    </div>);
}

export default App;
