import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGU | Syllabis — Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation de la plateforme Syllabis. Accès, inscription, propriété intellectuelle, responsabilités.",
};

export default function CGUPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-display-sm font-semibold text-neutral-900 mb-4">
          Conditions générales d&apos;utilisation
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Dernière mise à jour : [date]
        </p>

        <div className="space-y-10 text-md text-neutral-600 leading-relaxed">
          {/* Objet */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              1. Objet
            </h2>
            <p>
              Les présentes conditions générales d&apos;utilisation (ci-après
              &quot;CGU&quot;) ont pour objet de définir les modalités et
              conditions d&apos;utilisation de la plateforme Syllabis accessible
              à l&apos;adresse syllabis.fr (ci-après &quot;la Plateforme&quot;),
              ainsi que les droits et obligations des utilisateurs.
            </p>
          </div>

          {/* Acces au service */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              2. Accès au service
            </h2>
            <p>
              La Plateforme est accessible gratuitement à tout utilisateur
              disposant d&apos;un accès à Internet. Tous les coûts relatifs à
              l&apos;accès au service (matériel informatique, connexion Internet)
              sont à la charge de l&apos;utilisateur.
            </p>
            <p className="mt-3">
              Syllabis se réserve le droit de suspendre ou d&apos;interrompre
              l&apos;accès à la Plateforme à tout moment pour des raisons de
              maintenance, de mise à jour ou pour toute autre raison jugée
              nécessaire, sans obligation de préavis.
            </p>
          </div>

          {/* Inscription */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              3. Inscription
            </h2>
            <p>
              L&apos;utilisation de certaines fonctionnalités de la Plateforme
              nécessite la création d&apos;un compte utilisateur.
              L&apos;utilisateur s&apos;engage à fournir des informations
              exactes et à jour lors de son inscription et à maintenir la
              confidentialité de ses identifiants de connexion.
            </p>
            <p className="mt-3">
              L&apos;utilisateur est seul responsable de l&apos;utilisation
              faite de son compte et de toute action effectuée depuis celui-ci.
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              4. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments constituant la Plateforme (textes,
              graphismes, logiciels, images, vidéos, sons, plans, logos, marques)
              sont la propriété exclusive de Syllabis SAS ou de ses partenaires
              et sont protégés par le droit de la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Les contenus générés par l&apos;utilisateur via la Plateforme
              restent sa propriété. Syllabis dispose d&apos;une licence
              d&apos;utilisation limitée à la fourniture du service.
            </p>
          </div>

          {/* Responsabilités */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              5. Responsabilités
            </h2>
            <p>
              Syllabis s&apos;engage à fournir un service conforme aux
              descriptions présentées sur la Plateforme. Toutefois, Syllabis ne
              saurait être tenu responsable des dommages directs ou indirects
              causés à l&apos;utilisateur ou à des tiers du fait de
              l&apos;utilisation de la Plateforme.
            </p>
            <p className="mt-3">
              L&apos;utilisateur est seul responsable du contenu qu&apos;il
              importe sur la Plateforme et s&apos;engage a ne pas y introduire
              de contenus illicites, diffamatoires ou portant atteinte aux
              droits de tiers.
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              6. Données personnelles
            </h2>
            <p>
              Le traitement des données personnelles collectées dans le cadre de
              l&apos;utilisation de la Plateforme est décrit dans notre{" "}
              <a
                href="/legal/politique-confidentialite"
                className="text-brand-600 hover:text-brand-700 underline"
              >
                Politique de confidentialité
              </a>
              .
            </p>
          </div>

          {/* Modification des CGU */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              7. Modification des CGU
            </h2>
            <p>
              Syllabis se réserve le droit de modifier les présentes CGU à tout
              moment. Les utilisateurs seront informés de toute modification par
              notification sur la Plateforme. La poursuite de l&apos;utilisation
              de la Plateforme apres notification vaut acceptation des nouvelles
              CGU.
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              8. Droit applicable
            </h2>
            <p>
              Les présentes CGU sont régies par le droit français. Tout litige
              relatif à leur interprétation ou à leur exécution relève de la
              compétence exclusive des tribunaux français.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              9. Contact
            </h2>
            <p>
              Pour toute question relative aux présentes CGU, vous pouvez nous
              contacter à l&apos;adresse suivante :
            </p>
            <p className="mt-2 font-medium text-neutral-900">
              contact@syllabis.fr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
