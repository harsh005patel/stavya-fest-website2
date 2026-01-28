import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ===================== HELPERS ===================== */

const resolveInstagram = (insta) => {
  if (!insta || insta === "None") return null;
  if (insta.startsWith("http")) return insta;
  return `https://instagram.com/${insta.replace("@", "")}`;
};

const resolveLinkedIn = (link) => {
  if (!link || link === "None") return null;
  if (link.startsWith("http")) return link;
  return `https://${link}`;
};

/* ===================== DATA ===================== */
/* NOTE:
   - Put ONLY images that actually exist
   - Order = priority (first loads first)
*/

/* 🔹 CORE TEAM */
const coreTeam = [
  { name: "Akshay Tapraniya", title: "President SAC", image: ["/contact_us/akshay.jpg"], insta: "akshay._.why", linkedin: "linkedin.com/in/akshay-kumar-tapraniya-9a6457364" },
  { name: "Harsh Kukadiya", title: "Gen Sec Cultural", image: ["/contact_us/harsh.jpg"], insta: "harsh_kukadiya_05", linkedin: "linkedin.com/in/harsh-kukadiya-b229392a3" },
  { name: "Anurag Daf", title: "Gen Sec Academics", image: ["/contact_us/anurag.jpg"], insta: "anurag._.14", linkedin: "linkedin.com/in/anurag-daf-ad14" },

  { name: "Kshitiz Gangwar", title: "Member Cultural", image: ["/contact_us/kshitiz.jpg"], insta: "_kshitiz08", linkedin: "www.linkedin.com/in/kshitiz-gangwar-aa3744280" },
  { name: "Abhi Virani", title: "Member Cultural", image: ["/contact_us/abhi.heic", "/contact_us/abhi.png"], insta: "abhivirani_007", linkedin: "www.linkedin.com/in/abhi-virani" },
  {
    name: "Vrut Ajudiya",
    title: "Member Cultural",
    image: ["/contact_us/vrut.jpg"],
    insta: "vrut__ajudiya.__",
    linkedin: "www.linkedin.com/in/vrut-ajudiya-bb40ba31a/",
  },
  { name: "Rishi Menpara", title: "Member Cultural", image: ["/contact_us/rishi.jpg"], insta: "rishi_menpara", linkedin: "www.linkedin.com/in/rishimenpara" },
  { name: "Dev Patel", title: "Member Cultural", image: ["/contact_us/dev.jpg"], insta: "devunderscore23", linkedin: "https://www.linkedin.com/in/dev-patel-96b2a9217/" },  
  { name: "Chinmay Patil", title: "Member Cultural", image: ["/contact_us/chinmay.jpeg", "/contact_us/chinmay.jpg"], insta: "chinmay._.patil", linkedin: "www.linkedin.com/in/chinmay-patil-63318a330" },
  { name: "Vedant Patel", title: "Member Academics", image: ["/contact_us/vedant.jpg"], insta: "vedant_plt_11", linkedin: "www.linkedin.com/in/vedant-patel-04-" },
  { name: "Kavya Siddh Sharma", title: "Member Cultural", image: ["/contact_us/kavya.jpg"], insta: "kavya._.1806", linkedin: "www.linkedin.com/in/kavya-siddh-sharma-714228318" },
  { name: "Pankhuri Kushwaha", title: "Member Cultural", image: ["/contact_us/pankhuri.jpg"], insta: "pankhuri.dc", linkedin: "https://www.linkedin.com/in/pankhuri-kushwaha-b00186330" },
  { name: "Sajjala Anshu Reddy", title: "Member Cultural", image: ["/contact_us/anshu.jpg", "/contact_us/anshu.jpg"], insta: "anshu_reddyy19", linkedin: "linkedin.com/anshu-reddy" },
  { name: "Devraj Singh", title: "Member Academics", image: ["/contact_us/devraj.jpg"], insta: "devraj._.x", linkedin: "www.linkedin.com/in/devrajsingh25" },
  { name: "Naitik Darji", title: "Member Academics", image: ["/contact_us/naitik.jpg"], insta: "naitikkk_31", linkedin: "https://www.linkedin.com/in/naitik-darji-b70038320" },
  { name: "Jinit Ponkiya", title: "Member Academics", image: ["/contact_us/jinit.jpg"], insta: "jinitponkiya", linkedin: null },
  { name: "Anushka Wagh", title: "Member Academics", image: ["/contact_us/anushka.jpg"], insta: "anushka_wagh_03", linkedin: "www.linkedin.com/in/anushka-wagh-0b0a7932b" },
  { name: "Ashitosh Shirsath", title: "Member Academics", image: ["/contact_us/ashitosh.jpg"], insta: "ashitosh_0302", linkedin: null },
  { name: "Lingampeta Daksha", title: "Member Academics", image: ["/contact_us/daksha.jpg", "/contact_us/daksha.jpeg"], insta: "daksha_goud.16", linkedin: "www.linkedin.com/in/lingampeta-daksha-548188330" },
  { name: "Dhruv Sharma", title: "Member Academics", image: ["/contact_us/dhruv.jpg"], insta: "dhruv_sh_arm_a", linkedin: "www.linkedin.com/in/dhruv-18-sharma" },
  { name: "Yug Baid", title: "Member Cultural", image: ["/contact_us/yug.jpg"], insta: "yug__jaiin__", linkedin: "https://www.linkedin.com/in/yug-baid-89702b309" },
  { name: "Akshat Sharma", title: "Member Academics", image: ["/contact_us/akshat.jpg"], insta: "sharmakshat19", linkedin: "www.linkedin.com/in/akshatsharma19" },
];

