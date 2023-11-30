/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor() {
  const [textEditorValue, setTextEditorValue] = useState('');
  console.log('value = ', textEditorValue);

  const modules = {
    toolbar: [
      [{ align: [] }], // align content
      ['bold', 'italic', 'underline'], // toggled buttons
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }],
      ['link', 'image']

    ]
  }// UIতে কি কি toolbar show করবে

  const formats = [
    'align', 'bold', 'italic', 'underline', 'header', 'color', 'link', 'image'
  ]// UIএর toolbar কে ফাংশনাল করার জন্য
  // string ae extra specing thakle kaj korbe na

  return (
    <div className="p-5 ">
      <ReactQuill
        theme="snow"
        value={textEditorValue}
        onChange={setTextEditorValue}
        placeholder="Write your article here..."
        className="bg-[#F5F5F5]"
        modules={modules}
        formats={formats}
      />
    </div>
  );
}

export default TextEditor;
