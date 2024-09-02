import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (<div>
            <div>我是Layout页面</div>
            <Link to='/'>面板</Link>
            <Link to='/about'>关于</Link>
            <Outlet/>
        </div>
    )
}

export default Layout;