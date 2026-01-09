
import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for individuals and small brands testing the waters.",
      monthlyPrice: 99,
      annualPrice: 79,
      buttonText: "Start Free Trial",
      featured: false,
      features: [
        "Up to $10k Monthly Ad Spend",
        "Google & Meta Ads Integration",
        "Basic AI Campaign Optimization",
        "Daily Performance Reports"
      ]
    },
    {
      name: "Pro",
      desc: "Advanced automation for scaling teams and agencies.",
      monthlyPrice: 249,
      annualPrice: 199,
      buttonText: "Get Started",
      featured: true,
      features: [
        "Up to $100k Monthly Ad Spend",
        "Google, Meta & ChatGPT Ads",
        "Real-time AI Optimization",
        "Advanced Creative Analytics",
        "Priority 24/7 Support"
      ]
    },
    {
      name: "Enterprise",
      desc: "Bespoke solutions for high-volume enterprise operations.",
      priceText: "Custom",
      buttonText: "Contact Sales",
      featured: false,
      features: [
        "Unlimited Monthly Ad Spend",
        "Full API & Webhook Access",
        "Dedicated Success Manager",
        "Custom Model Training",
        "SLA & Security Audit"
      ]
    }
  ];

  const faqs = [
    {
      q: "How long does it take to set up?",
      a: "Integration takes less than 5 minutes. Simply connect your Google or Meta ad accounts, and our AI will begin analyzing your data immediately to provide optimization recommendations."
    },
    {
      q: "Can I change plans at any time?",
      a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available instantly. If you downgrade, the changes will take effect at the start of your next billing cycle."
    },
    {
      q: "Is my data secure?",
      a: "We use enterprise-grade encryption and comply with all SOC2 and GDPR regulations. Your ad data is used exclusively to train your private optimization models and is never shared with third parties."
    }
  ];

  return (
    <div className="bg-surface-dark pb-32">
      {/* Header */}
      <section className="px-6 md:px-20 pt-20 pb-12 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 text-white">
          Simple, Transparent Pricing for Every Team
        </h1>
        <p className="text-xl text-surface-muted max-w-2xl mx-auto mb-16">
          Scale your paid ads with autonomous AI. No hidden fees, no complex contracts. Choose the plan that fits your growth.
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-surface-muted'}`}>Monthly billing</span>
          <button 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-16 h-8 bg-surface-card border border-surface-border rounded-full p-1 relative transition-colors"
          >
            <div className={`w-6 h-6 bg-brand-500 rounded-full transition-all duration-300 ${billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'}`}></div>
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold ${billingCycle === 'annual' ? 'text-white' : 'text-surface-muted'}`}>Annual billing</span>
            <span className="bg-brand-500/10 text-brand-500 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Save 20%</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`flex flex-col p-10 rounded-[2rem] border transition-all duration-300 ${
                p.featured 
                ? 'bg-surface-card border-brand-500 shadow-2xl shadow-brand-500/10 scale-105 z-10' 
                : 'bg-surface-card border-surface-border hover:border-brand-500/50'
              }`}
            >
              {p.featured && (
                <div className="self-center bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 -mt-14 shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">{p.name}</h3>
                <p className="text-surface-muted text-sm leading-relaxed">{p.desc}</p>
                
                <div className="mt-8">
                  {p.priceText ? (
                    <div className="text-4xl font-black text-white">{p.priceText}</div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">
                        ${billingCycle === 'monthly' ? p.monthlyPrice : p.annualPrice}
                      </span>
                      <span className="text-surface-muted font-bold">/mo</span>
                    </div>
                  )}
                </div>
              </div>

              <button className={`w-full py-4 rounded-xl font-black text-sm transition-all mb-8 ${
                p.featured 
                ? 'bg-brand-500 text-white shadow-xl shadow-brand-500/20 hover:scale-[1.02]' 
                : 'bg-surface-border text-white hover:bg-surface-border/80'
              }`}>
                {p.buttonText}
              </button>

              <hr className="border-white/5 mb-8" />

              <ul className="space-y-4 flex-grow">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-white">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 mt-48 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-surface-border bg-surface-card rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-bold">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-surface-muted" />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-surface-muted text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
