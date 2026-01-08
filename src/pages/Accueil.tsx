import { Sparkles, Mountain, Heart } from 'lucide-react';

export default function Accueil() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7703319/pexels-photo-7703319.jpeg"
            alt="Cristaux et spiritualité"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-50"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block">
              <Sparkles className="text-amber-400 animate-pulse" size={48} />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">
              Voyage Spirituel
            </h1>
            <p className="text-xl md:text-2xl text-stone-100 mb-8 leading-relaxed">
              Découvrez le pouvoir ancestral des pierres lors d'une randonnée spirituelle de 5 jours
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Réserver votre séjour
              </button>
              <button className="px-8 py-4 bg-white/90 text-stone-800 rounded-full font-semibold hover:bg-white transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-800 mb-4">Une Expérience Transformatrice</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-serif text-stone-800 mb-6">En harmonie avec la terre</h3>
            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
              Depuis l’origine du monde, les roches magmatiques, sédimentaires et métamorphiques portent la mémoire vibrante de la terre. Notre retraite immersive vous invite à ressentir la force du feu, la patience des strates et l’alchimie des transformations. 
            <p className="text-lg text-stone-600 leading-relaxed">
              Durant cinq jours, apprenez à harmoniser vos énergies au contact de ces gardiennes du temps pour ancrer votre esprit. Intégrez cette stabilité millénaire dans votre quotidien et laissez la pierre guider votre propre métamorphose.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/35574065/pexels-photo-35574065.jpeg"
              alt="Méditation avec cristaux"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mountain className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-stone-800 mb-3">Randonnées</h4>
            <p className="text-stone-600">
              Explorez les sites énergétiques naturels où les cristaux se forment depuis des millénairesdddd
            </p>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Sparkles className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-stone-800 mb-3">Ateliers Pratiques</h4>
            <p className="text-stone-600">
              Apprener à détecter les énergies et à pratiquer les exercices de relance spirituel
            </p>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-stone-800 mb-3">Transformation Intérieure</h4>
            <p className="text-stone-600">
              Vivez une expérience profonde de reconnexion à vous-même et aux énergies terrestres
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-yellow-700 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-serif mb-4">Prêt à Commencer Votre Voyage ?</h3>
          <p className="text-xl mb-8 text-amber-50">
            Rejoignez-nous pour une expérience inoubliable au cœur de la vallée d'Ossau
          </p>
          <button className="px-10 py-4 bg-white text-amber-700 rounded-full font-bold text-lg hover:bg-stone-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Découvrir les Dates Disponibles
          </button>
        </div>
      </div>
    </div>
  );
}
