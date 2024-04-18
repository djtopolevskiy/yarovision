import Footer from "@/widgets/footer/footer";
import Yarovisionlogo from "@/widgets/header/_ui/yarovisionlogo";
import Header from "@/widgets/header/header";

export default async function Layout({
  children,
}:{children: React.ReactNode}
) {
  return (<>
    <Header variant="public" />
    {children}
    <Footer />
  </>)
}
