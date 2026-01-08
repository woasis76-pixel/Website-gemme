/*
  # Schéma de base pour le site de lithothérapie

  1. Nouvelles Tables
    - `products` (produits/roches)
      - `id` (uuid, clé primaire)
      - `name` (text) - nom de la roche
      - `description` (text) - descriptif spirituel
      - `price` (numeric) - prix en euros
      - `image_url` (text) - URL de l'image
      - `stock` (integer) - quantité en stock
      - `spiritual_properties` (text) - propriétés spirituelles détaillées
      - `created_at` (timestamp)
    
    - `activities` (activités de la semaine)
      - `id` (uuid, clé primaire)
      - `day_number` (integer) - jour 1 à 5
      - `title` (text) - titre de l'activité
      - `description` (text) - description détaillée
      - `duration` (text) - durée de l'activité
      - `created_at` (timestamp)
    
    - `reservations` (réservations)
      - `id` (uuid, clé primaire)
      - `start_date` (date) - date de début (doit être un lundi)
      - `end_date` (date) - date de fin (5 jours)
      - `customer_name` (text) - nom du client
      - `customer_email` (text) - email du client
      - `customer_phone` (text) - téléphone
      - `number_of_people` (integer) - nombre de personnes
      - `status` (text) - statut: pending, confirmed, cancelled
      - `created_at` (timestamp)
    
    - `available_dates` (dates disponibles)
      - `id` (uuid, clé primaire)
      - `start_date` (date) - date de début
      - `end_date` (date) - date de fin
      - `max_capacity` (integer) - capacité maximale
      - `current_bookings` (integer) - réservations actuelles
      - `is_available` (boolean) - disponible ou non

  2. Sécurité
    - Enable RLS sur toutes les tables
    - Les produits et activités sont en lecture publique
    - Les réservations nécessitent une authentification pour modification
    - Les dates disponibles sont en lecture publique
*/

-- Table des produits (roches)
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10,2) NOT NULL DEFAULT 0,
  image_url text NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  spiritual_properties text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut voir les produits"
  ON products FOR SELECT
  TO public
  USING (true);

-- Table des activités
CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_number integer NOT NULL CHECK (day_number >= 1 AND day_number <= 5),
  title text NOT NULL,
  description text NOT NULL,
  duration text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut voir les activités"
  ON activities FOR SELECT
  TO public
  USING (true);

-- Table des réservations
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  start_date date NOT NULL,
  end_date date NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  number_of_people integer NOT NULL DEFAULT 1 CHECK (number_of_people > 0),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut créer des réservations"
  ON reservations FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Tout le monde peut voir les réservations"
  ON reservations FOR SELECT
  TO public
  USING (true);

-- Table des dates disponibles
CREATE TABLE IF NOT EXISTS available_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  start_date date NOT NULL,
  end_date date NOT NULL,
  max_capacity integer NOT NULL DEFAULT 12,
  current_bookings integer NOT NULL DEFAULT 0,
  is_available boolean NOT NULL DEFAULT true
);

ALTER TABLE available_dates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut voir les dates disponibles"
  ON available_dates FOR SELECT
  TO public
  USING (true);