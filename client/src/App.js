import './App.css';
import { useState } from 'react';
import { data } from './data';

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import TextCard from "./components/Card/TextCard";
import Postform from "./components/Card/Postform";


const App = () => {

    const [posts, setPosts] = useState(data);

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="App">
                <div>
                    <Navbar setShowModal={setShowModal} />
                    <div className='cards'>
                        {
                            posts.map((elem) => {
                                if(elem.postType === 'image') {
                                    return <Card details={elem} />
                                }
                                return <TextCard details={elem}  />
                            })
                        }
                    </div>
                </div>
            </div>
            {
                showModal
                    ?
                    <Postform setShowModal={setShowModal} setPosts={setPosts} posts={posts} />
                    :
                    <></>
            }
        </>
    );
}

// function App() {
//   return (
//     <div className="App">
//           <div>
//               <Navbar/>
//               <div className={"cards"}>
//                   <Card userIcon={"panda-avatar.png"} name={"Ihsan"} text={"In IT Lecture hall row 2"} imgSrc={"https://images.unsplash.com/photo-1663877430904-7fdf2283a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"}/>
//                   <Card userIcon={"userIcon.png"} name={"Sudeep"} text={"In IT Lecture hall row 1"} imgSrc={"https://images.unsplash.com/photo-1663908778255-bd560e30d55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"}/>
//                   <Card userIcon={"panda-avatar.png"}name={"Sathya"} text={"In IT Lecture hall row 1"} imgSrc={"https://images.unsplash.com/photo-1663875972135-bb6654ed702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}/>
//                   <Card userIcon={"userIcon.png"} name={"Surya"} text={"In IT Lecture hall row 2"} imgSrc={"https://images.unsplash.com/photo-1663855507818-c2e284547f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}/>
//               </div>
//           </div>
//     </div>
//   );
// }

export default App;
