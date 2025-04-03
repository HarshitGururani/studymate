import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MessageCircle, X } from "lucide-react";
import { Button } from "../ui/button";
import Chat from "./Chat";

const MobileChatBot = ({ subject }) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="fixed bottom-5 right-4 z-50 bg-purple-700 text-white p-4 rounded-full shadow-lg sm:hidden hover:bg-purple-800 transition flex items-center gap-2">
            <MessageCircle size={24} />
            <span className="text-sm font-semibold">Chat with Bot</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col">
          <DrawerClose className="flex justify-end mr-2">
            <div className="rounded-full bg-black p-2">
              <X className="size-5 text-white" />
            </div>
          </DrawerClose>
          <DrawerHeader>
            <DrawerTitle>Ai ChatBot</DrawerTitle>
            <Chat subject={subject} />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MobileChatBot;
