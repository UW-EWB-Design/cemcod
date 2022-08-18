import { styled } from "frontity";

const EdgeContainer = styled.div`
  margin-left: 0rem;
  margin-right: 0rem;
  width: calc(100% - 4rem);

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
    justify-content: left;
  }
`;

export default EdgeContainer;
