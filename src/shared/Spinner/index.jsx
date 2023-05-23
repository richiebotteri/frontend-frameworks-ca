import { SpinnerContainer } from "./styled";

export default function Spinner({ loadingState }) {
  return <SpinnerContainer $isLoading={loadingState} />;
}
