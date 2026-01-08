import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <Mail className="text-amber-400 mx-auto mb-4" size={48} />
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Contactez-nous</h1>
            <p className="text-xl text-stone-100">Nous sommes là pour répondre à toutes vos questions</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-8">Informations de Contact</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                  <p className="text-stone-600">contact@lithotherapie-spirituelle.fr</p>
                  <p className="text-stone-500 text-sm mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Téléphone</h3>
                  <p className="text-stone-600">+33 6 12 34 56 78</p>
                  <p className="text-stone-500 text-sm mt-1">Lun - Ven: 9h - 18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Adresse</h3>
                  <p className="text-stone-600">Village de Saint-Pierre-des-Cristaux</p>
                  <p className="text-stone-600">09000 Ariège, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Horaires d'ouverture</h3>
                  <p className="text-stone-600">Lundi - Vendredi: 9h00 - 18h00</p>
                  <p className="text-stone-600">Samedi: 10h00 - 16h00</p>
                  <p className="text-stone-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-8">
              <h3 className="text-xl font-serif text-stone-800 mb-4">Questions Fréquentes</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-stone-800">Quel est le niveau requis ?</p>
                  <p className="text-stone-600">Une condition physique moyenne est suffisante. Les randonnées sont adaptables.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-800">Que dois-je apporter ?</p>
                  <p className="text-stone-600">Une liste complète vous sera envoyée après votre réservation.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-800">Puis-je annuler ma réservation ?</p>
                  <p className="text-stone-600">Annulation gratuite jusqu'à 30 jours avant le départ.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl sticky top-24">
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Envoyez-nous un Message</h2>

              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-semibold text-stone-800 mb-2">Message envoyé !</h3>
                  <p className="text-stone-600">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="jean.dupont@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
