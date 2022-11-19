import { styled, connect } from "frontity";
import SectionContainer from "../styles/section-container";
import placeholder from "../../imgs/home/involvement.png";

const programs = () => {
  return (
    <div>
      <TitleContainer>
        <PageTitle>
          PROGRAMS
        </PageTitle>
      </TitleContainer>
      <ProgramsContainer>
        {program("Emerging Community Leaders Training Program", 
          "Through the project “Youth Voices for Development – YOVODE” this program is specially designed for young people 19-24 years of age from across Uganda focused on youth development and civic engagement. The program fosters youth local leadership, inclusion and effective participation in decision making processes at local level. Selected youth are engaged in a series of activities including:\n\n •	Youth leadership trainings with a focus on effective participation & Community reporting skills.\n •	Radio talk shows and discussions on youth and leadership\n •	Community Dialogues on leadership and development\n •	Documentation of Community reports on issues of concern\n\nThe program is currently implemented in two districts of Jinja and Mbale with support from the US Mission in Uganda.", 
          placeholder)}
        {program("CommUnity Media Program", 
          "CommUnity Media Program is CEMCOD’s flagship program that trains youth, women and other community members in Media and Information Literacy skills and commissions them as Community Reporters to strengthen and promote citizens’ inclusion and effective participation in fundamental decision making processes at the grassroots through media in Uganda.\n\nUpto 125 young people across 5 districts in Uganda have been trained and attached to 5 Radio Stations, where they report and discuss community issues from an estimated 100 villages and a reach over 1,000,000 people.\n\nThe program continues to be rolled out in other parts of the country with an ambitious target to have 1 community reporter per village in Uganda.\n\nThe program enrolls youth up to 35 years of age but will generally take on passionate community members especially women who express interest in volunteering as community reporters in their areas.\n\nCurrent districts of implementation include: Mbale, Jinja, Wakiso, Gulu and Yumbe.",
          placeholder)}
        {program("Media Literacy in Schools Program (ME4Teens Series)", 
          "A CEMCOD program focused on educating and equipping young people in school with effective media literacy skills to make better and informed choices.\n\nThis program is in response to the numerous challenges faced by teenagers and young adults as a result of the immense media's influence in their teenage and young adult years. The series are set to empower teens and young adults to become conscious viewers of the media, critical decision makers, and to embrace their individuality and uniqueness through media literacy and media creation. It targets teenagers 13 – 18 years and puts special focus on Digital literacy skills.", 
          placeholder)}
        {program("Media and Information Literacy Training Program for Organizations", 
          "Our team delivers hands-on training in media and information literacy, equipping targets with adequate knowledge and skills that enable them navigate several media platforms with intent to communicate responsibly for development. As a result of our trainings, the participants we engage are able to identify relevant media platforms, engage effectively on different social media platforms, and be able to undertake basic analysis of targeted messaging relevant for effective service delivery and accountability.\n\nThe trainings are custom-made to suit individual and organizational needs at various levels", 
          placeholder)}
        {program("Youth Exchange Program", 
          "The youth exchange program is a cross cultural initiative that aims to expand opportunities for young people to participate in public life and empower them to transition from a culture of exclusion, silence and limitation to one of inclusion and effective participation in matters of development and community transformation.", 
          placeholder)}
      </ProgramsContainer> 
    </div>
  );
};

const program = (title, paragraph, img) => (
  <ProgramCards>
    <div>
      <img src={img} />
      <div className="description">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <div className="bottomAlignment"> 
          <button>VIEW PROJECTS UNDER THIS PROGRAM</button>
        </div>
      </div>
    </div>
  </ProgramCards>
);


const ProgramsContainer = styled(SectionContainer)`
  display: grid;
  gap: 2rem;
  grid-template-columns: auto;
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

const ProgramCards = styled(SectionContainer)`
  display: flex;
  img {
    margin-left: auto;
    margin-right: auto; 
    width: 100%;
    height: 22.5rem;
    object-fit: cover;
    object-position: 0 0;
    border-radius: 6px;
    border: 0.5px solid #1CA99F;
  }

  .description {
    margin-top: 2rem;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 2.5rem;
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

export default connect(programs);