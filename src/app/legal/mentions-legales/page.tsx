import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales | Syllabis",
  description: "Mentions legales du site Syllabis.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-display-sm font-semibold text-neutral-900 mb-12">
          Mentions legales
        </h1>

        <div className="space-y-10 text-md text-neutral-600 leading-relaxed">
          {/* Editeur */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Editeur du site
            </h2>
            <p>
              Le site syllabis.fr est edite par la societe Syllabis SAS, au
              capital de [montant] euros.
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <span className="font-medium text-neutral-900">Siege social :</span>{" "}
                [Adresse complete], France
              </li>
              <li>
                <span className="font-medium text-neutral-900">SIRET :</span>{" "}
                [Numero SIRET]
              </li>
              <li>
                <span className="font-medium text-neutral-900">RCS :</span>{" "}
                [Ville] B [Numero]
              </li>
              <li>
                <span className="font-medium text-neutral-900">TVA intracommunautaire :</span>{" "}
                FR [Numero]
              </li>
            </ul>
          </div>

          {/* Directeur de publication */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Directeur de la publication
            </h2>
            <p>[Nom du directeur de publication], en qualite de President.</p>
          </div>

          {/* Hebergeur */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Hebergeur
            </h2>
            <p>Le site est heberge par :</p>
            <ul className="mt-3 space-y-1">
              <li>
                <span className="font-medium text-neutral-900">Vercel Inc.</span>
              </li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, Etats-Unis</li>
              <li>Site web : vercel.com</li>
            </ul>
          </div>

          {/* Propriete intellectuelle */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Propriete intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus presents sur le site syllabis.fr
              (textes, images, graphismes, logos, icones, logiciels) est la
              propriete exclusive de Syllabis SAS ou de ses partenaires et est
              protege par les lois francaises et internationales relatives a la
              propriete intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, representation, modification, publication ou
              adaptation de tout ou partie des elements du site, quel que soit le
              moyen ou le procede utilise, est interdite sans autorisation
              ecrite prealable de Syllabis SAS.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Contact
            </h2>
            <p>
              Pour toute question relative aux mentions legales, vous pouvez
              nous contacter a l&apos;adresse suivante :
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
