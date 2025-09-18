// src/app/page.tsx

import { ThemeToggle } from '../components/ThemeToggle';
import Ticket from './(user)/Ticket/page';

export default function Home() {
  return (
    // The main container will now switch between light and dark backgrounds automatically
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      {/* Position the toggle button in the top-right corner */}
      {/* <div className="absolute top-4 right-4"> */}
        <ThemeToggle />
      {/* </div> */}
      
      <Ticket />
    </main>
  );
}