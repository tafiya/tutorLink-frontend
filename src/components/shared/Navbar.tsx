"use client";
import clsx from "clsx";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../assets/TutorLink.png";
import { Button } from "../ui/button";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthServices";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { protectedRoutes } from "@/contants";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { user, setIsLoading } = useUser();
  const location = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => location.match(route))) {
      router.push("/");
    }
  };

  const navlinks = [
    {
      labe: "Home",
      link: "/",
    },
    {
      labe: "Tutors",
      link: "/tutors",
    },
    {
      labe: "About",
      link: "/about",
    },
    {
      labe: "Blogs",
      link: "/blogs",
    },
    {
      labe: "FAQ",
      link: "/faq",
    },
    {
      labe: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div
      className={clsx(
        "fixed z-10 w-full items-center transition-all",
        scrolling && "bg-blue-100 shadow-sm shadow-blue-200"
      )}
    >
      <nav className="flex justify-between px-8 items-center py-4  text-black max-w-7xl mx-auto ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"} className="text-4xl font-mono">
              <Image src={logo} alt="logo" height={80} width={80}></Image>
            </Link>
          </section>
        </div>
        <div className=" flex items-center gap-8">
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className={clsx(
                "hidden lg:block font-semibold hover:underline",
                location === d.link
                  ? "text-blue-600 underline"
                  : "hover:text-blue-600"
              )}
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link
                key={i}
                onClick={() => setMenu(false)}
                className="font-bold"
                href={d.link}
              >
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* <CartSheet></CartSheet> */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.role}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {user.role == "Student" ? (
                  <DropdownMenuItem>
                    <Link href="/student/profile">DashBoard</Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    {" "}
                    <Link href="/tutor/profile">DashBoard</Link>
                  </DropdownMenuItem>
                )}

                <DropdownMenuItem onClick={handleLogOut}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={"/register"}>
              <Button
                variant="outline"
                className="bg-blue-600 text-white hover:text-blue-600 text-lg hover:border-blue-600 flex items-center gap-2 "
              >
                <LogIn />
                Register
              </Button>
            </Link>
          )}

          {/* avtar img */}
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
