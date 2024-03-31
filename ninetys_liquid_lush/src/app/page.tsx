import Image from "next/image";
import Grid from "./components/Grid";
export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <Grid></Grid>
    </main>
  );
}
