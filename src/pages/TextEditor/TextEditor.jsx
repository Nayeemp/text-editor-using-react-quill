/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor() {
  const [textEditorValue, setTextEditorValue] = useState('');
  console.log('value = ', textEditorValue);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image', 'video'],

      ['clean'] // remove formatting button
    ]
  }// UIতে কি কি toolbar show করবে

  const formats = [
    'background', 'bold', 'color', 'font', 'code', 'italic', 'link', 'size', 'strike', 'script', 'underline', 'blockquote', 'header', 'indent', 'list',
    'align', 'direction', 'code-block', 'formula', 'link', 'image', 'video'
  ]// UIএর toolbar কে ফাংশনাল করার জন্য
  // string ae extra specing thakle kaj korbe na

  return (
    <div className="bg-red-300 h-full">
      <ReactQuill
        theme="snow"
        value={textEditorValue}
        onChange={setTextEditorValue}
        placeholder="Write your article here..."
        className="h-[400px] bg-green-200 m-0 p-0  box-border"
        modules={modules}
        formats={formats}
      />
    </div>
  );
}

export default TextEditor;
