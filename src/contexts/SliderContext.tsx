import { ReactNode, createContext, useState } from "react";

export type Local = 'mykonos' | 'venice' | 'kotor' | 'ancona' | 'santorini' | 'none'

interface SliderContextType{
  localSelected : Local
  handleSelectLocal : (local:Local) => void
  handleSelectLocalVideoUrl : (local:Local) => void
  localSelectedVideoUrl : string
}



export const SliderContext = createContext({} as SliderContextType)

interface SliderProviderProps{
  children : ReactNode
}

export function SliderProvider({children} : SliderProviderProps ){

  const [localSelected, setLocalSelected] = useState<  Local >('none');
  const [localSelectedVideoUrl, setLocalSelectedVideoUrl] = useState('./../assets/mykonos/bg.mp4');

  const handleSelectLocal = (local:Local) =>{
    setLocalSelected(local)
    handleSelectLocalVideoUrl(local)
  }
  const handleSelectLocalVideoUrl = (local:Local) =>{
    const url = `/src/assets/${local}/bg.mp4`
    setLocalSelectedVideoUrl(url)


  }

  return(
    <SliderContext.Provider
      value={{localSelected, handleSelectLocal, handleSelectLocalVideoUrl , localSelectedVideoUrl}}
    >
      {children}
    </SliderContext.Provider>
  )
}