import {createBrowserRouter, createHashRouter} from "react-router-dom";
import Login from "../page/Login/indes";
import Article from "../page/Article";
import Layout from "../Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../NotFound";

const router = createHashRouter([
        {
            path: '/', element: <Layout/>,
            children: [
                {
                    // path:'board',
                    index: true,
                    element: <Board/>
                },
                {
                    path: 'about',
                    element: <About/>
                }
            ]
        },
        {
            path: '/login', element: <Login/>,
        },
        {
            path: '/article/:id', element: <Article/>,
        },
        {
            // eslint-disable-next-line react/jsx-no-undef
            path: '*', element: <NotFound />,
        }
    ]
)

export default router;