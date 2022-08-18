import { styled, connect } from "frontity";
import SectionContainer from "../styles/section-container";
import missionImg from "../../imgs/home/mission.png"
import visionImg from "../../imgs/home/vision.png"
import goalImg from "../../imgs/home/goal.png"

const imgCon = (title, paragraph, img) => (
  <ImgCards>
    <div>
      <img src={img} />
      <br></br>
      <h1 style={{ fontSize: "40px", textAlign: "center", marginTop: 0 }}>{title}</h1>
      <p>{paragraph}</p>
    </div>
  </ImgCards>
);

const whatwedo = ({ state }) => {
  return (
    <div>
      <CenteredRowContainer style={{ flexDirection: "column" }}>
        <h1>WHAT WE DO</h1>
        <p>
          Center for Media Literacy and Community Development (CEMCOD) is a
          non-profit organization with a focus to bring about holistic growth and
          development by uplifting the status of vulnerable communities within
          Uganda through the provision of media, media-related, and direct
          community interventions. It was founded and incorporated in July 2013
          (Reg. no. 169570) with the goal to create a wider forum within which to
          advocate media literacy and community development issues especially in
          the areas of livelihoods and capacity building, social relations and
          education, public health and environment, policy advocacy and research,
          legal aid, and human right.
        </p>
      </CenteredRowContainer>
      <br /><br />
      
      <CenteredRowContainer style={{ flexDirection: "row", alignItems: "flex-start" }}>
        {imgCon("MISSION", "To transform vulnerable communities through appropriate and responsible media and community approaches.", missionImg)}
        {imgCon("VISION", "An organization that is a benchmark for community transformation.", visionImg)}
        {imgCon("GOAL", "To harmonize media and community efforts for societal development.", goalImg)}
      </CenteredRowContainer>
    </div>
  );
};

export default connect(whatwedo);

const CenteredRowContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

const ImgCards = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
