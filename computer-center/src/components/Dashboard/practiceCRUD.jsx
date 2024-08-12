// import React, { useState } from 'react';

// function App() {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');
//   const [editIndex, setEditIndex] = useState(null);
//   const [editValue, setEditValue] = useState('');

//   const handleAdd = () => {
//     if (newItem.trim()) {
//       setItems([...items, newItem.trim()]);
//       setNewItem('');
//     }
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditValue(items[index]);
//   };

//   const handleUpdate = () => {
//     if (editValue.trim()) {
//       const updatedItems = items.map((item, index) =>
//         index === editIndex ? editValue.trim() : item
//       );
//       setItems(updatedItems);
//       setEditIndex(null);
//       setEditValue('');
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">CRUD Operations Example</h1>

//       <div className="flex gap-2 mb-4">
//         <input
//           type="text"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//           placeholder="Add new item"
//           className="border border-gray-300 p-2 rounded-lg w-full"
//         />
//         <button
//           onClick={handleAdd}
//           className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//         >
//           Add
//         </button>
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 p-2">Item</th>
//             <th className="border border-gray-300 p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <td className="border border-gray-300 p-2">
//                 {editIndex === index ? (
//                   <input
//                     type="text"
//                     value={editValue}
//                     onChange={(e) => setEditValue(e.target.value)}
//                     className="border border-gray-300 p-2 rounded-lg w-full"
//                   />
//                 ) : (
//                   item
//                 )}
//               </td>
//               <td className="border border-gray-300 p-2">
//                 {editIndex === index ? (
//                   <>
//                     <button
//                       onClick={handleUpdate}
//                       className="bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => setEditIndex(null)}
//                       className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 ml-2"
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => handleEdit(index)}
//                       className="bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(index)}
//                       className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 ml-2"
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




import  { useState } from "react";


const PracticeCRUD = () => {

  const [items, setItems] = useState([]); 
  const [newItem,setNewItem] = useState(''); 
  const [editItems, setEditItems] = useState('');
  const [editIndex, setEditIndex] = useState(null)
  
    const  handleOnChange = (e) => {
      if (editIndex !== null) {
        setEditItems(e.target.value); 
      } else {
        setNewItem(e.target.value); 
      }
      // console.log(e.target.value);
    }
    const handleAdd = (e) =>{
      e.preventDefault();
      if (newItem.trim()) {
              setItems([...items, newItem.trim()]);
              setNewItem('');
            }
    };
    const handleDelete = (index) =>{
        const updatedData = items.filter((_,e) => e !== index);
        setItems(updatedData)
    }
    const handleEdit = (index) =>{
      setEditIndex(index);
      setEditItems(items[index]);
    }

    const handleUpdate = () => {
      const updatedItems = items.map((item, index) => 
        index === editIndex ? editItems : item
      );
      setItems(updatedItems);
      setEditIndex(null); 
      setEditItems('');   
      setNewItem('');     
    }
  return(
  <>
   <div className="max-w-4xl mx-auto p-4">
   <h1 className="text-2xl font-bold mb-4">CRUD Operation</h1>
   
   
   <div className="flex gap-2 mb-4">
         <input type="text"
                    value= {editIndex !== null ? editItems : newItem}
                    placeholder="Add new item"
                    className="border border-gray-300 p-2 rounded-lg w-full"
                    onChange={handleOnChange}
                  />
         {editIndex === null ? (         
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
         ) : (
          <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Update
        </button>
         )}
      </div>
      
      <table className="w-full border-collapse">
        
          <thead>
          <tr>
          <th className="border border-gray-300 p-2">Items</th>
          <th className="border border-gray-300 p-2">Actions</th>
          </tr>
          </thead>
        
          <tbody>
  
            {items.map((item,index)=>(
              <tr key={index}>
                <td>{item}</td>
                <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                <td><button onClick={() => handleEdit(index)}>Edit</button></td>
              </tr>
            ))}
            
          </tbody>
        
      </table>
        
      
  </div>
  </>
)
}
export default PracticeCRUD;