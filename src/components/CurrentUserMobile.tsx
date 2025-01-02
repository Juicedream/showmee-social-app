import { currentUser } from "@clerk/nextjs/server";
import MobileNavbarClient from "./MobileNavbar";

export default async function MobileNavbar() {
  const user = await currentUser();
  return <MobileNavbarClient user={user} />;
}