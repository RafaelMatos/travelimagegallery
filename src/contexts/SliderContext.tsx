import { ReactNode, createContext, useState } from "react";

interface SliderContextType{
  localSelected :  'mykonos' | 'venice' | 'kotor' | 'ancona' | 'santorini' | 'none'  
  handleSelectLocal : (local:'mykonos' | 'venice' | 'kotor' | 'ancona' | 'santorini' | 'none') => void
  handleSelectLocalVideoUrl : (local:'mykonos' | 'venice' | 'kotor' | 'ancona' | 'santorini' | 'none') => void
  localSelectedVideoUrl : string
}

export const SliderContext = createContext({} as SliderContextType)

interface SliderProviderProps{
  children : ReactNode
}

export function SliderProvider({children} : SliderProviderProps ){

  const [localSelected, setLocalSelected] = useState<  'mykonos' | 'venice' | 'kotor' | 'ancona' | 'santorini' | 'none' >('none');
  const [localSelectedVideoUrl, setLocalSelectedVideoUrl] = useState< string >('./../assets/mykonos/bg.mp4');

  const handleSelectLocal = (local:'mykonos' | 'venice' | 'kotor' | 'ancona' | 'santorini' | 'none') =>{
    setLocalSelected(local)
    handleSelectLocalVideoUrl(local)
  }
  const handleSelectLocalVideoUrl = (local:'mykonos' | 'venice' | 'kotor' | 'ancona' | 'santorini' | 'none') =>{
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