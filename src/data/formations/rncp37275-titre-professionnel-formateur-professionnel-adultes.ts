// Fiche formation TP FPA — Titre Professionnel Formateur Professionnel d'Adultes
//
// Source REAC : TP-00350 millésime 07, validation 21/12/2022.
// Référence locale : docs/Référentiel_Activités_Compétences_Evaluation_TP_FPA.pdf
// Source paraphrases : docs/paraphrases-fpa-e2.md (sub-bloc E.2).

import type { Formation } from '@/types/formation'
import { METRIC_FPA_PRODUCTION_BREAKDOWN } from '@/data/metrics'

export const FORMATION_FPA: Formation = {
  // ── Identité ────────────────────────────────────────────────
  rncp: 'RNCP37275',
  codeTitre: 'TP-00350',
  millesime: '07',
  slug: 'rncp37275-titre-professionnel-formateur-professionnel-adultes',
  intitule: "Formateur professionnel d'adultes",
  sigle: 'FPA',
  alternateNames: ['TP FPA', "Formateur d'adultes", 'TP-00350'],

  // ── Classification ──────────────────────────────────────────
  niveau: 5,
  niveauLabel: 'Niveau 5 (Cadre national des certifications 2019)',
  certificateur: {
    name: "Ministère du Travail, du Plein Emploi et de l'Insertion",
    url: 'https://travail-emploi.gouv.fr',
  },
  concepteur: { name: 'AFPA', url: 'https://www.afpa.fr' },
  codesNSF: ['333m', '333t'],
  codeROME: 'K2111',
  formacodes: ['44586', '44542', '44517', '15084', '15041'],
  conventionCollective: 'Convention collective nationale des organismes de formation du 10 juin 1988',

  // ── Dates (ISO 8601) ────────────────────────────────────────
  dateValidation: '2022-12-21',
  dateArrete: '2022-12-07',
  dateJO: '2022-12-17',
  dateEffet: '2023-04-29',
  derniereVerificationRNCP: '2026-05-21',

  // ── Structure pédagogique ───────────────────────────────────
  ccps: [
    {
      numero: 1,
      intitule: 'Concevoir et préparer la formation',
      definition:
        "Cette activité couvre toute la phase amont : analyse de la demande, traduction en objectifs pédagogiques, conception du scénario multimodal et production des ressources (activités, capsules, évaluations) avant le démarrage de la formation.",
      competenceNumeros: [1, 2, 3],
    },
    {
      numero: 2,
      intitule: 'Animer une formation et évaluer les acquis des apprenants',
      definition:
        "Le cœur opérationnel du métier : conduire les séances dans toutes les modalités (présentiel, distance, alternance), évaluer la progression selon le principe d'alignement pédagogique, et diagnostiquer les difficultés individuelles pour y remédier.",
      competenceNumeros: [4, 5, 6],
    },
    {
      numero: 3,
      intitule: 'Accompagner les apprenants en formation',
      definition:
        "L'accompagnement global et individualisé des apprenants tout au long du parcours : positionnement initial, suivi régulier, tutorat à distance et accompagnement vers l'insertion ou le maintien dans l'emploi.",
      competenceNumeros: [7, 8, 9, 10],
    },
    {
      numero: 4,
      intitule:
        "Inscrire sa pratique professionnelle dans une démarche de qualité et de responsabilité sociale des entreprises",
      definition:
        "La dimension transverse du métier : conformité Qualiopi, veille règlementaire et pédagogique, analyse réflexive des pratiques, et application des principes RSE (non-discrimination, écogestes, santé et sécurité).",
      competenceNumeros: [11, 12, 13],
    },
  ],

  competencesProfessionnelles: [
    {
      numero: 1,
      intitule: "Elaborer la progression pédagogique d'une formation multimodale à partir d'une demande",
      ccpNumero: 1,
      miseEnOeuvre:
        "Le formateur décode la commande formelle (cahier des charges) ou informelle, identifie les compétences et savoirs à acquérir, caractérise les publics et leurs besoins d'accompagnement. Il traduit ensuite ces éléments en objectifs de formation, définit les étapes, choisit les modalités pédagogiques adaptées et planifie l'ensemble dans une progression et un plan d'accompagnement exploitables par des tiers.",
      criteresPerformance: [
        "L'analyse de la demande fait ressortir les compétences visées, les caractéristiques des publics et leurs besoins d'accompagnement.",
        "La progression pédagogique formalise objectifs, étapes, modalités et durées de la formation.",
        "Le plan d'accompagnement précise les étapes, modalités et durées de l'accompagnement associé.",
        "Le cadre contractuel, financier et les moyens disponibles sont intégrés dans la conception.",
      ],
    },
    {
      numero: 2,
      intitule: "Concevoir un scénario pédagogique et d'accompagnement en intégrant la multimodalité",
      ccpNumero: 1,
      miseEnOeuvre:
        "À partir de la progression, le formateur décline les objectifs de formation en objectifs pédagogiques opérationnels et structure les étapes du scénario. Il décrit chaque situation d'apprentissage, d'évaluation et d'accompagnement avec ses intentions, méthodes, activités, outils et modalités, et anticipe les difficultés en prévoyant des scénarii alternatifs.",
      criteresPerformance: [
        "Le scénario s'articule autour d'objectifs pédagogiques explicites avec étapes clés et durées précisées.",
        "Chaque situation décrit ses intentions, méthodes, activités, outils, ressources et modalités.",
        "Le cadre contractuel et règlementaire est respecté, et l'hétérogénéité des publics prise en compte.",
        "Des scénarii alternatifs anticipent les difficultés d'apprentissage.",
        "Les moyens et l'organisation prévus permettent d'anticiper concrètement la mise en œuvre.",
      ],
    },
    {
      numero: 3,
      intitule: "Concevoir des activités d'apprentissage et d'évaluation en intégrant la multimodalité",
      ccpNumero: 1,
      miseEnOeuvre:
        "Le formateur fait l'état des lieux des ressources disponibles, identifie ce qui manque et conçoit les activités, supports et capsules pédagogiques nécessaires. Pour chaque ressource, il rédige consignes, contenus et corrigés à partir d'un plan ou d'un storyboard, en respectant les règles d'accessibilité, la propriété intellectuelle et les principes des pédagogies actives.",
      criteresPerformance: [
        "L'état des lieux distingue les ressources existantes mobilisables et celles à créer.",
        "Les ressources sont alignées sur l'objectif visé, le public, les règles d'hygiène et de sécurité et la règlementation du domaine.",
        "Activités et capsules pédagogiques sont produites à partir d'un plan ou storyboard.",
        "Les consignes destinées aux apprenants et aux formateurs sont sans ambiguïté.",
        "La règlementation sur la propriété intellectuelle est strictement respectée.",
      ],
    },
    {
      numero: 4,
      intitule: 'Animer une formation et faciliter les apprentissages selon différentes modalités',
      ccpNumero: 2,
      miseEnOeuvre:
        "Le formateur déroule le scénario en présentiel, à distance ou en comodalité, en explicitant aux apprenants les objectifs et étapes de la séance. Il mobilise des méthodes actives, ajuste son animation aux besoins du groupe et adopte une posture de facilitation qui encourage la collaboration, l'autonomie et la participation de chacun.",
      criteresPerformance: [
        "Les apprentissages sont replacés dans la progression pédagogique d'ensemble.",
        "Les objectifs et étapes de l'animation sont annoncés aux apprenants.",
        "Les consignes pour réaliser les activités et utiliser les ressources sont claires.",
        "Méthodes et techniques sont adaptées aux objectifs et au public.",
        "Le scénario est respecté, les écarts éventuels sont justifiés ; la dynamique de groupe et la participation sont favorisées.",
      ],
    },
    {
      numero: 5,
      intitule: 'Evaluer les acquis de formation des apprenants',
      ccpNumero: 2,
      miseEnOeuvre:
        "À partir des objectifs visés, du référentiel et des caractéristiques des apprenants, le formateur conçoit les outils d'évaluation (critères, indicateurs, activités), puis met en œuvre des évaluations diagnostiques, formatives ou sommatives. Il analyse les écarts entre objectifs et résultats, restitue ces résultats aux apprenants dans un climat de bienveillance et en tire les actions correctrices ou la validation des acquis.",
      criteresPerformance: [
        "Modalités et activités d'évaluation sont cohérentes avec le public et les moyens disponibles.",
        "Évaluations et référentiel ou cahier des charges sont alignés.",
        "Critères et indicateurs sont adaptés aux objectifs visés.",
        "Les consignes des activités d'évaluation sont explicites.",
        "La restitution permet aux apprenants d'identifier leurs acquis et axes de progrès.",
      ],
    },
    {
      numero: 6,
      intitule: "Remédier aux difficultés individuelles d'apprentissage",
      ccpNumero: 2,
      miseEnOeuvre:
        "En observant les comportements, les interactions et les résultats des apprenants, le formateur repère les difficultés individuelles d'apprentissage. Il conduit une démarche diagnostique pour en identifier les causes, co-construit avec l'apprenant une stratégie de remédiation et vérifie son efficacité, dans le respect des limites de son champ d'intervention.",
      criteresPerformance: [
        "Les difficultés individuelles sont repérées et formalisées.",
        "Une démarche diagnostique structurée est mise en œuvre.",
        "Les causes des difficultés sont identifiées.",
        "La stratégie de remédiation tient compte des causes, des caractéristiques de l'apprenant et de la progression collective.",
        "Le formateur respecte ses limites d'intervention et oriente vers les bons acteurs si besoin.",
      ],
    },
    {
      numero: 7,
      intitule: 'Accompagner les apprenants dans leur parcours de formation',
      ccpNumero: 3,
      miseEnOeuvre:
        "Le formateur conduit des entretiens d'accompagnement réguliers en s'appuyant sur des techniques structurées (écoute active, questionnement, conduite d'entretien). Il formalise la progression de chaque apprenant, ajuste son parcours si nécessaire, oriente vers les acteurs compétents pour les problématiques hors de son champ, et trace l'ensemble dans les outils de suivi exigés par le système qualité.",
      criteresPerformance: [
        "Les étapes du scénario d'accompagnement et les parcours individuels sont respectés.",
        "La conduite d'entretien mobilise des techniques adaptées à chaque situation.",
        "Les ajustements de parcours sont formalisés et argumentés.",
        "Le choix des acteurs sollicités correspond aux problématiques rencontrées.",
        "Les outils de suivi garantissent la traçabilité des parcours.",
      ],
    },
    {
      numero: 8,
      intitule: 'Accueillir un apprenant en formation et co-construire son parcours',
      ccpNumero: 3,
      miseEnOeuvre:
        "En début de formation, le formateur accueille individuellement chaque apprenant, mène le positionnement et en analyse les résultats pour identifier les pré-acquis et besoins. Lors d'un entretien de restitution, il valide avec l'apprenant les objectifs, étapes et modalités de son parcours, puis contractualise ces éléments pour adapter la formation à sa situation personnelle.",
      criteresPerformance: [
        "Le positionnement se déroule selon les étapes prévues.",
        "Les consignes données à l'apprenant sont explicites.",
        "Pré-acquis, besoins de formation et modalités préférentielles d'apprentissage sont identifiés.",
        "Objectifs, étapes et modalités du parcours sont validés avec l'apprenant.",
        "Parcours de formation et d'accompagnement sont formalisés par écrit.",
      ],
    },
    {
      numero: 9,
      intitule: 'Tutorer les apprenants à distance',
      ccpNumero: 3,
      miseEnOeuvre:
        "Compétence introduite en 2022, le tutorat à distance combine intervention proactive et réactive auprès des apprenants en FOAD. Le formateur identifie les besoins tutoraux (cognitifs, socio-affectifs, motivationnels, métacognitifs), guide l'usage de la plateforme, anime les outils collaboratifs et trace toutes ses interventions pour prévenir le décrochage et entretenir une communauté apprenante à distance.",
      criteresPerformance: [
        "Les interventions tutorales sont ajustées aux besoins des apprenants et à la situation.",
        "Le tutorat favorise l'autonomisation progressive de l'apprenant à distance.",
        "Le scénario tutoral est respecté, les modifications sont justifiées.",
        "Outils de communication collaboratifs sont animés et modérés.",
        "Toutes les interventions tutorales sont tracées dans un outil de suivi.",
      ],
    },
    {
      numero: 10,
      intitule: 'Accompagner le développement professionnel des apprenants',
      ccpNumero: 3,
      miseEnOeuvre:
        "Le formateur organise des temps individuels et collectifs centrés sur le projet professionnel de chacun. Il favorise la réflexivité, fait identifier les compétences et comportements acquis et restant à acquérir, accompagne la recherche de stage ou d'emploi, et dialogue avec le tuteur en entreprise pour suivre la progression en situation de travail.",
      criteresPerformance: [
        "Des temps d'accompagnement au projet professionnel sont planifiés et mis en œuvre.",
        "Situations d'évaluation et activités réflexives permettent aux apprenants d'identifier compétences et comportements liés à leur projet.",
        "Des situations d'apprentissage favorisent l'appropriation des compétences professionnelles et transversales nécessaires.",
        "Atouts et freins au projet professionnel sont identifiés avec l'apprenant.",
        "Les apprenants sont accompagnés concrètement dans leur recherche de stage ou d'emploi.",
      ],
    },
    {
      numero: 11,
      intitule: 'Respecter et faire respecter la règlementation en vigueur en formation et dans sa spécialité',
      ccpNumero: 4,
      miseEnOeuvre:
        "Le formateur intègre dans sa pratique l'ensemble du cadre règlementaire : obligations contractuelles, exigences Qualiopi, règles d'hygiène, santé et sécurité, principes RSE (non-discrimination, écogestes). Il collecte les éléments de preuve, rédige les bilans, prévient les comportements à risque et sensibilise les apprenants aux mêmes obligations dans leur futur exercice.",
      criteresPerformance: [
        "Obligations contractuelles et exigences du système qualité sont identifiées et appliquées.",
        "Éléments de suivi et de preuves Qualiopi sont collectés et mis à disposition.",
        "Bilans qualitatifs et quantitatifs tracent fidèlement le déroulement de la formation et des parcours.",
        "Situations à risque en hygiène, santé, sécurité, environnement ou discrimination sont identifiées.",
        "Les pratiques professionnelles favorisent l'appropriation des règles par les apprenants eux-mêmes.",
      ],
    },
    {
      numero: 12,
      intitule:
        'Réaliser une veille pour maintenir son expertise de formateur et de professionnel dans sa spécialité',
      ccpNumero: 4,
      miseEnOeuvre:
        "Le formateur met en place une veille structurée sur sa spécialité et sur la formation professionnelle : sources d'information fiables, événements significatifs, réseaux d'acteurs locaux. Il organise les données collectées, partage avec son équipe et actualise régulièrement ses contenus de formation, ses pratiques pédagogiques et son répertoire d'acteurs relais.",
      criteresPerformance: [
        "Sources d'information, événements et acteurs pertinents sont recensés.",
        "Données de veille sectorielle et pédagogique sont collectées et organisées.",
        "Acteurs locaux mobilisables pour répondre aux besoins des apprenants sont identifiés.",
        "Contenus de formation intègrent les évolutions sectorielles et pédagogiques.",
        "La règlementation de la spécialité et de la formation professionnelle est maîtrisée.",
      ],
    },
    {
      numero: 13,
      intitule: 'Analyser ses pratiques professionnelles',
      ccpNumero: 4,
      miseEnOeuvre:
        "À partir de situations vécues, le formateur conduit une analyse de pratiques structurée : description factuelle, distinction faits/opinions/sentiments, identification des facteurs déterminants, mobilisation de cadres théoriques pertinents. Cette démarche réflexive lui permet d'ajuster ou capitaliser ses pratiques et d'être force de proposition pour améliorer le fonctionnement de son organisation.",
      criteresPerformance: [
        "La situation choisie est vécue et relève de la responsabilité du formateur.",
        "Faits, opinions et sentiments sont clairement distingués.",
        "Les facteurs déterminants de la situation sont identifiés.",
        "L'analyse suit une démarche formalisée et s'appuie sur des concepts ou méthodologies adaptés.",
        "Les propositions d'ajustement des pratiques sont pertinentes et opérationnelles.",
      ],
    },
  ],

  competencesTransversales: [
    {
      intitule: 'Communiquer',
      description:
        "Le formateur communique tout au long de la chaîne pédagogique : il conçoit des ressources lisibles par des tiers, dialogue au sein du collectif de travail, formule des consignes et rétroactions précises, conduit des entretiens et rédige les bilans qui assurent la traçabilité de la formation et du suivi des apprenants.",
    },
    {
      intitule: "Adopter un comportement orienté vers l'autre",
      description:
        "Posture de non-jugement et de facilitation, écoute active, climat de confiance, attention à l'hétérogénéité et aux situations particulières (handicap, troubles « Dys », allophonie, éloignement de l'emploi) : le formateur ajuste en permanence sa relation aux apprenants pour faciliter les apprentissages et prévenir les abandons.",
    },
    {
      intitule: 'Organiser ses actions',
      description:
        "Le formateur planifie et orchestre l'ensemble du dispositif : étapes de la formation et de l'accompagnement, durées, moyens, situations d'apprentissage individualisées, traçabilité qualité. Il sait anticiper les difficultés, prévoir les ressources logistiques et ajuster en cours de route sans perdre la cohérence d'ensemble.",
    },
  ],

  // ── Évaluation ──────────────────────────────────────────────
  modalitesEvaluation: {
    dureeEpreuveTotaleMinutes: 180,
    modalites: [
      { intitule: 'Mise en situation professionnelle', dureeMinutes: 55, competencesEvaluees: [13] },
      { intitule: 'Entretien technique', dureeMinutes: 20, competencesEvaluees: [8, 9] },
      {
        intitule: 'Questionnement à partir de productions',
        dureeMinutes: 95,
        competencesEvaluees: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
      },
      { intitule: 'Entretien final', dureeMinutes: 10, competencesEvaluees: [] },
    ],
    dossierTechnique: { pagesMin: 30, pagesMax: 45, chapitres: 4 },
    analysePratiquesProfessionnelles: { sujetsTiresAuSort: 6 },
    parCcp: [
      {
        ccpNumero: 1,
        intitule: 'CCP 1 — Concevoir et préparer la formation',
        typeEpreuve: "Présentation d'un projet préparé en amont (dossier technique + oral)",
        dureeMinutes: 35,
        competencesEvaluees: [1, 2, 3],
      },
      {
        ccpNumero: 2,
        intitule: 'CCP 2 — Animer une formation et évaluer les acquis des apprenants',
        typeEpreuve: "Présentation d'un projet préparé en amont (dossier technique + oral)",
        dureeMinutes: 30,
        competencesEvaluees: [4, 5, 6],
      },
      {
        ccpNumero: 3,
        intitule: 'CCP 3 — Accompagner les apprenants en formation',
        typeEpreuve: "Présentation d'un projet (dossier technique + oral) + entretien technique",
        dureeMinutes: 45,
        competencesEvaluees: [7, 8, 9, 10],
      },
      {
        ccpNumero: 4,
        intitule:
          'CCP 4 — Inscrire sa pratique professionnelle dans une démarche de qualité et de responsabilité sociale des entreprises',
        typeEpreuve: 'Mise en situation (analyse de pratiques) + questionnement à partir de productions',
        dureeMinutes: 80,
        competencesEvaluees: [11, 12, 13],
      },
    ],
  },

  periodeEntreprise: {
    titreCompletHeures: 315,
    parCcpHeures: { 1: 105, 2: 105, 3: 105, 4: 70 },
  },

  // ── Contenu éditorial ───────────────────────────────────────
  contexteEvolution:
    "Le référentiel du Titre Professionnel Formateur Professionnel d'Adultes a connu en décembre 2022 une refonte structurelle majeure. La version précédente, datée de 2017, organisait les 13 compétences du métier en deux activités types seulement. La version 07, actuellement en vigueur, conserve ce nombre de 13 compétences mais les répartit désormais sur quatre activités types — un découpage qui reflète la transformation profonde du métier.\n\nTrois moteurs expliquent cette évolution. D'abord la généralisation de la formation à distance, accélérée par les confinements successifs : les organismes de formation ont massivement intégré la multimodalité (présentiel, distanciel synchrone et asynchrone, comodalité, alternance, FEST). Ensuite, l'individualisation croissante des parcours, portée par les exigences des financeurs et des apprenants eux-mêmes. Enfin, le renforcement du cadre qualité par la loi du 5 septembre 2018 pour la liberté de choisir son avenir professionnel, qui a donné naissance à Qualiopi.\n\nCôté contenu, deux changements notables. La compétence « Concevoir l'ingénierie et les outils d'individualisation des parcours en utilisant les technologies numériques » a été supprimée en tant que telle, mais ses savoir-faire ont été redistribués dans les compétences de conception. À l'inverse, une compétence inédite est apparue : « Tutorer les apprenants à distance », qui acte la spécificité de l'accompagnement asynchrone et la prévention du décrochage en FOAD. Enfin, une quatrième activité type dédiée à la qualité et à la RSE traduit l'attente accrue de traçabilité, d'écogestes et de non-discrimination dans le secteur.",
  accroche:
    "Générez l'arborescence pédagogique complète et le contenu des 4 CCP du TP FPA en moins de 3 semaines avec Syllabis.",

  // ── Arborescence Syllabis (preview section 7) ───────────────
  arborescenceSyllabis: {
    intitule: "Titre Professionnel Formateur Professionnel d'Adultes (TP-00350)",
    niveau: 'formation',
    children: [
      {
        intitule: 'Bloc 1 — Concevoir et préparer la formation',
        niveau: 'bloc',
        children: [
          {
            intitule: 'Module 1.1 — Analyser une demande de formation',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.1.1 — Décoder cahier des charges et demande informelle',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.1.1.1 — Identifier les éléments contractuels et financiers', niveau: 'seance' },
                  { intitule: 'Séance 1.1.1.2 — Cartographier les publics cibles et leurs besoins', niveau: 'seance' },
                  { intitule: 'Séance 1.1.1.3 — Traduire les besoins en compétences et savoirs', niveau: 'seance' },
                ],
              },
              {
                intitule: 'Séquence 1.1.2 — Structurer la progression pédagogique multimodale',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.1.2.1 — Définir objectifs de formation et étapes', niveau: 'seance' },
                  { intitule: 'Séance 1.1.2.2 — Choisir les modalités (présentiel, distance, FEST)', niveau: 'seance' },
                  { intitule: "Séance 1.1.2.3 — Rédiger le plan d'accompagnement", niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 1.2 — Concevoir le scénario pédagogique et d'accompagnement",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.2.1 — Décliner objectifs pédagogiques et scénarii',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.2.1.1 — Aligner objectifs, activités et évaluations (triple concordance)', niveau: 'seance' },
                  { intitule: 'Séance 1.2.1.2 — Anticiper difficultés et scénarii alternatifs', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 1.3 — Concevoir activités et capsules pédagogiques',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 1.3.1 — Storyboard et production de ressources',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 1.3.1.1 — Rédiger des consignes explicites (méthode FALC)', niveau: 'seance' },
                  { intitule: 'Séance 1.3.1.2 — Produire une capsule pédagogique vidéo', niveau: 'seance' },
                  { intitule: "Séance 1.3.1.3 — Concevoir activités d'auto-formation et d'auto-évaluation", niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
      {
        intitule: 'Bloc 2 — Animer une formation et évaluer les acquis des apprenants',
        niveau: 'bloc',
        children: [
          {
            intitule: 'Module 2.1 — Animer en multimodalité',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.1.1 — Animation présentielle et distancielle',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.1.1.1 — Faciliter les apprentissages avec les pédagogies actives', niveau: 'seance' },
                  { intitule: 'Séance 2.1.1.2 — Entretenir la dynamique de groupe à distance', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 2.2 — Évaluer les acquis',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.2.1 — Concevoir et conduire des évaluations',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.2.1.1 — Évaluations diagnostique, formative, sommative', niveau: 'seance' },
                  { intitule: 'Séance 2.2.1.2 — Restituer et exploiter les résultats', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: "Module 2.3 — Remédier aux difficultés d'apprentissage",
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 2.3.1 — Diagnostic et remédiation individuelle',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 2.3.1.1 — Conduire une démarche diagnostique', niveau: 'seance' },
                  { intitule: 'Séance 2.3.1.2 — Construire une stratégie de remédiation', niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
      {
        intitule: 'Bloc 3 — Accompagner les apprenants en formation',
        niveau: 'bloc',
        children: [
          {
            intitule: 'Module 3.1 — Accueil et positionnement',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 3.1.1 — Co-construire le parcours individualisé',
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 3.1.1.1 — Conduire l'entretien de positionnement", niveau: 'seance' },
                  { intitule: 'Séance 3.1.1.2 — Formaliser le parcours contractualisé', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 3.2 — Suivi et accompagnement',
            niveau: 'module',
            children: [
              {
                intitule: "Séquence 3.2.1 — Entretiens d'accompagnement et ajustements de parcours",
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 3.2.1.1 — Techniques d'écoute active et de conduite d'entretien", niveau: 'seance' },
                  { intitule: 'Séance 3.2.1.2 — Tracer le suivi pour Qualiopi', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 3.3 — Tutorat à distance',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 3.3.1 — Fonctions tutorales en FOAD',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 3.3.1.1 — Identifier les besoins tutoraux (cognitif, socio-affectif, motivationnel, métacognitif)', niveau: 'seance' },
                  { intitule: 'Séance 3.3.1.2 — Animer une communauté apprenante asynchrone', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 3.4 — Développement professionnel et insertion',
            niveau: 'module',
            children: [
              {
                intitule: "Séquence 3.4.1 — Préparation à l'emploi et alternance",
                niveau: 'sequence',
                children: [
                  { intitule: "Séance 3.4.1.1 — Accompagner la recherche de stage et d'emploi", niveau: 'seance' },
                  { intitule: "Séance 3.4.1.2 — Suivre l'apprenant en entreprise et dialoguer avec le tuteur", niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
      {
        intitule: 'Bloc 4 — Inscrire sa pratique professionnelle dans une démarche de qualité et de RSE',
        niveau: 'bloc',
        children: [
          {
            intitule: 'Module 4.1 — Conformité règlementaire et qualité',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 4.1.1 — Système qualité et obligations Qualiopi',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 4.1.1.1 — Collecter les éléments de preuve Qualiopi', niveau: 'seance' },
                  { intitule: 'Séance 4.1.1.2 — Appliquer la règlementation hygiène-santé-sécurité', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 4.2 — Veille professionnelle et pédagogique',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 4.2.1 — Construire un dispositif de veille structuré',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 4.2.1.1 — Identifier sources, événements et réseaux pertinents', niveau: 'seance' },
                  { intitule: 'Séance 4.2.1.2 — Cartographier les acteurs locaux', niveau: 'seance' },
                ],
              },
            ],
          },
          {
            intitule: 'Module 4.3 — Analyse de pratiques professionnelles',
            niveau: 'module',
            children: [
              {
                intitule: 'Séquence 4.3.1 — Démarche réflexive structurée',
                niveau: 'sequence',
                children: [
                  { intitule: 'Séance 4.3.1.1 — Distinguer faits, opinions, sentiments', niveau: 'seance' },
                  { intitule: 'Séance 4.3.1.2 — Mobiliser des cadres théoriques d\'analyse', niveau: 'seance' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── Métriques (importées depuis metrics.ts — source unique) ─
  // NB: METRIC_FPA_PRODUCTION_BREAKDOWN est structuré par étape ; on remappe ici
  // vers la forme attendue par le type MetriquesProduction (sansSyllabis/avecSyllabis).
  metriques: {
    sansSyllabis: {
      arborescenceHeures: METRIC_FPA_PRODUCTION_BREAKDOWN.arborescence.withoutSyllabis,
      contenuHeures: METRIC_FPA_PRODUCTION_BREAKDOWN.contenu.withoutSyllabis,
      controleQualiteHeures: METRIC_FPA_PRODUCTION_BREAKDOWN.controleQualite.withoutSyllabis,
    },
    avecSyllabis: {
      arborescenceHeures: METRIC_FPA_PRODUCTION_BREAKDOWN.arborescence.withSyllabis,
      contenuHeures: METRIC_FPA_PRODUCTION_BREAKDOWN.contenu.withSyllabis,
      controleQualiteHeures: METRIC_FPA_PRODUCTION_BREAKDOWN.controleQualite.withSyllabis,
    },
  },
  capacitesSyllabis: [
    "Syllabis lit la fiche RNCP37275 et propose en quelques minutes la structure complète blocs/modules/séquences/séances, en respectant strictement le découpage 4 CCP / 13 compétences imposé par le référentiel. Le formateur conserve la main : il valide, ajuste et complète sub-bloc par sub-bloc avant génération du contenu.",
    "Chaque séance est générée comme une page interactive FOAD intégrant les 40+ blocs de l'éditeur Syllabis : QCM, vrai/faux, texte à trous, drag & drop, sorting, labels, scénarios branchés, vidéos commentées, infographies. Le contenu est aligné sur le contexte de mise en œuvre et les critères de performance de chaque compétence du REAC.",
    "Syllabis applique nativement la triple concordance de Biggs (objectifs → activités d'apprentissage → activités d'évaluation), exigée par le critère 11 de Qualiopi. Concrètement : impossible de générer une évaluation qui ne valide pas les objectifs pédagogiques annoncés. Cohérence garantie sur les 13 compétences et leurs critères associés.",
    "L'ensemble de la formation FPA est exportable en SCORM 1.2 prêt pour Moodle, 360Learning, Talentsoft, Canvas, Docebo et iSpring. Le manifeste injecte automatiquement le masteryscore correspondant au score de réussite défini pour chaque évaluation, et l'export est livré aux couleurs de votre organisme — logos, polices, palette, sans mention Syllabis.",
  ],

  // ── FAQ (section 11) ────────────────────────────────────────
  faqs: [
    {
      question: "Quel est le code RNCP du Titre Professionnel Formateur Professionnel d'Adultes ?",
      answer:
        "Le TP Formateur Professionnel d'Adultes est enregistré au RNCP sous le code RNCP37275. Son code titre officiel est TP-00350 (millésime 07), et il correspond à un niveau 5 du Cadre National des Certifications. Il est délivré par le Ministère du Travail, du Plein Emploi et de l'Insertion, sur la base d'un référentiel conçu par l'AFPA. La dernière version a été validée le 21 décembre 2022 et est entrée en vigueur le 29 avril 2023.",
    },
    {
      question: 'Quelle est la différence entre le TP FPA millésime 06 et 07 ?',
      answer:
        "Le millésime 07, en vigueur depuis avril 2023, conserve le nombre de 13 compétences mais les répartit désormais sur 4 activités types au lieu de 2 dans le millésime 06 (2017). Deux changements majeurs : la suppression de la compétence d'ingénierie d'individualisation (dont les savoir-faire ont été redistribués), et la création de deux nouvelles compétences sur le tutorat à distance et l'inscription dans une démarche qualité/RSE — reflet de la généralisation de la FOAD et du renforcement de Qualiopi.",
    },
    {
      question: 'Combien de temps faut-il pour créer un TP FPA complet avec Syllabis ?',
      answer:
        "Environ 128 heures avec Syllabis contre 1 720 heures en méthode traditionnelle, soit une économie de 1 592 heures sur l'ensemble du titre. Ce gain se répartit principalement sur l'arborescence pédagogique (8h vs 80h) et la production de contenu interactif aligné sur les 13 compétences (80h vs 1 600h). Le contrôle qualité Qualiopi reste à 40h dans les deux cas — c'est un livrable humain incompressible.",
    },
    {
      question: "Le SCORM exporté par Syllabis respecte-t-il l'alignement pédagogique exigé par le référentiel ?",
      answer:
        "Oui, et c'est une fonctionnalité native. Syllabis applique la triple concordance de Biggs (objectifs pédagogiques → activités d'apprentissage → activités d'évaluation), explicitement citée dans le glossaire du REAC FPA et exigée par le critère 11 de Qualiopi. L'export SCORM 1.2 inclut automatiquement les masteryscore dans le manifeste, ce qui permet aux LMS de valider conformément les acquis des apprenants.",
    },
    {
      question: 'Syllabis prend-il en compte la compétence « Tutorer les apprenants à distance » introduite en 2022 ?',
      answer:
        "Oui, c'est un cas d'usage central de l'outil. Syllabis génère des séances asynchrones complètes (FOAD) avec consignes explicites, rétroactions automatiques sur les activités auto-évaluées, et capsules vidéo de tutorat. Le formateur peut décliner les quatre besoins tutoraux du référentiel (cognitif, socio-affectif, motivationnel, métacognitif) directement dans la séance, et tracer ses interventions tutorales pour la traçabilité Qualiopi.",
    },
    {
      question: "Quelle est la durée de la période en entreprise pour valider le TP FPA ?",
      answer:
        "Pour le titre complet en parcours de formation continue, la période en entreprise obligatoire est de 315 heures minimum, à attester auprès du responsable de session d'examen. Par CCP, elle est de 105 heures pour les CCP1, CCP2 et CCP3, et de 70 heures pour le CCP4 (qualité et RSE). Pour les candidats en contrat d'alternance, cette période est incluse dans le temps de travail en entreprise. La VAE n'impose pas de période en entreprise dédiée.",
    },
    {
      question: 'Peut-on passer le TP FPA par VAE ? Syllabis aide-t-il à préparer le dossier technique ?',
      answer:
        "Oui, le TP FPA est accessible par VAE. Le candidat doit produire un dossier technique de 30 à 45 pages structuré en quatre chapitres correspondant aux quatre activités types, plus un dossier professionnel. Syllabis n'est pas un outil de constitution de dossier VAE individuel — c'est un outil destiné aux organismes de formation qui conçoivent les parcours préparant au TP FPA. En revanche, les contenus que vous produisez avec Syllabis peuvent servir de support à l'accompagnement VAE de vos candidats.",
    },
    {
      question: 'Comment Syllabis garantit-il la traçabilité Qualiopi pour le TP FPA ?',
      answer:
        "Syllabis trace automatiquement chaque génération de contenu (date, auteur, prompt, version du référentiel utilisée). Les éléments de preuve attendus par Qualiopi — progression pédagogique, scénario, activités d'évaluation, alignement objectifs-activités-évaluation — sont produits dans un format exportable et horodaté. Le critère 11 (notamment l'alignement pédagogique) est nativement respecté par l'architecture de l'outil.",
    },
    {
      question: 'Le TP FPA en 4 CCP : peut-on les vendre séparément en blocs de compétences ?',
      answer:
        "Oui, chaque CCP est juridiquement un bloc de compétences certifiant indépendamment. Vous pouvez commercialiser un parcours pour un seul CCP (par exemple le CCP3 « Accompagner les apprenants », très demandé par les tuteurs en entreprise) avec sa propre période en entreprise (105h) et son examen dédié. Syllabis génère l'arborescence et le contenu CCP par CCP, ce qui facilite la modularisation et la commercialisation séparée.",
    },
    {
      question: 'Syllabis intègre-t-il les évolutions du référentiel (veille règlementaire automatique) ?',
      answer:
        "Nous suivons les publications de France Compétences et du Ministère du Travail sur tous les titres professionnels actifs sur la plateforme. Le millésime du référentiel utilisé est versionné dans Syllabis et affiché à chaque génération ; si France Compétences publie un nouveau millésime du TP FPA, nous mettons à jour la fiche dans l'outil et notifions les organismes concernés. La dernière vérification du référentiel FPA date du 21 mai 2026.",
    },
  ],

  // ── Assets (placeholders → pointeurs sub-bloc G) ────────────
  arborescenceScreenshot: {
    src: '/screenshots/arbo-fpa.png',
    alt: 'Arborescence pédagogique TP FPA générée par Syllabis : 4 CCP, 13 compétences, séances FOAD interactives',
  },
  ogImage: {
    src: '/og/rncp37275-fpa.jpg',
    alt: "Titre Professionnel Formateur Professionnel d'Adultes (FPA) — Syllabis",
    width: 1200,
    height: 630,
  },

  // ── SEO ─────────────────────────────────────────────────────
  seoTitle: "TP Formateur d'Adultes FPA (RNCP37275) — Syllabis",
  seoDescription:
    "Créez le TP Formateur Professionnel d'Adultes (FPA, RNCP37275) en 3 semaines : 4 CCP, 13 compétences, SCORM marque blanche prêt pour votre LMS.",
  keywordsPrimary: [
    "titre professionnel formateur d'adultes",
    'TP FPA',
    'RNCP37275',
    "formateur professionnel d'adultes RNCP",
    'référentiel FPA 2022',
    'créer une formation FPA',
  ],
}
