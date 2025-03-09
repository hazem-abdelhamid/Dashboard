import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "./constants/SidebarItems";
import Icon from "./ui/Icon";
import RightIcon from "./ui/RightIcon";
import { Button } from "./ui/button";
import Image from "next/image";
import userImage from "../app/Images/user.png";
import DownIcon from "./ui/DownIcon";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="ml-[28px] mt-[36px] mb-[50px]">
        <div className="flex">
          <span className="mr-1">
            <Icon />
          </span>
          <h1 className="text-black font-semibold self-center text-[26px]">
            Dashboard
          </h1>
          <span className="text-[10px] mt-[19px] ml-1">v.01</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="ml-[28px]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-[46px] hover:bg-custom-purple hover:text-white transition-colors"
                  >
                    <a
                      href={item.url}
                      className="flex items-center text-[#9197B3]"
                    >
                      <span className="mr-2 ">
                        <item.icon />
                      </span>
                      <span className="mr-[50px]">{item.title}</span>
                      <span className="ml-auto text-current hover:text-white">
                        <RightIcon />
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-[2px]">
        <div className="flex flex-col justify-center items-center gap-3 ali bg-gradient-to-r from-[#EAABF0] to-[#4623E9] w-[250px] rounded-[20px] p-3 ml-5 text-center ">
          <p className="mb-2 text-white">
            Upgrade to Pro to get access all features
          </p>
          <Button className="bg-white text-custom-purple2 rounded-[20px] w-[203px] font-bold hover:text-white">
            Get Pro Now !
          </Button>
        </div>
      </SidebarFooter>
      {/* Evano section */}
      <div className="flex ml-7">
        <Image
          width={42}
          height={42}
          src={userImage}
          alt="user-image"
          className="rounded-[50%]"
        />
        <div className="flex flex-col ml-3 mr-16">
          <span className="text-sm font-bold text-black">Evano</span>
          <span className="text-[12px] text-[#757575]">Project manager</span>
        </div>
        <DownIcon />
      </div>
    </Sidebar>
  );
}
