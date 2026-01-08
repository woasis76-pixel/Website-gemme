import { useEffect, useState } from 'react';
import { supabase, type AvailableDate } from '../lib/supabase';
import { Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react';

export default function Reservations() {
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<AvailableDate | null>(null);
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    number_of_people: 1,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadAvailableDates();
  }, []);

  const loadAvailableDates = async () => {
    try {
      const { data, error } = await supabase
        .from('available_dates')
        .select('*')
        .eq('is_available', true)
        .order('start_date', { ascending: true });

      if (error) throw error;
      setAvailableDates(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des dates:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;

    setSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('reservations').insert({
        start_date: selectedDate.start_date,
        end_date: selectedDate.end_date,
        customer_name: formData.customer_name,
        customer_email: formData.customer_email,
        customer_phone: formData.customer_phone,
        number_of_people: formData.number_of_people,
        status: 'pending',
      });

      if (insertError) throw insertError;

      setSuccess(true);
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        number_of_people: 1,
      });
      setSelectedDate(null);
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      setError('Une erreur est survenue lors de la réservation. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-600 mx-auto mb-4"></div>
          <p className="text-stone-600">Chargement des disponibilités...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Réservation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <Calendar className="text-amber-400 mx-auto mb-4" size={48} />
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Réservations</h1>
            <p className="text-xl text-stone-100">Choisissez votre séjour spirituel de 5 jours</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {success && (
          <div className="mb-8 bg-green-50 border-2 border-green-500 rounded-xl p-6 flex items-start space-x-4">
            <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Réservation confirmée !</h3>
              <p className="text-green-700">
                Merci pour votre réservation. Vous recevrez un email de confirmation sous peu avec tous les détails de votre séjour.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-8 bg-red-50 border-2 border-red-500 rounded-xl p-6 flex items-start space-x-4">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Erreur</h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">Dates Disponibles</h2>
            <div className="space-y-4">
              {availableDates.map((date) => {
                const spotsLeft = date.max_capacity - date.current_bookings;
                return (
                  <div
                    key={date.id}
                    onClick={() => setSelectedDate(date)}
                    className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedDate?.id === date.id
                        ? 'border-2 border-amber-600 shadow-xl scale-[1.02]'
                        : 'border-2 border-transparent hover:border-amber-300 shadow-md hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-stone-500 mb-1">Du</p>
                        <p className="text-lg font-semibold text-stone-800">{formatDate(date.start_date)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-stone-500 mb-1">Au</p>
                        <p className="text-lg font-semibold text-stone-800">{formatDate(date.end_date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <div className="flex items-center space-x-2 text-stone-600">
                        <Users size={18} />
                        <span className="text-sm">{spotsLeft} places restantes</span>
                      </div>
                      {selectedDate?.id === date.id && (
                        <CheckCircle className="text-amber-600" size={24} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-8 shadow-xl sticky top-24">
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Formulaire de Réservation</h2>

              {!selectedDate ? (
                <div className="text-center py-12">
                  <Calendar className="text-stone-300 mx-auto mb-4" size={64} />
                  <p className="text-stone-500">Sélectionnez d'abord une date disponible</p>
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
                      value={formData.customer_name}
                      onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
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
                      value={formData.customer_email}
                      onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="jean.dupont@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.customer_phone}
                      onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Nombre de personnes *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      max={selectedDate.max_capacity - selectedDate.current_bookings}
                      value={formData.number_of_people}
                      onChange={(e) => setFormData({ ...formData, number_of_people: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-sm text-stone-700">
                      <span className="font-semibold">Période sélectionnée :</span><br />
                      Du {formatDate(selectedDate.start_date)} au {formatDate(selectedDate.end_date)}
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitting ? 'Réservation en cours...' : 'Confirmer la réservation'}
                  </button>

                  <p className="text-xs text-stone-500 text-center">
                    En confirmant, vous acceptez nos conditions générales de vente
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
