import Image from "next/image";
import MainpicHome from "../components/MainpicHome";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">

      <MainpicHome></MainpicHome>

      <Grid></Grid>
    </main>
  );
}
