import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Syllabis — RGPD",
  description:
    "Politique de confidentialité et protection des données personnelles. Hébergement européen, chiffrement, conformité RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-display-sm font-semibold text-neutral-900 mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Dernière mise à jour : [date]
        </p>

        <div className="space-y-10 text-md text-neutral-600 leading-relaxed">
          {/* Responsable du traitement */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur la plateforme Syllabis est :
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <span className="font-medium text-neutral-900">Syllabis SAS</span>
              </li>
              <li>[Adresse complète], France</li>
              <li>contact@syllabis.fr</li>
            </ul>
          </div>

          {/* Données collectées */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              2. Données collectées
            </h2>
            <p>
              Dans le cadre de l&apos;utilisation de la Plateforme, nous
              collectons les catégories de données suivantes :
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-medium text-neutral-900">Données d&apos;identification :</span>{" "}
                nom, prénom, adresse email, mot de passe (chiffré)
              </li>
              <li>
                <span className="font-medium text-neutral-900">Données d&apos;utilisation :</span>{" "}
                adresse IP, navigateur, pages consultées, actions effectuées sur
                la Plateforme
              </li>
              <li>
                <span className="font-medium text-neutral-900">Contenus importés :</span>{" "}
                référentiels et documents téléchargés par l&apos;utilisateur
                pour la génération de formations
              </li>
              <li>
                <span className="font-medium text-neutral-900">Données de facturation :</span>{" "}
                informations nécessaires au paiement (traitées par notre
                prestataire de paiement sécurisé)
              </li>
            </ul>
          </div>

          {/* Finalités */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              3. Finalités du traitement
            </h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>La fourniture et l&apos;amélioration du service</li>
              <li>La gestion des comptes utilisateurs</li>
              <li>La génération de formations e-learning</li>
              <li>La facturation et la gestion des abonnements</li>
              <li>L&apos;envoi de communications relatives au service</li>
              <li>L&apos;analyse statistique anonymisee de l&apos;utilisation de la Plateforme</li>
            </ul>
          </div>

          {/* Base légale */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              4. Base légale du traitement
            </h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>
                L&apos;exécution du contrat liant l&apos;utilisateur à Syllabis
              </li>
              <li>Le consentement de l&apos;utilisateur (cookies, communications marketing)</li>
              <li>L&apos;intérêt légitime de Syllabis (amélioration du service, sécurité)</li>
              <li>Le respect d&apos;obligations légales (facturation, conservation)</li>
            </ul>
          </div>

          {/* Durée de conservation */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              5. Durée de conservation
            </h2>
            <p>
              Les données personnelles sont conservées pendant la durée
              nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Données de compte : pendant la durée de l&apos;abonnement, puis 3 ans après la dernière activité</li>
              <li>Données de facturation : 10 ans conformément aux obligations comptables</li>
              <li>Données de connexion : 12 mois</li>
              <li>Cookies : 13 mois maximum</li>
            </ul>
          </div>

          {/* Droits des utilisateurs */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              6. Droits des utilisateurs
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit a l&apos;effacement (droit a l&apos;oubli)</li>
              <li>Droit a la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement a tout moment</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à l&apos;adresse
              contact@syllabis.fr. Nous nous engageons à répondre dans un délai
              de 30 jours. Vous disposez également du droit d&apos;introduire
              une réclamation auprès de la CNIL.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              7. Cookies
            </h2>
            <p>
              La Plateforme utilise des cookies pour assurer son bon
              fonctionnement et améliorer l&apos;expérience utilisateur. Les
              cookies utilisés sont :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>
                <span className="font-medium text-neutral-900">Cookies essentiels :</span>{" "}
                nécessaires au fonctionnement du site (authentification, session)
              </li>
              <li>
                <span className="font-medium text-neutral-900">Cookies analytiques :</span>{" "}
                mesure d&apos;audience anonymisée pour améliorer le service
              </li>
            </ul>
            <p className="mt-3">
              Vous pouvez configurer votre navigateur pour refuser les cookies
              ou être alerté lors de leur dépôt. Le refus des cookies essentiels
              peut limiter l&apos;accès à certaines fonctionnalités.
            </p>
          </div>

          {/* Hébergement et sécurité */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              8. Hébergement et sécurité
            </h2>
            <p>
              Les données sont hébergées en Europe et bénéficient des mesures de
              sécurité suivantes :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Chiffrement des données en transit (TLS) et au repos</li>
              <li>Hébergement sur infrastructure européenne</li>
              <li>Sauvegardes régulières et plan de reprise d&apos;activité</li>
              <li>Accès restreint aux données par politique de moindre privilège</li>
            </ul>
            <p className="mt-3">
              Syllabis est conforme au RGPD et met en œuvre les mesures
              techniques et organisationnelles appropriées pour garantir la
              sécurité de vos données.
            </p>
          </div>

          {/* Contact DPO */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              9. Contact — Délégué à la protection des données
            </h2>
            <p>
              Pour toute question relative à la protection de vos données
              personnelles, vous pouvez contacter notre Délégué à la Protection
              des Données (DPO) :
            </p>
            <p className="mt-2 font-medium text-neutral-900">
              dpo@syllabis.fr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
