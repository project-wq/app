import './App.css';
import './style.css';
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import {grey} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { requestToGroqAI } from './utils/groq';
import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('');
  const [data, setData] = useState('');

  const handleSumbit = async () => {
    const ai = await requestToGroqAI(content);
    setData(ai);
    console.log(ai);
  };

  return (
      <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className="text-4xl text-white">Hello Jengkol Online</h1>
        <form className="flex flex-col gap-4 py-4 w-full">
          <input
            placeholder="Ketik Permintaan Anda"
            className="py-2 px-4 text-md rounded-md"
            id="content"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSumbit} type="button" className="bg-blue-500 py-2 px-4 font-bold text-white rounded-md">
            KIRIM
          </button>
        </form>
        <div className="max-w-xl w-full rounded-md">
          {data ? (
        <SyntaxHighlighter 
        language="swift" 
        style={grey} 
        wrapLongLines={true}
        >{data}
        </SyntaxHighlighter>
          ) :null}
        </div>
      </main>
  );
}

export default App;