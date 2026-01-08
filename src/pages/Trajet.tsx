import { MapPin, Mountain, Compass, Info } from 'lucide-react';

export default function Trajet() {
  const waypoints = [
    {
      day: 1,
      name: 'Camping Pont Lauguère',
      altitude: '500m',
      description: 'Installation au camping et découverte',
    },
    {
      day: 2,
      name: 'Randonnée depuis le camping vers le Lac de Pombie',
      altitude: '2100m',
      description: 'Randonnée ressourçante au col du pourtalet et libération émotionnelle',
    },
    {
      day: 3,
      name: 'Randonnée des roches sédimentaire puis arret au Camping Louvie Soubiron ',
      altitude: '1550m',
      description: 'Découverte du bien être associé aux roches sédimentaire',
    },
    {
      day: 4,
      name: 'Montée au plaa Auzu',
      altitude: '1300m',
      description: 'Point de vue magique et campement',
    },
    {
      day: 5,
      name: 'Redescente',
      altitude: '1300m',
      description: 'Cérémonie finale et fabrication des bracelets',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
          alt="Trajet de randonnée"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <Compass className="text-amber-400 mx-auto mb-4" size={48} />
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Notre Trajet</h1>
            <p className="text-xl text-stone-100">Un parcours soigneusement conçu à travers les montagnes</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="flex items-start space-x-4">
            <Info className="text-amber-600 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-3">Informations Pratiques</h3>
              <div className="grid md:grid-cols-3 gap-6 text-stone-700">
                <div>
                  <p className="font-semibold mb-1">Distance totale</p>
                  <p className="text-stone-600">Environ 45 km</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Dénivelé</p>
                  <p className="text-stone-600">+800m / -800m</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Niveau</p>
                  <p className="text-stone-600">Moyen à difficile</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-serif text-stone-800 mb-8 text-center">Carte du Trajet</h2>
          <div className="relative h-[450px] md:h-[600px]">
            <img
              src="https://i.postimg.cc/DnmNz1pV/carte.png"
              alt="Carte topographique"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-stone-800 mb-8 text-center">Points d'Étape</h2>
          <div className="space-y-6">
            {waypoints.map((waypoint, index) => (
              <div
                key={waypoint.day}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gradient-to-br from-amber-600 to-yellow-700 p-8 flex flex-col items-center justify-center text-white">
                    <Mountain size={48} className="mb-4" />
                    <p className="text-sm font-semibold mb-2">JOUR {waypoint.day}</p>
                    <p className="text-2xl font-bold">{waypoint.altitude}</p>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-amber-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif text-stone-800 mb-2">{waypoint.name}</h3>
                        <p className="text-stone-600 leading-relaxed">{waypoint.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-serif text-white mb-4">Point de Rendez-vous</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <MapPin className="text-amber-400 mx-auto mb-3" size={32} />
              <p className="text-white text-lg mb-2">Camping Pont Lauguère</p>
              <p className="text-stone-300 text-sm">8 Rue de Lauguere, 64440 Laruns</p>
            </div>
            <p className="text-stone-300 mb-6">
              Le rendez-vous est fixé à 12h00 le premier jour. Un parking gratuit est disponible à proximité.
              Le trajet en voiture depuis Toulouse prend environ 2 heures.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Obtenir l'itinéraire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
