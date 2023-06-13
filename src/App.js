import React, { useState, useEffect } from 'react';
import Home from './pages/Home';

const App = () => {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const updateItem = (index, newItem) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    setEditingIndex(-1);
  };

  const cancelEditing = () => {
    setEditingIndex(-1);
  };

  return (
    <div className="App">
      <Home
        items={items}
        addItem={addItem}
        removeItem={removeItem}
        startEditing={startEditing}
        updateItem={updateItem}
        cancelEditing={cancelEditing}
        editingIndex={editingIndex}
      />
    </div>
  );
};

export default App;
