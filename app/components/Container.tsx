"use client"



//? The interface ContainerProps is used to ensure that the Container component only receives valid props. This is important because it helps to prevent errors and unexpected behavior.


interface ContainerProps {
    children :React.ReactNode; 
}

const Container:React.FC<ContainerProps> = ({children})=> {
  return (
    <div>
    {children}
    </div>
  )
}

export default Container
