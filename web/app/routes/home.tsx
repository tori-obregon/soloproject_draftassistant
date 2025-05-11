import { useState } from "react";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import OverviewContainer from "../components/OverviewContainer";
import MyTeamContainer from "~/components/MyTeamContainer";
import UndraftedContainer from "~/components/UndraftedContainer";
import PlayerSelectionPopUp from "~/components/PlayerSelectionPopUp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Draft Assistant" },
    { name: "THE NUMBER ONE DRAFT ASSISTANT", content: "Draft the best players according to SCIENCE!" },
  ];
}

export default function Home() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => setIsPopUpVisible(!isPopUpVisible);

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Fantasy Draft</h1>
        <Button id='resetBtn' variant='destructive'>
          Reset
        </Button>
      </div>

      <Separator />

      <section>
        <h1 className='text-3xl font-semibold mb-2'>My Team</h1>
      </section>

      <section>
        <h2 className='text-xl font-semibold mb-2'>Overall</h2>
        <OverviewContainer />
      </section>

      <section>
        <h2 className='text-xl font-semibold mb-2'>My Players</h2>
        <MyTeamContainer />
      </section>

      <Separator />

      <section>
        <h2 className='text-xl font-semibold mb-2'>Available Players</h2>
        <UndraftedContainer />
      </section>
    </div>
  );
}
