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
  const [title, setTitle] = useState('WONDERFUL');
  const [span, setSpan] = useState('ISLAND');
  const [active, setActive] = useState(true);
  async function handleVideoSlide() {
    switch (localSelected) {
      case "mykonos":
        setActive(false);
        setTitle('partiest')
        setSpan('island')
        setVideoSelected(mykonosMp4);
        break;
      case "venice":
        setActive(false);
        setTitle('romantic')
        setSpan('city')
        setVideoSelected(veniceMp4);
        break;
      case "kotor":
        setActive(false);
        setTitle('historical')
        setSpan('town')
        setVideoSelected(kotorMp4);
        break;
      case "santorini":
        setActive(false);
        setTitle('magical')
        setSpan('sunset')
        setVideoSelected(santoriniMp4);
        break;
      case "ancona":
        setActive(false);
        setTitle('charming')
        setSpan('italian city')
        setVideoSelected(anconaMp4);
        break;
      case "none":
        setActive(false);
        setVideoSelected(mykonosMp4);
        break;
    }
    await setTimeout(() => {
      setActive(true);
    }, 250);
  }
  useEffect(() => {
    handleVideoSlide();
  }, [localSelected]);

  return (
    <HomeSectionContainer>
      <Video
        src={videoSelected ? videoSelected : mykonosMp4}
        className={active ? "active" : ""}
        autoPlay
        muted
        loop
      />
      <ContentContainer>
        <Title>
          {title}.
          <br />
          <span>{span}</span>
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
