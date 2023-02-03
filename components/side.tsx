import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { ImYoutube } from "react-icons/im";

export default function Side() {
    return (
        <aside className="absolute inset-y-1/2 right-0 bg-white">
            <Link href="https://github.com/coronado03" rel="noopener noreferrer" target="_blank">
                <DiGithubBadge color="white" fontSize="4.5em"/>
            </Link>

            <Link href="https://www.youtube.com/watch?v=o-YBDTqX_ZU&ab_channel=MusRest" rel="noopener noreferrer" target="_blank">
                <ImYoutube color="white" fontSize="4.1em"/>
            </Link>

        </aside>
    ) 
  }