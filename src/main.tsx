import ReactDOM from 'react-dom/client';

import Index from './routes';
import { TokenProvider } from './utils/contexts/token';
import { Toaster } from '@/components/ui/toaster';

import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TokenProvider>
    <Index />
    <Toaster />
  </TokenProvider>
);