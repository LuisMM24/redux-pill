import { InfinitySpin } from "react-loader-spinner";

interface Props {
  width?: string;
}

export const Loading: React.FC<Props> = ({ width = "150" }) => {
  return <InfinitySpin color="blue" width={width} />;
};
