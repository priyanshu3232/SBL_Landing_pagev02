import React from 'react';
import { Star, Quote, Play, MapPin, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Riya",
      college: "Tier-3 College",
      result: "Got 3 replies in 6 days",
      quote: "Got 3 replies in 6 days - from a Tier-3 college. I couldn't believe companies actually started responding to me.",
      rating: 5
    },
    {
      name: "Divya",
      college: "Engineering Graduate",
      result: "2 interviews in 2 weeks",
      quote: "I was stuck 9 months. Got 2 interviews in 2 weeks. SBL completely changed my job search game.",
      rating: 5
    },
    {
      name: "Aman",
      college: "CS Student",
      result: "Multiple job offers",
      quote: "This is what colleges should've taught us. Practical networking that actually gets results.",
      rating: 5
    }
  ];

  const powerfulStories = [
    {
      name: "Karthik S",
      location: "Remote town in MP",
      college: "Tier-3 College",
      result: "₹8.2LPA in Bangalore",
      story: "I'm from a remote town in MP. My parents started worrying. 5 months post-college, I had nothing. Then I found SBL. Got my first interview in 8 days. Today, I'm in Bangalore, earning ₹8.2LPA.",
      timeline: "8 days to first interview"
    },
    {
      name: "Meher A",
      background: "Non-CS Background",
      college: "Liberal Arts Graduate",
      result: "Product Analyst at FinTech",
      story: "I was battling anxiety and rejection. SBL didn't just get me interviews - it rebuilt my confidence. Now I work as a Product Analyst at a FinTech company.",
      timeline: "Confidence + Career transformation"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">🧑‍🎓</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Real Student Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how students like you transformed their job search
            </p>
          </div>
          
          {/* Original Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 hover:border-blue-500 transition-colors">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Result Highlight */}
                <div className="bg-green-900/30 border border-green-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-green-300 font-semibold">{testimonial.result}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{testimonial.college}</p>
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold">- {testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Powerful Stories Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Powerful Transformation Stories
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {powerfulStories.map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-2xl p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {story.name.split(' ')[0][0]}{story.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{story.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{story.location || story.background}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <GraduationCap className="w-4 h-4" />
                        <span>{story.college}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Result Badge */}
                  <div className="bg-green-900/30 border border-green-800 rounded-lg p-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-green-300 font-semibold">{story.result}</span>
                      <span className="text-green-200 text-sm">{story.timeline}</span>
                    </div>
                  </div>
                  
                  {/* Story */}
                  <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                    "{story.story}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
          

          
          {/* Screenshots Section */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              WhatsApp & LinkedIn Employer Replies
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* WhatsApp Style Replies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-300 mb-4">📱 Employer Messages</h4>
                <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">EMP</div>
                    <div>
                      <p className="text-green-300 font-medium">Employer - TechCorp</p>
                      <p className="text-green-400 text-sm">Hi! Thanks for reaching out. We have an opening...</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">TA</div>
                    <div>
                      <p className="text-blue-300 font-medium">Talent Acquisition - StartupXYZ</p>
                      <p className="text-blue-400 text-sm">Your profile looks interesting. Let's schedule a call...</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* LinkedIn Replies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-300 mb-4">💼 Employer Responses</h4>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">in</div>
                    <div>
                      <p className="text-blue-300 font-medium">Senior Recruiter replied</p>
                      <p className="text-blue-400 text-sm">"I'd love to discuss opportunities with you..."</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">in</div>
                    <div>
                      <p className="text-purple-300 font-medium">VP Engineering responded</p>
                      <p className="text-purple-400 text-sm">"Your message caught my attention. When can we talk?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;