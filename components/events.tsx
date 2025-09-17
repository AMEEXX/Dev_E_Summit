
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, Users, Trophy, Code, Mic, TrendingUp, Music } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState('all');
  const [activeDay, setActiveDay] = useState('day-1');

  const events = {
    'day-1': [
      {
        id: 1,
        title: 'Innothon 2026',
        time: '9:00 AM - 9:00 PM',
        type: 'competition',
        icon: Code,
        description: '12-hour coding marathon for innovative solutions',
        venue: 'Tech Lab Complex',
        participants: '200+',
        prize: '₹2 Lakhs'
      },
      {
        id: 2,
        title: 'Founders Renaissance',
        time: '2:00 PM - 5:00 PM',
        type: 'competition',
        icon: Trophy,
        description: 'Ultimate pitch contest for emerging startups',
        venue: 'Main Auditorium',
        participants: '50 Startups',
        prize: '₹5 Lakhs'
      },
      {
        id: 3,
        title: 'Investor Roundtable',
        time: '7:00 PM - 9:00 PM',
        type: 'networking',
        icon: TrendingUp,
        description: 'Exclusive networking dinner with VCs and angel investors',
        venue: 'Grand Banquet Hall',
        participants: '100 Investors',
        prize: 'Networking'
      }
    ],
    'day-2': [
      {
        id: 4,
        title: 'Virtual Stock Exchange',
        time: '10:00 AM - 1:00 PM',
        type: 'competition',
        icon: TrendingUp,
        description: 'Real-time stock market simulation competition',
        venue: 'Finance Lab',
        participants: '300+',
        prize: '₹1 Lakh'
      },
      {
        id: 5,
        title: 'Verbal Combat Debate',
        time: '3:00 PM - 6:00 PM',
        type: 'competition',
        icon: Mic,
        description: 'High-stakes debate on entrepreneurship and innovation',
        venue: 'Debate Hall',
        participants: '64 Teams',
        prize: '₹50k'
      },
      {
        id: 6,
        title: 'Vision Pitch',
        time: '7:30 PM - 10:00 PM',
        type: 'workshop',
        icon: Users,
        description: 'Learn the art of compelling storytelling for startups',
        venue: 'Workshop Center',
        participants: '150+',
        prize: 'Certificate'
      }
    ],
    'day-3': [
      {
        id: 7,
        title: 'Startup Pitching Final',
        time: '11:00 AM - 2:00 PM',
        type: 'competition',
        icon: Trophy,
        description: 'Grand finale of the startup pitching competition',
        venue: 'Main Auditorium',
        participants: '20 Finalists',
        prize: '₹10 Lakhs'
      },
      {
        id: 8,
        title: 'Closing Ceremony',
        time: '4:00 PM - 6:00 PM',
        type: 'networking',
        icon: Users,
        description: 'Awards ceremony and closing remarks',
        venue: 'Main Auditorium',
        participants: '5000+',
        prize: 'Awards'
      },
      {
        id: 9,
        title: 'DJ Night & Networking',
        time: '8:00 PM - 12:00 AM',
        type: 'networking',
        icon: Music,
        description: 'Celebrate with music, food, and networking',
        venue: 'Open Air Theatre',
        participants: '2000+',
        prize: 'Fun'
      }
    ]
  };

  const getFilteredEvents = (dayEvents) => {
    if (filter === 'all') return dayEvents;
    return dayEvents.filter(event => event.type === filter);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'competition': return { bg: '#ed1b7620', text: '#ed1b76', border: '#ed1b7660' };
      case 'workshop': return { bg: '#249f9c20', text: '#249f9c', border: '#249f9c60' };
      case 'networking': return { bg: '#ffffff20', text: '#ffffff', border: '#ffffff60' };
      default: return { bg: '#66666620', text: '#666666', border: '#66666660' };
    }
  };

  // Common classes for the teal fill hover effect
  const tealFillHoverClasses = "relative overflow-hidden z-0 hover:text-white before:absolute before:inset-0 before:z-[-1] before:bg-[#249f9c] before:transition-transform before:duration-300 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100";

  return (
    <section id="events" className="py-24" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: '#ed1b76' }}>
            Events & Schedule
          </h2>
          <div className="h-1 w-24 mx-auto gradient-pink mb-4" />
          <p className="text-xl text-white max-w-3xl mx-auto">
            Three action-packed days of competitions, workshops, and networking events
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'All Events', style: 'btn-primary' },
            { key: 'competition', label: 'Competitions', style: 'btn-secondary' },
            { key: 'workshop', label: 'Workshops', style: 'btn-secondary' },
            { key: 'networking', label: 'Networking', style: 'btn-secondary' }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`font-bold px-6 py-3 transition-all duration-300 ${
                filter === item.key 
                  ? 'btn-primary' 
                  : `btn-secondary ${tealFillHoverClasses}`
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Schedule Tabs */}
        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="relative grid w-full max-w-lg mx-auto grid-cols-3 mb-8 p-1 rounded-lg" style={{ backgroundColor: '#1a1a1a' }}>
            <div 
              className="absolute h-[calc(100%-0.5rem)] w-1/3 top-1 rounded-md gradient-pink transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${activeDay === 'day-1' ? '0%' : activeDay === 'day-2' ? '100%' : '200%'})`
              }}
            />
            <TabsTrigger 
              value="day-1" 
              className="font-bold data-[state=active]:text-white transition-all duration-300 z-10"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              23 Jan
            </TabsTrigger>
            <TabsTrigger 
              value="day-2" 
              className="font-bold data-[state=active]:text-white transition-all duration-300 z-10"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              24 Jan
            </TabsTrigger>
            <TabsTrigger 
              value="day-3" 
              className="font-bold data-[state=active]:text-white transition-all duration-300 z-10"
              style={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              25 Jan
            </TabsTrigger>
          </TabsList>

          {Object.entries(events).map(([day, dayEvents]) => (
            <TabsContent key={day} value={day} className="mt-8">
              <div className="grid gap-6">
                {getFilteredEvents(dayEvents).map((event, index) => {
                  const typeColors = getTypeColor(event.type);
                  return (
                    <div
                      key={event.id}
                      className="group rounded-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#249f9c] opacity-0 animate-fade-in"
                      style={{ backgroundColor: '#1a1a1a', animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6 lg:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                          {/* Event Icon & Time */}
                          <div className="flex items-center gap-4 lg:w-1/4">
                            <div className="w-12 h-12 gradient-pink rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <event.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 text-sm mb-1" style={{ color: '#249f9c' }}>
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </div>
                              <Badge 
                                className="border"
                                style={{
                                  backgroundColor: typeColors.bg,
                                  color: typeColors.text,
                                  borderColor: typeColors.border
                                }}
                              >
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </Badge>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="flex-1 space-y-3">
                            <h3 className="text-2xl font-black text-white group-hover:text-[#ed1b76] transition-colors uppercase">
                              {event.title}
                            </h3>
                            <p className="text-white leading-relaxed">
                              {event.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#249f9c' }}>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {event.venue}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.participants}
                              </div>
                              <div className="flex items-center gap-1">
                                <Trophy className="w-4 h-4" />
                                {event.prize}
                              </div>
                            </div>
                          </div>

                          {/* Register Button */}
                          <div className="lg:w-auto">
                            <button className={`btn-secondary w-full lg:w-auto px-6 font-bold ${tealFillHoverClasses}`}>
                              <span>Register</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
