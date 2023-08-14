import { styled } from "styled-components";

export const HomeSectionContainer = styled.section`
  padding: 100px 200px;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme["blue-300"]};
  @media (max-width: 900px) {
    padding: 15px 30px;
  }

  /* :before {
    z-index: 111;
    content: "";
    position: absolute;
    background: rgba(3, 96, 251, 0.3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  } */
`;
export const Title = styled.h1`
  font-size: 4em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 75px;
  margin-bottom: 40px;
  span {
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export const ContentContainer = styled.div`
  z-index: 888;
  width: 70%;
  margin-top: 50px;
  p {
    margin-bottom: 65px;
  }
  a {
    background: ${(props) => props.theme["gray-100"]};
    padding: 15px 35px;
    color: ${(props) => props.theme["blue-500"]};
    font-size: 1.1em;
    font-weight: 700;
    border-radius: 5px;
    transition: 0.3s ease;
  }
  a:hover {
    scale: 1.1;
    opacity: 0.8;
  }
`;
export const SocialMediaContainer = styled.div`
  z-index: 888;
  position: absolute;
  right: 30px;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;

  a {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 1.6em;
    transition: 0.5s ease;
  }
  a:not(:last-child) {
    margin-bottom: 20px;
  }
  a:hover {
    transform: scale(1.3);
  }
`;

export const Video = styled.video`
  z-index: 000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
