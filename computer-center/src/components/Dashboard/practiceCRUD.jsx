import React, { useState } from "react";

function PracticeCRUD() {
  
  const [newItem, setNewItem] = useState(""); 

  const [addItems, setAddItems] = useState([]); 

  const [editIndex, setEditIndex] = useState(null); 
  const [editValue, setEditValue] = useState(""); 

  const handleOnChange = (e) => {
    if (editIndex === null) {
      setNewItem(e.target.value);
    } else {
      setEditValue(e.target.value);
    }
  };


  const handleAdd = () => {
    if (newItem.trim()) {
      setAddItems([...addItems, newItem.trim()]);
      setNewItem("");
    }
  };


  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(addItems[index]);
  };


  const handleUpdate = () => {
    if (editValue.trim()) {
      const updatedItems = addItems.map((item, index) =>
        index === editIndex ? editValue.trim() : item
      );
      setAddItems(updatedItems);
      setEditIndex(null);
      setEditValue("");
    }
  };


  const handleDelete = (index) => {
    const updatedItems = addItems.filter((_, i) => i !== index);
    setAddItems(updatedItems);
  };

  return (
    <>
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          value={editIndex === null ? newItem : editValue}
          onChange={handleOnChange}
          placeholder={editIndex === null ? "Enter Item .." : "Edit Item .."}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        {editIndex === null ? (
          <button
            onClick={handleAdd}
            style={{ marginLeft: '8px', padding: '8px 16px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
          >
            Add
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            style={{ marginLeft: '8px', padding: '8px 16px', borderRadius: '4px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}
          >
            Update
          </button>
        )}
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Item</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addItems.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button
                  onClick={() => handleEdit(index)}
                  style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#ffc107', color: '#fff', border: 'none', cursor: 'pointer', marginRight: '4px' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PracticeCRUD;

// import React, { useState } from 'react';

// function App() {
//   // State to hold the list of items
//   const [items, setItems] = useState([]);
//   // State for the new item being added
//   const [newItem, setNewItem] = useState('');
//   // State for the index of the item being edited
//   const [editIndex, setEditIndex] = useState(null);
//   // State for the updated value of the item being edited
//   const [editValue, setEditValue] = useState('');

//   // Function to handle adding a new item
//   const handleAdd = () => {
//     if (newItem.trim()) {
//       setItems([...items, newItem.trim()]);
//       setNewItem('');
//     }
//   };

//   // Function to handle editing an item
//   const handleEdit = (index) => {
//     setEditIndex(index); // Set the index of the item being edited
//     setEditValue(items[index]); // Set the value of the item being edited
//   };

//   // Function to handle updating an item
//   const handleUpdate = () => {
//     if (editValue.trim()) {
//       const updatedItems = items.map((item, index) =>
//         index === editIndex ? editValue.trim() : item
//       );
//       setItems(updatedItems);
//       setEditIndex(null); // Clear the edit index after updating
//       setEditValue(''); // Clear the edit value
//     }
//   };

//   // Function to handle deleting an item
//   const handleDelete = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };



//   return (
//     <div style={containerStyle}>
//       <h1 style={headerStyle}>CRUD Operations Example</h1>

//       <div style={formContainerStyle}>
//         <input
//           type="text"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//           placeholder="Add new item"
//           style={inputStyle}
//         />
//         <button
//           onClick={handleAdd}
//           style={addButtonStyle}
//           onMouseOver={(e) => e.currentTarget.style.backgroundColor = addButtonHoverStyle.backgroundColor}
//           onMouseOut={(e) => e.currentTarget.style.backgroundColor = addButtonStyle.backgroundColor}
//         >
//           Add
//         </button>
//       </div>

//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thTdStyle}>Item</th>
//             <th style={thTdStyle}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <td style={thTdStyle}>
//                 {editIndex === index ? (
//                   <input
//                     type="text"
//                     value={editValue}
//                     onChange={(e) => setEditValue(e.target.value)}
//                     style={inputStyle}
//                   />
//                 ) : (
//                   item
//                 )}
//               </td>
//               <td style={thTdStyle}>
//                 {editIndex === index ? (
//                   <>
//                     <button
//                       onClick={handleUpdate}
//                       style={editButtonStyle}
//                       onMouseOver={(e) => e.currentTarget.style.backgroundColor = editButtonHoverStyle.backgroundColor}
//                       onMouseOut={(e) => e.currentTarget.style.backgroundColor = editButtonStyle.backgroundColor}
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => setEditIndex(null)}
//                       style={buttonStyle}
//                       onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6b7280'}
//                       onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6b7280'}
//                       className="ml-2"
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => handleEdit(index)}
//                       style={editButtonStyle}
//                       onMouseOver={(e) => e.currentTarget.style.backgroundColor = editButtonHoverStyle.backgroundColor}
//                       onMouseOut={(e) => e.currentTarget.style.backgroundColor = editButtonStyle.backgroundColor}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(index)}
//                       style={deleteButtonStyle}
//                       onMouseOver={(e) => e.currentTarget.style.backgroundColor = deleteButtonHoverStyle.backgroundColor}
//                       onMouseOut={(e) => e.currentTarget.style.backgroundColor = deleteButtonStyle.backgroundColor}
//                       className="ml-2"
//                     >
//                       Delete
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
