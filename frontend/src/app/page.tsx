// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home'); // Yeh JSX ke bahar call hoga
}
