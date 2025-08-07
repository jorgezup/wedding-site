import Header from "@/components/Header";
import Home from "@/components/Home";
import NossaHistoria from "@/components/NossaHistoria";
import Padrinhos from "@/components/Padrinhos";
import Cerimonia from "@/components/Cerimonia";
import Festa from "@/components/Festa";
import ListaDePresentes from "@/components/ListaDePresentes";
import Dicas from "@/components/Dicas";
import Footer from "@/components/Footer";
import ConfirmacaoPresenca from "@/components/ConfirmacaoPresenca";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-12 sm:pt-16">
        <Home />
        <NossaHistoria />
        <Padrinhos />
        <Cerimonia />
        <Festa />
        <ListaDePresentes />
        <Dicas />
        <ConfirmacaoPresenca />
      </main>
      <Footer />
    </>
  );
}
