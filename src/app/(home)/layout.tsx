"use client";

import Image from "next/image";
import {
  BoltIcon,
  ChartPieIcon,
  HomeIcon,
  PlayCircleIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  {
    id: 1,
    items: [
      { name: "Home", href: "/", icon: HomeIcon },
      { name: "Profile", href: "#", icon: UserIcon },
    ],
  },
  {
    id: 2,
    title: "Learn",
    items: [
      {
        name: "Shorts",
        href: "/shorts",
        icon: BoltIcon,
      },
      {
        name: "Classes",
        href: "#",
        icon: PlayCircleIcon,
      },
      {
        name: "Courses",
        href: "#",
        icon: RectangleStackIcon,
      },
    ],
  },
  {
    id: 3,
    title: "Team",
    items: [{ name: "Analytics", href: "#", icon: ChartPieIcon }],
  },
];

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const pathname = usePathname();
  return (
    <div className="">
      <div className="fixed inset-y-0 z-50 flex w-60 flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border-ui px-6 py-5">
          <div className="flex shrink-0 items-center">
            <Image
              alt="Your Company"
              src="/company-logo.svg"
              width={36}
              height={36}
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li className="flex flex-col space-y-5">
                {navigation.map((product) => (
                  <div key={product.id}>
                    {product.title && (
                      <div className="text-xs font-semibold leading-6 text-gray-400">
                        {product.title}
                      </div>
                    )}
                    <ul role="list" className="space-y-1">
                      {product.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={cn(
                                isActive
                                  ? "bg-bg-ui-active text-fg-primary"
                                  : "text-fg-tertiary hover:bg-bg-ui-active hover:text-fg-primary",
                                "group flex gap-x-1 rounded-md p-1 text-sm font-medium leading-6 items-center"
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={cn(
                                  isActive
                                    ? "text-fg-primary"
                                    : "text-fg-tertiary group-hover:text-fg-primary",
                                  "h-4 w-4"
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="ml-60">{props.children}</main>
    </div>
  );
}
