import { currentUser } from "@clerk/nextjs/server";
import NavItems from "./NavItems";

const Navbar = async () => {
  let user;
  try {
    user = await currentUser();
  } catch (error) {
    throw new Error(error);
  }

  return (
    <nav className="flex  border-gray-200 ">
      <NavItems user={user?.firstName} imageUrl={user?.imageUrl} />
    </nav>
  );
};
export default Navbar;
