import Button from "../components/ui/button";
import { Input } from "../components/ui/Input";

export function SignUp() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center bg-gray-200 items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-8">
          <div>
            <Input placeholder="Username" />
          </div>
          <div>
            <Input placeholder="Password" />
          </div>
          <div className="flex justify-center pt-4">
            <Button text="Submit" variant="primary" />
          </div>
        </div>
      </div>
    </>
  );
}
