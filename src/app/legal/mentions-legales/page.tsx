import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Syllabis",
  description: "Mentions légales du site syllabis.fr. Éditeur, hébergeur, propriété intellectuelle et contact.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-display-sm font-semibold text-neutral-900 mb-12">
          Mentions légales
        </h1>

        <div className="space-y-10 text-md text-neutral-600 leading-relaxed">
          {/* Éditeur */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Éditeur du site
            </h2>
            <p>
              Le site syllabis.fr est édité par la société Syllabis SAS, au
              capital de [montant] euros.
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <span className="font-medium text-neutral-900">Siège social :</span>{" "}
                [Adresse complète], France
              </li>
              <li>
                <span className="font-medium text-neutral-900">SIRET :</span>{" "}
                [Numéro SIRET]
              </li>
              <li>
                <span className="font-medium text-neutral-900">RCS :</span>{" "}
                [Ville] B [Numéro]
              </li>
              <li>
                <span className="font-medium text-neutral-900">TVA intracommunautaire :</span>{" "}
                FR [Numéro]
              </li>
            </ul>
          </div>

          {/* Directeur de publication */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Directeur de la publication
            </h2>
            <p>[Nom du directeur de publication], en qualité de Président.</p>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Hébergeur
            </h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-3 space-y-1">
              <li>
                <span className="font-medium text-neutral-900">Vercel Inc.</span>
              </li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>Site web : vercel.com</li>
            </ul>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur le site syllabis.fr
              (textes, images, graphismes, logos, icônes, logiciels) est la
              propriété exclusive de Syllabis SAS ou de ses partenaires et est
              protégé par les lois françaises et internationales relatives à la
              propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit le
              moyen ou le procédé utilisé, est interdite sans autorisation
              écrite préalable de Syllabis SAS.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Contact
            </h2>
            <p>
              Pour toute question relative aux mentions légales, vous pouvez
              nous contacter à l&apos;adresse suivante :
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
