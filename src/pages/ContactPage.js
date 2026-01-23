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
  { name: "Rishi Menpara", title: "Member", image: ["/contact_us/rishi.jpg"], insta: "rishi_menpara", linkedin: null },
  { name: "Chinmay Patil", title: "Member", image: ["/contact_us/chinmay.jpeg", "/contact_us/chinmay.png"], insta: "chinmay._.patil", linkedin: "www.linkedin.com/in/chinmay-patil-63318a330" },
  { name: "Devraj Singh", title: "Member", image: ["/contact_us/devraj.jpg"], insta: "devraj._.x", linkedin: "www.linkedin.com/in/devrajsingh25" },
  { name: "Yug Baid", title: "Member", image: ["/contact_us/yug.jpg"], insta: "yug__jaiin__", linkedin: null },
  { name: "Kshitiz Gangwar", title: "Member", image: ["/contact_us/kshitiz.jpeg"], insta: "_kshitiz08", linkedin: "www.linkedin.com/in/kshitiz-gangwar-aa3744280" },
  { name: "Pankhuri Kushwaha", title: "Member", image: ["/contact_us/pankhuri.jpg"], insta: "pankhuri.dc", linkedin: null },
  { name: "Sajjala Anshu Reddy", title: "Member", image: ["/contact_us/anshu.png", "/contact_us/anshu.jpg"], insta: "anshu_reddyy19", linkedin: "linkedin.com/anshu-reddy" },
  { name: "Kavya Siddh Sharma", title: "Member", image: ["/contact_us/kavya.jpg"], insta: "kavya._.1806", linkedin: "in.linkedin.com/in/kavya-siddh-sharma-714228318" },
  { name: "Anurag", title: "Member", image: ["/contact_us/anurag.jpg"], insta: "anurag._.14", linkedin: "linkedin.com/in/anurag-daf-ad14" },
  { name: "Abhi Virani", title: "Member", image: ["/contact_us/abhi.heic", "/contact_us/abhi.png"], insta: "abhivirani_007", linkedin: "www.linkedin.com/in/abhi-virani" },
  { name: "Anushka Wagh", title: "Member", image: ["/contact_us/anushka.jpg"], insta: "anushka_wagh_03", linkedin: "www.linkedin.com/in/anushka-wagh-0b0a7932b" },
  { name: "Ashitosh Shirsath", title: "Member", image: ["/contact_us/ashitosh.jpg"], insta: "ashitosh_0302", linkedin: null },
  { name: "Lingampeta Daksha", title: "Member", image: ["/contact_us/daksha.jpg", "/contact_us/daksha.jpeg"], insta: "daksha_goud.16", linkedin: "www.linkedin.com/in/lingampeta-daksha-548188330" },
  { name: "Vedant Patel", title: "Member", image: ["/contact_us/vedant.jpg"], insta: "vedant_plt_11", linkedin: "www.linkedin.com/in/vedant-patel-04-" },
  { name: "Jinit Ponkiya", title: "Member", image: ["/contact_us/jinit.jpg"], insta: "jinitponkiya", linkedin: null },
  { name: "Dhruv Sharma", title: "Member", image: ["/contact_us/dhruv.jpeg"], insta: "dhruv_sh_arm_a", linkedin: "www.linkedin.com/in/dhruv-18-sharma" },
  { name: "Akshat Sharma", title: "Member", image: ["/contact_us/akshat.jpg"], insta: "sharmakshat19", linkedin: "www.linkedin.com/in/akshatsharma19" },
];

