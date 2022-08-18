import { styled, connect } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import twitterImg from "../imgs/home/twitter.png";
import fbImg from "../imgs/home/fb.png";
import {imgCon, ImgCards, CenteredRowContainer} from "./home/whatwedo.js"

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <CenteredRowContainer style={{ flexDirection: "row" }}>
        <span style={{ marginLeft: 0 }}>KEEP UP WITH OUR LIVE EVENTS AND INITIATIVES AT CEMCOD_MEDIA ON YOUTUBE</span>
      </CenteredRowContainer>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <SiteFooterInner>
        <Credits>
          <Copyright>
            <CenteredRowContainer style={{ flexDirection: "row" }}>
              FOLLOW US
            </CenteredRowContainer>
          </Copyright>
        </Credits>
        <BackToTop />
      </SiteFooterInner>
      <CenteredRowContainer style={{ flexDirection: "row" }}>
        {imgCon("","",fbImg)}
        {imgCon("","",twitterImg)}
      </CenteredRowContainer>
    </SiteFooter>
  );
};

export default connect(Footer);

const SiteFooterInner = styled(SectionContainer)`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

const SiteFooter = styled.footer`
  margin-top: 5rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background-color: ${(props) => props.bg};
  color: #000000;

  @media (min-width: 700px) {
    margin-top: 8rem;
    font-size: 1.8rem;
    padding: 4.3rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Credits = styled.div`
  @media (min-width: 1054) {
    display: flex;
  }
`;

const Copyright = styled.p`
  margin: 0;
  width: 246;
  height: 58;

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;
