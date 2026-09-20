import Header from "./components/layout/Header";
import localFont from "next/font/local";
import "./globals.css";
import Hero from "./components/layout/Hero";

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
// const poppins = localFont({
//   src: [
//     {
//       path: "../fonts/Poppins/Nunito-VariableFont_wght.ttf",
//       weight: "100 900",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Poppins/Nunito-Italic-VariableFont_wght.ttf",
//       weight: "100 900",
//       style: "italic",
//     },
//   ],
//   variable: "--font-nunito",
// });
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
        <main>
          <Header />
          <Hero />
          {children}
        </main>
      </body>
    </html>
  );
}
