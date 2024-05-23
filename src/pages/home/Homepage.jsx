import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

/* 

posts to receive the array of objects of posts as a prop from the home function

*/


export default function Home() {
  return (
    <>  
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
    </>
  )
}
