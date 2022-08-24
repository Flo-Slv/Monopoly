const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const MONGODB = `mongodb+srv://FloSlv:${DB_PASSWORD}@flo.j1cmj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const LUCKY_CARDS = [
  'Rendez-vous rue de la Paix',
  `Avancer jusqu'à la case départ`,
  `Rendez-vous à l'Avenue Henri-Martin. Si vous passez par la case départ, recevez 200 euro`,
  'Avancez au Boulevard de La Villette. Si vous passez par la case départ, recevez 200 euro',
  'Vous êtes imposé pour les réparations de voirie à raison de: -40 euro par maison, -115 euro par hôtel',
  `Avancez jusqu'à la Gare de Lyon. Si vous passez par la case départ, recevez 200 euro`,
  'Vous avez gagné le prix de mots croisés. Recevez: +100 euro',
  'La banque vous verse un dividende: +50 euro',
  `Vous êtes libéré de prison. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue.`,
  'Reculez de trois cases',
  'Aller en prison. Rendez-vous directement en prison. Ne franchissez pas par la case départ, ne touchez pas 200 euro',
  'Faites des réparations dans toutes vos maisons. Versez pour chaque maison: -25 euro. Versez pour chaque hôtel: -100 euro',
  'Amende pour excès de vitesse: -15 euro',
  'Payez pour frais de scolarité: -150 euro',
  'Amende pour ivresse: -20 euro',
  'Votre immeuble et votre prêt rapportent. Vous devez toucher: +150 euro',
];

const COMMUNITY_CHEST_CARDS = [
  'Rendez-vous rue de la Paix',
  'Erreur de la banque en votre faveur. Recevez +200 euro',
  'Payez la note du médecin: -50 euro',
  'La vente de votre stock vous rapporte: +50 euro',
  `Vous êtes libéré de prison. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue.`,
  'Aller en prison. Rendez-vous directement à la prison. Ne franchissez pas par la case départ, ne touchez pas 200 euro',
  'Retournez à Belleville',
  'Recevez votre revenu annuel: +100 euro',
  `C’est votre anniversaire. Chaque joueur doit vous donner: +10 euro`,
  'Les contributions vous remboursent: +20 euro',
  `Recevez votre intérêt sur l’emprunt à 7%: +25 euro`,
  'Payez votre Police d’Assurance: -50 euro',
  'Payez une amende: -10 euro ou bien tirez une carte CHANCE',
  'Rendez-vous à la gare la plus proche. Si vous passez par la case départ, recevez 200 euro',
  'Vous avez gagné le deuxième Prix de Beauté. Recevez: +10 euro',
  'Vous héritez: +100 euro',
];
export { MONGODB, LUCKY_CARDS, COMMUNITY_CHEST_CARDS };