/* 🔹 COORDINATORS */
const coordinators = [
  { name: "Poojan Simariya", title: "Secretary Eloquence", image: ["/contact_us/poojan.jpg"], insta: "poojansimariya", linkedin: "www.linkedin.com/in/poojan-simariya-ps5344" },
  { name: "Rishi Vykunta", title: "Joint Secretary Eloquence", image: ["/contact_us/rishi2.jpg"], insta: "rish_i__x", linkedin: "www.linkedin.com/in/rishi-vykunta-1154a932b" },
  { name: "Shailendra Mandal", title: "Secretary Essence", image: ["/contact_us/shailendra.jpg"], insta: "shailendra_.x", linkedin: "www.linkedin.com/in/shailendrasinghmandal" },
  { name: "Namra Koyani", title: "Joint Secretary Essence", image: ["/contact_us/namra.jpg"], insta: "namrakoyani", linkedin: "www.linkedin.com/in/namrakumar-koyani-24b6912a3" },
  { name: "Saransh Naik", title: "Secretary Beats", image: ["/contact_us/saransh.jpg"], insta: "saranshh0_0", linkedin: "www.linkedin.com/in/saranshnaik14" },
  { name: "Chirag Wattamwar", title: "Joint Secretary Beats", image: ["/contact_us/chirag.jpg"], insta: "chirag_gg234", linkedin: "www.linkedin.com/in/chirag-wattamwar-5b985a313" },
  { name: "Ankit Mishra", title: "Secretary Vehemence", image: ["/contact_us/ankit.jpg"], insta: "ankitmishra1597", linkedin: "www.linkedin.com/in/ankit-mishra-189b38277" },
  { name: "Shubhankar Verma", title: "Joint Secretary Vehemence", image: ["/contact_us/shubhankar.jpg"], insta: "shubhankar__3", linkedin: "linkedin.com/in/shubhankar-verma-2b8061313" },
  { name: "Rudraksha Singh", title: "Joint Secretary Uktam", image: ["/contact_us/rudraksh.jpg", "/contact_us/rudraksh.png"], insta: null, linkedin: "www.linkedin.com/in/rudraksha-singh-a26373399" },
  { name: "Saumya Joshi", title: "Secretary Uktam", image: ["/contact_us/saumya.jpg"], insta: "saumya_joshi_8", linkedin: "www.linkedin.com/in/saumya-joshi-83778b28b" },
  { name: "Harshil Patel", title: "Joint Secretary Capture", image: ["/contact_us/harshil.jpg"], insta: "harshil_3105_", linkedin: "www.linkedin.com/in/harshil-patel-5a7373333" },
  { name: "Akarshhan Kumar", title: "Secretary Capture", image: ["/contact_us/akarshhan.jpg"], insta: "thatkrishhkumar", linkedin: "www.linkedin.com/in/akarshhan-kumar-5b8a7a287" },
  { name: "Mrunal Nikam", title: "Secretary Genesis", image: ["/contact_us/mrunal.jpg"], insta: "mrunal17nikam", linkedin: "www.linkedin.com/in/mrunal-nikam-20465628a" },
  { name: "Shubham Chhatbar", title: "Joint Secretary Genesis", image: ["/contact_us/shubham2.png"], insta: "7thdimensionartss", linkedin: "www.linkedin.com/in/shubhchhatbar27" },
];

