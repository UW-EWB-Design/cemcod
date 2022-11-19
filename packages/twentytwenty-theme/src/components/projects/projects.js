import { styled, connect } from "frontity";
import PageMetaTitle from "../page-meta-title";
import SectionContainer from "../styles/section-container";
import placeholder from "../../imgs/home/involvement.png";

const projects = () => {
  return (
    <div>
      <TitleContainer>
        <PageTitle>
          PROJECTS
        </PageTitle>
      </TitleContainer>
      <ProjectsContainer>
        {project("Leveraging Community Media and Film to prevent and address Gender Based Violence", 
          "A project in partnership with US Embassy Kampala PEPFAR program trains Community Reporters in effective reporting of GBV issues. The project also empowers local communities in Jinja district of Eastern Uganda to prevent and respond to GBV through use of film, Dialogue and community media. ", 
          placeholder)}
        {project("Youth Voices for Development - YOVODE", 
          "A project supported by the US Mission in Uganda, fosters youth local leadership, inclusion and effective youth participation in decision making processes at local level. The project targets youth 19-24 years and is currently implemented in the Jinja and Mbale districts of Uganda in partnership with NBS FM Jinja and Step FM Radio Mbale.",
          placeholder)}
        {project("Community Networks Initiative", 
          "A collaboration between CEMCOD, Digital Empowerment Foundation of India, and Maama Fm.\n\nThis project aims to connect unreached and underserved communities in an effort to bring them out of digital darkness and equip them with access to information.", 
          placeholder)}
        {project("FOYOPACT", 
          "Fostering Youth participation in Community Transformation (FOYOACT) promotes peer to peer learning, co creation and exchange of ideas, experiences and best practices in the field of Media and Information literacy and youth participation in democratic processes.\n\nThe project aims to expand opportunities for young people to participate in public life and empower them to transition from a culture of exclusion, silence and limitation to one of inclusion and effective participation in matters of development and community transformation. This project has previously been supported by Norec.", 
          placeholder)}
        {project("Effective Use of Social Media by Local Government Officials for Civic Engagement", 
          "Between 2016 and 2018, CEMCOD with support by KAS successfully implemented the project Social media for local governments which aimed at promoting the effective use of social media by local government leaders for civic engagement in Uganda.\n\nCEMCOD recognizes the power of social media to refine government, to open potentially promising channels of communication and to offer...", 
          placeholder)}
        {project("Uganda’s Community Voices", 
          "Uganda’s Community Voices is supported by Civil Society Academy. It built a cloud-based digital networking platform for community reporters in remote parts of Uganda who use their mobile phones to report on issues that affect their communities. These stories are submitted to partner radio stations in urban centers, where journalists embed them in news bulletins, talk shows and other programs. Innovation: Community Reporting Mobile App.", 
          placeholder)}
      </ProjectsContainer> 
    </div>
  );
};

const project = (title, paragraph, img) => (
  <ProjectCards>
    <div>
      <img src={img} />
      <div className="description">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <div className="bottomAlignment"> 
          <button>READ UPDATES</button>
        </div>
      </div>
    </div>
  </ProjectCards>
);


const ProjectsContainer = styled(SectionContainer)`
  display: grid;
  gap: 2rem;
  grid-template-columns: auto auto;
  padding: 0rem 1.5rem 1rem;
  margin-bottom: 2.5rem;
  position: relative;
`;

const TitleContainer = styled(SectionContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  padding: 0.625rem 4.625rem;
  background-color: #1CA99FD9;
  color: white;
  margin: 2.5rem 2.5rem;
`;

const ProjectCards = styled(SectionContainer)`
  display: flex;
  img {
    margin-left: auto;
    margin-right: auto; 
    width: 100%;
    border-radius: 6px;
    border: 0.5px solid #1CA99F;
  }

  .description {
    margin: 1.5rem;
    float: none;
    white-space: pre-wrap;
  }

  h1 {
    font-size: 1.5rem;
    margin: 1rem 0 1rem;
    font-weight: 700;
  }

  .bottomAlignment {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    background-color: white;
    color: #1ca99f;
    border-radius: 5px;
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0.625rem 2rem;
    background-color: #1CA99F;
    color: white;
    white-space: nowrap;
  }
  button:hover {
    background-color: #1b8f87;
  }
  button:focus {
    background-color: #116b65;
  }

  border-radius: 8px;
  border: 1px solid #1CA99F;
  box-shadow: 4px 4px 12px #9e9e9e;
  white-space: pre-line;

  @media (min-width: 1000px) {
    margin-left: 1rem;
  }
`;

export default connect(projects);