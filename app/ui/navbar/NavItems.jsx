"use client";
import logo from "@/public/assets/brainwave-symbol.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { LogInIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";

import { usePathname } from "next/navigation";
import ContentWrapper from "../contentWrapper/ContentWrapper";
const NavItems = ({ user, imageUrl }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ContentWrapper
      className={"flex items-center justify-between py-1 pl-2 pr-0 md:pr-4 "}
    >
      <Link href={"/"} className="flex items-center cursor-pointer">
        <Image src={logo} alt="logo" width={50} height={20} className="w-12" />
        <h3 className="text-[20px] font-bold capitalize lg:text-xl ">
          Study-<span className="text-purple-500">Mate</span>
        </h3>
      </Link>

      {pathname.startsWith("/semesters") && (
        <div className="hidden md:flex items-center gap-24 font-code font-bold text-slate-700  transition-colors  ">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-purple-400"
                : "text-slate-700  hover:text-purple-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/footer"
            className="text-slate-700  hover:text-purple-300"
          >
            Contact
          </Link>

          {/* <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-2  ${
                pathname === "/semesters" ? "text-purple-400" : "text-slate-700"
              }`}
            >
              Semesters
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Semester 1</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Semester 2</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Semester 3</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Semester 4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      )}

      <div className="flex gap-6">
        {user && (
          <DropdownMenu className="w-10 rounded-full overflow-hidden">
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={imageUrl ? imageUrl : "https://github.com/shadcn.png"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"bg-white mr-2 md:mr-0"}>
              {user ? (
                <>
                  <DropdownMenuLabel>
                    {user ? `hello, ${user}` : "username"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-400 cursor-pointer ">
                    <SignedIn>
                      <SignOutButton>
                        <span className="flex">
                          <LogOutIcon className=" mr-2 h-4 w-4" /> logout
                        </span>
                      </SignOutButton>
                    </SignedIn>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem className="text-green-600">
                    <LogInIcon className="h-4 w-4 mr-2 " />
                    Login
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {user ? null : (
          <SignedOut>
            <SignInButton>
              <button
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        )}

        {pathname.startsWith("/semesters") ? undefined : (
          <div className="flex justify-start bg-purple-600 text-white rounded-xl">
            <Link
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1",
              })}
              href={"/semesters"}
            >
              Start Learning
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};
export default NavItems;
