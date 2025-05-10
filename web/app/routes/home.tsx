import { useState } from "react";
import type { Route } from "./+types/home";
import OverviewContainer from "../components/OverviewContainer";
import MyTeamContainer from "~/components/MyTeamContainer";
import UndraftedContainer from "~/components/UndraftedContainer";
import PlayerSelectionPopUp from "~/components/PlayerSelectionPopUp";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => setIsPopUpVisible(!isPopUpVisible);

  return (
    <>
      <button id='resetBtn'>RESET</button>
      <h1>My Team</h1>
      <h2>Overall</h2>
      <OverviewContainer />
      <h2>My Players</h2>
      {/* <MyTeamContainer /> */}
      <h1>Available Players</h1>
      {/* <UndraftedContainer /> */}
      {/* <PlayerSelectionPopUp isVisible={true} togglePopUp={togglePopUp} selectedPlayer={{ player: "name" }} /> */}
    </>
  );
}
