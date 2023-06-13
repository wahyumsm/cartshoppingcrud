import React, { useState } from 'react';

const Home = ({ items, addItem, removeItem, startEditing, updateItem, cancelEditing, editingIndex }) => {
    const [itemName, setItemName] = useState('');

    const handleInputChange = (e) => {
        setItemName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName.trim() !== '') {
            if (editingIndex === -1) {
                addItem(itemName);
            } else {
                updateItem(editingIndex, itemName);
                cancelEditing();
            }
            setItemName('');
        }
    };

    const handleEdit = (index) => {
        startEditing(index);
        setItemName(items[index]);
    };

    return (
        <div className="home">
            <h1>Keranjang Belanja</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={itemName} onChange={handleInputChange} placeholder="Tambahkan item..." />
                <button type="submit">{editingIndex === -1 ? 'Tambah' : 'Update'}</button>
                {editingIndex !== -1 && <button onClick={cancelEditing}>Batal</button>}
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeItem(index)}>Hapus</button>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
