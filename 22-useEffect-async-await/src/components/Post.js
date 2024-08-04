import './Post.css'

function Post(props) {
  const userId1 = props.userId
  const { id, title, body, userId } = props

  return (
    <div className="post">
      <h1>UserId: {userId1}</h1>
      <div>Body: {body}</div>
      <div>iD: {id}</div>
      <div>title: {props.title}</div>
    </div>
  )
}

export default Post
