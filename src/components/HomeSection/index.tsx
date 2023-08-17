import {
  ContentContainer,
  HomeSectionContainer,
  SocialMediaContainer,
  Title,
  Video,
} from "./styles";
// import{ useContext } from 'react'
import {
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import mykonosMp4 from "./../../assets/mykonos/bg.mp4";
import { SliderNavigation } from "./components/SliderNavigation";
// import { SliderContext } from "../../contexts/SliderContext";
export function HomeSection() {
  // const { localSelected,localSelectedVideoUrl } = useContext(SliderContext)

  return (
    <HomeSectionContainer>
      
      {/* <Video src={localSelected === 'none' ?  mykonosMp4 : localSelectedVideoUrl } autoPlay muted loop /> */}
      <Video src={ mykonosMp4 } autoPlay muted loop />
      <ContentContainer>
        <Title>
          Wonderful.
          <br />
          <span>Island</span>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          tempora debitis sit porro nam enim dolorem quas atque, quod qui rerum
          similique mollitia! A sunt harum impedit cum nemo consequatur!
        </p>
        <a href={"#"}>Read More</a>
      </ContentContainer>
      <SocialMediaContainer>
        <a href="#">
          <InstagramLogo weight="fill" />
        </a>
        <a href="#">
          <TwitterLogo weight="fill" />
        </a>
        <a href="#">
          <FacebookLogo weight="fill" />
        </a>
      </SocialMediaContainer>
      <SliderNavigation/>
    </HomeSectionContainer>
  );
}
