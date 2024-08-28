import { useState } from "react"

function A({ onGetAName }) {
    const name = 'this is A name'
    return (
        <div>
            this is A compnent,
            <button onClick={() => onGetAName(name)}>send</button>
        </div>
    )
}

function B({ name }) {
    return (
        <div>
            this is B compnent
            {name}
        </div>
    )
}
function App() {
    const [name, setName] = useState('')
    const getAName = (name) => {
        console.log(name);
        setName(name)
    }

    return (<div className="App">
        <A onGetAName={getAName} />
        <B name={name} />
    </div>);
}

export default App;
