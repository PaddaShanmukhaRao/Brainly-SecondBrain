import Button from "./components/ui/button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

export default function App() {
  return (
    <>
      <Button
        variant={"primary"}
        text={"Share Brain"}
        startIcon={<ShareIcon />}
      ></Button>
      <Button
        variant="secondary"
        text="Add Content"
        startIcon={<PlusIcon />}
      ></Button>
    </>
  );
}
