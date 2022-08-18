import { styled, connect } from "frontity";
import EdgeContainer from "../styles/edge-container";
import involvementImg from "../../imgs/home/involvement.png"

const getinvolved = () => {
  return (
    <OuterContainer>
      <img src={involvementImg} />
      <TextContainer style={{ flexDirection: "column" }}>
        <h2>Stay Updated and Informed</h2>
        <p>It is important to be engaged with the community.</p>
        <button>GET INVOLVED</button>
      </TextContainer>
    </OuterContainer>
  );
};

export default connect(getinvolved);

const OuterContainer = styled(EdgeContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  column-gap: 2.5rem;
  
  @media (max-width: 780px) {
    flex-direction: column;
    width: auto;
  }
  
`;

const TextContainer = styled(EdgeContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  button {
    border-color: #2bb673;
    border-style: solid;
    border-width: 1.5px;
    background-color: white;
    color: #1ca99f;
    padding: 1.5rem 3.5rem;
    font-size: 30px;
    font-weight: 700;
  }
  button:hover {
    background-color: #f0f2f0;
  }
  button:focus {
    background-color: #e3e6e4;
  }

  @media (max-width: 780px) {
    align-items: center;
  }
`;