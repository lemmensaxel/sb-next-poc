"use client";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "Blog",
      icon: "pi pi-pencil",
      command: () => router.push("/blog"),
    },
  ];

  return (
    <Menubar
      className="h-16 fixed top-0 left-0 right-0 bg-gray-100"
      model={items}
      start={() => (
        <Image
          src="/logo_studio.svg"
          width={150}
          height={64}
          alt="Logo of AE Studio"
          priority
        />
      )}
    />
  );
}
