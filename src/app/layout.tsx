"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persistor } from "@/store";
import "./globals.scss";
import AppLayout from "@/layouts/AppLayout";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <html lang="en">
          <head>
            <title>Invade Assessment Task</title>
          </head>
          <body className={inter.className}>
            <AppLayout>
              <Header />
              {children}
            </AppLayout>
          </body>
        </html>
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
