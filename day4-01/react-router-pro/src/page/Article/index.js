import {useParams} from "react-router-dom";

const Article = () => {
    const params = useParams()
    const id = params.id
    return <div>我是文章页{id}</div>
}

export default Article