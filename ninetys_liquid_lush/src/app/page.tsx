import Image from "next/image";
import MainpicHome from "../components/MainpicHome";
import Grid from "./components/Grid";
import Recomments from "@/components/Recomments";
export default function Home() {
  return (
    <div>
      <MainpicHome></MainpicHome>
      <Recomments></Recomments>
      <Grid></Grid>
    </div>
  );
}
