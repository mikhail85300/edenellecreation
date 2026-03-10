/* ═══════════════════════════════════════════
   EDENELLE CRÉATION — products.js
   Catalogue complet des produits
   ═══════════════════════════════════════════ */

const PRODUCTS = [
  // ── PACKS ──
  { id:'pack-flowers', name:'Pack "Flowers"', cat:'packs', price:86, priceOriginal:93, badge:'Nouveau', desc:'Couverture gaze de coton + doudou oreilles de lapin + protège carnet de santé. Motif fleuri brodé.' },
  { id:'pack-lapinou', name:'Pack "Lapinou"', cat:'packs', price:86, priceOriginal:93, badge:'Nouveau', desc:'Couverture douce + doudou lapinou + protège carnet assorti.' },
  { id:'pack-brindille', name:'Pack "Brindille"', cat:'packs', price:86, priceOriginal:93, badge:'Nouveau', desc:'Couverture + doudou + protège carnet, motif brindille délicat.' },
  { id:'pack-softy', name:'Pack "Softy"', cat:'packs', price:75, priceOriginal:80, badge:null, desc:'Couverture polaire ultra-douce + doudou assorti.' },
  { id:'pack-signature-polaire', name:'Pack "Signature" Polaire', cat:'packs', price:85, priceOriginal:91, badge:null, desc:'Couverture polaire + doudou signature, dans un coffret élégant.' },
  { id:'pack-signature-coton', name:'Pack "Signature" Coton', cat:'packs', price:85, priceOriginal:91, badge:null, desc:'Couverture coton + doudou signature, légèreté et douceur.' },
  { id:'pack-luxury-polaire', name:'Pack "Luxury" Polaire', cat:'packs', price:175, priceOriginal:189, badge:null, desc:'Pack complet 5 pièces en polaire premium.' },
  { id:'pack-luxury-coton', name:'Pack "Luxury" Coton', cat:'packs', price:175, priceOriginal:189, badge:null, desc:'Pack complet 5 pièces en coton certifié Oeko-Tex.' },
  { id:'pack-milky-polaire', name:'Pack "Milky" Polaire', cat:'packs', price:167, priceOriginal:180, badge:null, desc:'Pack naissance luxueux en velours polaire.' },
  { id:'pack-milky-coton', name:'Pack "Milky" Coton', cat:'packs', price:167, priceOriginal:180, badge:null, desc:'Pack naissance luxueux en coton doux.' },
  { id:'pack-prestige', name:'Pack "Prestige"', cat:'packs', price:285, priceOriginal:313, badge:null, desc:'Le pack ultime — couverture, gigoteuse, doudou, tenue et accessoires.' },
  { id:'pack-essentiels', name:'Pack "Essentiels"', cat:'packs', price:55, priceOriginal:60, badge:null, desc:'L\'essentiel pour accueillir bébé : couverture + doudou.' },

  // ── COUVERTURES ──
  { id:'set-douillette', name:'Set Couverture & Doudou Douillette', cat:'couvertures', price:65, priceOriginal:69, badge:null, desc:'Couverture polaire douillette + doudou assorti, brodés au prénom.' },
  { id:'set-douceur', name:'Set Couverture & Doudou Douceur', cat:'couvertures', price:65, priceOriginal:69, badge:null, desc:'Couverture gaze de coton + doudou, pour les nuits sereines.' },
  { id:'couverture-maille', name:'Couverture Maille', cat:'couvertures', price:39, priceOriginal:null, badge:'Nouveau', desc:'Couverture tricot maille douce, idéale toutes saisons.' },
  { id:'coussin-gaze', name:'Coussin Gaze de Coton', cat:'couvertures', price:39, priceOriginal:null, badge:'Nouveau', desc:'Coussin décoratif en gaze de coton, brodé au prénom.' },

  // ── GIGOTEUSES ──
  { id:'gigoteuse-ecru', name:'Gigoteuse Écru', cat:'gigoteuses', price:38, priceOriginal:null, badge:null, desc:'Gigoteuse en coton écru, légère et confortable. Broderie personnalisée.' },

  // ── CHANCELIÈRES ──
  { id:'chanceliere-polaire-ecru', name:'Chancelière Polaire Écru', cat:'trousseau', price:48, priceOriginal:null, badge:null, desc:'Chancelière polaire pour poussette ou siège auto.' },
  { id:'chanceliere-polaire-beige', name:'Chancelière Polaire Beige Clair', cat:'trousseau', price:48, priceOriginal:null, badge:null, desc:'Chancelière polaire beige clair, douce et chaude.' },
  { id:'chanceliere-coton-beige', name:'Chancelière Coton Beige Clair', cat:'trousseau', price:48, priceOriginal:null, badge:null, desc:'Chancelière légère en gaze de coton.' },
  { id:'chanceliere-coton-ecru', name:'Chancelière Coton Écru', cat:'trousseau', price:48, priceOriginal:null, badge:null, desc:'Chancelière estivale en coton naturel.' },

  // ── SACS ──
  { id:'sac-dos-beige', name:'Sac à Dos Beige', cat:'sacs', price:39, priceOriginal:null, badge:'Nouveau', desc:'Sac à dos en gaze de coton beige, brodé au prénom.' },
  { id:'sac-dos-vieux-rose', name:'Sac à Dos Vieux Rose', cat:'sacs', price:33.15, priceOriginal:39, badge:null, desc:'Sac à dos vieux rose, broderie prénom.' },
  { id:'sac-dos-feuilles', name:'Sac à Dos Feuilles Caramel', cat:'sacs', price:31.20, priceOriginal:39, badge:null, desc:'Sac à dos motif feuilles caramel.' },
  { id:'sac-langer-beige', name:'Sac à Langer Beige', cat:'sacs', price:54, priceOriginal:null, badge:null, desc:'Grand sac à langer en gaze de coton, brodé.' },
  { id:'sac-langer-cacao', name:'Sac à Langer Cacao', cat:'sacs', price:47.60, priceOriginal:56, badge:'Nouveau', desc:'Sac à langer coloris cacao, élégant et pratique.' },
  { id:'pack-rentree', name:'Pack Rentrée', cat:'sacs', price:46, priceOriginal:null, badge:'Nouveau', desc:'Sac à dos + trousse brodés assortis pour la rentrée.' },

  // ── BAIN ──
  { id:'set-baby-bath', name:'Set Baby Bath', cat:'bain', price:45, priceOriginal:null, badge:'Nouveau', desc:'Cape de bain + gant + bavoir, brodés au prénom.' },
  { id:'tablier-bain', name:'Tablier de Bain', cat:'bain', price:29, priceOriginal:null, badge:null, desc:'Tablier de bain pratique pour les parents, brodé.' },
  { id:'peignoir-3-4-ans', name:'Peignoir 3-4 ans', cat:'bain', price:26, priceOriginal:null, badge:null, desc:'Peignoir éponge blanc, taille 3-4 ans, brodé.' },

  // ── DOUDOUS ──
  { id:'doudou-signature', name:'Doudou Signature', cat:'doudous', price:35, priceOriginal:null, badge:'Nouveau', desc:'Le doudou signature Edenelle, brodé au prénom.' },
  { id:'doudou-ourson-minky', name:'Doudou Ourson Minky Blanc', cat:'doudous', price:14, priceOriginal:20, badge:null, desc:'Doudou ourson en minky blanc ultra-doux.' },

  // ── TENUES ──
  { id:'set-combi-maille-3pcs', name:'Set Combi Maille Coton 3 pcs', cat:'tenues', price:36, priceOriginal:null, badge:'Nouveau', desc:'Set 3 pièces en maille coton : body, pantalon, bonnet.' },
  { id:'set-brassiere-4pcs', name:'Set Brassière Maille 4 pcs Brun', cat:'tenues', price:38, priceOriginal:null, badge:null, desc:'Set 4 pièces brassières maille coloris brun.' },
  { id:'combipilote-maille', name:'Combipilote Maille Blanche', cat:'tenues', price:39, priceOriginal:null, badge:'Nouveau', desc:'Combipilote en maille blanche douce, brodée.' },
  { id:'brassiere-maille-beige', name:'Brassière Maille Beige', cat:'tenues', price:22, priceOriginal:null, badge:null, desc:'Brassière en maille coton beige, brodée.' },
  { id:'brassiere-maille-blanc', name:'Brassière Maille Blanc', cat:'tenues', price:18.70, priceOriginal:22, badge:null, desc:'Brassière en maille coton blanc, brodée.' },

  // ── PROTÈGE-CARNETS ──
  { id:'protege-carnet-flowers', name:'Protège Carnet Santé Flowers', cat:'accessoires', price:24, priceOriginal:null, badge:'Nouveau', desc:'Protège carnet de santé en gaze de coton motif flowers.' },

  // ── ACCESSOIRES ──
  { id:'couverts-graves', name:'Couverts Gravés', cat:'accessoires', price:14, priceOriginal:null, badge:'Nouveau', desc:'Set fourchette + cuillère gravés au prénom.' },
  { id:'brosse-peigne', name:'Duo Brosse & Peigne en Bois', cat:'accessoires', price:19, priceOriginal:null, badge:null, desc:'Brosse et peigne en bois naturel pour bébé.' },
  { id:'trousse-gaze', name:'Trousse v2 Gaze de Coton', cat:'accessoires', price:22, priceOriginal:null, badge:null, desc:'Trousse de toilette en gaze de coton, brodée.' },

  // ── CARTE CADEAU ──
  { id:'carte-cadeau', name:'Carte Cadeau', cat:'cadeau', price:30, priceOriginal:null, badge:null, desc:'Carte cadeau Edenelle Création, valable sur tout le site.' },
];

// Helper
function getProductsByCategory(cat) {
  if (!cat || cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.cat === cat);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
