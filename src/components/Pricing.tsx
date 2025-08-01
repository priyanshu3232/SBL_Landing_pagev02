import React from 'react';
import { Check, X, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Path to Visibility
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stop competing with thousands. Start getting noticed by employers who matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative">
            <div className="flex items-center mb-6">
              <X className="w-6 h-6 text-red-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Do It Yourself</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹0</span>
              <span className="text-slate-400 ml-2">/month</span>
            </div>
            <p className="text-slate-300 mb-6">You message. You get ghosted.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-400">
                <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                Manual job applications
              </li>
              <li className="flex items-center text-slate-400">
                <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                Generic resume blasts
              </li>
              <li className="flex items-center text-slate-400">
                <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                No employer responses
              </li>
              <li className="flex items-center text-slate-400">
                <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                Endless rejections
              </li>
            </ul>
            <button className="w-full py-3 px-6 bg-slate-700 text-slate-400 rounded-lg font-semibold cursor-not-allowed">
              Stay Invisible
            </button>
          </div>

          {/* Smart Plan - Most Popular */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 relative transform scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </span>
            </div>
            <div className="flex items-center mb-6">
              <Check className="w-6 h-6 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">SBL Smart</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹2,999</span>
              <span className="text-blue-100 ml-2">/month</span>
            </div>
            <p className="text-blue-100 mb-6 font-semibold">Let Us Handle It</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                800 employers contacted monthly
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                LinkedIn Premium included
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Persuasive messages auto-sent
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Smart follow-ups
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Real-time dashboard
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Campaign templates vault
              </li>
            </ul>
            <button className="w-full py-4 px-6 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors mb-4">
              🔥 Start My Outreach Engine
            </button>
            <div className="space-y-2">
              <button className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                🔓 6 Months - ₹6,999
              </button>
              <button className="w-full py-3 px-6 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-400 transition-colors">
                🔓 12 Months - ₹8,999 (Best Deal)
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-purple-500 relative">
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">SBL Pro</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹8,999</span>
              <span className="text-slate-400 ml-2">/year</span>
            </div>
            <p className="text-slate-300 mb-6">Everything in Smart + Priority Support</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Everything in Smart Plan
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Priority support
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Custom campaign templates
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Advanced analytics
              </li>
              <li className="flex items-center text-white">
                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                Dedicated account manager
              </li>
            </ul>
            <button className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mt-16 bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
              🎁 Bonus Included with Smart & Pro Plans
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">LinkedIn Premium</h4>
              <p className="text-slate-400 text-sm">(worth ₹300)</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Profile Mini-Courses</h4>
              <p className="text-slate-400 text-sm">Optimization guides</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Templates Vault</h4>
              <p className="text-slate-400 text-sm">Proven message templates</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Real-Time Dashboard</h4>
              <p className="text-slate-400 text-sm">Track your progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;