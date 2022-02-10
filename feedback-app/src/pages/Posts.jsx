import {useParams} from "react-router-dom"

function Posts() {
    const params = useParams()

    return <div>
        post id : {params.id}
        <br/>
        post name : {params.name}
    </div>

}

export default Posts