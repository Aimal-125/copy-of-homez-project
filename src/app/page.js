import Home_V3 from "./(home)/home-v3/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Home || Real Estate",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V3 />
    </Wrapper>
  );
}
