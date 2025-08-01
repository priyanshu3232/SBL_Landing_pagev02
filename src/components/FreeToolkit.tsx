import React from 'react';
import { Unlock, Eye, FileText, Zap, ArrowRight } from 'lucide-react';

const FreeToolkit = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">🎓</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Toolkit Preview (Before Signup)
            </h2>
            <p className="text-xl text-gray-300">
              Let them peek inside before they buy
            </p>
          </div>
          
          {/* Free Preview Section */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">🎁 Free Preview Includes:</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blurred Mini Course */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-700 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-4">🧠 1 Blurred Mini-Course Video</h4>
                  <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <Unlock className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                        <p className="text-blue-300 font-medium">Blurred Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>How to craft compelling subject lines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Psychology of HR decision making</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Timing strategies that work</span>
                  </div>
                </div>
              </div>
              
              {/* ICP Builder Snapshot */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-700 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Eye className="w-6 h-6 text-purple-400" />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-4">📄 ICP Builder Snapshot (Partial List)</h4>
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Tech Companies (Bangalore)</span>
                        <span className="text-purple-400">127 contacts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Startup Employers (Mumbai)</span>
                        <span className="text-purple-400">89 contacts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Product Companies (Pune)</span>
                        <span className="text-purple-400">156 contacts</span>
                      </div>
                      <div className="border-t border-slate-600 pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span className="text-white">Total Accessible</span>
                          <span className="text-purple-300">800+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-purple-200 text-sm">
                  Partial list preview - Full access includes complete contact details
                </p>
              </div>
              
              {/* Message Vault Sample */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/30 border border-green-700 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-4">🧰 Message Vault Sample (1-2 Templates)</h4>
                  <div className="space-y-4">
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                      <h5 className="text-green-300 font-medium mb-2">Template: "Fresher Outreach"</h5>
                      <p className="text-gray-300 text-sm italic">
                        "Hi [Name], I noticed [Company] is expanding their tech team. As a recent graduate with expertise in..."
                      </p>
                      <p className="text-green-400 text-xs mt-2">✅ 18% response rate</p>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                      <h5 className="text-green-300 font-medium mb-2">Template: "Referral Request"</h5>
                      <p className="text-gray-300 text-sm italic">
                        "Hi [Name], I've been following [Company]'s growth story and would love to contribute..."
                      </p>
                      <p className="text-green-400 text-xs mt-2">✅ 22% response rate</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-green-200 text-sm">
                  2 templates shown - Full vault includes 50+ proven templates
                </p>
              </div>
            </div>
          </div>
          
          {/* Video Preview */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What You Get Inside (Mini Sneak Peek)</h3>
              <p className="text-gray-300">See the tools and resources that will transform your job search</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="relative z-10 text-center">
                  <Zap className="w-16 h-16 text-white mb-4 mx-auto" />
                  <p className="text-white font-semibold text-lg">Inside Look: Tools & Resources</p>
                  <p className="text-gray-300">Preview what makes our system so effective</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Multiple CTA Options */}
          <div className="text-center space-y-6">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl block w-full sm:w-auto mx-auto">
              🔓 Unlock Full Access - ₹2,999/month
              <ArrowRight className="inline ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                🔓 Unlock 6 Months - ₹6,999
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                🔓 Unlock 12 Months - ₹8,999 (Best Deal)
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-400 mt-6 text-lg">
              Join 500+ students who've already transformed their job search
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeToolkit;