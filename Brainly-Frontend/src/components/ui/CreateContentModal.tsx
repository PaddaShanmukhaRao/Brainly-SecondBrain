import { useRef } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import Button from "./button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";
//controlled component\
interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}
export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const response = await axios.post(
      `${BACKEND_URL}/api/vi/content`,
      {
        title,
        link,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response)
  }
  return (
    <>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center ">
            <span className="bg-white opacity-100 p-4 rounded-md">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input ref={titleRef} placeholder="Title" />
              </div>
              <div>
                <Input ref={linkRef} placeholder="Link" />
              </div>
              <div className="flex justify-center">
                <Button variant="primary" text="Submit" onClick={addContent} />
              </div>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
