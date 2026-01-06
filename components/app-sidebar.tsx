"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { navigation } from "@/lib/content";
import {
  Home,
  BookOpen,
  Rocket,
  Lightbulb,
  Link as LinkIcon,
  ChevronRight,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const iconMap = {
  home: Home,
  "book-open": BookOpen,
  rocket: Rocket,
  lightbulb: Lightbulb,
  link: LinkIcon,
};

export function AppSidebar() {
  const pathname = usePathname();

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="h-4 w-4" /> : null;
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/hk-danmark-logo-vector.svg"
            alt="HK Danmark Logo"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm leading-tight">HK's Guide til</span>
            <span className="font-bold text-base leading-tight text-primary">AI Coding</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                
                if (item.items && item.items.length > 0) {
                  return (
                    <Collapsible key={item.href} defaultOpen className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                          >
                            {getIcon(item.icon)}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => {
                              const isSubActive = pathname === subItem.href;
                              return (
                                <SidebarMenuSubItem key={subItem.href}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={isSubActive}
                                  >
                                    <Link href={subItem.href}>
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.href}>
                        {getIcon(item.icon)}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
