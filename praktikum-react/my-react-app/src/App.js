// import React from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import React, { useState } from 'react';

// Komponen header
function Header() {
  return(
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return(
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
}

// Komponen footer
function Footer() {
  return(
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}

// Komponen App 
function App() {
  return(
    <div>
      <Header/>
      <Main/>
      <Greeting name="Hawa" />
      <Counter/>
      <Example/>
      <TodoList/>
      {/* <TodoItem/> */}
      <Footer/>
    </div>
  );
}

export default App;

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange}/>
      <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange}/>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>

      <p>{name} berumur {age} tahun dan emailnya adalah {email}</p>
    </div>
  )
}

// TUGAS
// Komponen untuk menampilkan item tugas
function TodoItem({ task, onDelete }) {
  return (
    <li style={{ display: 'list-item', listStyleType: 'disc', marginBottom: '5px' }}>
      <span style={{ display: 'inline-block', minWidth: '200px' }}>{task}</span>
      <button onClick={onDelete} style={{ marginLeft: '20px', color: 'red' }}>Hapus</button>
    </li>
    );
  }

// Komponen TodoList
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Daftar Tugas</h2>
      <div className="flex mb-4">
        <input 
          type="text" 
          className="flex-grow p-2 border rounded-l-2xl" 
          placeholder="Tambahkan tugas baru" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask} className="p-2 bg-blue-500 text-white rounded-r-2xl hover:bg-blue-600">Tambah</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}