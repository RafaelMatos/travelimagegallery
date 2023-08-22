import {  styled } from "styled-components";
import { Local } from "../../../../contexts/SliderContext";
export const SliderNavigationConstainer = styled.div`
  z-index: 888;
  position: relative ;
  display: flex;
  justify-content:center ;
  align-items: center;
  transform: translateY(80px) ;
  margin-bottom:12px ;

`
interface NavBtnProps {
  local: Local
  selected: Local
}
export const SliderNavBtn = styled.div<NavBtnProps>`
  width: 12px;
  height:12px ;
  background: ${ props => props.local === props.selected  ? props.theme['blue-500'] : props.theme['white']   } ;

  
  border-radius: 50%;
  cursor: pointer;
  box-shadow:0 0 2px rgba(255,255,255,0.5) ;
  transition: 0.3s ease;
  &:not(:last-child){
    margin-right:20px ;
  }
  &:hover{
    transform:scale(1.3) ;
    background:${ props => props.theme['blue-300']}
  }
  
`
