import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Logo = ({ className = "h-12" }: { className?: string }) => {
    const [error, setError] = useState(false);
    const logoUrl = "https://lh3.googleusercontent.com/d/1JNvtvIEiStnjGsI9Xz7kHWvS-8TXhu9J";

    if (error) {
        return (
            <div className={`flex items-center gap-2 ${className}`}>
                <span className="material-symbols-outlined text-[#F0B100] text-4xl">speed</span>
                <span className="text-3xl font-motorsport font-bold tracking-tighter italic text-white">ZIAMAP<span className="text-[#F0B100] font-black">BETA</span></span>
            </div>
        );
    }

    return (
        <img 
            src={logoUrl} 
            alt="Ziamap Logo" 
            className={className}
            onError={() => setError(true)}
            style={{ filter: 'drop-shadow(0px 0px 8px rgba(240, 177, 0, 0.5))', objectFit: 'contain' }}
        />
    );
};

const Hero = () => (
    <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/d/1eED1CoQdazoorHxnk8z3PShFQEcXL-J5")' }}></div>
            <div className="absolute inset-0 z-20 opacity-20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="relative z-30 container mx-auto px-6 flex flex-col items-center">
            <div className="mb-8 flex flex-col items-center gap-2">
                <div className="bg-[#F0B100] px-3 py-1 skew-element">
                    <span className="font-motorsport font-bold text-black text-xs skew-text tracking-widest italic block">DESIGNED FOR THE FIELD. ENGINEERED FOR SIMPLICITY.</span>
                </div>
                <div className="flex items-center gap-2 mt-6">
                    <Logo className="h-16 md:h-24" />
                </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-motorsport font-bold text-center max-w-5xl leading-[0.9] italic mb-6">
                Field Documentation That <span className="text-[#F0B100]">Actually Works</span> in the Field.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl text-center mb-10 leading-relaxed uppercase tracking-widest">
                Stop wasting hours organizing photos and notes. Ziamap's 'Evidence Feed' automatically timestamps, GPS-tags, and organizes everything for you. Get beta access and see for yourself.
            </p>
            <div className="w-full max-w-sm flex justify-center">
                <button className="w-full bg-[#F0B100] hover:bg-white text-black font-motorsport font-bold italic py-6 px-12 transition-all flex items-center justify-center gap-4 group shadow-[0_0_30px_rgba(240,177,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                    <span className="text-2xl">REQUEST BETA ACCESS</span>
                    <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-[#F0B100]"></div>
                    <span className="text-[10px] font-motorsport text-[#F0B100] tracking-[0.2em]">25 SLOTS AVAILABLE</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-white/20"></div>
                    <span className="text-[10px] font-motorsport text-white/40 tracking-[0.2em]">LIMITED BETA</span>
                </div>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] font-motorsport tracking-[0.3em]">SCROLL TO SPECS</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#F0B100] to-transparent"></div>
        </div>
    </header>
);

