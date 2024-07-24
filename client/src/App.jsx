import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className='max-w-screen-x1 mx-auto px-20'>
      <Navbar/>
      <main className= "mt-8 min-h-screen">
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </div>
  </Provider>
    
  );
};

export default App;
