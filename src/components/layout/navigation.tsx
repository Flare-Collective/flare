import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const entries = [
  {
    name: "Boards",
    href: "/",
  },
  {
    name: "Issues",
    href: "/",
  },
  {
    name: "Teams",
    href: "/",
  },
  {
    name: "Profile",
    href: "/",
  },
];

export default function Navigation() {
  return (
    <>
      <ul className=" border-r border-r-gray-300">
        {entries.map((entry, index) => (
          <li key={index}>
            <Link
              href={entry.href}
              className="flex w-40 gap-2 p-2 text-sm hover:bg-gray-100"
            >
              <FontAwesomeIcon width={18} height={18} icon={faList} />{" "}
              {entry.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
