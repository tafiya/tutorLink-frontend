import Footer from "@/components/shared/Footer";
// import Navbar from "@/components/shared/Navbar";
import NavbarNew from "@/components/shared/NavbarTrail";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <NavbarNew></NavbarNew>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
