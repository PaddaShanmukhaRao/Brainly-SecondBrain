import Button from "./components/ui/button";
import { Card } from "./components/ui/Card";
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
      <Card type="youtube" link="https://www.youtube.com/watch?v=f8KF7taQkU8" title="harkirat video"/>
      <Card type="twitter" link="https://x.com/AbhinavXJ/status/2083069736448135479" title="flex tweet"/>
    </>
  );
}
