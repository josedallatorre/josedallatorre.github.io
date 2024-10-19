import Footer from 'app/components/footer'
import Header from 'app/components/header'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
    {/* Mobile Layout */}
    <div className="lg:hidden">
      <main className="p-6 max-w-screen-sm mx-auto">
        <div className="mb-6">
          <Header />
          <div className="mt-6">
            {/*<SocialLinks/>*/}
          </div>
        </div>
      </main>
      <Footer />
    </div>

    {/* Desktop Layout */}
    <div className="hidden lg:flex flex-col xl:flex-row">
      {/* Left Column (Header and Social Links) */}
      <div className="xl:fixed xl:w-2/5 h-screen p-8 xl:p-12 xl:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]">
        <div>
          <Header />
          <div className="mt-6">
            {/*<SocialLinks />*/}
          </div>
        </div>
      </div>
      {/* Right Column (Main Content) */}
      <div className="xl:ml-[40%] w-full xl:w-3/5 min-h-screen min-w-[500px] max-w-[1200px] mx-auto">
        <main className="p-8 xl:p-12 xl:pr-[10%]">
        </main>
        <Footer />
      </div>
    </div>
  </div>
);
}