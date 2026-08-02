import { useState } from "react";
import Button from "../components/ui/button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";

export default function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex pt-4 justify-end gap-2">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant={"primary"}
            text="Add Content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
        <div className="flex gap-4">
          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=f8KF7taQkU8"
            title="harkirat video"
          />
          <Card
            type="twitter"
            link="https://x.com/heygandharva/status/2083175849902154068"
            title="Switch tweet"
          />
        </div>
      </div>
    </>
  );
}
