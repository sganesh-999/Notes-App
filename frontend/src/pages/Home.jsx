import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"
import Navbar from "./Navbar";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

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

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) 
                {
                    toast.success(`Notes Deleted Successfully`, {
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
                
                else {
                    toast.error(`Failed to delete notes!!!`, {
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
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) 
                    {alert("Note created!");
                        setTitle("")
                        setContent("")
                    }
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
           <Navbar/>
           <div
  className="py-2 relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <table className="py-4 w-full text-left table-auto min-w-max text-black">
    <thead className="text-md md:text-xl">
      <tr>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p className="block font-sans text-md antialiased font-bold leading-none text-blue-gray-900 opacity-70">
           Title
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-md antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Description
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-md antialiased font-bold leading-none text-blue-gray-900 opacity-70">
           Date
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-md antialiased font-bold leading-none text-blue-gray-900 opacity-70"></p>
        </th>
      </tr>
    </thead>
    <tbody>
    {notes.map((note) => (
                          
                             <Note note={note} onDelete={deleteNote} key={note.id} />
                        
                        ))}
      </tbody>
      </table>
      </div>
           
          
            <ToastContainer/>
           
        </div>
    );
}

export default Home;
