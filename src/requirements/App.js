import React, { useState, useEffect } from 'react';
import Editor from './EditorScreens'
import useLocalStorage from '../editorsStorage/useLocalStorage'
// The main function is called app
// function for onClick event of the fileexplorer contents are defined
// if the index.html is clicked on that code editor is displayed and others hide
// All the changes are appended to the srcDoc
function App() 
{
  const [html, setHtml] = useLocalStorage('html', '')
  const [css1, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [html2, setHtml2] = useState(false);
  const [css2, setCss2] = useState(false);
  const [js2, setJs2] = useState(false);

function html_fun() 
{  
  setHtml2(true);
  setCss2(false);
  setJs2(false);
  }

function css_fun() 
{  
  setHtml2(false);
  setCss2(true);
  setJs2(false);
}  
function js_fun() 
{  
  setHtml2(false);
  setCss2(false);
  setJs2(true);
}    

useEffect(() => {
const timeout = setTimeout(() => {
    setSrcDoc(`
    <html>
        <body>${html}</body>
        <style rel='stylesheet'>${css1}</style>
        <script>${js}</script>
    </html>
    `)
}, 250)

return () => clearTimeout(timeout)
}, [html, css1, js])

  return (
    <>
      <div className="block title-block">
        <p className='fetitle'> 
        <h2 className='fetitle'>File Explorer</h2><br></br>
        <button className="index_b" onClick={html_fun}>index.html</button><br></br>
        <button className="index_b" onClick={css_fun}>index.css</button><br></br>
        <button className="index_b" onClick={js_fun}>index.js</button><br></br>
        </p>        
        {html2?
        <Editor
          lang="xml"
          dispName="HTML"
          val={html}          
          changed={setHtml}
        />:null}
        {css2?
        <Editor
          lang="css"
          dispName="CSS"
          val={css1}
          changed={setCss}
        />:null}
        {js2?
        <Editor
          lang="javascript"
          dispName="JavaScript"
          val={js}
          changed={setJs}
        />:null}
      </div>
      <div className="block">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}
export default App;

/*
 *code:: Code to upload
 *date:: formatted date
 *format:: css/html/js
 *fileName:: name.js/name.css/name.html
 */
