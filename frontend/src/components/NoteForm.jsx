import React from 'react'
import { useState, useEffect } from "react";
import api from "../api";
import Navbar from '../pages/Navbar';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NoteForm = () => {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                
            })
            .catch((err) => alert(err));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) 
                    {
                        toast.success(`Notes Created Successfully`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                            });
                        //alert("Note created!");
                        setTitle("")
                        setContent("")
                        setTimeout(()=>navigate("/"),5000)
                    }
                else {
                    //alert("Failed to make note.");
                    toast.error(`Failed to add notes!!!`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });
                }
                getNotes();
            })
            .catch((err) => alert(err));
    };

  return (
    <div>
        <Navbar/>
      <form onSubmit={createNote}  className="max-w-sm mx-auto">
                <h2 className="justify-center font-bold">Create a Note</h2>
                <label htmlFor="title">Title:</label>
                
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
                <ToastContainer/>
            </form>
            
    </div>
  )
}

export default NoteForm
