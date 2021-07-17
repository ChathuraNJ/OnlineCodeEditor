// importing packages
import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as EditorScreen } from 'react-codemirror2'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
// The Editor screen of HTML,CSS and JS
// The props of this function is the language used, name displayed as the heading
// the content in the edior screen and the change of the value
// Code-mirror is used to implement the fie editor
export default function Editor(props) {
  const {
    lang,
    dispName,
    val,
    changed
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    changed(value)
  }
// Fix the icon to close or open the code editor window
// Insert the icon and flexible window size
// Editor Screen Function to look of the screen, with line wraping and line numbers etc..,
  return (
    <div className={`editor-box ${open ? '' : 'closed'}`}>
      <div className="editor-title">
        {dispName}
        <button
          type="button"
          className="open-close"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <EditorScreen
        onBeforeChange={handleChange}
        value={val}
        className="code-mirror-style"
        options={{
          lineWrapping: true,
          lint: true,
          mode: lang,
          theme: 'material',  
          lineNumbers: true
        }}
      />
    </div>
  )
}