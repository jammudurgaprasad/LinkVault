import { useState } from 'react';
import axios from 'axios';

export default function AddLink() {
  const [form, setForm] = useState({ category: '', name: '', url: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://linkvault-favx.onrender.com/api/links/add', form);
    setForm({ category: '', name: '', url: '' });
    alert("Link Added!");
  };

  return (
    <div className="container">
      <h2>Add New Link</h2>
      <form onSubmit={handleSubmit} className="link-form">
        <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="url" placeholder="Link URL" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
