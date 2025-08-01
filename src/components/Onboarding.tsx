import React from 'react';
import { CheckCircle, Play, BarChart3, Mail, Award } from 'lucide-react';

const Onboarding = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900/20 via-slate-900 to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">✅</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Onboarding After Payment
            </h2>
            <p className="text-xl text-gray-300">
              Welcome to Second Brain Labs
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/30 border border-green-700 rounded-2xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn Premium Setup</h3>
              <p className="text-green-300 text-sm font-medium">In Progress</p>
              <div className="w-full bg-green-900 rounded-full h-2 mt-3">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-700 rounded-2xl p-6 text-center">
              <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Employer Curation Started</h3>
              <p className="text-blue-300 text-sm font-medium">Building your list</p>
              <div className="w-full bg-blue-900 rounded-full h-2 mt-3">
                <div className="bg-blue-400 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-700 rounded-2xl p-6 text-center">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Campaign Goes Live</h3>
              <p className="text-purple-300 text-sm font-medium">In 48 Hours</p>
              <div className="w-full bg-purple-900 rounded-full h-2 mt-3">
                <div className="bg-purple-400 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-800/30 border border-yellow-700 rounded-2xl p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Status Report</h3>
              <p className="text-yellow-300 text-sm font-medium">Coming Soon!</p>
              <div className="w-full bg-yellow-900 rounded-full h-2 mt-3">
                <div className="bg-yellow-400 h-2 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
          
          {/* Main Message */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600 text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              You didn't buy access.
            </h3>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
              You bought visibility.
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              While other students send cold emails into the void, you now have a professional team working to get you noticed by the right people.
            </p>
          </div>
          
          {/* Dashboard Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Dashboard Mockup - "Welcome, Ayush!"</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Real-time campaign tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Message response analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Interview opportunity pipeline</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Weekly progress reports</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Mockup */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="text-white font-semibold">Welcome, Ayush!</h4>
                  <p className="text-gray-400 text-sm">Your outreach engine is warming up</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-300">0</div>
                  <div className="text-blue-200 text-sm">Messages Sent</div>
                </div>
                <div className="bg-green-900/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">0</div>
                  <div className="text-green-200 text-sm">Replies Received</div>
                </div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">Next Steps</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Setting up LinkedIn Premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Curating your employer target list</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Preparing first message batch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Walkthrough */}
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Your Next 48 Hours at SBL</h3>
              <p className="text-gray-300">Complete walkthrough of what happens next</p>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
                <div className="relative z-10 text-center">
                  <Play className="w-16 h-16 text-white mb-4 mx-auto" />
                  <p className="text-white font-semibold text-lg">Your Next 48 Hours at SBL</p>
                  <p className="text-gray-300">See exactly what we'll set up for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;