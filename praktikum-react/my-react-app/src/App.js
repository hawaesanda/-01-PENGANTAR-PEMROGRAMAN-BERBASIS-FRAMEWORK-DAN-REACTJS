import React from 'react';
import Counter from './Counter';

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
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;

