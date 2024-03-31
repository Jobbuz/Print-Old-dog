import Image from "next/image";
import RecommendedMenu from "./Components/recommendedMenu";
import SeeMoreButton from "./Components/SeeMoreButton";

export default function Home() {
  return (
    <div>
      <div className="mt-80 mb-10 ml-20 font-semibold">Recommended Menu</div>
      <RecommendedMenu></RecommendedMenu>
      <SeeMoreButton></SeeMoreButton>
    </div>
  );
}
