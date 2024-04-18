import Dmotion from "@/widgets/3dmotion/3dmotion";
import About from "@/widgets/about/about";
import Advertising from "@/widgets/advertising/advertising";
import Cards from "@/widgets/cards/cards";
import ContactForm from "@/widgets/contactme/contactme";
import Pipeline from "@/widgets/pipeline/pipeline";
import PipeLineTitle from "@/widgets/pipeline/pipelineTitle";
import Portfolio from "@/widgets/portfolio/portfolio";
import PortfolioTitle from "@/widgets/portfolio/portfolioTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  grow shrink basis-auto w-full flex-col items-center justify-start ">
      <Dmotion />
      <Advertising />
      <Cards />
      <PortfolioTitle />
      <Portfolio />
      <PipeLineTitle />
      <Pipeline />
      <ContactForm />
      <About />
    </main>
  );
}
