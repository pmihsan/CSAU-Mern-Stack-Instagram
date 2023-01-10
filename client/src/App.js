// STYLE
import './App.css';

// REACT COMPONENTS
import { useState, useEffect } from 'react';
import axios from "axios";

// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Textcard from './components/Card/Textcard';
import Postform from './components/Form/Postform';
import Editform from './components/Form/Editform';

function App() {

    const baseUrl = "http://localhost:5000/api/posts";

    const [showModal, setShowModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [formType, setFormType] = useState("Add");
    const [editPost, setEditPost] = useState(null);
    const [loadPosts, setLoadPosts] = useState(0);

    useEffect(() => {
        axios.get(baseUrl)
            .then((response) => {
                if(response.status === 200) {
                    setPosts(response.data);
                } else {
                    alert("Error getting posts!");
                    setPosts([]);
                }
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                alert("Error getting posts!");
                setPosts([]);
            });
    }, [loadPosts]);

    return (
        <>
            <div className="App">
                <div>
                    <Navbar status={setShowModal} cur={showModal} />
                    <div className="cards">
                        {posts && posts.length
                            ?
                            posts.map((post) => {
                                if(post.postType === 'text') {
                                    return  <Textcard details={post} key={post._id} setFormType={setFormType}
                                                      setShowModal={setShowModal} setEditPost={setEditPost} setLoadPosts={setLoadPosts}
                                    />
                                }
                                return <Card details={post} key={post._id} setFormType={setFormType}
                                             setShowModal={setShowModal} setEditPost={setEditPost} setLoadPosts={setLoadPosts}
                                />
                            })
                            :
                            <p>No posts yet</p>
                        }
                    </div>
                </div>
            </div>
            <>
                {formType==="Add" && showModal &&
                    <Postform status={setShowModal} cur={showModal} setLoadPosts={setLoadPosts}
                    />}
            </>
            <>
                {formType==="Edit" && showModal &&
                    <Editform status={setShowModal} cur={showModal} details={editPost} setFormType={setFormType} setLoadPosts={setLoadPosts}
                    />
                }</>
        </>
    );
}

export default App;
