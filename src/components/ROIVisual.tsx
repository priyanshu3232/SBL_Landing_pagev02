import React from 'react';
import { TrendingUp, MessageSquare, Target, DollarSign, ArrowRight } from 'lucide-react';

const ROIVisual = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">💥</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Job Market Access Value = ₹1 Crore+
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              You're not buying a course. You're buying visibility at scale.
            </p>
          </div>
          
          {/* Bullet Breakdown */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📤</div>
                    <div>
                      <p className="text-xl font-semibold text-white">800 employer messages/month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📅</div>
                    <div>
                      <p className="text-xl font-semibold text-white">× 12 months = 9,600 targeted messages/year</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <p className="text-xl font-semibold text-white">Even 1% reply rate = 96 conversations</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <p className="text-xl font-semibold text-white">Just 1 interview = Job worth ₹10L–₹25L/year</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🔁</div>
                    <div>
                      <p className="text-xl font-semibold text-white">That's 25–50× ROI on your monthly ₹2,999 investment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🪄</div>
                    <div>
                      <p className="text-xl font-semibold text-white">You only need 1 Yes – we get you seen 9,600 times</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Infographic Visualization */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-3xl p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Infographic Visualization</h3>
            </div>
            
            {/* Visual Flow */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  ₹2,999
                </div>
                <p className="text-blue-300 font-semibold">Monthly Investment</p>
              </div>
              
              <div className="text-4xl text-gray-500 rotate-90 lg:rotate-0">→</div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  800
                </div>
                <p className="text-purple-300 font-semibold">Messages</p>
              </div>
              
              <div className="text-4xl text-gray-500 rotate-90 lg:rotate-0">→</div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  96
                </div>
                <p className="text-green-300 font-semibold">Conversations</p>
              </div>
              
              <div className="text-4xl text-gray-500 rotate-90 lg:rotate-0">→</div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <p className="text-yellow-300 font-semibold">Interview</p>
              </div>
              
              <div className="text-4xl text-gray-500 rotate-90 lg:rotate-0">→</div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  ₹10-25L
                </div>
                <p className="text-emerald-300 font-semibold">Job Package</p>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <blockquote className="text-2xl lg:text-3xl text-center text-gray-300 italic border-l-4 border-blue-500 pl-8 ml-8 mb-12">
            "You don't need 100 jobs. You need one yes. This is how you get seen."
          </blockquote>
          
          {/* CTA */}
          <div className="text-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              🔥 I'm In - Start My Outreach Engine
              <ArrowRight className="inline ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIVisual;