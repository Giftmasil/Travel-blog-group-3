import Post from "../../post/Post"
import "./posts.css"


/* 
after receiving the array of posts it should map over the array and render the post while giving props
values of of the object {image,tags, title, time, description}
*/

export default function posts() {
  //come later to map over the post according from post where it will be stored
  return (
    <div className='posts'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
