import React, { useState, useEffect } from 'react';
import { Clock, Users, AlertTriangle } from 'lucide-react';

const Scarcity = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-red-900/20 via-slate-900 to-orange-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="text-6xl mb-8">⚠️</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Scarcity & Urgency
          </h2>
          
          {/* Main Scarcity Message */}
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-800/50 rounded-2xl p-12 mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-red-400" />
              <h3 className="text-3xl font-bold text-red-300">Only 50 Students Accepted Per Month</h3>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              This isn't mass-blast spam. It's curated. Your campaign needs our <span className="text-red-400 font-semibold">full attention.</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <AlertTriangle className="w-8 h-8 text-yellow-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Quality Over Quantity</h4>
                <p className="text-gray-400 text-sm">Each campaign is personally reviewed and optimized</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <Users className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Dedicated Support</h4>
                <p className="text-gray-400 text-sm">Personal attention for every student's success</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <Clock className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                <p className="text-gray-400 text-sm">Limited intake ensures consistent success rates</p>
              </div>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Next Batch Closes In:</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-6 max-w-lg mx-auto">
              <div className="bg-red-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-red-200 text-sm font-medium">DAYS</div>
              </div>
              
              <div className="bg-orange-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-orange-200 text-sm font-medium">HOURS</div>
              </div>
              
              <div className="bg-yellow-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-yellow-200 text-sm font-medium">MINUTES</div>
              </div>
              
              <div className="bg-red-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-red-200 text-sm font-medium">SECONDS</div>
              </div>
            </div>
          </div>
          
          {/* Queue Visualization */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Students Waiting in Queue</h3>
            
            <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
              {/* Filled Spots */}
              {[...Array(49)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
              ))}
              
              {/* Your Spot - Only one glowing seat */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse border-2 border-white shadow-lg shadow-blue-500/50">
                YOU
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <span className="text-gray-300">49 spots taken</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-300">1 glowing seat - your chance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scarcity;