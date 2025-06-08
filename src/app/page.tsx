import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center gap-2">
      <h1 className="text-xl">Home page</h1>
      <Link href="/companies" className="text-blue-500">
        Companies
      </Link>
      <Link href="/dashboard" className="text-blue-500">
        Dashboard
      </Link>
    </main>
  );
}
