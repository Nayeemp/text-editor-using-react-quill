import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/text-editor"> TextEditor</Link>
        </li>

        <li>
          <Link to="/text-editor2"> TextEditor2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
