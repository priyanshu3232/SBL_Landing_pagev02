import React from 'react';
import { Play, FileText, Zap, Send, Eye, CheckCircle, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Fill a Short Form",
      description: "Tell us about your background and target roles",
      color: "blue"
    },
    {
      icon: Play,
      title: "Watch 1-Hour Mini-Course",
      description: "Learn how to build campaigns that get replies",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Use ICP Builder Agent",
      description: "Auto-finds 800 ideal employers & decision-makers",
      color: "yellow"
    },
    {
      icon: Send,
      title: "Launch Campaign from Template Vault",
      description: "Using our proven message templates",
      color: "green"
    },
    {
      icon: Eye,
      title: "We Send 800 Persuasive Messages",
      description: "Professional outreach on your behalf",
      color: "indigo"
    },
    {
      icon: CheckCircle,
      title: "We Follow Up",
      description: "Strategic follow-ups for maximum response",
      color: "pink"
    },
    {
      icon: CheckCircle,
      title: "You Get Results",
      description: "Replies → Interviews → Offers",
      color: "emerald"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-600 border-blue-500 text-blue-300",
    purple: "bg-purple-600 border-purple-500 text-purple-300",
    yellow: "bg-yellow-600 border-yellow-500 text-yellow-300",
    green: "bg-green-600 border-green-500 text-green-300",
    indigo: "bg-indigo-600 border-indigo-500 text-indigo-300",
    pink: "bg-pink-600 border-pink-500 text-pink-300",
    emerald: "bg-emerald-600 border-emerald-500 text-emerald-300"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">🧪</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How It Works (Flow Visual)
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our AI agent automatically identifies and finds the perfect employers and decision-makers for your target companies.
            </p>
          </div>
          
          {/* Video Embed Section */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Build & Launch in 1 Hour - Full Walkthrough
              </h3>
              <p className="text-gray-300">Complete step-by-step process demonstration</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="relative z-10 text-center">
                  <Play className="w-16 h-16 text-white mb-4 mx-auto" />
                  <p className="text-white font-semibold text-lg">Build & Launch in 1 Hour</p>
                  <p className="text-gray-300">See the complete walkthrough</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 6-Step Visual Flow */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-colors h-full">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[0]} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                  
                  {/* Connector Arrow */}
                  {index < steps.length - 1 && index % 4 !== 3 && (
                    <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-xl text-gray-600">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Detailed Features */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ICP Builder Agent */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-800/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-yellow-300">ICP Builder Agent</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our AI agent automatically identifies and finds the perfect hiring managers and decision-makers for your target companies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Finds 800+ relevant contacts monthly
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Filters by company size, role, industry
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Verifies contact information accuracy
                </li>
              </ul>
            </div>
            
            {/* Templates Vault */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-green-300">Templates Vault</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Access our library of proven message templates that have generated thousands of interview opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Industry-specific message templates
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Follow-up sequence automation
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Personalization at scale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;