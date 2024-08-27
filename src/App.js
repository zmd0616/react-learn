// 导入样式
import './index.css'
const styles = {
    color: 'red',
    fontSize: '50px'
}

function App() {
    return (<div className="App">
        <span style={styles}>this is span</span>
        <span className="foo">this is class foo</span>
    </div>);
}

export default App;
