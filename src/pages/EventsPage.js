import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NRITYAKALA = {
  title: "NRITYAKALA",
  descriptionLines: [
    "The flagship dance competition of Stavya ignites the stage with energy, passion, and rhythm.",
    "Talented performers showcase diverse dance styles, creativity, and electrifying moves.",
    "It’s not just a competition — it’s a celebration of expression, culture, and unstoppable spirit.",
  ],
  image: "/ROAD++.png",
  dancer: "/DANCE_BOY.png",
};

export const EventsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // EXACT ORIGINAL REGISTER BUTTON CODE
  const OriginalRegisterButton = ({ positionClasses = "" }) => (
    <div className={`${positionClasses} z-30 w-max`}>
      <button className="cta">
        <span
          className="span font-black uppercase tracking-widest text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-none"
          style={{ fontFamily: '"Pricedown", sans-serif' }}
        >
          Register
        </span>
        <span className="second">
          <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
              <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
              <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
            </g>
          </svg>
        </span>
      </button>
    </div>
  );


  const DupRegisterButton = ({ positionClasses = "" }) => (
    <div className={`${positionClasses} z-30 w-max`}>
      <button className="cta">
        <span
          className="span font-black uppercase tracking-widest text-[1.15rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-none"
          style={{ fontFamily: '"Pricedown", sans-serif' }}
        >
          Register
        </span>
        <span className="second">
          <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
              <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
              <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
            </g>
          </svg>
        </span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* 1. KEEP ORIGINAL NAVBAR */}
      <Navbar />

      <section
        ref={sectionRef}
        className="w-full mt-16 md:mt-18 mb-20 px-0 sm:px-4 md:px-8 flex flex-col items-center bg-fixed bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/ROAD.jpg")'
        }}
        
      >
        
 

        
        {/* --- DESKTOP VIEW (Original Layout) --- */}
        <div className="hidden md:flex flex-col items-center w-full">
            <div className="mb-20 md:mb-40 text-center relative z-10 px-4">
            <h1 className="text-white font-black mt-10 text-5xl sm:text-7xl md:text-[11rem] uppercase tracking-wide">
                FLAGSHIP EVENTS
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 bg-purple-600/20 blur-[60px] -z-10 animate-pulse" />
            </div>

            <div className={`relative w-full aspect-auto md:aspect-[16/7] xl:aspect-[16/6] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                <div className="absolute inset-0 md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 group">
                    <img src={NRITYAKALA.image} alt="Background" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 md:bg-gradient-to-r md:from-black/95 md:via-black/70 md:to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-start p-16 xl:p-24 md:max-w-[65%]">
                    <h2 className="text-yellow-400 font-black md:text-[8rem] lg:text-[10rem] uppercase tracking-tight leading-[0.9]">
                    {NRITYAKALA.title}
                    </h2>
                    <div className="mt-6 space-y-4">
                    {NRITYAKALA.descriptionLines.map((line, i) => (
                        <p key={i} className="text-gray-100 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">{line}</p>
                    ))}
                    </div>
                </div>

                {/* DANCER (DESKTOP) */}
                <div className="absolute bottom-0 right-8 lg:right-16 w-[45%] h-[115%] pointer-events-none items-end justify-end z-20 overflow-visible" style={{ animation: "flowRight 4s ease-in-out infinite" }}>
                    <style>{`@keyframes flowRight { 0%, 100% { transform: translateX(0); } 50% { transform: translateY(0.5rem); } }`}</style>
                    <img src={NRITYAKALA.dancer} alt="Dancer" className="object-contain object-bottom w-full h-full md:-translate-y-6 filter brightness-110 contrast-110" />
                </div>

                {/* REGISTER BUTTON (DESKTOP POSITION) */}
                <OriginalRegisterButton positionClasses="absolute bottom-10 right-10 lg:bottom-12 lg:right-16" />
            </div>
        </div>


        {/* --- MOBILE / IPAD VIEW (EXACT REPLICATION) --- */}
<div className="md:hidden w-full px-4 pt-10 pb-20 max-w-md mx-auto space-y-8">

{/* TITLE */}
<div className="text-center space-y-2">
  <h1
    className="text-6xl uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
    style={{ fontFamily: '"Pricedown", sans-serif' }}
  >
    Flagship
  </h1>
 
</div>

{/* CARD */}
<section className="relative group">
  {/* Glow border */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur opacity-70 animate-pulse" />

  <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

    {/* IMAGE */}
    <div className="h-64 relative overflow-hidden">
      <img
        src={NRITYAKALA.image}
        alt="Nrityakala"
        className="w-full h-full object-cover"
      />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      

      {/* TITLE */}
      <div className="absolute bottom-4 left-4 right-4">
        <h2
          className="text-5xl text-yellow-400 leading-none uppercase drop-shadow-[3px_3px_0_rgba(0,0,0,1)]"
          style={{ fontFamily: '"Pricedown", sans-serif' }}
        >
          {NRITYAKALA.title}
        </h2>

        {/* TAG ROW */}
        <div className="flex flex-wrap items-center gap-2 mt-2 text-xs uppercase tracking-wider text-white/90">
  <span className="bg-pink-600 px-2 py-0.5 rounded">Dance</span>
  <span>•</span>
  <span>Main Stage</span>
  <span>•</span>
  <span >
    Team of 2
  </span>
</div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="p-5 space-y-4">

      

      <div className="grid grid-cols-2 gap-4 text-center">
  
  {/* PRIZE POOL */}
  <div className="bg-white/5 rounded-xl py-4">
    <p className="text-gray-400 text-xs uppercase tracking-wider">
      Prize Pool
    </p>
    <p
      className="text-yellow-400 text-2xl mt-1 tracking-wide"
      style={{ fontFamily: '"Pricedown", sans-serif' }}
    >
      ₹ XX,XXX
    </p>
  </div>

  {/* REG DEADLINE */}
  <div className="bg-white/5 rounded-xl py-4">
    <p className="text-gray-400 text-xs uppercase tracking-wider">
      Reg. Deadline
    </p>
    <p
      className="text-yellow-400 text-xl mt-1 tracking-wide"
      style={{ fontFamily: '"Pricedown", sans-serif' }}
    >
      24 MAR
    </p>
  </div>

</div>


      {/* REGISTER BUTTON */}
      <div className="pt-3 pb-4 flex justify-center">
        <OriginalRegisterButton />
      </div>
    </div>
  </div>
</section>
</div>

      </section>

      {/* --- KEEP ORIGINAL FOOTER --- */}
      <Footer />

      

    </div>
  );
};

export default EventsPage;