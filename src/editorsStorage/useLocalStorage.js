// Here the codeeditor is the prefix 
// and the respective code editor name is appended
// If the type is a function that function is returned 
// If it is text the text is returned
import { useEffect, useState } from 'react'
const PREFIX = 'codeeditor-'
export default function useLocalStorage(ce, iniVal) {
  const prefixedKey = PREFIX + ce

  const [val, setVal] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof iniVal === 'function') {
      return iniVal()
    } else {
      return iniVal
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(val))
  }, [prefixedKey, val])

  return [val, setVal]
}
