import React from 'react';
import { ArrowRight, Play, Star, Users, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-accent-teal/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} className="animate-pulse" /> The World's First Autonomous Ad Copilot
            </div>
            
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter mb-8">
              Scale Your Ads <br />
              <span className="gradient-text">On Autopilot.</span>
            </h1>
            
            <p className="text-surface-muted text-lg md:text-xl font-normal leading-relaxed mb-12 max-w-2xl lg:mx-0 mx-auto">
              Ryze AI manages your Google, Meta, and TikTok ads 24/7. 
              Increase your ROAS by up to 45% while spending 90% less time in ad managers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/pricing" className="bg-brand-500 text-white font-bold px-10 py-5 rounded-2xl text-lg hover:scale-105 hover:rotate-1 transition-all shadow-2xl shadow-brand-500/40 flex items-center justify-center gap-2">
                Start Scaling Free <ArrowRight size={20} />
              </Link>
              <button className="bg-white/5 backdrop-blur-sm text-white font-bold px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" /> Watch Demo
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="flex items-center gap-2 text-white hover:opacity-100 transition-opacity">
                <Star className="text-accent-orange fill-accent-orange" size={16} />
                <span className="text-sm font-bold">4.9/5 G2 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white hover:opacity-100 transition-opacity">
                <Users className="text-brand-400" size={16} />
                <span className="text-sm font-bold">500+ Active Brands</span>
              </div>
              <div className="flex items-center gap-2 text-white hover:opacity-100 transition-opacity">
                <ShieldCheck className="text-accent-teal" size={16} />
                <span className="text-sm font-bold">SOC2 Type II Certified</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:w-auto animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative z-10 animate-float">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-teal rounded-[2.5rem] blur opacity-30"></div>
              <div className="relative bg-surface-card rounded-[2.5rem] border border-surface-border overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/ryzehome/1000/1000" 
                  alt="Ryze AI Interface" 
                  className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-surface-dark border border-surface-border p-6 rounded-3xl shadow-2xl animate-float [animation-delay:1.5s] hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-teal/20 rounded-2xl text-accent-teal">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-xs text-surface-muted font-bold uppercase tracking-wider">Total ROAS</div>
                  <div className="text-2xl font-black text-white">8.42x</div>
                </div>
              </div>
              <div className="h-12 w-32 bg-accent-teal/10 rounded-lg flex items-end gap-1 p-2">
                <div className="w-full bg-accent-teal h-[40%] rounded-sm animate-pulse [animation-delay:0.1s]"></div>
                <div className="w-full bg-accent-teal h-[60%] rounded-sm animate-pulse [animation-delay:0.2s]"></div>
                <div className="w-full bg-accent-teal h-[50%] rounded-sm animate-pulse [animation-delay:0.3s]"></div>
                <div className="w-full bg-accent-teal h-[80%] rounded-sm animate-pulse [animation-delay:0.4s]"></div>
                <div className="w-full bg-accent-teal h-[100%] rounded-sm animate-pulse [animation-delay:0.5s]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar - Infinite Scroll */}
      <section className="px-6 md:px-20 py-12 border-y border-surface-border bg-surface-dark/50 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-dark to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-dark to-transparent z-10"></div>
        
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee py-4">
          <div className="flex items-center gap-20 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
             <div className="text-white text-2xl font-black italic">VELOCITY</div>
             <div className="text-white text-2xl font-black">LUMINA</div>
             <div className="text-white text-2xl font-black tracking-tighter">NEXUS.</div>
             <div className="text-white text-2xl font-bold">AETHER</div>
             <div className="text-white text-2xl font-black italic">VELOCITY</div>
             <div className="text-white text-2xl font-black">LUMINA</div>
             <div className="text-white text-2xl font-black tracking-tighter">NEXUS.</div>
             <div className="text-white text-2xl font-bold">AETHER</div>
          </div>
          {/* Duplicate for infinite effect */}
          <div className="flex items-center gap-20 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
             <div className="text-white text-2xl font-black italic">VELOCITY</div>
             <div className="text-white text-2xl font-black">LUMINA</div>
             <div className="text-white text-2xl font-black tracking-tighter">NEXUS.</div>
             <div className="text-white text-2xl font-bold">AETHER</div>
             <div className="text-white text-2xl font-black italic">VELOCITY</div>
             <div className="text-white text-2xl font-black">LUMINA</div>
             <div className="text-white text-2xl font-black tracking-tighter">NEXUS.</div>
             <div className="text-white text-2xl font-bold">AETHER</div>
          </div>
        </div>
      </section>

      {/* Quick Value Prop */}
      <section className="px-6 md:px-20 py-32 bg-[#070b0d]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 group cursor-default">
            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 transition-all duration-500 group-hover:bg-brand-500/20 group-hover:rotate-12 group-hover:scale-110">
              <Globe size={28} />
            </div>
            <h4 className="text-2xl font-bold text-white leading-tight group-hover:text-brand-300 transition-colors">Unified Management</h4>
            <p className="text-surface-muted leading-relaxed group-hover:text-slate-300 transition-colors">
              One dashboard for all your paid media. No more jumping between Meta, Google, and TikTok. 
              Ryze creates a single source of truth for your entire marketing stack.
            </p>
          </div>
          <div className="space-y-6 group cursor-default">
            <div className="w-14 h-14 bg-accent-teal/10 rounded-2xl flex items-center justify-center text-accent-teal transition-all duration-500 group-hover:bg-accent-teal/20 group-hover:-rotate-12 group-hover:scale-110">
              <Zap size={28} />
            </div>
            <h4 className="text-2xl font-bold text-white leading-tight group-hover:text-accent-teal transition-colors">Instant Optimizations</h4>
            <p className="text-surface-muted leading-relaxed group-hover:text-slate-300 transition-colors">
              Our AI detects performance shifts in seconds, not hours. It automatically adjusts bids 
              and budgets to maximize efficiency before you even open your laptop.
            </p>
          </div>
          <div className="space-y-6 group cursor-default">
            <div className="w-14 h-14 bg-accent-orange/10 rounded-2xl flex items-center justify-center text-accent-orange transition-all duration-500 group-hover:bg-accent-orange/20 group-hover:rotate-12 group-hover:scale-110">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-2xl font-bold text-white leading-tight group-hover:text-accent-orange transition-colors">Profit-First Logic</h4>
            <p className="text-surface-muted leading-relaxed group-hover:text-slate-300 transition-colors">
              We optimize for contribution margin, not just clicks. Ryze understands your unit 
              economics and spends where you actually make money.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-20 py-32 bg-surface-dark overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10rem] font-black opacity-5 select-none leading-none -translate-y-20">"</div>
          <p className="text-2xl md:text-4xl text-white font-medium italic leading-relaxed mb-12 relative z-10 transition-transform hover:scale-105 duration-700">
            "Before Ryze, we spent 20 hours a week just tweaking bids. Now, we spend 15 minutes a week reviewing strategy. Our ROAS increased from 2.8 to 4.5 in just 60 days."
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-500 p-0.5 hover:scale-110 transition-transform cursor-pointer">
              <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Jenkins" />
            </div>
            <div>
              <div className="text-white font-bold">Sarah Jenkins</div>
              <div className="text-brand-500 text-sm font-bold uppercase tracking-widest">Head of Growth, Velocity Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-32">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-brand-500 to-brand-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 group-hover:scale-150"></div>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8 relative z-10 group-hover:tracking-tighter transition-all duration-700">Stop guessing. <br />Start scaling.</h2>
          <p className="text-brand-100 text-lg md:text-xl mb-12 max-w-xl mx-auto relative z-10">
            Join the elite 5% of brands using autonomous AI to dominate their categories. 
            Risk-free trial, no setup fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/pricing" className="bg-white text-brand-900 text-black font-bold px-12 py-5 rounded-2xl text-xl hover:scale-110 transition-all shadow-2xl">
              Get Started Now
            </Link>
            <button className="bg-transparent text-white border border-white/30 font-bold px-12 py-5 rounded-2xl text-xl hover:bg-white/10 transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add a quick animation helper if needed, but Tailwind classes handle most
const TrendingUp = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export default HomePage;