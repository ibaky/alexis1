"use client"; 

import { KitchnProvider } from "kitchn"; 
import { ReactNode } from "react"; 

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Page Title</title>
      </head>
      <body>
        <KitchnProvider>
          {children}
        </KitchnProvider>
      </body>
    </html>
  );
}
