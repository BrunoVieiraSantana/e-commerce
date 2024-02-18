import styles from "./page.module.css";
import utils from "@/components/utils.module.css";
import ProductGallery from "@/components/productGallery";
import AddToCart from "@/components/addToCart";
import { product } from "@/public/data";
import Principal from "./principal/page";

export default function RootPage() {
  return (
    <main className="">
      <Principal/>
    </main>
  );
}
