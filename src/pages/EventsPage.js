import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  {
    title: "NRITYAKALA",
    subtitle: "A Symphony of Steps",
    category: "Dance",
    venue: "IIITV-ICD Event Ground, Education Hub",
    teamOf: "1–5",
    time: "9:00 PM Jan 31",
    date: "31/01/2026",
    prizePool: "₹ 5,700",
    regDeadline: "30 JAN",
    image: "/cards/1.jpg",
    dancer: "/card_elements/1.png",
    registrationLink: "https://forms.gle/bK2PA8mi3NazrWYc8",
    description:
      "Nrityakala is a vibrant dance competition celebrating creativity, coordination, and expressive storytelling. Participants can perform solo or in groups, exploring diverse dance styles and original choreography in a high-energy showcase of talent.",
  },

  {
    title: "RANGOLI CLASH",
    category: "Art",
    venue: "IIITV-ICD Premises, Education Hub",
    teamOf: "3",
    time: "2:00 PM Jan 31",
    date: "01/02/2026",
    prizePool: "₹ 5,400",
    regDeadline: "30 JAN",
    image: "/cards/12.jpg",
    dancer: "/card_elements/12.png",
    registrationLink: "https://forms.gle/W9mz2vtKiKFPhrT18",
    description:
      "Rangoli Clash celebrates traditional Rangoli art with a creative twist. Participants design vibrant Rangoli patterns based on surprise themes revealed on the spot, blending tradition with innovation under time constraints.",
  },

  {
    title: "URBAN HARMONY",
    subtitle: "Rhythms in Unity",
    category: "Music",
    venue: "Event Ground",
    teamOf: "1–5",
    time: "8:00 PM Feb 1",
    date: "01/02/2026",
    prizePool: "₹ 5,700",
    regDeadline: "30 JAN",
    image: "/cards/11.jpg",
    dancer: "/card_elements/11.png",
    registrationLink: "https://forms.gle/QJcTXhi2fBH8oNAU6",
    description:
      "Urban Harmony is a group singing competition that celebrates collaboration and musical unity. Teams perform Indian or fusion music, blending vocals with instruments to create soulful and harmonious performances.",
  },

  {
    title: "CONFERO",
    subtitle: "Debate Competition",
    category: "Debate",
    venue: "Event Ground",
    teamOf: "2",
    time: "10:00 AM feb 1",
    date: "01/02/2026",
    prizePool: "₹ 5,600",
    regDeadline: "30 JAN",
    image: "/cards/9.jpg",
    dancer: "/card_elements/8.png",
    registrationLink: "https://forms.gle/qJijtiFnyoMpn8FA9",
    description:
      "Confero is a two-round debate competition for debate enthusiasts of IIITV-ICD. Teams compete through preliminary and final rounds, showcasing logical reasoning, articulation, and critical thinking.",
  },

  {
    title: "SHABD SANGAM",
    category: "Poetry",
    venue: "Event Ground",
    teamOf: "3",
    time: "5:30 PM feb 1",
    date: "01/02/2026",
    prizePool: "₹ 8,400",
    regDeadline: "30 JAN",
    image: "/cards/3.jpg",
    dancer: "/card_elements/3.png",
    registrationLink: "https://forms.gle/Zo81gB9isA2qaczd8",
    description:
      "Shabd Sangam is a creative poetry challenge where teams craft original poems using randomly assigned words within a limited time. The event celebrates imagination, vocabulary, and expressive recitation.",
  },

  {
    title: "SQUID SHOWDOWN",
    category: "Game Jan 31",
    venue: "IIITV-ICD Premises, Education Hub",
    teamOf: "Individual",
    time: "8:30 AM JAN 31",
    date: "31/01/2026",
    prizePool: "TBD",
    regDeadline: "30 JAN",
    image: "/cards/13.jpg",
    dancer: "/card_elements/13.png",
    registrationLink: "https://forms.gle/TVXqku8gVpd6vJgx7",
    description:
      "Squid Showdown is a high-energy elimination-style event inspired by the Squid Game universe. Participants face a series of safe, fast-paced challenges testing reflexes, strategy, and nerve. Only the sharpest survive to claim victory.",
  },

  {
    title: "URBAN LENS",
    category: "Photography",
    venue: "Online Submission",
    teamOf: "Individual",
    time: "31st Jan - 1st Feb",
    date: "31/01/2026",
    prizePool: "₹ 3,000",
    regDeadline: "2 FEB",
    image: "/cards/5.jpg",
    dancer: "/card_elements/5.png",
    registrationLink: "https://forms.gle/PpR3aV7SnA84n8Vk7",
    description:
      "Urban Lens is a photography competition themed Best Click – Capturing the Spirit of Stavya 2026. Participants submit original photographs that creatively capture the essence of the fest.",
  },

  {
    title: "EMOTIONS UNPLUGGED",
    category: "Drama",
    venue: "Event Ground, IIITV-ICD",
    teamOf: "6",
    time: "10:30 AM jan 31",
    date: "31/01/2026",
    prizePool: "₹ 5,700",
    regDeadline: "30 JAN",
    image: "/cards/7.jpg",
    dancer: "/card_elements/7.png",
    registrationLink: "https://forms.gle/YKnrkFMVSHKHpag18",
    description:
      "Emotions Unplugged invites you to take the world’s most famous movie or series plots and give them a ridiculous, comical makeover.",
  },
];


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
  const OriginalRegisterButton = ({ positionClasses = "", registrationLink = "#" }) => (
    <div className={`${positionClasses} z-30 w-max`}>
      <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="cta">
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
      </a>
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/ROAD2.jpg")'
        }}
        
      >
        
 

        
        {/* --- DESKTOP VIEW (Original Layout) --- */}
        <div className="hidden md:flex flex-col items-center w-full">
            <div className="mb-20 md:mb-40 text-center relative z-10 px-4">
           
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 bg-purple-600/20 blur-[60px] -z-10 animate-pulse" />
            </div>

            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isFlipped = !isEven;
              const isLastCard = index === events.length - 1; // Check if it's the last card
              
              return (
                <div key={index} className={`relative w-full aspect-auto md:aspect-[16/7] xl:aspect-[16/6] transition-all duration-1000 ease-out mb-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="absolute inset-0 md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 group">
                        <img
                          src={event.image}
                          alt="Background"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                        />
                         <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                      
                    </div>

                    <div className={`relative z-10 h-full flex flex-col justify-center items-${isFlipped ? 'end' : 'start'} p-16 xl:p-24 md:max-w-[65%] ${isFlipped ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                    <h2
                      className={`text-yellow-400 font-black uppercase tracking-tight leading-[0.9]
                        ${isLastCard ? "whitespace-normal md:text-[4.5rem] lg:text-[5rem] max-w-[90%]" : "whitespace-nowrap md:text-[6rem] lg:text-[7rem]"}
                      `}
                    >
                      {event.title}
                    </h2>
                        
                        {/* TAG ROW - DESKTOP */}
                        <div className="flex flex-wrap items-center gap-3 mt-4 text-sm uppercase tracking-wider text-white/90">
                          <span className="bg-pink-600 px-3 py-1 rounded">{event.category}</span>
                          <span>•</span>
                          <span>{event.venue}</span>
                          <span>•</span>
                          <span>Team of {event.teamOf}</span>
                        </div>

                        <p className="text-gray-100 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mt-6">
                          {event.description}
                        </p>

                        {/* INFO CARDS - DESKTOP */}
                        <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-2xl">
                          {/* PRIZE POOL */}
                          <div className="bg-white/5 rounded-xl py-4 px-4 text-center border border-white/10">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                              Prize Pool
                            </p>
                            <p
                              className="text-yellow-400 text-2xl lg:text-3xl tracking-wide"
                              style={{ fontFamily: '"Pricedown", sans-serif' }}
                            >
                              {event.prizePool}
                            </p>
                          </div>

                          {/* TIME */}
                          <div className="bg-white/5 rounded-xl py-4 px-4 text-center border border-white/10">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                              Time
                            </p>
                            <p
                              className="text-yellow-400 text-xl lg:text-2xl tracking-wide"
                              style={{ fontFamily: '"Pricedown", sans-serif' }}
                            >
                              {event.time}
                            </p>
                          </div>

                          {/* REG DEADLINE */}
                          <div className="bg-white/5 rounded-xl py-4 px-4 text-center border border-white/10">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                              Reg. Deadline
                            </p>
                            <p
                              className="text-yellow-400 text-xl lg:text-2xl tracking-wide"
                              style={{ fontFamily: '"Pricedown", sans-serif' }}
                            >
                              {event.regDeadline}
                            </p>
                          </div>
                        </div>
                    </div>

                    {/* DANCER (DESKTOP) - ALTERNATE POSITION */}
                    <div className={`absolute bottom-0 ${isFlipped ? 'left-8 lg:left-16' : 'right-8 lg:right-16'} w-[45%] ${isLastCard ? 'h-[105%]' : 'h-[115%]'} pointer-events-none items-end justify-end z-20 overflow-visible`} style={{ animation: "flowRight 4s ease-in-out infinite" }}>
                        <style>{`@keyframes flowRight { 0%, 100% { transform: translateX(0); } 50% { transform: translateY(0.5rem); } }`}</style>
                        <img
                          src={event.dancer}
                          alt="Character"
                          loading="lazy"
                          decoding="async"
                          className={`object-contain object-bottom w-full h-full ${isLastCard ? 'md:-translate-y-2' : 'md:-translate-y-6'} filter brightness-110 contrast-110 ${isFlipped ? 'scale-x-[-1]' : ''}`}
                        />
                    </div>

                    {/* REGISTER BUTTON (DESKTOP POSITION) - ALTERNATE */}
                    <OriginalRegisterButton 
                      positionClasses={`absolute bottom-10 ${isFlipped ? 'left-10 lg:left-16' : 'right-10 lg:right-16'} lg:bottom-12`}
                      registrationLink={event.registrationLink}
                    />
                </div>
              );
            })}
        </div>


        {/* --- MOBILE / IPAD VIEW --- */}
        <div className="md:hidden w-full px-4 pt-10 pb-20 max-w-md mx-auto space-y-8">
         

          {/* EVENT CARDS */}
          {events.map((event, index) => (
            <section key={index} className="relative group">
              {/* Glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur opacity-70 animate-pulse" />

              <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* IMAGE */}
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />

                 

                  {/* TITLE */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2
                      className="text-5xl text-yellow-400 leading-none uppercase drop-shadow-[3px_3px_0_rgba(0,0,0,1)]"
                      style={{ fontFamily: '"Pricedown", sans-serif' }}
                    >
                      {event.title}
                    </h2>

                    {/* TAG ROW */}
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs uppercase tracking-wider text-white/90">
                      <span className="bg-pink-600 px-2 py-0.5 rounded">{event.category}</span>
                      <span>•</span>
                      <span>{event.venue}</span>
                      <span>•</span>
                      <span>Team of {event.teamOf}</span>
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
                        {event.prizePool}
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
                        {event.regDeadline}
                      </p>
                    </div>
                  </div>

                  {/* REGISTER BUTTON */}
                  <div className="pt-3 pb-4 flex justify-center">
                    <OriginalRegisterButton registrationLink={event.registrationLink} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

      </section>

      {/* --- KEEP ORIGINAL FOOTER --- */}
      <Footer />

      

    </div>
  );
};

export default EventsPage;