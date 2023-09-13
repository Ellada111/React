import Header from "./Header";
import BlogEntry from "../Blog entry/BlogEntry";
import Images from "../Blog entry/images/woods (1).jpg";
import Blog from "../Blog entry/Blog";
import Images1 from "../Blog entry/images/avatar_g.jpg";
import Post from "../Blog entry/Posts";
import Part from "../Blog entry/Part";
import Images2 from "../Blog entry/images/aa.jpg"
import Footer from "../Components/Footer";

function App (){
    return(
        <div >
            <Header/>
            <img src={Images}/>
            <BlogEntry/>
           <img src={Images2}/>
             <Part/>
             <img src={Images1}/>
             <Blog/>
             {/* <Post/> */}
         
             <Footer/>


        </div>
    );

}
export default App;