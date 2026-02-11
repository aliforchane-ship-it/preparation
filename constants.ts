
import { Resource, ResourceCategory, Advice, RamadanSlot } from './types';

export const RESOURCES: Resource[] = [
  // Bibliothèques
  { title: "Proetudes - Nathan", url: "https://proetudes.blogspot.com/search/label/Classe%20Prepa%20Nathan?&max-results=30&m=1", category: ResourceCategory.LIBRARY },
  { title: "Booksloop", url: "https://booksloop.blogspot.com/", category: ResourceCategory.LIBRARY },
  { title: "Gerald Philippe Bookmarks", url: "http://gerald.philippe.free.fr/bookmarks.html", category: ResourceCategory.LIBRARY },
  { title: "LidPrepa - H-Prepa", url: "https://lidprepa.blogspot.com/2015/08/collection-des-livre-h-prepa.html", category: ResourceCategory.LIBRARY },
  { title: "MesLivres.site", url: "http://meslivres.site/pf54.html", category: ResourceCategory.LIBRARY },

  // Informatique
  { title: "Drive Info Essentiel", url: "https://drive.google.com/drive/u/0/folders/1Ypaq8w2dz3I5viyBh3QPcLG_iOi0Y1YU", category: ResourceCategory.INFO, important: true },
  { title: "Drive Info Mobile", url: "https://drive.google.com/drive/mobile/folders/1d8g8Irv2aV5ox27rREVYMhlUAiXhScW7", category: ResourceCategory.INFO },
  { title: "Exos Python Corrigés", url: "http://www.developpement-informatique.com/article/98/exercices-corriges-python-serie-9", category: ResourceCategory.INFO },

  // Maths
  { title: "BibMath", url: "http://www.bibmath.net/", category: ResourceCategory.MATHS, description: "Résumés, exos classiques et solutions" },
  { title: "Concours Maths CPGE", url: "https://concours-maths-cpge.fr/", category: ResourceCategory.MATHS },

  // SI & Physique
  { title: "RTC.ma", url: "https://rtc.ma/index.php?language=en", category: ResourceCategory.ENGINEERING, important: true, description: "Site incontournable pour les TSI" },
  { title: "PT Physique Free", url: "http://pt.physique.free.fr/exos.php#emag", category: ResourceCategory.PHYSICS },
  { title: "SI Concours Français", url: "http://www.mediafire.com/file/az5lure9ariyeqk/SI_CONCOURS_FRANCAIS.rar/file", category: ResourceCategory.ENGINEERING },

  // Concours
  { title: "Centrale Supélec Annales", url: "https://www.concours-centrale-supelec.fr/CentraleSupelec", category: ResourceCategory.CONCOURS },
  { title: "CCINP Annales TSI", url: "http://www.concours-commun-inp.fr/fr/epreuves/annales/annales-tsi.html", category: ResourceCategory.CONCOURS },

  // Mega & Drive List
  { title: "Drive S2e_lV6", url: "https://drive.google.com/drive/mobile/folders/1S2e_lV6IODGnUY20zaZoFgHKBjPxpMc5", category: ResourceCategory.DRIVE },
  { title: "Drive pKFzk", url: "https://drive.google.com/drive/mobile/folders/1pKFzk-YWNP-nx1vDETaWkbe6DBoPj4ya", category: ResourceCategory.DRIVE },
  { title: "Archive unl4U3", url: "https://drive.google.com/folderview?id=1unl4U3Gk14K7n_cCCFRO4yyoJlC-dzDW", category: ResourceCategory.DRIVE },
  { title: "Drive JEK_XBx", url: "https://drive.google.com/drive/folders/1JEK_XBx3WmINoJYVeGjRk3WltfOm3nNS", category: ResourceCategory.DRIVE },
  { title: "Drive ExO13", url: "https://drive.google.com/drive/u/0/folders/1ExO13pU1czodwAG3yA2SNZjuf_IShV5E", category: ResourceCategory.DRIVE },
  { title: "Drive MFU06", url: "https://drive.google.com/drive/u/0/folders/1MFU06Q8muSUhZCBTg4A6XS1T98cxjHrA", category: ResourceCategory.DRIVE },
  { title: "Mega NZ Archive", url: "https://mega.nz/folder/M7Z3BYCT#ILOUt9AyObPo4ZBGZPhHHA", category: ResourceCategory.DRIVE, important: true },
  { title: "Drive oNanypc", url: "https://drive.google.com/drive/u/0/folders/1oNanypc_5skkkBTiGAIxoM_WGefoQJwA", category: ResourceCategory.DRIVE },
  { title: "Doc 19eBQ", url: "https://drive.google.com/file/d/19eBQwHSq_alSgRh6IJ27g2cK3eqbg9aU/view", category: ResourceCategory.DRIVE },
  { title: "Drive w5FXR", url: "https://drive.google.com/drive/mobile/folders/1w5FXRo354YIcP5Fbo5cRDF7LrG1s9ua5", category: ResourceCategory.DRIVE },
  { title: "Drive 123LC", url: "https://drive.google.com/drive/folders/123LCeVBLrZWJIZkOnwSeVmBW6qYNTyzD", category: ResourceCategory.DRIVE },
  { title: "Drive 1826u", url: "https://drive.google.com/drive/u/0/folders/1826uZqqPnzGjpn6c_MORRzwwCimiz6Rf", category: ResourceCategory.DRIVE },
  { title: "Drive g0EUX", url: "https://drive.google.com/drive/folders/1g0EUXBfvkxx83asptDwR9AMVmEC4hOHy", category: ResourceCategory.DRIVE },
  { title: "Drive 18DgG", url: "https://drive.google.com/drive/u/0/folders/18DgGtvsaSv8DRpcVnSq7CKQBAA7Kqf6U", category: ResourceCategory.DRIVE },
  { title: "Drive ndIgs", url: "https://drive.google.com/drive/folders/1ndIgs8XYDVkBXVyu--mH5yJyBsrNQjY2", category: ResourceCategory.DRIVE },
  { title: "Drive T-GU1", url: "https://drive.google.com/drive/mobile/folders/1T-GU1dcddYJog88bIvKYHkY175iUALfv", category: ResourceCategory.DRIVE },
  { title: "Drive u0jQg", url: "https://drive.google.com/drive/mobile/folders/1u0jQg2pG3qeB2SK9i7NnICPjrT6bCLdS", category: ResourceCategory.DRIVE },
  { title: "Drive 0B5ox", url: "https://drive.google.com/drive/u/0/mobile/folders/0B5oxU-_dgONJfldYd2FNX2t6VWlWc0M3NWdxejFxWm1yTko1RFVjUkdKdDd4LW5sd0o3Nkk", category: ResourceCategory.DRIVE },
  { title: "Drive DBXXC", url: "https://drive.google.com/drive/folders/1DBXXC3OT4qZPQMBgbt_81ePUAF633dQ8", category: ResourceCategory.DRIVE },
  { title: "Drive WNADg", url: "https://drive.google.com/drive/folders/1WNADgME72a4b_hPtFFGEl2jH9QB_3P9J", category: ResourceCategory.DRIVE },
  { title: "Drive 1-Ufh2", url: "https://drive.google.com/drive/mobile/folders/1-Ufh2PqZOQWQHlx4IzSHGFRloujw6p0l", category: ResourceCategory.DRIVE },
  { title: "Drive 1-EpHX", url: "https://drive.google.com/drive/folders/1-EpHX2L4C-eCjBPUe9ioqcHeogoe1lxP", category: ResourceCategory.DRIVE },
  { title: "Drive nOOIv", url: "https://drive.google.com/drive/mobile/folders/1nOOIvHu8Y7tAtsvRQwEA5zYBE3TDiIk0", category: ResourceCategory.DRIVE },
  { title: "Cahier de Prépa Coeffin", url: "https://cahier-de-prepa.fr/CoeffinPTSI/docs?rep=6", category: ResourceCategory.DRIVE }
];

