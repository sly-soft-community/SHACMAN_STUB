import "../globals.scss";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getDictionary } from "../../../get-dictionary";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
    const dictionary = getDictionary(params.lang);
    return (
        <>{children}</>
    );
}
