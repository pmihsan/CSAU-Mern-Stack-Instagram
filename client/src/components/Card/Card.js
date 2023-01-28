import React from 'react';
import axios from "axios";
import { RiDeleteBinFill } from 'react-icons/ri';
import { BsPencilFill } from 'react-icons/bs';

function Card({ details, setFormType, setShowModal, setEditPost, setLoadPosts }) {

   const baseUrl = `http://host.docker.internal:5000/api/posts/${details._id}`;
   const handleDelete = () => {
      axios.delete(baseUrl)
      .then((response) => {
         if(response.status === 200) {
            // alert("Post deletion success!");
         }
         console.log(response);
         setLoadPosts((prev) => prev + 1);
      })
      .catch((err) => {
         console.log(err);
         alert("Something went wrong :(");
      });
   }

   return (
      <div className="card">
         <img className="card-img" src={details.image} alt="Card" />
         <div className="card-body">
            <img src={'./panda-avatar.png'} alt="User" id="user" />
            <div className="card-desc">
               <div className="card-title">{details.name}</div>
               <div className="card-text">{details.location}</div>
            </div>
            <div className="icons">
               <RiDeleteBinFill id="trash" onClick={handleDelete} />
               <BsPencilFill id="edit"  onClick={() => { 
                  setEditPost(details); 
                  setFormType("Edit"); 
                  setShowModal(true); 
               }}  />
            </div>
         </div>
      </div>
   );
}

export default Card;
