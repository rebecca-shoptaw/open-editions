import { AnchorProps } from "../types/types";

const Anchor = ({ id }: AnchorProps) => {
  return <div id={`${id}-anchor`} className="hp-anchor"></div>;
};

export default Anchor;
