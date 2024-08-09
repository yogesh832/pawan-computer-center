import React, { useState } from 'react';

function App() {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  // State for the new item being added
  const [newItem, setNewItem] = useState('');
  // State for the index of the item being edited
  const [editIndex, setEditIndex] = useState(null);
  // State for the updated value of the item being edited
  const [editValue, setEditValue] = useState('');

  // Function to handle adding a new item
  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  // Function to handle editing an item
  const handleEdit = (index) => {
    setEditIndex(index); // Set the index of the item being edited
    setEditValue(items[index]); // Set the value of the item being edited
  };

  // Function to handle updating an item
  const handleUpdate = () => {
    if (editValue.trim()) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? editValue.trim() : item
      );
      setItems(updatedItems);
      setEditIndex(null); // Clear the edit index after updating
      setEditValue(''); // Clear the edit value
    }
  };

  // Function to handle deleting an item
  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Inline styles
  const containerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '16px',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const formContainerStyle = {
    marginBottom: '16px',
    display: 'flex',
    gap: '8px',
  };

  const inputStyle = {
    border: '1px solid #d1d5db',
    padding: '8px',
    borderRadius: '8px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3b82f6',
  };

  const addButtonHoverStyle = {
    ...addButtonStyle,
    backgroundColor: '#2563eb',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    border: '1px solid #d1d5db',
    padding: '8px',
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#facc15',
  };

  const editButtonHoverStyle = {
    ...editButtonStyle,
    backgroundColor: '#fbbf24',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ef4444',
  };

  const deleteButtonHoverStyle = {
    ...deleteButtonStyle,
    backgroundColor: '#dc2626',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>CRUD Operations Example</h1>

      <div style={formContainerStyle}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={inputStyle}
        />
        <button
          onClick={handleAdd}
          style={addButtonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = addButtonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = addButtonStyle.backgroundColor}
        >
          Add
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Item</th>
            <th style={thTdStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={thTdStyle}>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={inputStyle}
                  />
                ) : (
                  item
                )}
              </td>
              <td style={thTdStyle}>
                {editIndex === index ? (
                  <>
                    <button
                      onClick={handleUpdate}
                      style={editButtonStyle}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = editButtonHoverStyle.backgroundColor}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = editButtonStyle.backgroundColor}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      style={buttonStyle}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6b7280'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6b7280'}
                      className="ml-2"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(index)}
                      style={editButtonStyle}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = editButtonHoverStyle.backgroundColor}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = editButtonStyle.backgroundColor}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      style={deleteButtonStyle}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = deleteButtonHoverStyle.backgroundColor}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = deleteButtonStyle.backgroundColor}
                      className="ml-2"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
