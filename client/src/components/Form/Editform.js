import React, { useState } from 'react';
import axios from "axios";
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';

function Editform({ cur, status, details, setFormType, setLoadPosts }) {

   const baseUrl = `http://host.docker.internal:5000/api/posts/${details._id}`;

   const [postType, setPostType] = useState(details.postType);
   const [name, setName] = useState(details.name);
   const [location, setLocation] = useState(details.location);
   const [caption, setCaption] = useState(details.caption);
   const [title, setTitle] = useState(details.title);
   const [imgLink, setImgLink] = useState(details.image);

   const handleSubmit = () => {
      axios.put(baseUrl, {
         name,
         location,
         image: imgLink,
         title,
         caption,
         postType
      })
      .then((response) => {
         if(response.status === 200) {
            // alert("Post edit success!");
         }
         console.log(response);
         setLoadPosts((prev) => prev + 1);
      })
      .catch((err) => {
         console.log(err);
         alert("Something went wrong :(");
      });
      status(!cur);
      setFormType("Add");
   }

   return (
      <div className="backdrop">
         <div className="form">
            <div className="formtitlecard">
               <p id="formtitle">Edit Post</p>
            </div>
            <div className="formFont">
               Username:
               <input type="text" className="formInput" placeholder="Enter username" 
                  value={name} onChange={(e) => setName(e.target.value)} 
               />
            </div>
            <div className="formFont">
               Location:
               <input type="text" className="formInput" placeholder="Enter location" 
                  value={location} onChange={(e) => setLocation(e.target.value)}
               />
            </div>
            <div className="formFont">
               Post Type:
               <select className="formInput" value={postType} onChange={(e) => setPostType(e.target.value)}>
                  <option value={'image'}> Image </option>
                  <option value={'text'}> Text </option>
               </select>
            </div>
            {postType === 'image' && (
               <div className="formFont">
                  Image Link:
                  <input type="text" className="formInput" placeholder="https://picsum.photos/200/300"
                     value={imgLink} onChange={(e) => setImgLink(e.target.value)}
                  />
               </div>
            )}
            {postType === 'text' && (
               <>
               <div className="formFont">
                  Title:
                  <input type="text" className="formInput" placeholder="CSAU Mern"
                     value={title} onChange={(e) => setTitle(e.target.value)}
                  />
               </div>
               <div className="formFont">
                  Caption:
                  <input type="text" className="formInput" placeholder="Somewhere in the CEG"
                     value={caption} onChange={(e) => setCaption(e.target.value)}
                  />
               </div>
               </>
            )}
            <div className="rabtn">
               <div onClick={ () => { setFormType("Add"); status(!cur); } }>
                  <ImCross />
               </div>
               <div onClick={handleSubmit}>
                  <FaCheck />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Editform;