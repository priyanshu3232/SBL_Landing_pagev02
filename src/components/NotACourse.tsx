import React from 'react';
import { X, Check, Zap, Users, MessageCircle, TrendingUp, Eye } from 'lucide-react';

const NotACourse = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">🔧</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              This Is <span className="text-red-400">NOT</span> a Course
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              This is <span className="text-blue-400 font-semibold">Networking-as-a-Service</span> - Done For You
            </p>
          </div>
          
          {/* What It's Not vs What It Is */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* NOT Column */}
            <div className="bg-red-900/20 border border-red-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-red-300">What This Is NOT</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  Another resume webinar
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  Generic networking advice
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  "Learn and do it yourself" course
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  Mass email spam service
                </li>
              </ul>
            </div>
            
            {/* IS Column */}
            <div className="bg-green-900/20 border border-green-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Check className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-green-300">What This IS</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  800 employers contacted monthly
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  LinkedIn Premium included
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Persuasive messages auto-sent
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Auto follow-ups
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Replies tracked, updates delivered
                </li>
              </ul>
            </div>
          </div>
          
          {/* Workflow Visual */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Workflow Chart</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  YOU
                </div>
                <p className="text-blue-300 font-semibold">Focus on interviews</p>
                <p className="text-gray-400 text-sm">While we handle outreach</p>
              </div>
              
              <div className="text-4xl text-gray-500">→</div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                  SBL
                </div>
                <p className="text-purple-300 font-semibold">Second Brain Labs</p>
                <p className="text-gray-400 text-sm">Messages 800 employers monthly</p>
              </div>
              
              <div className="text-4xl text-gray-500">→</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  EMP
                </div>
                <p className="text-green-300 font-semibold">Employers get your message</p>
                <p className="text-gray-400 text-sm">Persuasive & professional</p>
              </div>
            </div>
          </div>
          
          {/* Video Embed */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">How Our System Works</h3>
              <p className="text-gray-300">90-second complete walkthrough</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="relative z-10 text-center">
                  <Eye className="w-16 h-16 text-white mb-4 mx-auto" />
                  <p className="text-white font-semibold text-lg">How Our System Works</p>
                  <p className="text-gray-300">See the complete process in 90 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotACourse;