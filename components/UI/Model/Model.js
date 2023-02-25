import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Model= ({ children }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#model"))
      : null
}

export default Model
