// import React from // { useState }
// "react";
import Navbar from "../navbar/navbar";
import "./notes.scss"
// const Notes = () => {
//   // const [todos, setTodos] = useState([]);
//   // const [input, setInput] = useState('');
//   // const [title, setTitle] = useState('');
//   // const [description, setDescription] = useState('');

//   // const handleAddTodo = () => {
//   //   setTodos([...todos, { title, description }]);
//   //   setInput('');
//   //   setTitle('');
//   //   setDescription('');
//   // };

//   return (
//     <div>
//       <Navbar className="navbar" Topic="Take Notes" />

//       {/* <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
//       <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
//       <button onClick={handleAddTodo}>Add Todo</button>
      
//       <div className="todorow rhead">
//         <div className="title">Title</div>
//         <div className="description">Description</div>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <h2>{todo.title}</h2>
//             <p>{todo.description}</p>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default Notes;
// src/components/EditorComponent.js// src/components/EditorComponent.js
// src/components/EditorComponent.js
import React, { useRef, useEffect } from 'react';
import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';
import LinkTool from '@editorjs/link';
import RawTool from '@editorjs/raw';

const EditorComponent = () => {
  const editorInstance = useRef(null);
  useEffect(() => {
    if (!editorInstance.current) {
  editorInstance.current = new EditorJs({
    holder: 'editor',
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: 'Enter a header',
        },
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            coub: true,
            codepen: true,
            // Add more embed services as needed
          },
        },
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
      },
      image: {
        class: SimpleImage,
        inlineToolbar: true,
      },
      linkTool: {
        class: LinkTool,
        config: {
          endpoint: 'https://your-link-endpoint', // Replace with your actual endpoint
        },
      },
      raw: RawTool,
      // Add more tools as needed
    },
  });
}
  return () => {
    // Clean up resources and events
    if (editorInstance.current) {
      // Perform any necessary cleanup here
    }
  };
}, []); // The empty dependency array ensures that this effect runs only once during mounting


  return <>
<Navbar className="navbar" Topic="WYSIWYG Editor" />
  <div id="editor" style={{
  }}>{/* Editor.js will be initialized here */}</div>
  </>;
};

export default EditorComponent;
