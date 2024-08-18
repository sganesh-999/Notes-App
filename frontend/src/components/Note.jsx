import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
          {note.title}
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
          {note.content}
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
          {formattedDate}
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => onDelete(note.id)}
        >Delete</button>
        
        </td>
      </tr>
       
    );
}

export default Note
