import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite | Syllabis",
  description:
    "Politique de confidentialite et protection des donnees personnelles de Syllabis.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-display-sm font-semibold text-neutral-900 mb-4">
          Politique de confidentialite
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Derniere mise a jour : [date]
        </p>

        <div className="space-y-10 text-md text-neutral-600 leading-relaxed">
          {/* Responsable du traitement */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des donnees personnelles collectees
              sur la plateforme Syllabis est :
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <span className="font-medium text-neutral-900">Syllabis SAS</span>
              </li>
              <li>[Adresse complete], France</li>
              <li>contact@syllabis.fr</li>
            </ul>
          </div>

          {/* Donnees collectees */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              2. Donnees collectees
            </h2>
            <p>
              Dans le cadre de l&apos;utilisation de la Plateforme, nous
              collectons les categories de donnees suivantes :
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-medium text-neutral-900">Donnees d&apos;identification :</span>{" "}
                nom, prenom, adresse email, mot de passe (chiffre)
              </li>
              <li>
                <span className="font-medium text-neutral-900">Donnees d&apos;utilisation :</span>{" "}
                adresse IP, navigateur, pages consultees, actions effectuees sur
                la Plateforme
              </li>
              <li>
                <span className="font-medium text-neutral-900">Contenus importes :</span>{" "}
                referentiels et documents telecharges par l&apos;utilisateur
                pour la generation de formations
              </li>
              <li>
                <span className="font-medium text-neutral-900">Donnees de facturation :</span>{" "}
                informations necessaires au paiement (traitees par notre
                prestataire de paiement securise)
              </li>
            </ul>
          </div>

          {/* Finalites */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              3. Finalites du traitement
            </h2>
            <p>Les donnees collectees sont utilisees pour :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>La fourniture et l&apos;amelioration du service</li>
              <li>La gestion des comptes utilisateurs</li>
              <li>La generation de formations e-learning</li>
              <li>La facturation et la gestion des abonnements</li>
              <li>L&apos;envoi de communications relatives au service</li>
              <li>L&apos;analyse statistique anonymisee de l&apos;utilisation de la Plateforme</li>
            </ul>
          </div>

          {/* Base legale */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              4. Base legale du traitement
            </h2>
            <p>Le traitement de vos donnees repose sur :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>
                L&apos;execution du contrat liant l&apos;utilisateur a Syllabis
              </li>
              <li>Le consentement de l&apos;utilisateur (cookies, communications marketing)</li>
              <li>L&apos;interet legitime de Syllabis (amelioration du service, securite)</li>
              <li>Le respect d&apos;obligations legales (facturation, conservation)</li>
            </ul>
          </div>

          {/* Duree de conservation */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              5. Duree de conservation
            </h2>
            <p>
              Les donnees personnelles sont conservees pendant la duree
              necessaire aux finalites pour lesquelles elles ont ete collectees :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Donnees de compte : pendant la duree de l&apos;abonnement, puis 3 ans apres la derniere activite</li>
              <li>Donnees de facturation : 10 ans conformement aux obligations comptables</li>
              <li>Donnees de connexion : 12 mois</li>
              <li>Cookies : 13 mois maximum</li>
            </ul>
          </div>

          {/* Droits des utilisateurs */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              6. Droits des utilisateurs
            </h2>
            <p>
              Conformement au Reglement General sur la Protection des Donnees
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Droit d&apos;acces a vos donnees personnelles</li>
              <li>Droit de rectification des donnees inexactes</li>
              <li>Droit a l&apos;effacement (droit a l&apos;oubli)</li>
              <li>Droit a la limitation du traitement</li>
              <li>Droit a la portabilite de vos donnees</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement a tout moment</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous a l&apos;adresse
              contact@syllabis.fr. Nous nous engageons a repondre dans un delai
              de 30 jours. Vous disposez egalement du droit d&apos;introduire
              une reclamation aupres de la CNIL.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              7. Cookies
            </h2>
            <p>
              La Plateforme utilise des cookies pour assurer son bon
              fonctionnement et ameliorer l&apos;experience utilisateur. Les
              cookies utilises sont :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>
                <span className="font-medium text-neutral-900">Cookies essentiels :</span>{" "}
                necessaires au fonctionnement du site (authentification, session)
              </li>
              <li>
                <span className="font-medium text-neutral-900">Cookies analytiques :</span>{" "}
                mesure d&apos;audience anonymisee pour ameliorer le service
              </li>
            </ul>
            <p className="mt-3">
              Vous pouvez configurer votre navigateur pour refuser les cookies
              ou etre alerte lors de leur depot. Le refus des cookies essentiels
              peut limiter l&apos;acces a certaines fonctionnalites.
            </p>
          </div>

          {/* Hebergement et securite */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              8. Hebergement et securite
            </h2>
            <p>
              Les donnees sont hebergees en Europe et beneficient des mesures de
              securite suivantes :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Chiffrement des donnees en transit (TLS) et au repos</li>
              <li>Hebergement sur infrastructure europeenne</li>
              <li>Sauvegardes regulieres et plan de reprise d&apos;activite</li>
              <li>Acces restreint aux donnees par politique de moindre privilege</li>
            </ul>
            <p className="mt-3">
              Syllabis est conforme au RGPD et met en oeuvre les mesures
              techniques et organisationnelles appropriees pour garantir la
              securite de vos donnees.
            </p>
          </div>

          {/* Contact DPO */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              9. Contact — Delegue a la protection des donnees
            </h2>
            <p>
              Pour toute question relative a la protection de vos donnees
              personnelles, vous pouvez contacter notre Delegue a la Protection
              des Donnees (DPO) :
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
