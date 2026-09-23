import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});
const nunito = localFont({
  src: [
    {
      path: "../fonts/Nunito/Nunito-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
});

const roboto = localFont({
  src: [
    {
      path: "../fonts/Roboto_Mono/RobotoMono-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nunito.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
