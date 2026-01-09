
import React from 'react';
import { Globe, Share2, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-border px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 text-white mb-6">
            <div className="w-6 h-6 text-brand-500">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold">RYZE AI</h2>
          </div>
          <p className="text-surface-muted text-sm leading-relaxed mb-8 max-w-xs">
            The autonomous ad management platform for modern marketers. Scale your reach without scaling your headcount.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Globe size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Share2 size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Features</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Integrations</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Pricing</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Enterprise</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">About</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Blog</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Careers</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Privacy</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Terms</a></li>
            <li><a className="text-slate-500 hover:text-brand-500 text-sm transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-surface-border text-center">
        <p className="text-slate-600 text-xs">© 2024 Ryze AI Technologies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
