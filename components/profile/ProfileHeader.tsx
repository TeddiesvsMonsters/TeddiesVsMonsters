import Link from "next/link";

const ProfileHeader = () => {
    return (
        <nav className="w-full flex md:justify-start md:px-24 justify-center align-center px-6 items-center p-4 bg-black">
            <ul className="w-full text-white md:flex md:justify-center md:h-auto md:top-0 md:right-0 md:p-0 md:w-auto gap-8  justify-start flex flex-row">
                <li className="capitalize">
                    <Link href={"/profile-page"}>my profile</Link>
                </li>
                <li className="capitalize">
                    <Link href={"/orders-page"}>my orders</Link>
                </li>
               {/*  <li className="capitalize">
                    <Link href={"/payment-page"}>payment</Link>
                </li> */}
            </ul>
      </nav>
    );
}

export default ProfileHeader;