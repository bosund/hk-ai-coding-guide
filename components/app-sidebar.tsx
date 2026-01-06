"use client";

import Link from "next/link";
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
  Zap,
  BrainCircuit,
  Wrench,
  FileText,
  Video,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const iconMap = {
  home: Home,
  "book-open": BookOpen,
  rocket: Rocket,
  lightbulb: Lightbulb,
  link: LinkIcon,
  zap: Zap,
  "brain-circuit": BrainCircuit,
  wrench: Wrench,
  "file-text": FileText,
  video: Video,
};

export function AppSidebar() {
  const pathname = usePathname();

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;

    // Handle numeric icons
    if (["1", "2", "3", "4"].includes(iconName)) {
      return (
        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-foreground/50 text-[10px] font-bold shadow-sm">
          {iconName}
        </div>
      );
    }

    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="h-4 w-4" /> : null;
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            alt="HK Logo"
            className="h-8 w-auto"
            src="/hklogo.svg"
          />
          <span className="font-semibold text-lg tracking-tight text-gray-900 dark:text-white border-l pl-3 border-gray-300 dark:border-gray-700 ml-2">
            AI Coding Guide
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((group, index) => (
          <SidebarGroup key={index}>
            {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                  if (item.items && item.items.length > 0) {
                    return (
                      <Collapsible key={item.title} defaultOpen className="group/collapsible">
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
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
