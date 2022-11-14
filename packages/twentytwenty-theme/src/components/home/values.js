import { styled, connect } from "frontity";
import SectionContainer from "../styles/section-container";
import neutralityImg from "../../imgs/home/neutrality.png";
import accountabilityImg from "../../imgs/home/accountability.png";
import transparencyImg from "../../imgs/home/transparency.png";
import professionalismImg from "../../imgs/home/professionalism.png";
import impartialityImg from "../../imgs/home/impartiality.png";
import EdgeContainer from "../styles/edge-container";

const value = (title, paragraph, img) => (
  <ValueCards>
    <div>
      <img src={img} />
      <h2 style={{ fontSize: "25px" }}>{title}</h2>
      <p>{paragraph}</p>
    </div>
  </ValueCards>
);

const values = () => {
  return (
    <div>
      <CenteredRowContainer style={{ flexDirection: "row" }}>
        {value("Neutrality", "We shall always serve without discrimination to anybody.", neutralityImg)}
        {value("Accountability", "We shall hold office in trust and shall be responsible for our actions.", accountabilityImg)}
        {value("Transparency", "We shall in our service be as open as possible about our decision and the actions we take.", transparencyImg)}
        {value("Professionalism", "We shall adhere to the professional codes of conduct and exhibit highest degree of competence and best practices.", professionalismImg)}
        {value("Impartiality", "In carrying out our business, we shall give fair and unbiased treatment to all clients irrespective of gender, race, religion, disability and ethnicity.", impartialityImg)}
      </CenteredRowContainer>
    </div>
  );
};

export default connect(values);

const CenteredRowContainer = styled(SectionContainer)`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
  text-align: center;

  @media(max-width: 1040px){
    flex-wrap: wrap;
  }
`;

const ValueCards = styled(SectionContainer)`
  display: flex;
  img {
    margin-left: auto;
    margin-right: auto; 
    width: 50%;
  }
  h2 {
    margin: 1rem 0 1rem;
  }

  @media (min-width:470px){
    width:40%;
  }

`;
