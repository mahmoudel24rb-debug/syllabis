// Fiche formation TP NTC — Titre Professionnel Négociateur Technico-Commercial
//
// Source REAC : TP-00338 millésime 07, validation 17/05/2024.
// Référence locale : docs/Référentiel_Activités_Compétences_Evaluation_TP_NTC.pdf
//
// Structure : 2 activités types, 9 compétences professionnelles, 5 transversales.
// Notable : refonte 2024 — fusion des compétences "prospection physique" et
// "prospection à distance" du millésime 06 en une seule compétence
// "Prospecter un secteur défini". Intégration native de l'IA et de l'analyse
// de données dans toutes les compétences. Renforcement du volet éco-
// responsabilité (intégration du développement durable dans les propositions).

import type { Formation } from '@/types/formation'
import { METRIC_NTC_PRODUCTION_BREAKDOWN } from '@/data/metrics'

export const FORMATION_NTC: Formation = {
  // ── Identité ────────────────────────────────────────────────
  rncp: 'RNCP39063',
  codeTitre: 'TP-00338',
  millesime: '07',
  slug: 'rncp39063-titre-professionnel-negociateur-technico-commercial',
  intitule: 'Négociateur technico-commercial',
  sigle: 'NTC',
  alternateNames: ['TP NTC', 'Négociateur technico-commercial', 'TP-00338', 'Technico-commercial B2B'],

  // ── Classification ──────────────────────────────────────────
  niveau: 5,
  niveauLabel: 'Niveau 5 (Cadre national des certifications 2019)',
  certificateur: {
    name: "Ministère du Travail, de la Santé et des Solidarités",
    url: 'https://travail-emploi.gouv.fr',
  },
  concepteur: { name: 'AFPA', url: 'https://www.afpa.fr' },
  codesNSF: ['312t'],
  codeROME: 'D1407',
  formacodes: ['34076', '34085', '34093', '34052', '34054'],
  conventionCollective: 'Convention collective nationale des commerces de gros du 23 juin 1970',

  // ── Dates (ISO 8601) ────────────────────────────────────────
  dateValidation: '2024-05-17',
  dateArrete: '2024-05-17',
  dateJO: '2024-05-25',
  dateEffet: '2024-09-01',
  derniereVerificationRNCP: '2026-06-09',

  // ── Structure pédagogique ───────────────────────────────────
  ccps: [
    {
      numero: 1,
      intitule: 'Élaborer une stratégie de prospection et la mettre en œuvre',
      definition:
        "Cette activité couvre l'amont du cycle commercial : veille sectorielle et concurrentielle, conception et pilotage du plan d'actions commerciales, prospection ciblée (inbound + outbound), et analyse des performances pour ajuster les actions correctives. L'IA et les outils CRM/e-CRM y sont intégrés en continu.",
      competenceNumeros: [1, 2, 3, 4],
    },
    {
      numero: 2,
      intitule: "Négocier une solution technique et commerciale et consolider l'expérience client",
      definition:
        "Le cœur de la relation client B2B : représentation de l'entreprise et e-réputation, conception de propositions technico-commerciales personnalisées intégrant la dimension écologique, négociation lors de rendez-vous physiques ou à distance, bilan d'activité et optimisation continue de la relation client à travers tous les points de contact.",
      competenceNumeros: [5, 6, 7, 8, 9],
    },
  ],

  competencesProfessionnelles: [
    {
      numero: 1,
      intitule: 'Assurer une veille commerciale',
      ccpNumero: 1,
      miseEnOeuvre:
        "Le négociateur technico-commercial organise sa veille concurrentielle et informationnelle en mobilisant les outils numériques et l'IA adaptés au contexte de son entreprise. Il analyse le positionnement des produits et services par rapport à la concurrence, suit l'évolution du marché et des technologies vertes, des changements réglementaires et des organisations éco-responsables du secteur. Il transmet ses analyses à la hiérarchie et formule des propositions argumentées contribuant aux orientations stratégiques.",
      criteresPerformance: [
        "Les outils de veille utilisés sont appropriés au contexte de l'entreprise.",
        "Les données recherchées sont pertinentes par rapport à l'objectif de la veille et sont actualisées en continu.",
        "La stratégie de veille est ajustée en fonction des évolutions du contexte sectoriel et concurrentiel.",
        "L'analyse du positionnement des produits et services est étayée par les données issues de la veille.",
        "Les propositions de veille sont argumentées et étayées par des données factuelles.",
      ],
    },
    {
      numero: 2,
      intitule: "Concevoir et organiser un plan d'actions commerciales",
      ccpNumero: 1,
      miseEnOeuvre:
        "À partir de la politique commerciale et des objectifs fixés, le négociateur contribue à l'élaboration du plan commercial : indicateurs clés de performance (KPI), actions à déployer, planning, modalités des bilans intermédiaires. Il adapte le plan aux spécificités du secteur, organise les actions en fonction des besoins et des attentes des entreprises prospects/clientes, et ajuste constamment en fonction des évolutions du marché et de l'environnement économique.",
      criteresPerformance: [
        "Le plan d'actions commerciales est élaboré en fonction des spécificités du secteur.",
        "Les besoins et les attentes spécifiques des entreprises prospects/clientes sont pris en compte.",
        "Les actions du plan commercial sont ajustées en fonction des évolutions du marché et des tendances sectorielles.",
        "Les opportunités de développement des affaires sont identifiées et exploitées.",
      ],
    },
    {
      numero: 3,
      intitule: 'Prospecter un secteur défini',
      ccpNumero: 1,
      miseEnOeuvre:
        "Le négociateur recueille les données relatives aux attentes et besoins des entreprises prospects via les outils CRM/e-CRM, les plateformes d'automatisation marketing et les outils d'IA. Il crée des personas par segment de marché, élabore une démarche de prospection combinant inbound (attirer par le contenu) et outbound (prospection directe), et contacte chaque prospect via le canal le plus pertinent. Il qualifie le contact, poursuit par un entretien de découverte des besoins et met à jour le fichier prospects/clients.",
      criteresPerformance: [
        "Les données relatives aux attentes et besoins des entreprises prospects/clientes sont recueillies de façon ciblée.",
        "Les outils CRM/e-CRM, l'automatisation marketing et l'IA sont utilisés à bon escient pour recueillir les données.",
        "Les personas sont créés à partir des données collectées.",
        "L'entreprise prospect est contactée par le canal le plus approprié à son persona.",
        "Le fichier prospects/clients est qualifié et mis à jour, les actions de prospection sont évaluées et ajustées en continu.",
      ],
    },
    {
      numero: 4,
      intitule: 'Analyser ses performances, élaborer et mettre en œuvre des actions correctives',
      ccpNumero: 1,
      miseEnOeuvre:
        "Le négociateur suit les KPI (nombre de ventes, leads générés, taux de conversion, chiffre d'affaires) et identifie les écarts entre objectifs et résultats. Il analyse les facteurs ayant contribué aux performances et propose des axes d'amélioration à la hiérarchie. Il détermine les ressources nécessaires aux ajustements en tenant compte des contraintes internes et de l'entreprise cliente, et coordonne leur mise en œuvre avec les services concernés.",
      criteresPerformance: [
        "Le suivi et l'analyse des KPI sont effectués régulièrement.",
        "Les écarts entre les résultats réalisés et les objectifs fixés sont analysés et expliqués.",
        "Les facteurs qui ont contribué aux performances et les obstacles rencontrés sont identifiés.",
        "Les propositions d'ajustement prennent en compte le contexte de l'entreprise et celui du client.",
        "Les actions correctives sont alignées avec les objectifs de l'entreprise.",
      ],
    },
    {
      numero: 5,
      intitule: "Représenter l'entreprise et valoriser son image",
      ccpNumero: 2,
      miseEnOeuvre:
        "Dans le respect de la politique commerciale et des valeurs de l'entreprise, le négociateur présente produits, services, savoir-faire et engagement développement durable de manière valorisante et adaptée à chaque contexte. Il crée et entretient un profil professionnel sur les réseaux sociaux conforme à la charte et aux consignes, veille en permanence à l'e-réputation, et assure une présence continue pour fidéliser l'entreprise cliente et consolider le positionnement de l'entreprise par rapport à la concurrence.",
      criteresPerformance: [
        "La présentation des produits, solutions, savoir-faire et services est valorisante et adaptée à l'interlocuteur et au canal de communication.",
        "Le profil professionnel est créé et utilisé sur les réseaux sociaux dans le respect de la charte et des consignes.",
        "L'e-réputation de l'entreprise est entretenue et surveillée en continu.",
      ],
    },
    {
      numero: 6,
      intitule: 'Concevoir une proposition technique et commerciale',
      ccpNumero: 2,
      miseEnOeuvre:
        "Le négociateur conçoit une proposition personnalisée à partir des données techniques recueillies en prospection et de l'analyse de l'offre concurrente. Il intègre la dimension développement durable, vérifie la faisabilité technique et la rentabilité commerciale avec les services internes (techniques, financiers, marketing), et construit un argumentaire de vente cohérent. Il anticipe les objections et prépare la présentation sur les supports adaptés au canal de communication prévu.",
      criteresPerformance: [
        "Les informations relatives aux besoins de l'entreprise prospect/cliente sont recueillies de manière exhaustive.",
        "L'offre de la concurrence est analysée et intégrée à la proposition.",
        "La proposition technique et commerciale personnalisée est en adéquation avec les objectifs et priorités de l'entreprise prospect/cliente.",
        "La proposition intègre les éléments liés au développement durable.",
        "Les avantages tangibles et intangibles sont mis en avant, la proposition est réalisable techniquement et rentable commercialement.",
      ],
    },
    {
      numero: 7,
      intitule: 'Négocier une solution technique et commerciale',
      ccpNumero: 2,
      miseEnOeuvre:
        "À partir d'une proposition validée en interne, le négociateur conduit la négociation lors d'un rendez-vous physique ou à distance. Il adopte une posture d'expert-conseil, illustre et argumente les avantages de la solution et son adéquation avec les besoins actuels ou futurs du client, intègre la dimension écologique pour sensibiliser aux conséquences à moyen et long terme. Il traite les objections de manière factuelle, valorise la solution, conclut la vente et assure le suivi continu de sa mise en œuvre.",
      criteresPerformance: [
        "La négociation de la solution répond aux attentes de l'entreprise prospect/cliente.",
        "La présentation est personnalisée et s'appuie sur des supports adaptés.",
        "La posture d'expert-conseil est adoptée tout au long de l'échange.",
        "Les avantages du produit ou service sont illustrés avec le support adapté.",
        "La dimension écologique est intégrée dans les échanges, les objections sont traitées de manière factuelle et valorisent la solution.",
      ],
    },
    {
      numero: 8,
      intitule: 'Réaliser le bilan, ajuster son activité commerciale et rendre compte',
      ccpNumero: 2,
      miseEnOeuvre:
        "À partir des données du CRM/e-CRM, le négociateur réalise un bilan exhaustif de son activité sur une période déterminée. Il dégage les tendances, analyse les écarts entre résultats et objectifs, propose des mesures correctives en priorisant les actions à fort impact. Il collabore avec les services concernés pour mettre en œuvre les ajustements et rend compte à sa hiérarchie via rapports, présentations et comptes-rendus clairs et exploitables par des tiers.",
      criteresPerformance: [
        "Le bilan de l'activité commerciale est régulièrement réalisé et analysé.",
        "Les écarts entre les résultats obtenus et les objectifs fixés sont analysés.",
        "Les propositions de mesures correctives mènent à des ajustements réalisables.",
        "Les nouvelles opportunités sont identifiées et les plans d'actions sont élaborés.",
        "Les comptes rendus sont clairs et exploitables par des tiers.",
      ],
    },
    {
      numero: 9,
      intitule: 'Optimiser la gestion de la relation client',
      ccpNumero: 2,
      miseEnOeuvre:
        "Le négociateur assure le suivi de la mise en œuvre des solutions vendues, identifie les opportunités d'amélioration et actualise les personas. Il anticipe proactivement les besoins clients pour maintenir un partenariat privilégié. Il collabore avec les services internes pour garantir la cohérence de l'expérience client à travers tous les points de contact, et favorise une communication régulière et transparente pour cultiver des relations durables fondées sur la satisfaction et la confiance mutuelle.",
      criteresPerformance: [
        "Le suivi de la mise en œuvre des solutions de l'entreprise cliente est assuré.",
        "Les opportunités d'amélioration de l'offre sont identifiées pour actualiser les personas.",
        "Les besoins sont anticipés et les propositions sont améliorées de manière proactive.",
        "L'expérience client est cohérente à travers tous les points de contact.",
        "La communication avec les entreprises clientes est régulière et transparente.",
      ],
    },
  ],

  competencesTransversales: [
    {
      intitule: 'Communiquer',
      description:
        "Le négociateur technico-commercial communique en continu avec une diversité d'interlocuteurs internes (hiérarchie, équipes techniques, marketing, support) et externes (prospects, clients, partenaires). Il adapte son discours à chaque cible, formule des arguments précis, rédige des comptes-rendus clairs et exploite tous les canaux — face-à-face, distanciel, réseaux sociaux professionnels — pour maintenir une communication efficace et transparente.",
    },
    {
      intitule: "Adopter un comportement orienté vers l'autre",
      description:
        "Posture d'écoute active, climat de confiance, attention aux besoins et contraintes de l'interlocuteur, prise en compte des situations de handicap : le négociateur ajuste en permanence sa relation pour comprendre les besoins profonds du client, anticiper ses attentes et adopter une posture de service au quotidien.",
    },
    {
      intitule: 'Rechercher un accord',
      description:
        "Le négociateur mobilise les techniques de négociation pour faire converger les intérêts de l'entreprise et ceux du client. Il argumente, traite les objections avec pertinence et persévérance, sait reformuler, valoriser et défendre le prix tout en préservant la relation à long terme. L'objectif est un accord mutuellement bénéfique, pas une victoire à court terme.",
    },
    {
      intitule: 'Évaluer ses actions',
      description:
        "Le négociateur analyse en continu ses propres performances commerciales : taux de conversion, qualité des prospects générés, marge réalisée, fidélisation. Il identifie les écarts entre objectifs et résultats, en tire les enseignements et ajuste ses actions sans attendre de directive hiérarchique.",
    },
    {
      intitule: 'Mettre en œuvre une démarche de résolution de problème',
      description:
        "Face à une objection complexe, un dossier client litigieux ou une chute de performance, le négociateur structure son analyse : description factuelle de la situation, identification des causes, génération d'options, choix d'une action et mesure de son impact. La démarche réflexive est continue et s'enrichit des retours du terrain.",
    },
  ],

  // ── Évaluation ──────────────────────────────────────────────
  modalitesEvaluation: {
    dureeEpreuveTotaleMinutes: 240,
    modalites: [
      {
        intitule: 'Mise en situation professionnelle (entretien de négociation simulé)',
        dureeMinutes: 60,
        competencesEvaluees: [5, 6, 7],
      },
      {
        intitule: 'Entretien technique',
        dureeMinutes: 30,
        competencesEvaluees: [1, 2, 3, 4, 8, 9],
      },
      {
        intitule: "Questionnement à partir de productions (dossier projet)",
        dureeMinutes: 135,
        competencesEvaluees: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      { intitule: 'Entretien final', dureeMinutes: 15, competencesEvaluees: [] },
    ],
    dossierTechnique: { pagesMin: 25, pagesMax: 35, chapitres: 2 },
    analysePratiquesProfessionnelles: { sujetsTiresAuSort: 4 },
    parCcp: [
      {
        ccpNumero: 1,
        intitule: 'CCP 1 — Élaborer une stratégie de prospection et la mettre en œuvre',
        typeEpreuve: "Présentation d'un projet préparé en amont (dossier technique + oral) + entretien technique",
        dureeMinutes: 75,
        competencesEvaluees: [1, 2, 3, 4],
      },
      {
        ccpNumero: 2,
        intitule: "CCP 2 — Négocier une solution technique et commerciale et consolider l'expérience client",
        typeEpreuve: "Mise en situation (négociation simulée) + questionnement à partir de productions",
        dureeMinutes: 150,
        competencesEvaluees: [5, 6, 7, 8, 9],
      },
    ],
  },

  periodeEntreprise: {
    titreCompletHeures: 280,
    parCcpHeures: { 1: 140, 2: 140 },
  },

  // ── Contenu éditorial ───────────────────────────────────────
  contexteEvolution:
    "Le référentiel du Titre Professionnel Négociateur Technico-Commercial a fait l'objet en mai 2024 d'une refonte importante. La version 06 distinguait deux activités centrées sur l'élaboration d'une stratégie commerciale omnicanale et la prospection-négociation. La version 07, en vigueur depuis septembre 2024, conserve deux activités mais déplace le centre de gravité vers la stratégie de prospection en amont et vers la consolidation de l'expérience client en aval. Le nombre de compétences passe à 9, contre une organisation différente précédemment.\n\nTrois moteurs expliquent cette évolution. D'abord, la généralisation des outils d'intelligence artificielle dans l'activité commerciale : segmentation, scoring, personalisation à grande échelle, automatisation des campagnes. L'analyse de données et les ajustements continus sont désormais indissociables du métier. Ensuite, la distinction entre prospection physique et prospection à distance disparaît au profit d'une seule compétence « Prospecter un secteur défini » : le canal n'est plus structurant, c'est la qualité de la qualification et de la personnalisation qui prime. Enfin, la dimension développement durable infuse toutes les compétences : veille sur les technologies vertes, intégration des produits éco-responsables, sensibilisation des prospects aux conséquences environnementales de leurs choix à long terme.\n\nCôté contenu, deux nouveautés notables. La compétence « Optimiser la gestion de la relation client » devient centrale : elle valorise la fidélisation et l'expérience post-vente, au moment où les marchés B2B se saturent et où l'acquisition coûte plus cher que la rétention. À l'inverse, le e-CRM, l'automatisation marketing et l'IA cessent d'être des « outils » optionnels pour devenir des composantes obligatoires du référentiel, présentes dans presque toutes les compétences.",
  accroche:
    "Générez l'arborescence pédagogique complète et le contenu des 2 CCP du TP NTC en moins de 2 semaines avec Syllabis.",

  // ── Arborescence Syllabis (preview section 7) ───────────────
  arborescenceSyllabis: {
    intitule: 'Titre Professionnel Négociateur Technico-Commercial (TP-00338)',
    niveau: 'formation',
    children: [
      {
        intitule: 'Bloc 1 — Élaborer une stratégie de prospection et la mettre en œuvre',
        niveau: 'bloc',
        children: [
          {
            intitule: 'Module 1.1 — Assurer une veille commerciale',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.1.1 — Veille concurrentielle et informationnelle',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.1.1.1 — Identifier les sources et outils numériques de veille', niveau: 'seance' },
                  { intitule: "Séance 1.1.1.2 — Utiliser l'IA pour la veille (modèle BERT, automatisation)", niveau: 'seance' },
                  { intitule: 'Séance 1.1.1.3 — Analyser le positionnement concurrentiel et le marché', niveau: 'seance' },
                ],
              },
              {
                intitule: 'Séquence 1.1.2 — Intégrer la dimension éco-responsable à la veille',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.1.2.1 — Veille sur les technologies vertes et organisations ESS', niveau: 'seance' },
                  { intitule: "Séance 1.1.2.2 — Suivre les évolutions réglementaires (loi AGEC, loi climat et résilience)", niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 1.2 — Concevoir et organiser un plan d'actions commerciales",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.2.1 — Définir KPI et plan d\'actions',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.2.1.1 — Décliner les objectifs commerciaux en KPI mesurables', niveau: 'seance' },
                  { intitule: "Séance 1.2.1.2 — Construire un planning d'actions commerciales structuré", niveau: 'seance' },
                  { intitule: 'Séance 1.2.1.3 — Maîtriser CRM, e-CRM et plateformes marketing', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 1.3 — Prospecter un secteur défini',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.3.1 — Stratégie inbound + outbound',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.3.1.1 — Créer des personas à partir des données prospects', niveau: 'seance' },
                  { intitule: "Séance 1.3.1.2 — Concevoir une démarche outbound (téléphone, email, LinkedIn)", niveau: 'seance' },
                  { intitule: 'Séance 1.3.1.3 — Concevoir une démarche inbound (contenu, SEO, SEA)', niveau: 'seance' },
                ],
              },
              {
                intitule: "Séquence 1.3.2 — Conduire l'entretien de découverte",
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 1.3.2.1 — Techniques de questionnement et d'écoute active", niveau: 'seance' },
                  { intitule: 'Séance 1.3.2.2 — Qualifier et mettre à jour le fichier CRM', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 1.4 — Analyser ses performances et mettre en œuvre des actions correctives',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.4.1 — Pilotage par les indicateurs',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.4.1.1 — Construire et lire un tableau de bord commercial', niveau: 'seance' },
                  { intitule: 'Séance 1.4.1.2 — Calculer seuil de rentabilité, marge, taux de conversion', niveau: 'seance' },
                  { intitule: 'Séance 1.4.1.3 — Proposer et coordonner des actions correctives', niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
      {
        intitule: "Bloc 2 — Négocier une solution technique et commerciale et consolider l'expérience client",
        niveau: 'bloc',
        children: [
          {
            intitule: "Module 2.1 — Représenter l'entreprise et valoriser son image",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.1.1 — Personal branding et e-réputation',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.1.1.1 — Créer un profil professionnel cohérent avec la charte de l\'entreprise', niveau: 'seance' },
                  { intitule: "Séance 2.1.1.2 — Surveiller et entretenir l'e-réputation", niveau: 'seance' },
                  { intitule: 'Séance 2.1.1.3 — Réaliser un elevator pitch et un argumentaire adapté', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 2.2 — Concevoir une proposition technique et commerciale',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.2.1 — Analyse offre concurrente et conception',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.2.1.1 — Cartographier l\'offre concurrente et identifier les éléments différenciants', niveau: 'seance' },
                  { intitule: "Séance 2.2.1.2 — Intégrer la dimension développement durable à la proposition", niveau: 'seance' },
                  { intitule: 'Séance 2.2.1.3 — Vérifier la faisabilité technique et la rentabilité (collaboration interne)', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 2.3 — Négocier une solution technique et commerciale',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.3.1 — Négociation présentielle et distancielle',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.3.1.1 — Adopter une posture d\'expert-conseil et argumenter', niveau: 'seance' },
                  { intitule: "Séance 2.3.1.2 — Traiter les objections de manière factuelle et valorisante", niveau: 'seance' },
                  { intitule: 'Séance 2.3.1.3 — Conclure la vente et organiser le suivi', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 2.4 — Réaliser le bilan et ajuster son activité commerciale',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.4.1 — Bilan et reporting',
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 2.4.1.1 — Réaliser un bilan exhaustif d'activité à partir du CRM", niveau: 'seance' },
                  { intitule: 'Séance 2.4.1.2 — Rendre compte à la hiérarchie (rapports, présentations)', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 2.5 — Optimiser la gestion de la relation client',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.5.1 — Fidélisation et expérience client unifiée',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.5.1.1 — Anticiper les besoins via l\'IA et l\'e-CRM', niveau: 'seance' },
                  { intitule: "Séance 2.5.1.2 — Garantir la cohérence de l'expérience client multi-canaux", niveau: 'seance' },
                  { intitule: 'Séance 2.5.1.3 — Concevoir une offre de fidélisation ou réactivation', niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── Métriques (importées depuis metrics.ts — source unique) ─
  metriques: {
    sansSyllabis: {
      arborescenceHeures: METRIC_NTC_PRODUCTION_BREAKDOWN.arborescence.withoutSyllabis,
      contenuHeures: METRIC_NTC_PRODUCTION_BREAKDOWN.contenu.withoutSyllabis,
      controleQualiteHeures: METRIC_NTC_PRODUCTION_BREAKDOWN.controleQualite.withoutSyllabis,
    },
    avecSyllabis: {
      arborescenceHeures: METRIC_NTC_PRODUCTION_BREAKDOWN.arborescence.withSyllabis,
      contenuHeures: METRIC_NTC_PRODUCTION_BREAKDOWN.contenu.withSyllabis,
      controleQualiteHeures: METRIC_NTC_PRODUCTION_BREAKDOWN.controleQualite.withSyllabis,
    },
  },
  capacitesSyllabis: [
    "Syllabis lit la fiche RNCP39063 et propose en quelques minutes la structure complète blocs/modules/séquences/séances, en respectant strictement le découpage 2 CCP / 9 compétences imposé par le référentiel 2024. Le formateur conserve la main : il valide, ajuste et complète sub-bloc par sub-bloc avant génération du contenu.",
    "Chaque séance est générée comme une page interactive FOAD intégrant les 40+ blocs de l'éditeur Syllabis : QCM, vrai/faux, drag & drop, scénarios branchés de négociation, simulations d'entretiens prospect, calculs de marge et de rentabilité interactifs. Le contenu est aligné sur les critères de performance et la mise en œuvre détaillée de chaque compétence du REAC NTC.",
    "Syllabis intègre nativement la composante IA et e-CRM exigée par le nouveau référentiel 2024 : modèles de prompts métiers pour ChatGPT/Claude/Gemini appliqués à la prospection, simulations d'interactions CRM (Salesforce, HubSpot, Pipedrive), capsules vidéo sur l'analyse de données commerciales. La dimension écologique (loi AGEC, économie circulaire) est traitée transversalement dans toutes les compétences.",
    "L'ensemble de la formation NTC est exportable en SCORM 1.2 prêt pour Moodle, 360Learning, Talentsoft, Canvas, Docebo et iSpring. Le manifeste injecte automatiquement le masteryscore correspondant au score de réussite défini pour chaque évaluation, et l'export est livré aux couleurs de votre organisme — logos, polices, palette, sans mention Syllabis.",
  ],

  // ── FAQ (section 11) ────────────────────────────────────────
  faqs: [
    {
      question: 'Quel est le code RNCP du Titre Professionnel Négociateur Technico-Commercial ?',
      answer:
        "Le TP Négociateur Technico-Commercial est enregistré au RNCP sous le code RNCP39063. Son code titre officiel est TP-00338 (millésime 07), et il correspond à un niveau 5 du Cadre National des Certifications. Il est délivré par le Ministère du Travail, de la Santé et des Solidarités, sur la base d'un référentiel conçu par l'AFPA. La dernière version a été validée le 17 mai 2024 et est entrée en vigueur en septembre 2024.",
    },
    {
      question: 'Quelle est la différence entre le TP NTC millésime 06 et 07 ?',
      answer:
        "Le millésime 07 (mai 2024) garde 2 activités types mais redéfinit profondément leur périmètre. La distinction prospection physique / prospection à distance disparaît au profit d'une compétence unique « Prospecter un secteur défini ». L'IA, le CRM et l'e-CRM deviennent obligatoires dans presque toutes les compétences. La dimension développement durable infuse l'ensemble du référentiel (technologies vertes, économie circulaire, sensibilisation client). Et une compétence « Optimiser la gestion de la relation client » est mise au cœur de l'activité 2, valorisant la fidélisation post-vente.",
    },
    {
      question: 'Combien de temps faut-il pour créer un TP NTC complet avec Syllabis ?',
      answer:
        "Environ 96 heures avec Syllabis contre 1 190 heures en méthode traditionnelle, soit une économie de 1 094 heures sur l'ensemble du titre. Ce gain se répartit principalement sur l'arborescence pédagogique (6h vs 50h) et la production de contenu interactif aligné sur les 9 compétences (60h vs 1 100h). Le contrôle qualité Qualiopi reste à 30h dans les deux cas — c'est un livrable humain incompressible.",
    },
    {
      question: 'Syllabis intègre-t-il les nouveaux outils IA et CRM exigés par le référentiel 2024 ?',
      answer:
        "Oui, c'est l'un de nos cas d'usage centraux pour ce TP. Syllabis génère des séances dédiées à l'utilisation de ChatGPT/Claude/Gemini pour la veille concurrentielle, à la segmentation prospect via l'IA, à l'automatisation marketing et à la maîtrise des CRM majeurs (Salesforce, HubSpot, Pipedrive). Les nouveaux savoirs exigés (modèle BERT, stratégie SEM/SEO/SEA, content pruning) sont couverts par des modules dédiés avec exercices pratiques.",
    },
    {
      question: 'La dimension développement durable est-elle bien couverte par Syllabis pour le NTC ?',
      answer:
        "Oui, conformément au référentiel 2024 qui infuse cette dimension dans toutes les compétences. Syllabis génère du contenu sur la loi AGEC, la loi climat et résilience, l'indice de réparabilité, l'économie circulaire et l'empreinte carbone des usages numériques. La sensibilisation des prospects/clients aux conséquences environnementales de leurs choix à long terme est intégrée dans les séances de négociation, et la veille sur les technologies vertes fait partie du module dédié à la veille commerciale.",
    },
    {
      question: "Quelle est la durée de la période en entreprise pour valider le TP NTC ?",
      answer:
        "Pour le titre complet en parcours de formation continue, la période en entreprise obligatoire est de 280 heures minimum, à attester auprès du responsable de session d'examen. Par CCP, elle est de 140 heures pour le CCP1 (stratégie de prospection) et 140 heures pour le CCP2 (négociation et expérience client). Pour les candidats en contrat d'alternance, cette période est incluse dans le temps de travail en entreprise. La VAE n'impose pas de période en entreprise dédiée.",
    },
    {
      question: 'Peut-on passer le TP NTC par VAE ? Syllabis aide-t-il à préparer le dossier technique ?',
      answer:
        "Oui, le TP NTC est accessible par VAE. Le candidat doit produire un dossier professionnel structuré autour des deux activités types et de leurs 9 compétences, plus un dossier technique de 25 à 35 pages. Syllabis n'est pas un outil de constitution de dossier VAE individuel — c'est un outil destiné aux organismes de formation qui conçoivent les parcours préparant au TP NTC. Les contenus produits avec Syllabis peuvent servir de support à l'accompagnement VAE de vos candidats.",
    },
    {
      question: "Le TP NTC en 2 CCP : peut-on les vendre séparément en blocs de compétences ?",
      answer:
        "Oui, chaque CCP est juridiquement un bloc de compétences certifiant indépendamment. Vous pouvez commercialiser un parcours pour un seul CCP (par exemple le CCP1 « Élaborer une stratégie de prospection », très demandé par les commerciaux sédentaires en reconversion) avec sa propre période en entreprise (140h) et son examen dédié. Syllabis génère l'arborescence et le contenu CCP par CCP, ce qui facilite la modularisation.",
    },
    {
      question: 'Quels métiers sont accessibles après le TP NTC ?',
      answer:
        "Le TP NTC ouvre sur les emplois de Technico-commercial, Chargé d'affaires B2B, Responsable grands comptes, Responsable d'affaires, Chargé clientèle B2B, Chargé de développement commercial, Commercial B2B, Business developer, Sales account executive et Key account manager. Il est rattaché aux codes ROME D1402 (Relation commerciale grands comptes), D1406 (Management en force de vente) et D1407 (Relation technico-commerciale).",
    },
    {
      question: "Comment Syllabis garantit-il la traçabilité Qualiopi pour le TP NTC ?",
      answer:
        "Syllabis trace automatiquement chaque génération de contenu (date, auteur, prompt, version du référentiel utilisée). Les éléments de preuve attendus par Qualiopi — progression pédagogique, scénario, activités d'évaluation, alignement objectifs-activités-évaluation — sont produits dans un format exportable et horodaté. L'alignement pédagogique est nativement respecté par l'architecture de l'outil. La dernière vérification du référentiel NTC date du 9 juin 2026.",
    },
  ],

  // ── Assets ──────────────────────────────────────────────────
  arborescenceScreenshot: {
    src: '/screenshots/arbo-ntc.png',
    alt: 'Arborescence pédagogique TP NTC générée par Syllabis : 2 CCP, 9 compétences, séances FOAD interactives',
  },
  ogImage: {
    src: '/og/rncp39063-ntc.jpg',
    alt: 'Titre Professionnel Négociateur Technico-Commercial (NTC) — Syllabis',
    width: 1200,
    height: 630,
  },

  // ── SEO ─────────────────────────────────────────────────────
  seoTitle: 'TP Négociateur Technico-Commercial NTC (RNCP39063) — Syllabis',
  seoDescription:
    "Créez le TP Négociateur Technico-Commercial (NTC, RNCP39063) en 2 semaines : 2 CCP, 9 compétences, IA et CRM intégrés, SCORM marque blanche prêt pour votre LMS.",
  keywordsPrimary: [
    'titre professionnel négociateur technico-commercial',
    'TP NTC',
    'RNCP39063',
    'négociateur technico-commercial RNCP',
    'référentiel NTC 2024',
    'créer une formation négociateur commercial',
  ],
}
