import { Mail, Clock, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800 text-stone-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Mail className="text-amber-400" size={24} />
            <div>
              <p className="text-sm text-stone-400">Email</p>
              <p className="text-base">contact@lithotherapie-spirituelle.fr</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Clock className="text-amber-400" size={24} />
            <div>
              <p className="text-sm text-stone-400">Horaires</p>
              <p className="text-base">Lun - Ven: 9h - 18h</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Phone className="text-amber-400" size={24} />
            <div>
              <p className="text-sm text-stone-400">Téléphone</p>
              <p className="text-base">+33 6 12 34 56 78</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-700 text-center">
          <p className="text-stone-400 text-sm">
            © 2024 Lithothérapie Spirituelle - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
