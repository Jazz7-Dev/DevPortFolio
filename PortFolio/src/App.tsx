import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';
import { Overlay } from '@/components/Overlay';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="relative flex min-h-screen flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <Overlay isVisible={isSidebarOpen} onClick={closeSidebar} />
        <MainContent isSidebarOpen={isSidebarOpen} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;