import React from 'react';
import { ArrowRight, Play, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Target className="w-4 h-4" />
              Stop Being Invisible
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              "You've applied to{' '}
              <span className="text-blue-400">73 jobs.</span>{' '}
              Got{' '}
              <span className="text-red-400">0 replies."</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-4">
              You're not unskilled. You're just <span className="text-purple-400 font-semibold">invisible.</span>
            </p>
            
            <div className="text-lg text-gray-400 mb-8 space-y-2">
              <p>Forget advice. Forget theory.</p>
              <p className="text-white font-medium">
                Let Second Brain Labs message persuasively to <span className="text-blue-400 font-bold">800 real employers</span> every month - for you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                🚀 Start My Outreach Engine - ₹2,999/month
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              ✅ No hidden fees • Cancel anytime • Results guaranteed
            </p>
          </div>
          
          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="space-y-4">
                {/* Rejection Emails Mockup */}
                <div className="space-y-3">
                  <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">HR</div>
                      <div>
                        <p className="text-red-300 font-medium">Application Status Update</p>
                        <p className="text-red-400 text-sm">Thank you for your interest, however...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="text-gray-400 font-medium">No response</p>
                        <p className="text-gray-500 text-sm">Sent 2 weeks ago...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="text-gray-400 font-medium">Seen ✓✓</p>
                        <p className="text-gray-500 text-sm">Message read, no reply...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Play Button */}
              <div className="mt-6 relative">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <Play className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white font-medium">This is why you're not getting interviews</p>
                      <p className="text-blue-200 text-sm">30-sec explainer (and how we fix it)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 text-white shadow-xl">
              <p className="font-bold text-lg">800 employers/month</p>
              <p className="text-green-200 text-sm">Contacted for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;