import { styled, connect } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import twitterImg from "../imgs/home/twitter.png";
import fbImg from "../imgs/home/fb.png";

const Footer = ({ state }) => {
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <SiteFooterInner>
        <CenteredRowContainer style={{ backgroundColor: "#2BB673", flex: "1 1 0", color: "white" }}>
          FOLLOW US
          <Icon src={twitterImg} />
          <Icon src={fbImg} />
        </CenteredRowContainer>
        <CenteredRowContainer style={{ backgroundColor: footerBg, flex: "3 1 0" }}>
          <span>KEEP UP WITH OUR LIVE EVENTS AND INITIATIVES AT CEMCOD_MEDIA ON YOUTUBE</span>
        </CenteredRowContainer>
      </SiteFooterInner>
    </SiteFooter>
  );
};

export default connect(Footer);

const Icon = styled.img`
  height: 2em;
`
const SiteFooterInner = styled(SectionContainer)`
  align-items: basis;
  display: flex;
  justify-content: space-between;
`;

const CenteredRowContainer = styled.div`
  justify-content: center;
  padding: 0.5em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;


const SiteFooter = styled.footer`
  margin-top: 0;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  width: 100%;
  background-color: ${(props) => props.bg};

  @media (min-width: 700px) {
    font-size: 1.8rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