export const RAMADAN_PLAN: RamadanSlot[] = [
  { time: "04:00 - 05:30", activity: "Suhoor & Prière", focus: "Énergie et méditation", intensity: 'Low' },
  { time: "05:30 - 08:30", activity: "Matières Fortes (Maths/SI)", focus: "Pic de concentration intellectuelle", intensity: 'High' },
  { time: "09:00 - 13:00", activity: "Cours / TD à l'école", focus: "Suivi rigoureux, prise de notes", intensity: 'Medium' },
  { time: "14:00 - 16:30", activity: "Sieste & Repos", focus: "Récupération nécessaire pour la fin de journée", intensity: 'Low' },
  { time: "16:30 - 18:30", activity: "Matières Légères (Français/Anglais)", focus: "Lecture et vocabulaire", intensity: 'Medium' },
  { time: "19:00 - 20:30", activity: "Iftar & Repos", focus: "Réhydratation et repas équilibré", intensity: 'Low' },
  { time: "21:30 - 23:30", activity: "Révision des points clés", focus: "Revoir les formules et exercices types", intensity: 'Medium' }
];

export const ADVICE_LIST: Advice[] = [
  {
    title: "Gérer la fatigue en TSI",
    content: "La filière TSI est exigeante techniquement. Privilégiez des cycles de sommeil réguliers, même courts, pour garder l'esprit vif.",
    tags: ["Santé", "Sommeil"]
  },
  {
    title: "Réussir sa SI",
    content: "Ne vous contentez pas d'apprendre. Pratiquez sur les schémas cinématiques et les torseurs quotidiennement. RTC.ma est votre meilleur ami.",
    tags: ["SI", "Méthode"]
  },
  {
    title: "Stratégie Concours",
    content: "Lisez les rapports de jury ! Ils contiennent souvent les erreurs classiques à éviter absolument.",
    tags: ["Concours", "Stratégie"]
  }
];