const Developer = [
  { name: "Harsh Kukadiya", title: "Secretary Vector", image: ["/contact_us/harsh.jpg"], insta: "harsh_kukadiya_05", linkedin: "linkedin.com/in/harsh-kukadiya-b229392a3" },
];

const volunteers = [
  {
    name: "Ritvik Srivastava",
    title: "Member Vector",
    image: ["/contact_us/ritvik.jpg"],
    insta: "ritvik_.69",
    linkedin: "www.linkedin.com/in/ritvik-srivastava-27891a376",
  },
  {
    name: "Shivang Raj",
    title: "Member Vector",
    image: ["/contact_us/shivang.jpg"],
    insta: "___.shivang",
    linkedin: "www.linkedin.com/in/shivang-raj-449534365",
  },
  {
    name: "Tanmoy Sarkar",
    title: "Member Vector",
    image: ["/contact_us/tanmoy.jpg"],
    insta: "selfed_tazy",
    linkedin: "www.linkedin.com/in/tanmoy-sarkar-a15a40394",
  },
  {
    name: "Astitva Vikrant",
    title: "Member Vector",
    image: ["/contact_us/astitva.jpg"],
    insta: "astitvavikrant",
    linkedin: "www.linkedin.com/in/astitvavikrant",
  },
  {
    name: "Abhiraj Solanki",
    title: "Member Vector",
    image: ["/contact_us/abhiraj.jpg"],
    insta: "_sarkar0f_solanki_707",
    linkedin: " www.linkedin.com/in/abhiraj-solanki-9994ba36b",
  },
  {
    name: "Naman Girdhani",
    title: "Member Vector",
    image: ["/contact_us/naman.png"],
    insta: "namangirdhani21",
    linkedin: " www.linkedin.com/in/naman-girdhani-a609aa379?",
  },{
    name: "Pranav Borole",
    title: "Member Vector",
    image: ["/contact_us/pranav.png"],
    insta: "pranav_borole_",
    linkedin: " www.linkedin.com/in/pranav-borole-a2b19531b",
  },
];

/* ==================== CARD ===================== */