const FrictionSection = () => (
    <section className="py-24 bg-[#0b0b0b] border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-col gap-16">
                <div className="max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-motorsport font-bold italic mb-8 leading-[1.0]">
                        How Many Hours Do You <span className="text-[#F0B100] italic">Waste Organizing Field Data?</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light max-w-4xl leading-relaxed">
                        Think about your last big project. At the end of a long day in the field, you get back to the office and have to spend another two hours: Downloading photos from your phone... Trying to match them to your handwritten field notes... Organizing everything into folders... Praying you didn't forget to document a critical control point or boundary marker. This process is slow, inefficient, and prone to error.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {[
                        { icon: 'schedule', title: '10+ Hours Per Week', desc: "The average surveying firm spends over 10 hours weekly organizing field photos and notes after the job is done." },
                        { icon: 'photo_camera', title: '1 in 4 Projects', desc: "One in four surveying projects experiences documentation issues—lost photos, mismatched notes, or missing GPS data." },
                        { icon: 'payments', title: '$3,200 Average Cost', desc: "The average cost of a single documentation error—from client disputes to rework—is $3,200 per incident." }
                    ].map((item, idx) => (
                        <div key={idx} className={`glass-panel p-10 hover:bg-white/5 transition-colors group ${idx === 0 ? 'border-l-4 border-l-[#F0B100]' : ''}`}>
                            <span className="material-symbols-outlined text-[#F0B100] mb-6 !text-4xl">{item.icon}</span>
                            <h3 className="text-2xl font-motorsport font-bold italic mb-4">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed uppercase font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Steps = () => {
    const feedItems = [
        { num: '01', title: 'ENGAGE', desc: "Open Your Project: Select the project you're working on.", img: 'https://lh3.googleusercontent.com/d/1WjdQTFTdg1O_AcFIHeGMiZTMRWTW6z13' },
        { num: '02', title: 'CAPTURE', desc: 'Document Your Work: Use the Ziamap app to take photos and add notes.', img: 'https://lh3.googleusercontent.com/d/19Zfnt7fC-x_N_Rr5d60bYlUNApcgDZXd' },
        { num: '03', title: 'SYNC', desc: "It's Done: Everything is instantly organized in your Evidence Feed and synced with the ZIAMAP desktop app", img: 'https://lh3.googleusercontent.com/d/1xBb2g3Wkn6Qjp9aLV-Sb3VEfz_ETzGlS' }
    ];
    return (
        <section className="py-32 bg-[#1f1f1f]">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-motorsport font-bold italic mb-4">ZiaMap's 'Evidence Feed' simple as 1 - 2 - 3</h2>
                    <div className="w-24 h-1 bg-[#F0B100] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {feedItems.map((item, idx) => (
                        <div key={idx} className="group">
                            <div className="relative mb-8 overflow-hidden aspect-[4/5] bg-black">
                                <div className="absolute top-4 left-4 z-20 font-motorsport font-bold text-5xl italic text-[#F0B100]/50 group-hover:text-[#F0B100] transition-colors">{item.num}</div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" style={{ backgroundImage: `url("${item.img}")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-6 font-motorsport text-2xl font-bold italic">{item.title}</div>
                            </div>
                            <p className="text-slate-400 text-sm uppercase font-bold tracking-widest leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Pricing = () => (
    <section className="py-32 bg-[#0b0b0b] border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                    <div className="inline-block px-4 py-1 border border-[#F0B100] text-[#F0B100] font-motorsport text-xs italic tracking-widest uppercase">LIMITED BETA</div>
                    <h2 className="text-5xl md:text-7xl font-motorsport font-bold italic leading-none uppercase">JOIN THE<br /><span className="text-[#F0B100] italic">ZIAMAP BETA PROGRAM.</span></h2>
                    <p className="text-xl text-slate-400 max-w-lg font-light leading-relaxed">We are keeping the beta group small to ensure we can gather high-quality feedback.</p>
                    <ul className="space-y-4">
                        {["LOCKED IN FOR 2 YEARS", "UNLIMITED PROJECTS", "6 TEST SEATS", "DIRECT ACCESS TO OUR TEAM"].map((text, i) => (
                            <li key={i} className="flex items-center gap-4 group">
                                <div className="w-6 h-6 border border-[#F0B100] flex items-center justify-center group-hover:bg-[#F0B100] transition-colors">
                                    <span className="material-symbols-outlined text-xs text-[#F0B100] group-hover:text-black font-bold">check</span>
                                </div>
                                <span className="font-motorsport text-sm tracking-wider uppercase font-bold">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 w-full">
                    <div className="bg-[#F0B100] p-12 skew-element">
                        <div className="skew-text text-black">
                            <div className="mb-8 ml-6">
                                <span className="font-motorsport font-bold text-lg tracking-[0.3em] uppercase">BETA FEE</span>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <span className="text-8xl font-motorsport font-black italic">$0</span>
                                    <span className="text-2xl font-motorsport font-bold italic opacity-60">/during Beta*</span>
                                </div>
                                <p className="mt-4 text-[11px] font-bold uppercase tracking-wider leading-tight max-w-[280px]">
                                    *Special beta deal - $199/m & $20/seat for 2 years if paid annually on launch.
                                </p>
                            </div>
                            <button className="w-full py-5 bg-black text-white font-motorsport font-bold italic text-2xl hover:bg-white hover:text-black transition-colors uppercase">
                                REQUEST BETA ACCESS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 text-center">
            <Logo className="h-10 md:h-12 mx-auto mb-8" />
            <p className="text-[10px] font-motorsport tracking-[0.2em] text-slate-600 italic">DESIGNED FOR THE FIELD. ENGINEERED FOR SIMPLICITY.</p>
            <p className="text-[10px] font-motorsport tracking-[0.2em] text-slate-400 italic mt-2">© 2026 ZIAMAP INC. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
);

const App = () => (
    <div className="bg-[#0b0b0b]">
        <Hero />
        <FrictionSection />
        <Steps />
        <Pricing />
        <Footer />
    </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}