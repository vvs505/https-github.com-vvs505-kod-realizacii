import React, { useState } from 'react';
import { DATA } from './constants';
import ProgramStep from './components/ProgramStep';
import Modal from './components/Modal';
import { Sparkles, Calendar, MapPin, Clock, Users, ArrowRight, BrainCircuit, Star, Leaf, Quote } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { landing } = DATA;
  
  const TELEGRAM_LINK = "https://t.me/+-D286zpbR0kxZjBi";

  // Retaining openModal for potential future use or other triggers, 
  // but primary CTAs now link directly to Telegram.
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/30 selection:text-brand-dark overflow-x-hidden bg-[#F9F7F5]">
      
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/50 border-b border-white/40">
        <div className="text-xl font-serif tracking-wider font-bold text-brand-dark opacity-80">CODE.</div>
        <a 
          href={TELEGRAM_LINK}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full border border-brand-dark/10 bg-white/40 hover:bg-brand-dark hover:text-white transition-all text-xs tracking-widest uppercase font-medium"
        >
          {landing.details_block.date}
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-[#F8F4EF]">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
           {/* Lighter overlay for faint watercolor effect */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#F8F4EF]/20 via-white/40 to-[#F8F4EF] z-10 mix-blend-overlay"></div>
           <img 
              src="/images/photo-1516.jpeg"
              alt="Background" 
              className="w-full h-full object-cover opacity-100 mix-blend-multiply filter blur-sm"
           />
        </div>

        <div className="max-w-4xl w-full text-center space-y-10 relative z-10 fade-in pt-10">
           <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-brand-dark/60 text-xs tracking-[0.2em] uppercase shadow-sm">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              {landing.hero_block.date} • Ялта
           </div>
           
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] text-brand-dark drop-shadow-sm">
             {landing.hero_block.headline}
           </h1>
           
           <p className="text-2xl md:text-3xl font-light italic text-brand-dark/70 max-w-2xl mx-auto font-serif">
             {landing.hero_block.subheadline}
           </p>

           <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto my-12 opacity-50"></div>

           <p className="text-lg text-brand-dark/60 max-w-xl mx-auto leading-loose">
             {landing.hero_block.description}
           </p>

           <div className="pt-10 pb-20">
             <a 
                href={TELEGRAM_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#D6E5DF] to-[#E8EFEA] text-brand-dark overflow-hidden rounded-full transition-all hover:shadow-xl hover:shadow-[#D6E5DF]/50 hover:-translate-y-0.5 duration-300"
             >
               <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-72 opacity-40"></span>
               <span className="relative flex items-center gap-3 font-medium tracking-[0.15em] uppercase text-xs">
                 {landing.hero_block.cta}
                 <ArrowRight className="w-3 h-3 text-brand-dark/50" />
               </span>
             </a>
             <p className="mt-5 text-[10px] text-brand-dark/40 tracking-widest uppercase">{landing.hero_block.extra}</p>
           </div>
        </div>
      </header>

      {/* Audience Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-5xl md:text-6xl font-serif text-brand-dark/90 leading-tight">
                {landing.audience_block.title}
              </h2>
              <div className="w-16 h-1 bg-brand-gold/30 mt-6 rounded-full"></div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 gap-8">
              {landing.audience_block.bullets.map((item, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-8 bg-white/60 backdrop-blur-sm border border-white/60 rounded-[2rem] hover:bg-white hover:shadow-lg hover:shadow-brand-mint/10 transition-all duration-300">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[#E8EFEA] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CDE5DA] transition-colors">
                    <Leaf className="w-3 h-3 text-brand-dark/50" />
                  </div>
                  <p className="text-lg font-light text-brand-dark/80 leading-relaxed">{item}</p>
                </div>
              ))}
              <div className="p-10 bg-gradient-to-br from-[#E8EFEA]/50 to-white/50 border border-white rounded-[2rem] mt-8 text-center shadow-sm">
                <p className="font-serif italic text-2xl text-brand-dark/90">{landing.audience_block.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-32 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
             <h2 className="text-5xl md:text-7xl font-serif text-brand-dark mb-6">
              {landing.program.title}
            </h2>
            <p className="text-brand-dark/50 uppercase tracking-widest text-xs">Путь трансформации</p>
          </div>
          
          <div className="relative">
             {/* Vertical Line */}
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent hidden md:block"></div>
             
             {landing.program.steps.map((step, index) => (
               <ProgramStep key={index} step={step} index={index} />
             ))}
          </div>
        </div>
      </section>

      {/* Gift / AI Compass Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#CDE5DA]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#E8EFEA]/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-2xl border border-white rounded-[3rem] p-8 md:p-20 shadow-xl shadow-[#CDE5DA]/10 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-[#F5F1EC] to-white border border-white shadow-sm mb-2">
                <BrainCircuit className="w-6 h-6 text-brand-gold/80" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">
                  {landing.gift_block.title}
                </h2>
                <h3 className="text-lg text-brand-gold uppercase tracking-[0.2em] font-medium">
                  {landing.gift_block.subtitle}
                </h3>
              </div>

              <p className="text-brand-dark/70 leading-loose text-lg font-light">
                {landing.gift_block.description}
              </p>
              
              <div className="pt-6">
                 <div className="text-base font-medium text-brand-dark/80 bg-gradient-to-r from-[#E8EFEA] to-transparent border-l-2 border-brand-gold pl-6 py-4 rounded-r-xl">
                    {landing.gift_block.result}
                 </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-[#6B8E7D] text-[#F8F4EF] p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-dark/5 blur-2xl rounded-full"></div>
                
                <h4 className="font-serif text-3xl mb-8 flex items-center gap-3 relative z-10">
                  <Star className="w-5 h-5 text-brand-gold" />
                  Ваши ключи
                </h4>
                <ul className="space-y-5 relative z-10">
                  {landing.gift_block.contents.map((item, i) => {
                    // Split title and description if dash is present
                    const [title, description] = item.includes('—') ? item.split('—') : [item, ''];
                    
                    return (
                      <li key={i} className="flex flex-col gap-1 text-sm font-light opacity-90 border-b border-white/10 pb-4 last:border-0 group">
                        <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                           <div>
                             <span className="font-medium text-white tracking-wide text-base block mb-1">{title.trim()}</span>
                             {description && <span className="opacity-80 text-xs md:text-sm leading-relaxed block">{description.trim()}</span>}
                           </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Host - Moved here as requested */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-white border border-white/80 shadow-xl shadow-[#CDE5DA]/20 rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 min-h-[400px] relative">
             <img 
                src="/images/IMG_9708.jpg"
                alt="Кристина"
                className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
          </div>
          <div className="md:w-7/12 p-12 md:p-16 flex flex-col justify-center bg-[#FDFBF9]">
            <h2 className="text-5xl font-serif text-brand-dark mb-3">{landing.about_block.name}</h2>
            <div className="h-px w-20 bg-brand-gold mb-6"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-8 font-bold">Ведущая интенсива</p>
            <p className="font-light text-brand-dark/80 leading-loose text-lg">
              {landing.about_block.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#E8EFEA]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 text-brand-dark">
            {landing.reviews_block.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {landing.reviews_block.items.map((review, i) => (
                <div key={i} className="bg-white/60 backdrop-blur p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
                   <div className="mb-6">
                      <Quote className="w-8 h-8 text-brand-gold/30 rotate-180" />
                   </div>
                   <p className="text-brand-dark/80 font-light italic leading-relaxed mb-6 flex-grow text-sm md:text-base">
                      "{review.text}"
                   </p>
                   <div className="flex items-center gap-3 pt-4 border-t border-brand-dark/5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CDE5DA] to-[#F5F1EC] flex-shrink-0"></div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">{review.author}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Details & CTA Final */}
      <footer className="bg-brand-dark text-[#F8F4EF] py-32 px-6 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-20 left-20 w-80 h-80 border border-white/20 rounded-full blur-[1px]"></div>
           <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] border border-white/10 rounded-full blur-[2px]"></div>
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-16 leading-tight">
            {landing.cta_final.text}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 text-left">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Calendar className="w-5 h-5 text-brand-gold mb-4" />
              <div className="text-xs opacity-40 uppercase tracking-widest mb-2">Дата</div>
              <div className="text-xl font-serif">{landing.details_block.date}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Clock className="w-5 h-5 text-brand-gold mb-4" />
              <div className="text-xs opacity-40 uppercase tracking-widest mb-2">Время</div>
              <div className="text-xl font-serif">{landing.details_block.time}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <MapPin className="w-5 h-5 text-brand-gold mb-4" />
              <div className="text-xs opacity-40 uppercase tracking-widest mb-2">Место</div>
              <div className="text-xl font-serif leading-tight">{landing.details_block.place.split(',')[0]}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Users className="w-5 h-5 text-brand-gold mb-4" />
              <div className="text-xs opacity-40 uppercase tracking-widest mb-2">Группа</div>
              <div className="text-xl font-serif">{landing.details_block.slots}</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="text-4xl font-serif text-brand-gold">
              {landing.details_block.price}
            </div>
            <a 
              href={TELEGRAM_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-16 py-6 bg-[#F5F1EC] text-brand-dark rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-white transition-all shadow-2xl shadow-brand-gold/20 transform hover:-translate-y-1"
            >
              {landing.cta_final.button}
            </a>
            <p className="text-white/30 text-xs tracking-wide">
              {landing.cta_final.note}
            </p>
          </div>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
