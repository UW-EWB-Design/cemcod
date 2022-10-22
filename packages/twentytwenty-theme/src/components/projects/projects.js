import { styled, connect } from "frontity";
import PageMetaTitle from "../page-meta-title";
import SectionContainer from "../styles/section-container";

const projects = () => {
  return (
    <TitleContainer>
      <PageTitle>
        PROJECTS
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

// const value = (title, paragraph, img) => (
//   <ValueCards>
//     <div>
//       <img src={img} />
//       <h2 style={{ fontSize: "25px" }}>{title}</h2>
//       <p>{paragraph}</p>
//     </div>
//   </ValueCards>
// );


// const CenteredRowContainer = styled(SectionContainer)`
//   display: flex;
//   align-items: flex-start;
//   gap: 2.4rem;
//   text-align: center;
// `;

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

// const ValueCards = styled(SectionContainer)`
//   display: flex;
//   img {
//     margin-left: auto;
//     margin-right: auto; 
//     width: 50%;
//   }
//   h2 {
//     margin: 1rem 0 1rem;
//   }
// `;

export default connect(projects);