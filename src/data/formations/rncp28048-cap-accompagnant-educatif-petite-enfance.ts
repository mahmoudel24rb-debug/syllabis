// Fiche formation CAP AEPE — Certificat d'Aptitude Professionnelle
// Accompagnant Éducatif Petite Enfance
//
// Source référentiel : arrêté du 22 février 2017 (création), version applicable
// depuis la session 2019. Référence locale :
// docs/Annexes_CAP_AEPE.pdf (Annexes I-VI : référentiel des activités,
// référentiel de compétences, référentiel d'évaluation, périodes de
// formation en milieu professionnel, dispenses d'épreuves).
//
// Structure : 3 blocs professionnels (UP1/UP2/UP3) + 4 blocs généraux (UG) +
// 1 bloc facultatif (langue vivante A2). Syllabis se concentre sur les 3
// blocs professionnels qui représentent l'essentiel de l'ingénierie
// pédagogique en formation continue.

import type { Formation } from '@/types/formation'
import { METRIC_AEPE_PRODUCTION_BREAKDOWN } from '@/data/metrics'

export const FORMATION_AEPE: Formation = {
  // ── Identité ────────────────────────────────────────────────
  rncp: 'RNCP28048',
  codeTitre: 'CAP-AEPE',
  millesime: '02',
  slug: 'rncp28048-cap-accompagnant-educatif-petite-enfance',
  intitule: 'Accompagnant éducatif petite enfance',
  sigle: 'CAP AEPE',
  alternateNames: [
    'CAP AEPE',
    'CAP Petite Enfance',
    'Accompagnant éducatif petite enfance',
    'CAP Accompagnant Éducatif Petite Enfance',
    'CAP AEPE 2019',
  ],

  // ── Classification ──────────────────────────────────────────
  niveau: 3,
  niveauLabel: 'Niveau 3 (Cadre national des certifications 2019)',
  certificateur: {
    name: "Ministère de l'Éducation Nationale, de la Jeunesse et des Sports",
    url: 'https://www.education.gouv.fr',
  },
  codesNSF: ['332t', '332v'],
  codeROME: 'K1303',
  formacodes: ['44023', '44022', '44086', '44032'],
  conventionCollective:
    "Convention collective nationale des assistants maternels du particulier employeur (n° 2395) — pour l'exercice en accueil individuel",

  // ── Dates (ISO 8601) ────────────────────────────────────────
  dateValidation: '2017-02-22',
  dateArrete: '2017-02-22',
  dateJO: '2017-03-15',
  dateEffet: '2019-06-01',
  derniereVerificationRNCP: '2026-06-09',

  // ── Structure pédagogique ───────────────────────────────────
  ccps: [
    {
      numero: 1,
      intitule: "Accompagner le développement de l'enfant (UP1)",
      definition:
        "Les compétences cœur du métier autour du jeune enfant de moins de 6 ans : observation, recueil des besoins, mise en œuvre d'activités d'éveil et de jeu libre, soins du quotidien (hygiène, alimentation, repos), application des protocoles santé (PAI, gestes de premiers secours). Bloc commun aux 3 contextes d'exercice (collectif, école maternelle, individuel).",
      competenceNumeros: [1, 2, 3, 4, 5, 6],
    },
    {
      numero: 2,
      intitule: 'Exercer son activité en accueil collectif (UP2)',
      definition:
        "Les compétences spécifiques aux EAJE (multi-accueil, crèches), à l'école maternelle et aux accueils collectifs de mineurs (ACM). Coopération avec les autres professionnels (équipe pluridisciplinaire, enseignants), assistance pédagogique sous responsabilité de l'enseignant, remise en état des matériels et locaux.",
      competenceNumeros: [7, 8, 9, 10],
    },
    {
      numero: 3,
      intitule: 'Exercer son activité en accueil individuel (UP3)',
      definition:
        "Les compétences pour l'exercice à domicile (employeur particulier), en maison d'assistants maternels (MAM) ou en crèche familiale. Organisation autonome de l'action, négociation du cadre de l'accueil avec le parent employeur, entretien du logement et des espaces réservés à l'enfant, élaboration de repas adaptés.",
      competenceNumeros: [11, 12, 13, 14],
    },
  ],

  competencesProfessionnelles: [
    {
      numero: 1,
      intitule: "Recueillir les informations, s'informer sur les éléments du contexte et de la situation professionnels à prendre en compte",
      ccpNumero: 1,
      miseEnOeuvre:
        "L'accompagnant éducatif collecte avant et pendant chaque accueil les informations nécessaires sur le rythme de l'enfant, ses habitudes de vie, les choix éducatifs des parents, les éventuels PAI (protocoles d'accueil individualisés) et les consignes spécifiques. Il consulte le cahier de transmissions, échange avec les parents et l'équipe, et identifie les ressources matérielles et humaines mobilisables pour adapter sa prise en charge.",
      criteresPerformance: [
        "Les informations recueillies sont pertinentes et complètes par rapport à la situation d'accueil.",
        "Les sources (parents, équipe, documents) sont sollicitées avec discernement et dans le respect de la vie privée.",
        "Les éléments singularité de l'enfant (handicap, vulnérabilité, allergies, PAI) sont pris en compte.",
        "Les ressources matérielles et humaines mobilisables sont identifiées.",
      ],
    },
    {
      numero: 2,
      intitule: 'Adopter une posture professionnelle adaptée',
      ccpNumero: 1,
      miseEnOeuvre:
        "L'accompagnant ajuste en permanence sa posture aux besoins de l'enfant et au contexte : bienveillance, écoute active, observation, non-jugement, respect du libre-choix et de la créativité de l'enfant. Il favorise la sécurité affective, la valorisation et l'autonomie. Il adopte une attitude réflexive sur sa pratique et respecte les limites de ses compétences en orientant vers les professionnels ressources si nécessaire.",
      criteresPerformance: [
        "L'attitude est bienveillante et sans jugement de valeur.",
        "Le respect de la vie privée des familles et de la singularité de l'enfant est constant.",
        "La sécurité affective de l'enfant et sa valorisation sont favorisées.",
        "Les limites de compétences sont respectées et orientent vers les bons acteurs.",
        "L'attitude réflexive est mobilisée pour ajuster la pratique.",
      ],
    },
    {
      numero: 3,
      intitule: "Mettre en œuvre les conditions favorables à l'activité libre et à l'expérimentation",
      ccpNumero: 1,
      miseEnOeuvre:
        "À partir de l'observation des acquis, des aptitudes et des désirs de l'enfant, l'accompagnant aménage un environnement sécurisé propice au jeu libre et à l'expérimentation. Il organise l'espace temporel, spatial et matériel en tenant compte des besoins d'intimité, de protection et de sécurité, à l'intérieur comme à l'extérieur. Il intervient ou non selon les besoins de régulation au sein du groupe.",
      criteresPerformance: [
        "L'observation préalable des acquis et des désirs de l'enfant est conduite finement.",
        "L'aménagement de l'environnement est sécurisé et favorise la libre exploration.",
        "L'organisation temporelle et spatiale respecte les besoins d'intimité de l'enfant.",
        "Les moyens de protection et de sécurité sont mis en place à l'intérieur et à l'extérieur.",
        "L'intervention ou la non-intervention est dosée selon le besoin de régulation observé.",
      ],
    },
    {
      numero: 4,
      intitule: "Mettre en œuvre des activités d'éveil en tenant compte de la singularité de l'enfant",
      ccpNumero: 1,
      miseEnOeuvre:
        "Sur la base de ses observations et des souhaits exprimés par l'enfant, l'accompagnant sélectionne, adapte et anime des activités ludiques d'éveil (sensorielles, motrices, cognitives, créatives, langagières). Il prépare l'installation, anime l'activité avec une attention au développement psycho-affectif et psycho-moteur, partage ses observations avec l'équipe, puis remet les espaces en état.",
      criteresPerformance: [
        "Les activités sont sélectionnées en cohérence avec les acquis et les souhaits de l'enfant.",
        "Le développement psycho-affectif et psycho-moteur de l'enfant est pris en compte.",
        "Les ressources matérielles et humaines mobilisées sont adaptées au contexte d'accueil.",
        "L'animation favorise la créativité, l'ouverture au monde et la connaissance.",
        "Les observations sur le déroulement sont partagées avec l'équipe.",
      ],
    },
    {
      numero: 5,
      intitule: "Réaliser des soins du quotidien et accompagner l'enfant dans ses apprentissages",
      ccpNumero: 1,
      miseEnOeuvre:
        "L'accompagnant écoute et observe les expressions corporelles de l'enfant pour réaliser les soins du quotidien (hygiène, confort, alimentation, repos) en respectant son rythme et son intimité. Il accompagne l'apprentissage des gestes du quotidien (propreté, habillage, repas autonome), prépare l'espace, repère les signes d'altération de la santé ou du comportement (maladie, malaise, maltraitance) et transmet ses observations à l'équipe.",
      criteresPerformance: [
        "L'accompagnement vers l'autonomie respecte le rythme et l'intimité de l'enfant.",
        "Les règles d'hygiène professionnelle et de sécurité sont rigoureusement respectées.",
        "Les réponses apportées sont adaptées aux besoins physiologiques de l'enfant.",
        "Les observations réalisées pendant les soins sont prises en compte pour adapter la prise en charge.",
        "Les signes d'altération (maladie, malaise, maltraitance) sont repérés et transmis.",
      ],
    },
    {
      numero: 6,
      intitule: "Appliquer les protocoles liés à la santé de l'enfant",
      ccpNumero: 1,
      miseEnOeuvre:
        "L'accompagnant participe à l'application du protocole d'accueil individualisé (PAI) en prenant connaissance des adaptations spécifiques et en vérifiant l'adéquation des conditions d'accueil. Il applique les protocoles d'urgence en réalisant les gestes de premiers secours dans la limite de ses compétences, et transmet l'information aux personnes ou services compétents.",
      criteresPerformance: [
        "Le PAI est appliqué dans le strict respect des adaptations prescrites.",
        "Les conditions d'accueil sont vérifiées en cohérence avec les mesures mentionnées.",
        "Les gestes de premiers secours sont réalisés correctement et dans la limite des compétences.",
        "La transmission aux personnes ou services compétents est immédiate et précise.",
        "Les protocoles sont respectés sans dépasser le périmètre de l'accompagnant.",
      ],
    },
    {
      numero: 7,
      intitule: "Coopérer avec l'ensemble des acteurs concernés dans un but de cohérence, d'adaptation et de continuité de l'accompagnement",
      ccpNumero: 2,
      miseEnOeuvre:
        "L'accompagnant identifie sa fonction dans le réseau d'acteurs (équipe pluridisciplinaire, enseignants, parents, professionnels ressources), partage les informations issues de ses observations à l'oral comme à l'écrit, et contribue à la continuité de la prise en charge. Il participe aux réunions de travail, aux analyses de pratique, et peut accompagner un stagiaire CAP AEPE.",
      criteresPerformance: [
        "La fonction propre dans le réseau est clairement identifiée.",
        "Les informations partagées sont fiables, pertinentes et adaptées aux destinataires.",
        "La participation aux temps collectifs (réunions, analyse de pratiques) est constructive.",
        "La transmission écrite ou orale est adaptée au degré d'urgence.",
        "L'accompagnement d'un stagiaire CAP AEPE est mené avec posture professionnelle.",
      ],
    },
    {
      numero: 8,
      intitule: 'Établir une relation privilégiée et sécurisante avec l\'enfant',
      ccpNumero: 2,
      miseEnOeuvre:
        "Dans le cadre de l'accueil collectif (crèche, école maternelle, ACM), l'accompagnant construit avec chaque enfant une relation individualisée fondée sur la sécurité affective. Il participe à l'arrivée et au départ, échange des informations avec la famille, transmet les éléments nécessaires à la continuité, et crée les conditions d'un climat de confiance avec l'enfant et ses parents.",
      criteresPerformance: [
        "Une relation individualisée et sécurisante est construite avec chaque enfant.",
        "Les transitions arrivée/départ sont soignées et rassurantes.",
        "L'échange avec la famille est attentif et adapté à l'interlocuteur.",
        "La transmission écrite et orale assure la continuité de la prise en charge.",
        "Les habitudes de vie familiales sont prises en compte dans la relation.",
      ],
    },
    {
      numero: 9,
      intitule: 'Assurer une assistance pédagogique au personnel enseignant',
      ccpNumero: 2,
      miseEnOeuvre:
        "Dans le cadre spécifique de l'école maternelle, l'accompagnant (Atsem) installe les ateliers, prépare et installe les supports pédagogiques, aide à la réalisation de l'activité sous la responsabilité de l'enseignant et en sa présence. Il participe à l'instauration des habitudes et règles de vie de classe, à l'accompagnement des sorties scolaires et à la surveillance de la récréation.",
      criteresPerformance: [
        "Les consignes et le déroulement décidés par l'enseignant sont respectés.",
        "Le matériel pédagogique est installé et remis en état dans le respect des consignes.",
        "La régulation des relations dans le groupe favorise la sérénité de classe.",
        "Les observations sur le déroulement des activités sont partagées avec l'enseignant.",
        "La posture reste dans le périmètre d'assistance, sans empiéter sur la responsabilité pédagogique.",
      ],
    },
    {
      numero: 10,
      intitule: 'Assurer des activités de remise en état des matériels et des locaux',
      ccpNumero: 2,
      miseEnOeuvre:
        "L'accompagnant participe aux travaux collectifs de l'établissement (rangement, préparation de fêtes, gestion des réserves), réalise le nettoyage quotidien des locaux et sanitaires, et contribue à l'entretien des espaces pendant les vacances scolaires. Il respecte les protocoles d'hygiène, intègre les écogestes (développement durable) et trace les opérations dans les documents prévus.",
      criteresPerformance: [
        "Les règles d'hygiène, de sécurité et d'ergonomie sont strictement respectées.",
        "Le développement durable est pris en compte (écogestes, dosage produits).",
        "Les protocoles, procédures et niveaux de consommation sont respectés.",
        "Les documents de traçabilité sont correctement renseignés.",
        "La réaction aux situations imprévues reste dans la limite des compétences.",
      ],
    },
    {
      numero: 11,
      intitule: 'Organiser son action',
      ccpNumero: 3,
      miseEnOeuvre:
        "En accueil individuel (domicile, MAM, crèche familiale), l'accompagnant planifie l'organisation de la journée en fonction des rythmes de chaque enfant accueilli, des consignes du parent employeur et des contraintes matérielles. Il anticipe les besoins (matériel, alimentation, sorties), gère son temps avec autonomie et adapte son organisation aux imprévus tout en garantissant la sécurité.",
      criteresPerformance: [
        "L'organisation tient compte des rythmes individuels de chaque enfant.",
        "Les consignes du parent employeur sont respectées.",
        "L'anticipation des besoins matériels et logistiques est efficace.",
        "La gestion du temps est autonome et adaptée aux imprévus.",
        "La sécurité et le bien-être de l'enfant restent prioritaires en toute circonstance.",
      ],
    },
    {
      numero: 12,
      intitule: "Négocier le cadre de l'accueil",
      ccpNumero: 3,
      miseEnOeuvre:
        "À l'embauche puis en continu, l'accompagnant négocie avec le parent employeur les conditions de l'accueil : horaires, conditions matérielles, modalités éducatives, prestations annexes (repas, sorties, activités). Il formalise par écrit les accords (contrat de travail, projet d'accueil) et sait revisiter ces accords en cas d'évolution des besoins.",
      criteresPerformance: [
        "Les éléments du cadre (horaires, prestations, modalités éducatives) sont négociés clairement.",
        "Le projet d'accueil ou contrat est formalisé par écrit avec rigueur.",
        "Les évolutions de besoin sont anticipées et discutées avec le parent employeur.",
        "La relation contractuelle respecte les obligations légales (convention collective).",
      ],
    },
    {
      numero: 13,
      intitule: "Assurer les opérations d'entretien du logement et des espaces réservés à l'enfant",
      ccpNumero: 3,
      miseEnOeuvre:
        "L'accompagnant veille à la propreté et à la sécurité des espaces de vie de l'enfant : entretien quotidien des espaces réservés, nettoyage du matériel d'éveil et des jouets, gestion du linge, application des règles d'hygiène alimentaire. Il intègre les écogestes (économies d'énergie, tri, produits adaptés) et utilise des produits compatibles avec la présence de jeunes enfants.",
      criteresPerformance: [
        "L'entretien des espaces et du matériel est conforme aux règles d'hygiène.",
        "Les produits utilisés sont adaptés à la présence de jeunes enfants.",
        "Les écogestes sont intégrés dans la pratique quotidienne.",
        "Le linge et les surfaces sont gérés selon les protocoles sanitaires.",
      ],
    },
    {
      numero: 14,
      intitule: 'Élaborer des repas',
      ccpNumero: 3,
      miseEnOeuvre:
        "L'accompagnant compose et prépare des repas équilibrés adaptés à l'âge et aux besoins de l'enfant (repas sans allergènes selon PAI, intolérances alimentaires, régimes culturels ou religieux). Il respecte les règles d'hygiène alimentaire (chaîne du froid, conservation, traçabilité), prépare biberons et purées selon les protocoles, et accompagne le repas comme moment d'apprentissage et de plaisir.",
      criteresPerformance: [
        "Les repas sont équilibrés et adaptés à l'âge et aux besoins de l'enfant.",
        "Les allergies, intolérances et régimes spécifiques (PAI) sont strictement respectés.",
        "La chaîne du froid et les règles d'hygiène alimentaire sont garanties.",
        "Le repas est accompagné comme temps éducatif et de plaisir, pas seulement nutritionnel.",
        "La traçabilité des préparations est assurée.",
      ],
    },
  ],

  competencesTransversales: [
    {
      intitule: "Observer l'enfant et son contexte",
      description:
        "L'observation fine du jeune enfant est le socle de toutes les compétences du métier. L'accompagnant observe en permanence le développement psycho-affectif et psycho-moteur, les signes corporels, les rythmes, les interactions, et utilise ces observations pour ajuster son accompagnement, alerter en cas de signe d'altération, et nourrir les transmissions à l'équipe et aux parents.",
    },
    {
      intitule: 'Communiquer avec les enfants, les familles et les professionnels',
      description:
        "L'accompagnant communique en continu avec trois publics aux attentes différentes : le très jeune enfant (langage non-verbal, expressions corporelles, premières interactions), les familles (écoute, transparence, restitution), et l'équipe pluridisciplinaire (transmissions écrites et orales, contribution aux réunions, analyse de pratique). La justesse de la communication conditionne la qualité de l'accompagnement.",
    },
    {
      intitule: 'Adopter une posture éthique et professionnelle',
      description:
        "Posture de bienveillance, respect du secret professionnel et de la vie privée des familles, respect de la singularité de chaque enfant (handicap, vulnérabilité, culture, choix éducatifs des parents), neutralité et non-jugement, attention permanente à la sécurité affective et physique : l'éthique infuse chaque geste du quotidien dans le métier.",
    },
    {
      intitule: 'Travailler en équipe pluridisciplinaire',
      description:
        "Dans tous les contextes d'exercice (crèche, école maternelle, ACM, domicile, MAM), l'accompagnant s'inscrit dans un collectif : éducateurs de jeunes enfants, puéricultrices, infirmières, médecins, psychologues, enseignants, ATSEM, autres assistants maternels, parents. Il sait identifier sa place dans ce collectif, mobiliser les bonnes ressources et contribuer à la cohérence de la prise en charge.",
    },
    {
      intitule: 'Respecter les règles d\'hygiène, de sécurité et de santé au travail',
      description:
        "Cadre règlementaire fort : protocoles d'hygiène, gestes barrières, hygiène alimentaire (HACCP simplifié), prévention des risques pour l'enfant (chutes, étouffement, maltraitance), prévention des troubles musculo-squelettiques de l'accompagnant lui-même (gestes et postures), application des protocoles d'urgence. L'écogestion (économie d'énergie, tri, dosage produits) est intégrée à la pratique quotidienne.",
    },
  ],

  // ── Évaluation ──────────────────────────────────────────────
  modalitesEvaluation: {
    dureeEpreuveTotaleMinutes: 195,
    modalites: [
      {
        intitule: "EP1 — Accompagner le développement du jeune enfant (oral à partir d'un dossier)",
        dureeMinutes: 25,
        competencesEvaluees: [1, 2, 3, 4, 5, 6],
      },
      {
        intitule: 'EP2 — Exercer son activité en accueil collectif (écrit + mise en situation)',
        dureeMinutes: 100,
        competencesEvaluees: [7, 8, 9, 10],
      },
      {
        intitule: 'EP3 — Exercer son activité en accueil individuel (oral à partir d\'un dossier)',
        dureeMinutes: 25,
        competencesEvaluees: [11, 12, 13, 14],
      },
      { intitule: 'PSE (Prévention-Santé-Environnement) — écrit', dureeMinutes: 60, competencesEvaluees: [] },
    ],
    dossierTechnique: { pagesMin: 15, pagesMax: 25, chapitres: 3 },
    analysePratiquesProfessionnelles: { sujetsTiresAuSort: 0 },
    parCcp: [
      {
        ccpNumero: 1,
        intitule: 'UP1 (EP1) — Accompagner le développement du jeune enfant',
        typeEpreuve: "Évaluation orale à partir d'un dossier professionnel + entretien avec le jury (analyse réflexive)",
        dureeMinutes: 25,
        competencesEvaluees: [1, 2, 3, 4, 5, 6],
      },
      {
        ccpNumero: 2,
        intitule: 'UP2 (EP2) — Exercer son activité en accueil collectif',
        typeEpreuve: "Épreuve ponctuelle écrite (technologie + sciences médico-sociales) + mise en situation pratique",
        dureeMinutes: 100,
        competencesEvaluees: [7, 8, 9, 10],
      },
      {
        ccpNumero: 3,
        intitule: 'UP3 (EP3) — Exercer son activité en accueil individuel',
        typeEpreuve: "Évaluation orale à partir d'un projet d'accueil personnalisé (organisation d'une journée, repas, négociation cadre)",
        dureeMinutes: 25,
        competencesEvaluees: [11, 12, 13, 14],
      },
    ],
  },

  periodeEntreprise: {
    titreCompletHeures: 560,
    parCcpHeures: { 1: 280, 2: 140, 3: 140 },
  },

  // ── Contenu éditorial ───────────────────────────────────────
  contexteEvolution:
    "Le CAP Petite Enfance, créé en 1991, a été profondément refondu en février 2017 pour devenir le CAP Accompagnant Éducatif Petite Enfance (CAP AEPE). Cette refonte traduit plusieurs évolutions majeures du secteur de la petite enfance et de ses attentes pédagogiques.\n\nTrois moteurs expliquent la nouvelle architecture. D'abord, l'unification des trois grands modes d'exercice du métier — crèche/EAJE, école maternelle (ATSEM), accueil individuel à domicile (assistant maternel) — sous un référentiel commun. Le précédent CAP Petite Enfance n'était pas suffisamment adapté à l'exercice à domicile, qui mobilise pourtant l'écrasante majorité des professionnels du secteur en France. Le CAP AEPE pose un socle commun (UP1) puis spécialise sur les deux contextes (UP2 et UP3).\n\nEnsuite, le renforcement du référentiel autour de l'observation de l'enfant, du jeu libre et de l'expérimentation. Les neurosciences du jeune enfant et les approches Reggio / Pikler-Loczy ont influencé la formalisation des compétences UP1 : la posture d'observateur attentif et de facilitateur de l'autonomie y est désormais centrale, par opposition à la posture descendante d'animation d'activités prescrites.\n\nEnfin, l'intégration explicite de la dimension inclusive : prise en compte du handicap, des situations de vulnérabilité, protocoles d'accueil individualisés (PAI), repérage des signes de maltraitance et obligations de signalement. La compétence 6 (« Appliquer les protocoles liés à la santé de l'enfant ») a été renforcée pour outiller les professionnels face aux situations sensibles, tout en respectant les limites de leur champ d'intervention.\n\nLes périodes de formation en milieu professionnel (PFMP) sont fixées à 16 semaines minimum, réparties sur les trois contextes d'exercice pour garantir une polyvalence réelle. Les épreuves générales (UG) — Français/HG/EMC, Maths/Physique-Chimie, EPS, Prévention-Santé-Environnement — restent au programme avec une dispense possible pour les candidats déjà titulaires d'un diplôme de niveau égal ou supérieur.",
  accroche:
    "Générez l'arborescence pédagogique complète et le contenu des 3 blocs professionnels du CAP AEPE en moins de 3 semaines avec Syllabis.",

  // ── Arborescence Syllabis (preview section 7) ───────────────
  arborescenceSyllabis: {
    intitule: 'CAP Accompagnant Éducatif Petite Enfance (CAP-AEPE)',
    niveau: 'formation',
    children: [
      {
        intitule: "Bloc 1 — UP1 Accompagner le développement de l'enfant",
        niveau: 'bloc',
        children: [
          {
            intitule: "Module 1.1 — Observation et recueil d'informations",
            niveau: 'module',
            children: [
              {
                intitule: "Séquence 1.1.1 — Observer le développement de l'enfant",
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 1.1.1.1 — Repères du développement psycho-affectif 0-6 ans", niveau: 'seance' },
                  { intitule: 'Séance 1.1.1.2 — Repères du développement psycho-moteur', niveau: 'seance' },
                  { intitule: "Séance 1.1.1.3 — Grilles d'observation et cahier de transmissions", niveau: 'seance' },
                ],
              },
              {
                intitule: "Séquence 1.1.2 — Recueillir les informations du contexte",
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.1.2.1 — Habitudes de vie et choix éducatifs des parents', niveau: 'seance' },
                  { intitule: 'Séance 1.1.2.2 — PAI, allergies, situations de handicap', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 1.2 — Posture professionnelle et bienveillance',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.2.1 — Posture bienveillante et non-jugement',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.2.1.1 — Sécurité affective et valorisation', niveau: 'seance' },
                  { intitule: 'Séance 1.2.1.2 — Limites de compétences et orientation', niveau: 'seance' },
                  { intitule: 'Séance 1.2.1.3 — Démarche réflexive sur sa pratique', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 1.3 — Activités d'éveil, jeu libre et expérimentation",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.3.1 — Conditions favorables au jeu libre',
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 1.3.1.1 — Aménagement d'environnement sécurisé (intérieur/extérieur)", niveau: 'seance' },
                  { intitule: "Séance 1.3.1.2 — Approches Reggio, Pikler-Loczy, Montessori", niveau: 'seance' },
                ],
              },
              {
                intitule: "Séquence 1.3.2 — Concevoir et animer des activités d'éveil",
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 1.3.2.1 — Activités sensorielles 0-3 ans", niveau: 'seance' },
                  { intitule: 'Séance 1.3.2.2 — Activités motrices et créatives 3-6 ans', niveau: 'seance' },
                  { intitule: "Séance 1.3.2.3 — Éveil au langage et premières lectures", niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 1.4 — Soins du quotidien et santé',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.4.1 — Soins du quotidien',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.4.1.1 — Hygiène, change, propreté', niveau: 'seance' },
                  { intitule: 'Séance 1.4.1.2 — Alimentation et accompagnement du repas', niveau: 'seance' },
                  { intitule: 'Séance 1.4.1.3 — Sommeil et accompagnement au coucher', niveau: 'seance' },
                ],
              },
              {
                intitule: 'Séquence 1.4.2 — Protocoles santé et signalement',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.4.2.1 — Application du PAI et gestes adaptés', niveau: 'seance' },
                  { intitule: 'Séance 1.4.2.2 — Gestes de premiers secours (PSC1)', niveau: 'seance' },
                  { intitule: "Séance 1.4.2.3 — Repérage et signalement de la maltraitance", niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
      {
        intitule: "Bloc 2 — UP2 Exercer son activité en accueil collectif",
        niveau: 'bloc',
        children: [
          {
            intitule: "Module 2.1 — Coopération en équipe pluridisciplinaire",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.1.1 — Travail en équipe en EAJE et ACM',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.1.1.1 — Cartographier les acteurs (EJE, puéricultrices, médecin)', niveau: 'seance' },
                  { intitule: 'Séance 2.1.1.2 — Transmissions écrites et orales en collectif', niveau: 'seance' },
                  { intitule: 'Séance 2.1.1.3 — Participer aux réunions et analyse de pratiques', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 2.2 — Relation privilégiée et sécurisante avec l'enfant",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.2.1 — Accueil et transitions',
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 2.2.1.1 — Soigner l'arrivée et le départ de l'enfant", niveau: 'seance' },
                  { intitule: 'Séance 2.2.1.2 — Échanger avec la famille au quotidien', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 2.3 — ATSEM : assistance pédagogique en école maternelle",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.3.1 — Travailler sous responsabilité enseignante',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.3.1.1 — Préparer et installer les ateliers pédagogiques', niveau: 'seance' },
                  { intitule: "Séance 2.3.1.2 — Aide à la réalisation et surveillance en présence", niveau: 'seance' },
                  { intitule: "Séance 2.3.1.3 — Vie de classe : habitudes, règles, sorties scolaires", niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 2.4 — Hygiène et remise en état des espaces collectifs",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.4.1 — Protocoles hygiène collectifs',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.4.1.1 — Nettoyage quotidien des locaux et sanitaires', niveau: 'seance' },
                  { intitule: "Séance 2.4.1.2 — Produits adaptés, dosage et écogestes", niveau: 'seance' },
                  { intitule: 'Séance 2.4.1.3 — Documents de traçabilité', niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
      {
        intitule: "Bloc 3 — UP3 Exercer son activité en accueil individuel",
        niveau: 'bloc',
        children: [
          {
            intitule: "Module 3.1 — Organiser son action en accueil individuel",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 3.1.1 — Planification de la journée',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 3.1.1.1 — Adapter aux rythmes individuels', niveau: 'seance' },
                  { intitule: "Séance 3.1.1.2 — Anticiper besoins matériels et sorties", niveau: 'seance' },
                  { intitule: 'Séance 3.1.1.3 — Gérer les imprévus en autonomie', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 3.2 — Négocier le cadre avec le parent employeur",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 3.2.1 — Contrat et projet d\'accueil',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 3.2.1.1 — Convention collective et obligations légales', niveau: 'seance' },
                  { intitule: "Séance 3.2.1.2 — Rédiger le projet d'accueil personnalisé", niveau: 'seance' },
                  { intitule: 'Séance 3.2.1.3 — Renégocier le cadre en cas d\'évolution', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 3.3 — Entretien du logement et espaces réservés",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 3.3.1 — Hygiène en accueil individuel',
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 3.3.1.1 — Entretien des espaces et du matériel d'éveil", niveau: 'seance' },
                  { intitule: 'Séance 3.3.1.2 — Produits adaptés à la présence du jeune enfant', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 3.4 — Élaboration des repas',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 3.4.1 — Nutrition de l\'enfant 0-6 ans',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 3.4.1.1 — Besoins nutritionnels par tranche d\'âge', niveau: 'seance' },
                  { intitule: 'Séance 3.4.1.2 — Allergies, intolérances et régimes spécifiques', niveau: 'seance' },
                  { intitule: 'Séance 3.4.1.3 — Hygiène alimentaire et chaîne du froid', niveau: 'seance' },
                  { intitule: 'Séance 3.4.1.4 — Préparer les biberons et purées', niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── Métriques ───────────────────────────────────────────────
  metriques: {
    sansSyllabis: {
      arborescenceHeures: METRIC_AEPE_PRODUCTION_BREAKDOWN.arborescence.withoutSyllabis,
      contenuHeures: METRIC_AEPE_PRODUCTION_BREAKDOWN.contenu.withoutSyllabis,
      controleQualiteHeures: METRIC_AEPE_PRODUCTION_BREAKDOWN.controleQualite.withoutSyllabis,
    },
    avecSyllabis: {
      arborescenceHeures: METRIC_AEPE_PRODUCTION_BREAKDOWN.arborescence.withSyllabis,
      contenuHeures: METRIC_AEPE_PRODUCTION_BREAKDOWN.contenu.withSyllabis,
      controleQualiteHeures: METRIC_AEPE_PRODUCTION_BREAKDOWN.controleQualite.withSyllabis,
    },
  },
  capacitesSyllabis: [
    "Syllabis lit le référentiel RNCP28048 et propose en quelques minutes la structure complète blocs/modules/séquences/séances, en respectant strictement le découpage 3 blocs pros (UP1/UP2/UP3) imposé par l'Éducation Nationale. Le formateur conserve la main : il valide, ajuste et complète sub-bloc par sub-bloc avant génération du contenu — particulièrement utile pour intégrer les ressources locales (établissements partenaires, projets d'accueil spécifiques).",
    "Chaque séance est générée comme une page interactive FOAD intégrant les 40+ blocs de l'éditeur Syllabis : QCM sur les protocoles santé, vrai/faux sur les règles d'hygiène, scénarios branchés sur des situations d'accueil (gestion d'un PAI, mise en situation maltraitance), capsules vidéo sur les approches Reggio/Pikler/Montessori, infographies sur le développement 0-6 ans. Le contenu est aligné sur les résultats attendus et les indicateurs de performance du référentiel.",
    "Syllabis intègre nativement les ressources documentaires du référentiel : fiches de rythme de l'enfant, cahier de transmissions type, projet d'établissement, règlement intérieur, protocoles de soins, protocoles d'urgence et de signalement, consignes d'évacuation. Les contenus sont conformes aux textes en vigueur (arrêté du 22 février 2017, code de l'action sociale et des familles) et adaptés aux 3 contextes d'exercice professionnel.",
    "L'ensemble de la formation CAP AEPE est exportable en SCORM 1.2 prêt pour Moodle, 360Learning, Talentsoft, Canvas, Docebo et iSpring. Le manifeste injecte automatiquement le masteryscore correspondant aux exigences de chaque épreuve (EP1, EP2, EP3), et l'export est livré aux couleurs de votre organisme — logos, polices, palette, sans mention Syllabis.",
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faqs: [
    {
      question: "Quel est le code RNCP du CAP Accompagnant Éducatif Petite Enfance ?",
      answer:
        "Le CAP AEPE est enregistré au RNCP sous le code RNCP28048. Il a été créé par arrêté du 22 février 2017, première session 2019. Il correspond à un niveau 3 du Cadre National des Certifications et est délivré par le Ministère de l'Éducation Nationale, de la Jeunesse et des Sports. Il succède à l'ancien CAP Petite Enfance, qu'il a profondément réorganisé autour de 3 blocs professionnels (UP1, UP2, UP3) pour mieux refléter les trois contextes d'exercice du métier.",
    },
    {
      question: 'Quelle est la différence entre le CAP Petite Enfance et le CAP AEPE ?',
      answer:
        "Le CAP AEPE (2017) remplace l'ancien CAP Petite Enfance avec trois évolutions majeures : (1) un socle commun UP1 sur l'accompagnement de l'enfant 0-6 ans (observation, jeu libre, soins, santé) suivi de deux blocs spécifiques selon le contexte d'exercice — UP2 collectif (EAJE, école maternelle, ACM) et UP3 individuel (domicile, MAM) ; (2) le renforcement de la posture d'observation et de facilitateur de l'autonomie, inspirée des approches Reggio/Pikler-Loczy ; (3) l'intégration explicite de l'inclusion (handicap, PAI, repérage de la maltraitance). Les diplômés du CAP Petite Enfance n'ont pas besoin de repasser le CAP AEPE pour exercer.",
    },
    {
      question: 'Combien de temps faut-il pour créer un CAP AEPE complet avec Syllabis ?',
      answer:
        "Environ 112 heures avec Syllabis contre 1 480 heures en méthode traditionnelle, soit une économie de 1 368 heures sur l'ensemble du diplôme. Ce gain se répartit principalement sur l'arborescence pédagogique (7h vs 70h) et la production de contenu interactif aligné sur les 14 compétences professionnelles (70h vs 1 370h). Le contrôle qualité reste à 35h dans les deux cas — c'est un livrable humain incompressible, particulièrement sensible sur un référentiel impliquant des enfants.",
    },
    {
      question: 'Les contenus Syllabis sur les protocoles santé (PAI, premiers secours) sont-ils fiables ?',
      answer:
        "Oui, Syllabis génère du contenu conforme aux référentiels en vigueur : arrêté du 22 février 2017 portant création du CAP AEPE, circulaires PAI (BO Éducation Nationale n°34 du 18 septembre 2003 mise à jour 2021), recommandations HAS sur la maltraitance, protocoles PSC1 (formation aux premiers secours). Mais nous recommandons que les séances sur les gestes de premiers secours et les protocoles santé fassent l'objet d'un contrôle qualité par un professionnel de santé partenaire de votre organisme — c'est un point où l'erreur peut être grave.",
    },
    {
      question: 'Comment Syllabis intègre-t-il les périodes en milieu professionnel (PFMP) ?',
      answer:
        "Syllabis génère des séances de préparation et d'exploitation des PFMP : grilles d'observation à utiliser sur le terrain, carnet de stage structuré pour les 16 semaines obligatoires, séances de retour d'expérience post-PFMP et préparation aux épreuves orales EP1 et EP3 qui mobilisent ces périodes. Le séquençage typique : préparation 1 semaine → PFMP → restitution structurée → analyse réflexive en collectif → préparation au dossier professionnel.",
    },
    {
      question: 'Quelle est la durée de la période en milieu professionnel pour le CAP AEPE ?',
      answer:
        "Pour le diplôme complet, la PFMP est de 16 semaines minimum (560 heures), répartie sur les trois contextes d'exercice. La répartition recommandée : 8 semaines (280h) sur le bloc UP1 (commun aux 3 contextes), 4 semaines (140h) sur UP2 (collectif : EAJE ou école maternelle), 4 semaines (140h) sur UP3 (individuel : domicile, MAM ou crèche familiale). Pour les candidats en formation continue déjà en poste, la VAE et les dispenses (titulaires de diplôme niveau égal ou supérieur) sont accessibles.",
    },
    {
      question: 'Peut-on passer le CAP AEPE par VAE ? Syllabis aide-t-il à préparer les dossiers ?',
      answer:
        "Oui, le CAP AEPE est l'un des diplômes les plus accessibles par VAE. Le candidat doit produire des livrets 1 et 2 documentant son expérience professionnelle (1 an minimum à temps plein dans un établissement d'accueil de jeunes enfants). Syllabis n'est pas un outil de constitution de dossier VAE individuel — c'est un outil destiné aux organismes de formation qui conçoivent les parcours préparant au CAP AEPE. En revanche, les contenus que vous produisez avec Syllabis peuvent servir de support à l'accompagnement VAE de vos candidats (notamment pour la préparation à l'entretien avec le jury).",
    },
    {
      question: 'Le CAP AEPE en 3 blocs : peut-on les vendre séparément ?',
      answer:
        "Pour les CAP, l'Éducation Nationale ne reconnaît pas formellement la commercialisation des blocs comme des certifications indépendantes au même titre que les TP du Ministère du Travail. Cependant, vous pouvez tout à fait commercialiser des modules thématiques (par exemple « Petite enfance en école maternelle » axé sur UP2) pour des professionnels déjà en poste qui souhaitent monter en compétence sur un contexte spécifique. Syllabis génère l'arborescence et le contenu bloc par bloc, ce qui facilite cette modularisation commerciale.",
    },
    {
      question: 'Quels métiers sont accessibles après le CAP AEPE ?',
      answer:
        "Le CAP AEPE ouvre sur les emplois suivants selon le contexte d'exercice : en école maternelle = ATSEM (agent territorial spécialisé des écoles maternelles), Agent d'accompagnement à l'éducation de l'enfant, Adjoint d'animation ; en EAJE = Auxiliaire petite enfance, Agent social, Assistant éducatif petite enfance ; à domicile = Assistant maternel (sur agrément du Conseil départemental), Garde d'enfant à domicile, Employé familial auprès d'enfant. Il est rattaché aux codes ROME K1303 (Assistance auprès d'enfants), K1305 (Intervention sociale et familiale) et K1306 (Conseil en emploi et insertion socioprofessionnelle).",
    },
    {
      question: 'Comment Syllabis garantit-il la traçabilité Qualiopi pour le CAP AEPE ?',
      answer:
        "Syllabis trace automatiquement chaque génération de contenu (date, auteur, prompt, version du référentiel utilisée). Les éléments de preuve attendus par Qualiopi — progression pédagogique, scénario, activités d'évaluation, alignement objectifs-activités-évaluation — sont produits dans un format exportable et horodaté. Le critère 11 de Qualiopi (alignement pédagogique) est nativement respecté par l'architecture de l'outil. La dernière vérification du référentiel CAP AEPE date du 9 juin 2026.",
    },
  ],

  // ── Assets ──────────────────────────────────────────────────
  arborescenceScreenshot: {
    src: '/screenshots/arbo-aepe.png',
    alt: 'Arborescence pédagogique CAP AEPE générée par Syllabis : 3 blocs pros (UP1/UP2/UP3), 14 compétences, séances FOAD interactives',
  },
  ogImage: {
    src: '/og/rncp28048-aepe.jpg',
    alt: 'CAP Accompagnant Éducatif Petite Enfance (AEPE) — Syllabis',
    width: 1200,
    height: 630,
  },

  // ── SEO ─────────────────────────────────────────────────────
  seoTitle: 'CAP Accompagnant Éducatif Petite Enfance (RNCP28048) — Syllabis',
  seoDescription:
    "Créez le CAP AEPE (Accompagnant Éducatif Petite Enfance, RNCP28048) en 3 semaines : 3 blocs UP1/UP2/UP3, 14 compétences, SCORM marque blanche pour votre LMS.",
  keywordsPrimary: [
    'CAP AEPE',
    'CAP Accompagnant Éducatif Petite Enfance',
    'RNCP28048',
    'CAP Petite Enfance 2017',
    'créer une formation CAP AEPE',
    'référentiel CAP AEPE',
  ],
}
