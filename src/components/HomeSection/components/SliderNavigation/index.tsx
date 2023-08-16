import { useContext } from "react";
import { SliderNavBtn, SliderNavigationConstainer } from "./styles";

import { SliderContext } from "../../../../contexts/SliderContext";


export function SliderNavigation(){

  const { localSelected, handleSelectLocal } = useContext(SliderContext)
 
  return(
    <SliderNavigationConstainer>
        <SliderNavBtn
          local='mykonos'
          selected={localSelected}
          onClick={() => handleSelectLocal('mykonos')}
        />
        <SliderNavBtn
          local='kotor'
          selected={localSelected}
          onClick={() => handleSelectLocal('kotor')}
        />
        <SliderNavBtn
          local='venice'
          selected={localSelected}
          onClick={() => handleSelectLocal('venice')}
        />
        <SliderNavBtn
          local='ancona'
          selected={localSelected}
          onClick={() => handleSelectLocal('ancona')}
        />
        <SliderNavBtn
          local='santorini'
          selected={localSelected}
          onClick={() => handleSelectLocal('santorini')}
        />
      </SliderNavigationConstainer>
  )
}