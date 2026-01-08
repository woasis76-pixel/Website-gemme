import { useEffect, useState } from 'react';
import { supabase, type Product } from '../lib/supabase';
import { ShoppingCart, Sparkles, Package } from 'lucide-react';

export default function Boutique() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = (product: Product) => {
    alert(`Merci de votre intérêt pour ${product.name}! La fonctionnalité d'achat sera bientôt disponible.`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-600 mx-auto mb-4"></div>
          <p className="text-stone-600">Chargement de la boutique...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Boutique de cristaux"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <Sparkles className="text-amber-400 mx-auto mb-4" size={48} />
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Boutique de Cristaux</h1>
            <p className="text-xl text-stone-100">Pierres authentiques sélectionnées pour leurs propriétés spirituelles</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.stock <= 5 && product.stock > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Stock limité
                  </div>
                )}
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-stone-900/70 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Épuisé</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-stone-800 mb-2">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-amber-600">{product.price.toFixed(2)} €</span>
                  <div className="flex items-center space-x-1 text-stone-500 text-sm">
                    <Package size={16} />
                    <span>{product.stock} en stock</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(product);
                  }}
                  disabled={product.stock === 0}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    product.stock === 0
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-600 to-yellow-700 text-white hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                  <ShoppingCart size={20} />
                  <span>{product.stock === 0 ? 'Épuisé' : 'Ajouter au panier'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image_url}
                  alt={selectedProduct.name}
                  className="w-full h-80 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-4">{selectedProduct.name}</h2>
                <p className="text-stone-600 mb-6">{selectedProduct.description}</p>

                <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-6 rounded-xl mb-6">
                  <h3 className="text-lg font-semibold text-stone-800 mb-3 flex items-center">
                    <Sparkles className="text-amber-600 mr-2" size={20} />
                    Propriétés Spirituelles
                  </h3>
                  <p className="text-stone-700 leading-relaxed">{selectedProduct.spiritual_properties}</p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-amber-600">{selectedProduct.price.toFixed(2)} €</span>
                  <div className="flex items-center space-x-2 text-stone-600">
                    <Package size={20} />
                    <span>{selectedProduct.stock} disponibles</span>
                  </div>
                </div>

                <button
                  onClick={() => handlePurchase(selectedProduct)}
                  disabled={selectedProduct.stock === 0}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    selectedProduct.stock === 0
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-600 to-yellow-700 text-white hover:shadow-2xl transform hover:scale-105'
                  }`}
                >
                  <ShoppingCart size={24} />
                  <span>{selectedProduct.stock === 0 ? 'Épuisé' : 'Ajouter au panier'}</span>
                </button>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full mt-4 py-3 bg-stone-100 text-stone-700 rounded-xl font-semibold hover:bg-stone-200 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
