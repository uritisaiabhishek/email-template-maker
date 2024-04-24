import React, { useState } from 'react';
import juice from 'juice';

function Homepage() {
  const [htmlInput, setHtmlInput] = useState('<div class="hero_section1">this is a test div</div>');
  const [htmlCss, setCssInput] = useState('.hero_section1{padding: 5rem 2rem;background-color: blue;}');
  const [htmlOutput, setHtmlOutput] = useState('');
  const [sectionName, setsectionName] = useState('Hero Section');

  const dataArr = JSON.parse(localStorage.getItem('dataArr')) || [];
  
  const handlesave = async () =>{
    var result = juice("<style>"+htmlCss+"</style>"+htmlInput+"");
    const temp = {
      id: sectionName,
      label: sectionName,
      content: result
    }
    var updatedArr = [...dataArr, temp];
    localStorage.setItem("dataArr", JSON.stringify(updatedArr));
    
    setHtmlOutput(result);
  }

  return (
    <div className='container' data-gjs-type="editable" data-gjs-editable="true">
      <div className='code'>
        <input
          value={sectionName}
          onChange={(e)=>setsectionName(e.target.value)}
          placeholder='Section name'
        />
        <textarea
          value={htmlCss}
          onChange={(e)=>setCssInput(e.target.value)}
          rows="5"
          cols="50"
          placeholder='Enter Css'
        ></textarea>
        <textarea
          value={htmlInput}
          onChange={(e)=>setHtmlInput(e.target.value)}
          rows="5"
          cols="50"
          placeholder='Enter html'
        ></textarea>
        <button onClick={handlesave}>Save Component</button>
      </div>
      <div className='output' dangerouslySetInnerHTML={{__html: htmlOutput}} />
    </div>
  )
}

export default Homepage