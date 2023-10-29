import { GoDeviceMobile } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Data() {
  return {

    
    data: [
      { icon: <GoDeviceMobile />, title: "Get App" },
      { icon: <SlLocationPin />, title: "Store & Events" },
      { icon: <MdCardGiftcard />, title: "Gift Card" },
      { icon: <IoIosHelpCircleOutline />, title: "Help" },
    ],
  };
}
