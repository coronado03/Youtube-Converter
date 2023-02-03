import Footer from "@/components/footer"
import Converter from "@/components/converter"
import Navbar from "@/components/navbar"
import Background from "@/components/background"
import Side from "@/components/side"


export default function Home() {
  return (
    <>
      <Background/>
      <div className="absolute min-h-screen min-w-screen flex flex-col">
        <Navbar/>
          <Converter/>
        <Footer/>
        <Side/>
      </div>

    </>
  )
}
