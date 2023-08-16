import React from 'react';
import axios from "axios";
import { RiDeleteBinFill } from 'react-icons/ri';
import { BsPencilFill } from 'react-icons/bs';

import { MACHINE_IP } from '../../constants';

function Textcard({ details, setFormType, setShowModal, setEditPost, setLoadPosts }) {
   const baseUrl = `http://${MACHINE_IP}:5000/api/posts/${details._id}`;
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
      <div className="card ">
         <div className="card-img textcard-body">
            <div className="card-title">{details.title}</div>
            <div className="card-text">{details.caption}</div>
         </div>
         <div className="card-body">
            <img src={'./panda-avatar.png'} alt="User" id="user" />
            <div className="card-desc">
               <div className="card-title">{details.name}</div>
               <div className="card-text">{details.location}</div>
            </div>
            <div className="icons">
               <RiDeleteBinFill id="trash" onClick={handleDelete} />
               <BsPencilFill id="edit" onClick={() => { 
                  setEditPost(details);
                  setFormType("Edit"); 
                  setShowModal(true); 
               }} />
            </div>
         </div>
      </div>
   );
}

export default Textcard;
