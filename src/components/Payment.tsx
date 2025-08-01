import React from 'react';
import { Shield, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

const Payment = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">💳</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Easy Payment + Guarantee
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Guarantees */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-300">Our Guarantee</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    No hidden fees. Cancel anytime.
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    We work until you get replies
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    No replies? We handle it 1:1 for free
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Complete transparency in process
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">What Happens After You Pay</h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span>Instant access to member portal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span>LinkedIn Premium setup begins</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <span>Campaign launches within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Payment Form Mockup */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-800">Clean UI Checkout</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Information</label>
                  <input 
                    type="text" 
                    placeholder="1234 1234 1234 1234"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input 
                      type="text" 
                      placeholder="CVC"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">SBL Smart Plan</span>
                  <span className="font-semibold text-gray-800">₹2,999/month</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>LinkedIn Premium included</span>
                  <span>₹300 value</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 mb-4">
                🔥 Start My Outreach Engine
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Secured by 256-bit SSL encryption. Your data is safe with us.
              </p>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">What Happens After You Pay</h3>
              <p className="text-gray-300">30-second walkthrough of your next steps</p>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
                <div className="relative z-10 text-center">
                  <Shield className="w-16 h-16 text-white mb-4 mx-auto" />
                  <p className="text-white font-semibold text-lg">What Happens After You Pay</p>
                  <p className="text-gray-300">30-second reassuring walkthrough</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;