import { useEffect, useState } from "react";
import { useDraftStore } from "~/stores/useDraftStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/components/ui/select";
import { Button } from "~/components/ui/button";

interface PlayerSelectionPopUpProps {
  isVisible: boolean;
  togglePopUp: () => void;
  selectedPlayer: string;
}

export default function PlayerSelectionPopUp({ isVisible, togglePopUp, selectedPlayer }: PlayerSelectionPopUpProps) {
  const addMyTeam = useDraftStore((state) => state.addMyTeam);

  const [bid, setBid] = useState("");
  const [position, setPosition] = useState("Point Guard");
  const [selectedPlayerPlaceholder, setSelectedPlayerPlaceholder] = useState(selectedPlayer);

  useEffect(() => {
    if (selectedPlayer) {
      setSelectedPlayerPlaceholder(selectedPlayer);
    }
  }, [selectedPlayer]);

  const handleSubmit = () => {
    addMyTeam(Number(bid), position, selectedPlayerPlaceholder);
    togglePopUp();
  };

  return (
    <Dialog open={isVisible} onOpenChange={togglePopUp}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-lg'>Select Player</DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
          <div>
            <p className='font-semibold'>{selectedPlayerPlaceholder}</p>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='bid'>How much did you bid?</Label>
            <Input id='bid' type='number' placeholder='$1' value={bid} onChange={(e) => setBid(e.target.value)} />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='position'>Choose a Position</Label>
            <Select value={position} onValueChange={(val) => setPosition(val)}>
              <SelectTrigger id='position'>
                <SelectValue placeholder='Select a position' />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Point Guard",
                  "Shooting Guard",
                  "Small Forward",
                  "Power Forward",
                  "Center",
                  "Guard",
                  "Forward",
                  "Utility",
                  "Bench",
                  "Open",
                ].map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleSubmit} className='w-full'>
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
