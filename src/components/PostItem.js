function PostItem(props) {
  return (
    <div className="post-item">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default PostItem;
