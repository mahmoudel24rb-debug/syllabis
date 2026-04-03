import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions generales d'utilisation | Syllabis",
  description:
    "Conditions generales d'utilisation de la plateforme Syllabis.",
};

export default function CGUPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-display-sm font-semibold text-neutral-900 mb-4">
          Conditions generales d&apos;utilisation
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Derniere mise a jour : [date]
        </p>

        <div className="space-y-10 text-md text-neutral-600 leading-relaxed">
          {/* Objet */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              1. Objet
            </h2>
            <p>
              Les presentes conditions generales d&apos;utilisation (ci-apres
              &quot;CGU&quot;) ont pour objet de definir les modalites et
              conditions d&apos;utilisation de la plateforme Syllabis accessible
              a l&apos;adresse syllabis.fr (ci-apres &quot;la Plateforme&quot;),
              ainsi que les droits et obligations des utilisateurs.
            </p>
          </div>

          {/* Acces au service */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              2. Acces au service
            </h2>
            <p>
              La Plateforme est accessible gratuitement a tout utilisateur
              disposant d&apos;un acces a Internet. Tous les couts relatifs a
              l&apos;acces au service (materiel informatique, connexion Internet)
              sont a la charge de l&apos;utilisateur.
            </p>
            <p className="mt-3">
              Syllabis se reserve le droit de suspendre ou d&apos;interrompre
              l&apos;acces a la Plateforme a tout moment pour des raisons de
              maintenance, de mise a jour ou pour toute autre raison jugee
              necessaire, sans obligation de preavis.
            </p>
          </div>

          {/* Inscription */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              3. Inscription
            </h2>
            <p>
              L&apos;utilisation de certaines fonctionnalites de la Plateforme
              necessite la creation d&apos;un compte utilisateur.
              L&apos;utilisateur s&apos;engage a fournir des informations
              exactes et a jour lors de son inscription et a maintenir la
              confidentialite de ses identifiants de connexion.
            </p>
            <p className="mt-3">
              L&apos;utilisateur est seul responsable de l&apos;utilisation
              faite de son compte et de toute action effectuee depuis celui-ci.
            </p>
          </div>

          {/* Propriete intellectuelle */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              4. Propriete intellectuelle
            </h2>
            <p>
              L&apos;ensemble des elements constituant la Plateforme (textes,
              graphismes, logiciels, images, videos, sons, plans, logos, marques)
              sont la propriete exclusive de Syllabis SAS ou de ses partenaires
              et sont proteges par le droit de la propriete intellectuelle.
            </p>
            <p className="mt-3">
              Les contenus generes par l&apos;utilisateur via la Plateforme
              restent sa propriete. Syllabis dispose d&apos;une licence
              d&apos;utilisation limitee a la fourniture du service.
            </p>
          </div>

          {/* Responsabilites */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              5. Responsabilites
            </h2>
            <p>
              Syllabis s&apos;engage a fournir un service conforme aux
              descriptions presentees sur la Plateforme. Toutefois, Syllabis ne
              saurait etre tenu responsable des dommages directs ou indirects
              causes a l&apos;utilisateur ou a des tiers du fait de
              l&apos;utilisation de la Plateforme.
            </p>
            <p className="mt-3">
              L&apos;utilisateur est seul responsable du contenu qu&apos;il
              importe sur la Plateforme et s&apos;engage a ne pas y introduire
              de contenus illicites, diffamatoires ou portant atteinte aux
              droits de tiers.
            </p>
          </div>

          {/* Donnees personnelles */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              6. Donnees personnelles
            </h2>
            <p>
              Le traitement des donnees personnelles collectees dans le cadre de
              l&apos;utilisation de la Plateforme est decrit dans notre{" "}
              <a
                href="/legal/politique-confidentialite"
                className="text-brand-600 hover:text-brand-700 underline"
              >
                Politique de confidentialite
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
              Syllabis se reserve le droit de modifier les presentes CGU a tout
              moment. Les utilisateurs seront informes de toute modification par
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
              Les presentes CGU sont regies par le droit francais. Tout litige
              relatif a leur interpretation ou a leur execution releve de la
              competence exclusive des tribunaux francais.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              9. Contact
            </h2>
            <p>
              Pour toute question relative aux presentes CGU, vous pouvez nous
              contacter a l&apos;adresse suivante :
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
