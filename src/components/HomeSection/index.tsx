import {
  ContentContainer,
  HomeSectionContainer,
  SocialMediaContainer,
  Title,
  Video,
} from "./styles";
import {
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import mykonosMp4 from './../../assets/mykonos/mykonos.mp4'
export function HomeSection() {
  return (
    <HomeSectionContainer>
      <Video src={mykonosMp4} autoPlay muted loop/>
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
    </HomeSectionContainer>
  );
}
