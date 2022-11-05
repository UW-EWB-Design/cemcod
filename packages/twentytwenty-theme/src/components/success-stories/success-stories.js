import { styled, connect } from "frontity";
import PageMetaTitle from "../page-meta-title";
import SectionContainer from "../styles/section-container";

const successStories = () => {
  return (
    <TitleContainer>
      <PageTitle>
        Success Stories
      </PageTitle>
      {/* <CenteredRowContainer style={{ flexDirection: "row" }}>
        {value("Neutrality", "We shall always serve without discrimination to anybody.", neutralityImg)}
        {value("Accountability", "We shall hold office in trust and shall be responsible for our actions.", accountabilityImg)}
        {value("Transparency", "We shall in our service be as open as possible about our decision and the actions we take.", transparencyImg)}
        {value("Professionalism", "We shall adhere to the professional codes of conduct and exhibit highest degree of competence and best practices.", professionalismImg)}
        {value("Impartiality", "In carrying out our business, we shall give fair and unbiased treatment to all clients irrespective of gender, race, religion, disability and ethnicity.", impartialityImg)}
        </CenteredRowContainer>  */}
    </TitleContainer>
  );
};


const TitleContainer = styled(SectionContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  padding: 0.625rem 4.625rem;
  margin: 2.5rem 4.625rem;
  background-color: #1CA99FD9;
  color: white;
`;


export default connect(successStories);