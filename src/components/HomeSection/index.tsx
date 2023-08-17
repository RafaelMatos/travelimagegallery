import {
  ContentContainer,
  HomeSectionContainer,
  SocialMediaContainer,
  Title,
  Video,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import {
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import veniceMp4 from "./../../assets/venice/bg.mp4";
import kotorMp4 from "./../../assets/kotor/bg.mp4";
import mykonosMp4 from "./../../assets/mykonos/bg.mp4";
import santoriniMp4 from "./../../assets/santorini/bg.mp4";
import anconaMp4 from "./../../assets/ancona/bg.mp4";
import { SliderNavigation } from "./components/SliderNavigation";
import { SliderContext } from "../../contexts/SliderContext";
export function HomeSection() {
  const { localSelected } = useContext(SliderContext);
  const [videoSelected, setVideoSelected] = useState(mykonosMp4);
  useEffect(() => {

    switch (localSelected) {
      case "mykonos":
        setVideoSelected(mykonosMp4)
        break;
      case "venice":
        setVideoSelected(veniceMp4)
        break;
      case "kotor":
        setVideoSelected(kotorMp4)
        break;
      case "santorini":
        setVideoSelected(santoriniMp4)
        break;
      case "ancona":
        setVideoSelected(anconaMp4)
        break;
      case "none":
        setVideoSelected(mykonosMp4)
        break;
    }
  }, [localSelected]);

  return (
    <HomeSectionContainer>
      {/* <Video src={localSelected === 'none' ?  mykonosMp4 : localSelectedVideoUrl } autoPlay muted loop /> */}
      <Video src={videoSelected ? videoSelected : mykonosMp4} autoPlay muted loop />
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
      <SliderNavigation />
    </HomeSectionContainer>
  );
}
