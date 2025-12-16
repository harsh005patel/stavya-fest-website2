import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, Users, Trophy, ArrowRight } from "lucide-react";

export const Events = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            events.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    // --- event list unchanged ---
    {
      title: "Battle of Bands",
      category: "Music",
      date: "March 15, 2025",
      time: "6:00 PM",
      participants: "Teams of 4-6",
      prize: "₹50,000",
      description: "Showcase your band's talent on the main stage. Original compositions preferred.",
      color: "primary",
      image: "https://images.unsplash.com/photo-1582220107107-590dc8b0fad3?w=400",
    },
    {
      title: "Dance Face-Off",
      category: "Dance",
      date: "March 15, 2025",
      time: "4:00 PM",
      participants: "Solo/Duo/Group",
      prize: "₹40,000",
      description: "Express yourself through movement. All dance forms welcome.",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400",
    },
    {
      title: "Stage Play",
      category: "Theatre",
      date: "March 16, 2025",
      time: "7:00 PM",
      participants: "Teams of 8-12",
      prize: "₹45,000",
      description: "Bring your script to life. Original plays encouraged.",
      color: "accent",
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400",
    },
    {
      title: "E-Sports Tournament",
      category: "Gaming",
      date: "March 16, 2025",
      time: "10:00 AM",
      participants: "Teams of 5",
      prize: "₹1,00,000",
      description: "Compete in popular titles like Valorant, CS:GO, and more.",
      color: "primary",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
    },
    {
      title: "Fashion Show",
      category: "Fashion",
      date: "March 17, 2025",
      time: "8:00 PM",
      participants: "Teams of 10-15",
      prize: "₹60,000",
      description: "Walk the ramp with style and creativity. Theme-based rounds.",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
    },
    {
      title: "Stand-Up Comedy",
      category: "Entertainment",
      date: "March 17, 2025",
      time: "9:00 PM",
      participants: "Solo",
      prize: "₹25,000",
      description: "Make the audience laugh with your original content.",
      color: "accent",
      image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400",
    },
  ];

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >

      {/* 🔥 FIXED BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0 -z-10 
          bg-[url('https://images.unsplash.com/photo-1550184783-eb56e9a114f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxuZW9uJTIwY29uY2VydHxlbnwwfHx8fDE3NjQ2Njk5NTB8MA&ixlib=rb-4.1.0&q=85')]
          bg-cover bg-center bg-no-repeat bg-fixed
        "
      />

      

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-pricedown">
            <span className="font-pricedown">FEATURED</span>{" "}
            <span className="text-primary font-pricedown">EVENTS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From electrifying performances to intense competitions, explore our diverse range of events.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <Card
                key={index}
                className={`bg-background/60 backdrop-blur-md border-2 border-${event.color}/30 hover:border-${event.color} transition-all duration-500 flex flex-col ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 right-4 bg-${event.color}`}>
                    {event.category}
                  </Badge>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-2xl font-bold mb-3 text-${event.color}`}>
                    {event.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-1">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {event.participants}
                    </div>
                    <div className="flex items-center gap-2 font-bold">
                      <Trophy size={16} />
                      {event.prize}
                    </div>
                  </div>

                  <Button className={`w-full border-${event.color} text-${event.color}`}>
                    Register <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 font-bold">
            View All Events <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
