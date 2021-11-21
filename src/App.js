import React, { useState, useEffect } from 'react';
import videoLinks from './data/videoLinks';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(videoLinks);
  }, [])

  return (
    <VideoList list={list} />
  );
}

export default App;
