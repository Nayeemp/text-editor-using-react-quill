import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import TextEditor from './pages/TextEditor/TextEditor';
import TextEditor2 from './pages/TextEditor2/TextEditor2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/text-editor2" element={<TextEditor2 />} />
      </Routes>
    </Router>
  );
}

export default App;
