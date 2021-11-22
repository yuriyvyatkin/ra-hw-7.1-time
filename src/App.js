import React, { useState } from 'react';
import videoLinks from './data/videoLinks';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [list] = useState(videoLinks);

  return (
    <VideoList list={list} />
  );
}

export default App;
