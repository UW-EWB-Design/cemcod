import { styled, connect } from "frontity";
import GetInvolved from "./getinvolved";
import WhatWeDo from "./whatwedo";
import EmpowerTheCommunity from "./empowerthecommunity";
import Values from "./values";

const home = () => {
  return (
    <div>
      <GetInvolved />
      <WhatWeDo />
      <EmpowerTheCommunity />
      <Values />
    </div>
  );
};

export default connect(home);