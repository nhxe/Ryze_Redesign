import React from 'react';
import { 
  Shield, 
  Zap, 
  Wallet, 
  TrendingUp, 
  BellRing, 
  MousePointer2,
  CheckCircle2,
  XCircle,
  Wand2,
  Globe,
  Sparkles,
  Languages,
  Users
} from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden pt-20 bg-[#0a1114]">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 py-16 md:py-24 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-teal rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Now with ChatGPT-4o Integration
          </div>
          
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.04em] mb-8">
            Powerful Features for <br />
            <span className="gradient-text">Performance Marketers</span>
          </h1>
          
          <p className="text-surface-muted text-lg md:text-xl font-normal leading-relaxed mb-12 max-w-2xl mx-auto opacity-80">
            The autonomous copilot that scales your Google and Meta ads while you sleep. Built for growth, powered by intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-brand-500 text-white text-base font-bold shadow-xl shadow-brand-500/30 hover:brightness-110 transition-all">
              Start Free Trial
            </button>
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#283439] text-white text-base font-bold hover:bg-[#34444a] transition-all">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Hero Dashboard Image */}
        <div className="max-w-6xl mx-auto mt-24 relative px-4">
          <div className="relative bg-[#1b2327] rounded-2xl border border-surface-border overflow-hidden shadow-2xl">
            <img 
              className="w-full h-auto opacity-90" 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
              alt="Dashboard Preview" 
            />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 md:px-20 py-24 bg-[#0a1114]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4 tracking-tight">The Future of Ad Management</h2>
            <p className="text-surface-muted text-lg opacity-80">Stop wrestling with spreadsheets and scripts. Ryze AI automates the heavy lifting across every major platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={24} />, title: "24/7 Account Audits", desc: "Continuous monitoring for anomalies and missed opportunities across all accounts. Never miss a billing error or a sudden drop in tracking again." },
              { icon: <Wand2 size={24} />, title: "AI Creative Generation", desc: "Automated ad copy and visual suggestions optimized for high conversion. We analyze what's winning and suggest variations that scale." },
              { icon: <Wallet size={24} />, title: "Smart Budget Reallocation", desc: "Automatically shift spend to high-performing campaigns in real-time. Protect your margins by pulling back on underperformers instantly." },
              { icon: <TrendingUp size={24} />, title: "Cross-Channel Insights", desc: "Unified data analysis for Google, Meta, and TikTok. Understand the true path to conversion without the platform silos." },
              { icon: <BellRing size={24} />, title: "Anomaly Detection", desc: "Instant smart alerts when performance deviates from your established baseline. Get ahead of fatigue before it kills your ROAS." },
              { icon: <MousePointer2 size={24} />, title: "Automated Bidding", desc: "Advanced machine learning algorithms to hit your target CPA or ROAS. We adjust bids thousands of times a day based on buyer intent." }
            ].map((f, i) => (
              <div key={i} className="bg-[#1b2327]/40 border border-[#283439] rounded-2xl p-8 hover:border-brand-500/30 transition-all cursor-default">
                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-500 mb-6">
                  {f.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-surface-muted text-sm leading-relaxed opacity-70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual vs Ryze Comparison */}
      <section className="px-6 md:px-20 py-24 bg-[#0a1114]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight">Manual vs. Ryze AI</h2>
            <p className="text-surface-muted text-lg opacity-80">See the impact of transitioning from manual labor to autonomous intelligence.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Manual Way */}
            <div className="bg-[#1b2327]/30 border border-white/5 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <span className="bg-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/5">Old Way</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 mb-10">
                <Users size={20} />
                <span className="font-bold">Manual Management</span>
              </div>
              <div className="space-y-8">
                <div className="p-8 bg-[#0a1114]/50 border border-white/5 rounded-2xl">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Average ROAS</span>
                    <span className="text-white text-3xl font-black">2.4x</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-slate-600 h-full w-[45%]"></div>
                  </div>
                </div>
                <div className="p-8 bg-[#0a1114]/50 border border-white/5 rounded-2xl">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Weekly Labor Hours</span>
                    <span className="text-white text-3xl font-black">18.5 hrs</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-orange h-full w-[85%]"></div>
                  </div>
                </div>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-slate-500 text-sm">
                    <XCircle size={18} className="text-accent-orange" /> Reactionary optimizations
                  </li>
                  <li className="flex items-center gap-3 text-slate-500 text-sm">
                    <XCircle size={18} className="text-accent-orange" /> Limited platform data silos
                  </li>
                  <li className="flex items-center gap-3 text-slate-500 text-sm">
                    <XCircle size={18} className="text-accent-orange" /> Human error and fatigue
                  </li>
                </ul>
              </div>
            </div>

            {/* Ryze Way */}
            <div className="bg-brand-500/5 border border-brand-500/30 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <span className="bg-brand-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">The Ryze Way</span>
              </div>
              <div className="flex items-center gap-3 text-brand-500 mb-10">
                <Zap size={20} className="fill-brand-500" />
                <span className="font-bold">Ryze AI Autonomous</span>
              </div>
              <div className="space-y-8">
                <div className="p-8 bg-[#1b2327] border border-brand-500/20 rounded-2xl">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-slate-300 text-sm font-bold uppercase tracking-widest">Average ROAS</span>
                    <span className="text-white text-3xl font-black">5.8x</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-500 h-full w-[92%] shadow-[0_0_15px_rgba(13,162,231,0.5)]"></div>
                  </div>
                </div>
                <div className="p-8 bg-[#1b2327] border border-brand-500/20 rounded-2xl">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-slate-300 text-sm font-bold uppercase tracking-widest">Weekly Labor Hours</span>
                    <span className="text-white text-3xl font-black">1.2 hrs</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent-teal h-full w-[15%]"></div>
                  </div>
                </div>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-accent-teal" /> Proactive predictive bidding
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-accent-teal" /> Unified cross-channel attribution
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-accent-teal" /> Continuous 24/7 account monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Studio */}
      <section className="px-6 md:px-20 py-32 bg-[#0a1114]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="text-accent-teal font-black tracking-[0.3em] text-[10px] uppercase">Intelligent Content</div>
            <h3 className="text-white text-4xl md:text-5xl font-black">AI Creative Studio</h3>
            <p className="text-surface-muted text-xl leading-relaxed opacity-80">
              Stop spending thousands on creative testing that leads nowhere. Our AI analyzes your historical data and visual trends to generate ad copy and design variants that are mathematically more likely to convert.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Sparkles size={20} className="text-accent-teal shrink-0 mt-1" />
                <div>
                  <div className="text-white font-bold">One-Click Variations</div>
                  <div className="text-surface-muted text-sm opacity-70">Turn one winning ad into 50 unique variants optimized for different personas.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Languages size={20} className="text-accent-teal shrink-0 mt-1" />
                <div>
                  <div className="text-white font-bold">Multilingual Scaling</div>
                  <div className="text-surface-muted text-sm opacity-70">Scale globally with native-quality ad copy in over 30 languages.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <div className="aspect-square bg-[#fce6dc] rounded-[3rem] w-full max-w-[500px] flex items-center justify-center p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-white/10 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-auto rounded-3xl shadow-xl relative z-10 border border-white/20" 
                alt="AI Design Tool"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Budget Engine */}
      <section className="px-6 md:px-20 py-32 bg-[#0a1114]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="text-brand-500 font-black tracking-[0.3em] text-[10px] uppercase">Data Mastery</div>
            <h3 className="text-white text-4xl md:text-5xl font-black">Smart Budget Engine</h3>
            <p className="text-surface-muted text-xl leading-relaxed opacity-80">
              Our engine doesn't just manage spend; it optimizes for profit. By analyzing real-time conversion signals across your entire stack, Ryze shifts budget to where the next dollar is most valuable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#1b2327] border border-brand-500/20 rounded-2xl text-center">
                <div className="text-brand-500 font-black text-3xl mb-1">+42%</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Avg. Efficiency</div>
              </div>
              <div className="p-6 bg-[#1b2327] border border-brand-500/20 rounded-2xl text-center">
                <div className="text-brand-500 font-black text-3xl mb-1">-30%</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Waste Cut</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full bg-[#0a1114] border border-[#283439] rounded-[3rem] aspect-video flex items-center justify-center p-1 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover rounded-[2.9rem] opacity-40 group-hover:opacity-60 transition-opacity" 
              alt="Data Dashboard" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-brand-500/20 animate-pulse flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-brand-500/40 animate-ping flex items-center justify-center">
                  <span className="text-brand-500 font-black uppercase text-xs">Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-32 bg-[#0a1114]">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-500 via-surface-dark to-accent-teal p-[1px]">
          <div className="bg-[#0a1114] rounded-[2.9rem] px-8 py-24 text-center">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to scale smarter?</h2>
            <p className="text-surface-muted text-lg md:text-xl mb-12 max-w-xl mx-auto opacity-80">
              Join 500+ high-growth brands using Ryze AI to automate their performance marketing.
            </p>
            <button className="bg-brand-500 text-white text-xl font-black h-16 px-10 rounded-2xl shadow-2xl hover:brightness-110 transition-all">
              Start Your 14-Day Free Trial
            </button>
            <p className="mt-8 text-slate-600 text-xs font-bold uppercase tracking-widest">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;