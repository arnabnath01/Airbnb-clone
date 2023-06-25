'use client'

import { useState ,useEffect} from "react"

interface ClientOnlyProps {
    children: React.ReactNode 
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {

    const [hasmounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])
    if(!hasmounted)
    return null;    

  return (
    <div>
      {children}
    </div>
  )
}

export default ClientOnly
