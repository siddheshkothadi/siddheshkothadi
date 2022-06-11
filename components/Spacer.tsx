import { FC } from "react";

interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer: FC<SpacerProps> = ({ height, width }) => {
  const style = {
    height: height ? height + "rem" : "auto",
    width: width ? width + "rem" : "auto",
  };
  return <span style={style}></span>;
};

export default Spacer;