/* 🔹 COORDINATORS */
const coordinators = [
  { name: "Saransh Naik", title: "Secretary", image: ["/contact_us/saransh.jpg"], insta: "saranshh0_0", linkedin: "www.linkedin.com/in/saranshnaik14" },
  { name: "Shubhankar Verma", title: "Joint Secretary", image: ["/contact_us/shubhankar.jpeg"], insta: "shubhankar__3", linkedin: "linkedin.com/in/shubhankar-verma-2b8061313" },
  { name: "Rishi Vykunta", title: "Joint Secretary", image: ["/contact_us/rishi2.jpeg"], insta: "rish_i__x", linkedin: "www.linkedin.com/in/rishi-vykunta-1154a932b" },
  { name: "Ankit Mishra", title: "Secretary", image: ["/contact_us/ankit.png"], insta: "ankitmishra1597", linkedin: "www.linkedin.com/in/ankit-mishra-189b38277" },
  { name: "Poojan Simariya", title: "Secretary", image: ["/contact_us/poojan.jpg"], insta: "poojansimariya", linkedin: "www.linkedin.com/in/poojan-simariya-ps5344" },
  { name: "Rudraksha Singh", title: "Joint Secretary", image: ["/contact_us/rudraksha.jpeg", "/contact_us/rudraksha.jpg"], insta: null, linkedin: "www.linkedin.com/in/rudraksha-singh-a26373399" },
  { name: "Saumya Joshi", title: "Secretary", image: ["/contact_us/saumya.jpeg"], insta: "saumya_joshi_8", linkedin: "www.linkedin.com/in/saumya-joshi-83778b28b" },
  { name: "Harshil Patel", title: "Joint Secretary", image: ["/contact_us/harshil.jpg"], insta: "harshil_3105_", linkedin: "www.linkedin.com/in/harshil-patel-5a7373333" },
  { name: "Chirag Wattamwar", title: "Joint Secretary", image: ["/contact_us/chirag.jpg"], insta: "chirag_gg234", linkedin: "www.linkedin.com/in/chirag-wattamwar-5b985a313" },
  { name: "Shailendra Singh Mandal", title: "Secretary", image: ["/contact_us/shailendra.jpeg"], insta: "shailendra_.x", linkedin: "www.linkedin.com/in/shailendrasinghmandal" },
  { name: "Namra Koyani", title: "Joint Secretary", image: ["/contact_us/namra.jpg"], insta: "namrakoyani", linkedin: "www.linkedin.com/in/namrakumar-koyani-24b6912a3" },
  { name: "Mrunal Nikam", title: "Secretary", image: ["/contact_us/mrunal.jpg"], insta: "mrunal17nikam", linkedin: "www.linkedin.com/in/mrunal-nikam-20465628a" },
];

/* ===================== CARD ===================== */

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
      <Card className={`w-full max-w-[300px] bg-black border-[3px] ${borderColor} rounded-none overflow-hidden group`}>
        <CardContent className="p-0 flex flex-col">
          <div className={`w-full h-[260px] relative overflow-hidden bg-zinc-900 border-b-[3px] ${borderColor}`}>
            <motion.img
              src={person.image[0]}
              alt={person.name}
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
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform">
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

          <div className="p-5 bg-black text-white h-[140px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase font-pricedown">{person.name}</h3>
              <p className="text-xs text-zinc-400 uppercase mt-2">{person.title}</p>
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

/* ===================== SECTION + PAGE ===================== */

const Section = ({ title, bg, people, border, bar, icon }) => (
  <section className={`w-full py-12 ${bg}`}>
    <h2 className="text-center text-5xl font-black uppercase font-pricedown mb-10" style={{ WebkitTextStroke: "2px white" }}>
      {title}
    </h2>
    <div className="container mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {people.map((person) => (
        <ContactCard key={person.name} person={person} borderColor={border} barColor={bar} iconColor={icon} />
      ))}
    </div>
  </section>
);

const ContactPage = () => (
  <div className="min-h-screen bg-black">
    <Navbar />
    <div className="h-20" />

    <Section title="Core Team" bg="bg-[#7c3aed]" people={coreTeam} border="border-cyan-400" bar="bg-cyan-400" icon="hover:bg-cyan-400" />
    <Section title="Coordinators" bg="bg-[#e5c07b]" people={coordinators} border="border-black" bar="bg-black" icon="hover:bg-black" />

    <Footer />
  </div>
);

export default ContactPage;
