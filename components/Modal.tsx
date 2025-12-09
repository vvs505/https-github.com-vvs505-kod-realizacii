import React from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-brand-base w-full max-w-md rounded-3xl shadow-2xl p-8 border border-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-brand-dark/60" />
        </button>

        <div className="text-center space-y-6">
          <h3 className="text-3xl font-serif italic text-brand-dark">Забронировать место</h3>
          <p className="text-sm text-brand-dark/70">
            Оставьте заявку, и мы свяжемся с вами для подтверждения участия.
          </p>

          <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); alert("Спасибо! Мы свяжемся с вами."); onClose(); }}>
            <div>
              <label className="block text-xs uppercase tracking-wider mb-1 opacity-60">Имя</label>
              <input type="text" className="w-full bg-white border border-brand-mint/50 rounded-lg p-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Ваше имя" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider mb-1 opacity-60">Телефон</label>
              <input type="tel" className="w-full bg-white border border-brand-mint/50 rounded-lg p-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="+7 (999) 000-00-00" required />
            </div>
            
            <button type="submit" className="w-full bg-brand-gold text-white py-4 rounded-xl hover:bg-brand-gold/90 transition-all font-medium tracking-wide shadow-lg shadow-brand-gold/20 mt-4">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;