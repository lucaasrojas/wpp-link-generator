import { Toaster } from "@/components/ui/sonner";
import QRGenerator from "./components/qr-generator";


function App() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <Toaster />
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">QR Generator for WhatsApp</h1>
        <p className="text-muted-foreground text-center mb-8">Enter your phone number to generate a QR code</p>
        <QRGenerator />
      </div>
    </main>
  );
}

export default App;