const ContactCard = ({ person, borderColor, barColor, iconColor }) => {
  const instagram = resolveInstagram(person.insta);
  const linkedin = resolveLinkedIn(person.linkedin);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full"
    >
      <Card className={`w-full  max-w-[320px] m-4 bg-black border-[3px] ${borderColor} rounded-none overflow-hidden group`}>
        <CardContent className="p-0 flex flex-col">
          {/* REDUCED HEIGHT FOR MOBILE */}
          <div className={`w-full h-[270px] md:h-[300px] relative overflow-hidden bg-zinc-900 border-b-[3px] ${borderColor}`}>
            <motion.img
              src={person.image[0]}
              alt={person.name}
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              onError={(e) => {
                const img = e.currentTarget;
                const list = person.image;
                const index = list.findIndex(src => img.src.includes(src));
                const next = list[index + 1];
                if (next) img.src = next;
                else img.onerror = null;
              }}
              className="
              w-full h-full object-cover transition-all duration-500
              grayscale-0
              md:grayscale
              md:group-hover:grayscale-0
            "
            />

            <div
              className="
                absolute top-4 right-4 flex flex-col gap-3
                translate-x-0
                md:translate-x-12
                md:group-hover:translate-x-0
                transition-transform
              "
            >
              {instagram && (
                <a className={`bg-white text-black p-2 border-2 border-black ${iconColor}`} href={instagram} target="_blank" rel="noreferrer">
                  <Instagram size={18} />
                </a>
              )}
              {linkedin && (
                <a className={`bg-white text-black p-2 border-2 border-black ${iconColor}`} href={linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>

          <div className="p-4 md:p-5 bg-black text-white h-[90px] md:h-[110px] flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase font-pricedown">{person.name}</h3>
              <p className="text-xs text-zinc-400 uppercase mt-1 md:mt-2">{person.title}</p>
            </div>
            {/* HIDDEN ON MOBILE, SHOWN ON DESKTOP */}
            <div className="hidden md:block w-full h-1 bg-zinc-800 overflow-hidden">
              <div className={`h-full ${barColor} w-0 group-hover:w-full transition-all duration-700`} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/* ===================== SECTION + PAGE ===================== */

const Section = ({ title, bg, people, border, bar, icon }) => (
  <section 
    className={`w-full py-8 md:py-16 bg-fixed bg-cover bg-center relative`}
    style={{
      backgroundImage: 'linear-gradient(rgba(0, 32, 50, 0.4), rgba(0, 30, 39, 0.3)), url("/ROAD2.jpg")'
    }}
  >
    <div className="absolute inset-0 bg-black/40"></div>
    
    <div className="relative z-10 px-4 md:px-0">
      <h2 className="text-center py-6 md:py-10 text-4xl md:text-5xl font-black uppercase font-pricedown text-white">
        {title}
      </h2>

      {/* Use flexbox for better centering with odd number of cards */}
      <div className="container mx-auto flex flex-wrap justify-center gap-6 md:gap-8 px-4 md:px-0">
        {people.map((person) => (
          <div
          key={person.name}
          className="
            w-full
            sm:w-[calc(50%-16px)]
            lg:w-1/3
            max-w-[420px]
          "
        >
        
            <ContactCard
              person={person}
              borderColor={border}
              barColor={bar}
              iconColor={icon}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <div className="min-h-screen bg-black">
    <Navbar />
    <div className="h-20" />

    <Section 
      title="Core Team" 
      people={coreTeam} 
      border="border-[#8b5cf6]"   // Medium purple
      bar="bg-[#a78bfa]"          // Light purple
      icon="hover:bg-[#c4b5fd]"   // Lightest purple
    />

    <Section 
      title="Coordinators" 
      people={coordinators} 
      border="border-[#d97706]"   // Medium amber
      bar="bg-[#f59e0b]"          // Light amber
      icon="hover:bg-[#fbbf24]"   // Lightest amber
    />

    <Section 
      title="Developer" 
      people={Developer} 
      border="border-[#3a9e7d]"   // Medium teal
      bar="bg-[#48b28f]"          // Light teal
      icon="hover:bg-[#56d0a9]"   // Lightest teal
    />

    <Section
      title="DESIGN TEAM"
      people={volunteers}
      border="border-[#0e7490]"   // Medium cyan
      bar="bg-[#0891b2]"          // Light cyan
      icon="hover:bg-[#06b6d4]"   // Lightest cyan
    />
    
    <Footer />
  </div>
);
export default ContactPage;