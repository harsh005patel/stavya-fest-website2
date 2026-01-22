import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ===================== DATA ===================== */

const coreTeam = [
  { name: "Aryan Patel", title: "Lead Organizer" },
];

const coordinators = [
  { name: "Priya Sharma", title: "Operations" },
  { name: "Rohan Mehta", title: "Sponsorships" },
];

const developer = [
  { name: "Harsh Kukadiya", title: "Full Stack Developer" },
];

const design = [
  { name: "ANSH PATEL", title: "UI/UX Designer" },
];

/* ===================== CARD ===================== */

const ContactCard = ({ person, borderColor, barColor, iconColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-center w-full"
    >
      <Card className={`w-full max-w-[300px] bg-black border-[3px] ${borderColor} rounded-none overflow-hidden group`}>
        <CardContent className="p-0 flex flex-col">
          {/* IMAGE */}
          <div className={`w-full h-[220px] sm:h-[260px] md:h-[300px] relative overflow-hidden bg-zinc-900 border-b-[3px] ${borderColor}`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt={person.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* SOCIAL ICONS */}
            <div className="
              absolute top-4 right-4 flex flex-col gap-3
              translate-x-0
              md:translate-x-12 md:group-hover:translate-x-0
              transition-transform duration-300 ease-out
            ">
              <a className={`bg-white text-black p-2 border-2 border-black ${iconColor}`} href="#">
                <Instagram size={18} />
              </a>
              <a className={`bg-white text-black p-2 border-2 border-black ${iconColor}`} href="#">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* DETAILS */}
          <div className="p-5 bg-black text-white h-[140px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight font-pricedown">
                {person.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-zinc-400 tracking-widest uppercase mt-2">
                {person.title}
              </p>
            </div>

            <div className="w-full h-1 bg-zinc-800 overflow-hidden">
              <div className={`h-full ${barColor} w-0 group-hover:w-full transition-all duration-700`} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/* ===================== SECTION ===================== */

const Section = ({ title, bg, people, border, bar, icon }) => (
  <section className={`w-full py-12 ${bg}`}>
    <h2
      className="text-center text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-wide text-black font-pricedown mb-10"
      style={{ WebkitTextStroke: "2px white" }}
    >
      {title}
    </h2>

    <div className="
      container mx-auto px-4
      grid gap-8
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      place-items-center
    ">
      {people.map((person) => (
        <ContactCard
          key={person.name}
          person={person}
          borderColor={border}
          barColor={bar}
          iconColor={icon}
        />
      ))}
    </div>
  </section>
);

/* ===================== PAGE ===================== */

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <div className="h-20 bg-black" />

      <main>
        {/* 1. PURPLE */}
        <Section
          title="Core Team"
          bg="bg-[#7c3aed]"
          people={coreTeam}
          border="border-cyan-400"
          bar="bg-cyan-400"
          icon="hover:bg-cyan-400"
        />

        {/* 2. MUTED YELLOW */}
        <Section
          title="Coordinators"
          bg="bg-[#e5c07b]"
          people={coordinators}
          border="border-black"
          bar="bg-black"
          icon="hover:bg-black"
        />

        {/* 3. CYAN */}
        <Section
          title="Developer"
          bg="bg-[#22d3ee]"
          people={developer}
          border="border-pink-600"
          bar="bg-pink-600"
          icon="hover:bg-pink-600"
        />

        {/* 4. PINK */}
        <Section
          title="Design TEAM"
          bg="bg-[#ec4899]"
          people={design}
          border="border-yellow-400"
          bar="bg-yellow-400"
          icon="hover:bg-yellow-400"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
