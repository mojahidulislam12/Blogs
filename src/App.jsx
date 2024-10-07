

import { useState } from 'react'
import './App.css'
import Bologs from './components/Blogs/Bologs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handelAddToBookmark = blog =>{
    const newBookmarks =[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Bologs handelAddToBookmark={handelAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Bologs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
