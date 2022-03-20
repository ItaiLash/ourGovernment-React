import React from "react";
import style from "./style_demo.module.css";


function Paragraph() {
  return (
    <p className={style.headerText}>
      The executive branch, or government, is typically not elected directly by
      the people, but rather formed by another elected body or person such as
      the parliament or the president.
      <br />
      As a result, it's members are not directly accountable to the people,
      individually or as a group.
      <br />
      We consider a scenario in which the members of the government are elected
      directly by the people, and wish to achieve proportional representation
      while doing so. We propose a formal model for allocation of k offices
      (ministries), each associated with a disjoint set of candidates contesting
      for that seat; a set of voters provide approval ballots for all offices.
      <br />
      We identify various scenarios pertaining to the 'power' exercised by
      different offices and propose axioms and algorithms to satisfy these
      axioms to determine pro- portionally representative office allocations.
      <br />
      As using a simple majority vote for each office independently might result
      in disregarding minority preferences altogether, here we consider an
      adaptation of the greedy variant of Proportional Approval Voting
      (GreedyPAV) to our setting, and demonstrate through computer-based
      simulations--how voting for all offices together using this rule overcomes
      this weakness and satisfies a proportionality axiom.
      <br />
      We note that the approach is applicable also to a party that employs
      direct democracy, where party members elect the party's representatives in
      a coalition government.
    </p>
  );
}

export default Paragraph;