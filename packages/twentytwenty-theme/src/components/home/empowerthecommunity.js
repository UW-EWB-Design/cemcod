import { styled, connect } from "frontity";
import EdgeContainer from "../styles/edge-container";
import empowerImg from "../../imgs/home/empower.png";

const empowerthecommunity = () => {
  return (
    <CenteredColumnContainer style={{ flexDirection: "column" }}>
      <h1>Empower The Community</h1>
      <button>HEAR PEOPLE'S STORIES</button>
    </CenteredColumnContainer>
  );
};

export default connect(empowerthecommunity);

const CenteredColumnContainer = styled.div`
  margin: 3rem 0; 
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  background-image: url(${empowerImg});
  background-size: cover;

  button {
    margin-bottom: 4rem;
    font-weight: 700;
    color: #1ca99f;
    border-color: #2bb673;
    border-style: solid;
    border-width: 1px;
    background-color: #fffdfd;
    border-radius: 5rem;
    padding: 1.6rem 1.6rem;
  }

  button:hover {
    background-color: #f0f2f0;
  }
  button:focus {
    background-color: #e3e6e4;
  }
`;