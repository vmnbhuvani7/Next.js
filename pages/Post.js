import { withRouter } from 'next/router'
const Post = withRouter((props) => {
    return (
        <div>
            {props.router.query.title}
        </div>
    )
})

export default Post

