import styled from "styled-components";
import px2vw from "../../../utils/px2vw";
import { FaAward } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export const PostContainer = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    flex: 1 0 45%;
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const PostTitleContainer = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;
  position: relative;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    min-height: 4rem;
  }
`;

export const PostTitleTextContainer = styled.div`
  color: #cc3700;
`;

export const PostTextContainer = styled.p`
  margin-top: ${px2vw(20)};
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const KeepReadingLinkContainer = styled.span`
  font-weight: bold;
  font-size: 1.7rem;
  border: 1.5px solid #333;
  border-radius: 0.25rem;
  padding: 5px 10px 5px 10px;
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const FeaturedPostIconStyle = styled(FaAward)`
  color: #ffd700;
  position: absolute;
  top: 0px;
  width: 2rem;
  height: 2rem;
`;

export const FeaturedPostIconLeft = styled(FeaturedPostIconStyle)`
  left: 0;
`;
export const FeaturedPostIconRight = styled(FeaturedPostIconStyle)`
  right: 0;
`;
export const DateText = styled.div`
  color: black;
`;
export const DateIcon = styled(MdDateRange)`
  position: relative;
  top: 5px;
  right: 5px;
  height: 1.5rem;
  width: 1.5rem;
`;
