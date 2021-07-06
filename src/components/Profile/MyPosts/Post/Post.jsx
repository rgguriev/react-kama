import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://picsum.photos/150/150" alt=""/>
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;