import React from 'react';
import { AlertTriangle, TrendingDown, MessageSquareX } from 'lucide-react';

const PainMirror = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emoji Header */}
          <div className="text-6xl mb-8">😔</div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            The Pain Mirror
          </h2>
          
          {/* Pain Points */}
          <div className="space-y-6 mb-12">
            <p className="text-xl text-gray-300">Campus placements are over.</p>
            <p className="text-xl text-gray-300">You got no offer, or a <span className="text-red-400 font-semibold">₹3LPA one you hate.</span></p>
            <p className="text-xl text-gray-300">You fixed your resume. <span className="text-red-400 font-semibold">Still nothing.</span></p>
          </div>
          
          {/* Quote */}
          <blockquote className="text-2xl lg:text-3xl text-purple-300 font-medium italic mb-12 border-l-4 border-purple-500 pl-6">
            "You're not confused. You're just exhausted."
          </blockquote>
          
          {/* The Silent Career Trap */}
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-red-300">The Silent Career Trap</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-3">
                <TrendingDown className="w-8 h-8 text-red-400 mx-auto md:mx-0" />
                <p className="text-gray-300 text-center md:text-left">You're applying.</p>
                <p className="text-red-300 font-medium text-center md:text-left">But no one's replying.</p>
              </div>
              
              <div className="space-y-3">
                <MessageSquareX className="w-8 h-8 text-orange-400 mx-auto md:mx-0" />
                <p className="text-gray-300 text-center md:text-left">Everyone says:</p>
                <p className="text-orange-300 font-medium text-center md:text-left">"Network better."</p>
              </div>
              
              <div className="space-y-3">
                <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto md:mx-0" />
                <p className="text-gray-300 text-center md:text-left">No one tells you</p>
                <p className="text-yellow-300 font-medium text-center md:text-left">how.</p>
              </div>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sad Student Image Placeholder */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                <div className="text-6xl">😞</div>
              </div>
              <p className="text-gray-400">Sad student at laptop, rejected again</p>
            </div>
            
            {/* Ghosted Messages */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">Ghosted DMs & Empty Job Portals</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-400">Messages Sent</span>
                  <span className="text-blue-400 font-bold">247</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-400">Replies Received</span>
                  <span className="text-red-400 font-bold">0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="text-gray-400">Applications Sent</span>
                  <span className="text-blue-400 font-bold">73</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Interview Calls</span>
                  <span className="text-red-400 font-bold">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainMirror;