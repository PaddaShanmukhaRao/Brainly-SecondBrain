import { ShareIcon } from "../../icons/ShareIcon";
interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}
export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className=" p-4 bg-white rounded-md border max-w-72 border-gray-200 min-h-48 min-w-72">
        <div className="flex items-center justify-between">
          <div className="flex items-center font text-sm">
            <div className="pr-2 text-gray-400 ">{<ShareIcon />}</div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-400">{<ShareIcon />}</div>
            <div className="pr-2 text-gray-400">{<ShareIcon />}</div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" ? (
            <iframe
              className="w-full rounded-md"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x", "twitter")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
