import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className="flex items-center h-9 mx-1 gap-3.5 hover:bg-gray-800 rounded-md px-3 py-2 transition"
        aria-label={`Navigate to ${children}`}
      >
        <Image className="ml-2" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
