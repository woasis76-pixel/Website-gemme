import { useEffect, useState } from 'react';
import { supabase, type Activity } from '../lib/supabase';
import { Clock, Calendar } from 'lucide-react';

export default function Activites() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .order('day_number', { ascending: true });

      if (error) throw error;
      setActivities(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des activités:', error);
    } finally {
      setLoading(false);
    }
  };

  const dayImages = [
    'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8905102/pexels-photo-8905102.jpeg',
    'https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg',
    'https://images.pexels.com/photos/5849992/pexels-photo-5849992.jpeg',
    'https://images.pexels.com/photos/7585825/pexels-photo-7585825.jpeg',
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-600 mx-auto mb-4"></div>
          <p className="text-stone-600">Chargement des activités...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Randonnée spirituelle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Programme des Activités</h1>
            <p className="text-xl text-stone-100">5 jours de découverte spirituelle et de transformation</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Calendar className="text-amber-600" size={24} />
            <span className="text-stone-700 font-semibold">Programme sur 5 journées complètes</span>
          </div>
        </div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3 self-stretch">
                  <img
                    src={dayImages[index] || dayImages[0]}
                    alt={`Jour ${activity.day_number}`}
                    className="w-full h-64 md:h-full md:max-h-[250px] object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-full text-sm font-bold">
                      Jour {activity.day_number}
                    </span>
                    <div className="flex items-center space-x-2 text-stone-600">
                      <Clock size={18} />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif text-stone-800 mb-4">{activity.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-serif text-white mb-4">Ce qui est Inclus</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-amber-400 font-semibold mb-2">Hébergement</p>
              <p className="text-stone-200 text-sm">2 nuits au camping</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-amber-400 font-semibold mb-2">Repas</p>
              <p className="text-stone-200 text-sm">Pension complète bio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-amber-400 font-semibold mb-2">Matériel</p>
              <p className="text-stone-200 text-sm">Kit de cristaux personnalisé</p>
            </div>
          </div>
          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Réserver Maintenant
          </button>
        </div>
      </div>
    </div>
  );
}
