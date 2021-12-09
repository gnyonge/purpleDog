import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import List from './pages/List';
import Content from './pages/Content';
import Home from './pages/Home';

function App() {
  const categories = [
		"topstories",
    "showstories",
    "newstories",
    "jobstories",
    "askstories",
	]
  return (
    <div className="App">
      <Header categories={categories}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {
          categories.map((category, index) => (
            <Route path={category} element={<List />} key={index}/>
          ))
        }
        <Route path=":id" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
