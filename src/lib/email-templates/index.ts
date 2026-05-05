/**
 * Drafts des 5 templates email pour les workflows de marketing automation Twenty.
 *
 * Ces templates sont des **brouillons** rédigés sans validation business.
 * À relire/réécrire avec ton chef avant mise en prod (ton, identité visuelle,
 * RGPD opt-out, footer légal, etc.).
 *
 * Usage : à coller dans les nœuds "Send Email" des workflows Twenty natifs,
 * ou à servir via une API simple (`GET /api/email-templates/[name]`) si le
 * Workflow Builder Twenty ne sait pas charger des fichiers locaux.
 *
 * Variables disponibles entre `{{ }}` (à remplacer par Twenty au runtime) :
 *   - {{firstName}} : prénom du contact
 *   - {{lastName}}  : nom du contact
 *   - {{organisme}} : nom de l'organisme/entreprise
 *   - {{bookingLink}} : lien cal.com de prise de RDV
 *   - {{senderName}} : prénom du commercial qui envoie (Victor / Florent)
 *   - {{unsubscribeLink}} : lien de désabonnement (RGPD)
 */

export type EmailTemplate = {
  name: string
  subject: string
  text: string
  html: string
}

const FOOTER_FR = `
<hr style="border:0;border-top:1px solid #e5e7eb;margin:32px 0 16px"/>
<p style="color:#6b7280;font-size:12px;line-height:1.5">
  Syllabis · syllabis.fr<br/>
  Tu reçois ce mail parce que tu as demandé une démo ou pris contact via syllabis.fr.<br/>
  <a href="{{unsubscribeLink}}" style="color:#6b7280">Se désabonner</a>
</p>
`.trim()

const FOOTER_TEXT = `
--
Syllabis · syllabis.fr
Tu reçois ce mail parce que tu as demandé une démo ou pris contact via syllabis.fr.
Se désabonner : {{unsubscribeLink}}
`.trim()

function wrapHtml(body: string): string {
  return `<!doctype html><html lang="fr"><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#111827;max-width:560px;margin:0 auto;padding:24px">${body}${FOOTER_FR}</body></html>`
}

export const RELANCE_NO_SHOW: EmailTemplate = {
  name: 'relance_no_show',
  subject: 'On t\'a vu sur Syllabis — encore intéressé(e) par la démo ?',
  text: `Bonjour {{firstName}},

Tu as commencé à demander une démo de Syllabis hier mais on n'a pas eu de retour de ta part. Pas de souci — il suffit parfois d'un créneau qui ne tombe pas bien.

Tu peux choisir un autre moment qui t'arrange ici : {{bookingLink}}

Si tu as la moindre question avant, réponds simplement à ce mail.

À très vite,
{{senderName}} — Syllabis

${FOOTER_TEXT}`,
  html: wrapHtml(`
<p>Bonjour {{firstName}},</p>
<p>Tu as commencé à demander une démo de <strong>Syllabis</strong> hier mais on n'a pas eu de retour de ta part. Pas de souci — il suffit parfois d'un créneau qui ne tombe pas bien.</p>
<p><a href="{{bookingLink}}" style="display:inline-block;background:#4f46e5;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none">Choisir un autre créneau</a></p>
<p>Si tu as la moindre question avant, réponds simplement à ce mail.</p>
<p>À très vite,<br/><strong>{{senderName}}</strong> — Syllabis</p>
`),
}

export const RELANCE_POST_DEMO: EmailTemplate = {
  name: 'relance_post_demo',
  subject: 'Suite à notre démo de Syllabis — on en parle ?',
  text: `Bonjour {{firstName}},

Ça fait une semaine qu'on s'est vus en démo de Syllabis avec {{organisme}}. Je voulais juste m'assurer que tu as toutes les infos pour avancer.

Quelques pistes utiles :
- Reprendre rendez-vous pour creuser un point précis : {{bookingLink}}
- Voir une formation déjà générée : on peut t'envoyer un export SCORM d'exemple
- Te connecter à un autre client OF du même profil pour avoir un retour terrain

Réponds simplement à ce mail avec ce qui te bloque ou te manque, je m'occupe du reste.

{{senderName}} — Syllabis

${FOOTER_TEXT}`,
  html: wrapHtml(`
<p>Bonjour {{firstName}},</p>
<p>Ça fait une semaine qu'on s'est vus en démo de Syllabis avec <strong>{{organisme}}</strong>. Je voulais juste m'assurer que tu as toutes les infos pour avancer.</p>
<p>Quelques pistes utiles :</p>
<ul>
  <li>Reprendre rendez-vous pour creuser un point précis : <a href="{{bookingLink}}">choisir un créneau</a></li>
  <li>Voir une formation déjà générée : on peut t'envoyer un export SCORM d'exemple</li>
  <li>Te connecter à un autre client OF du même profil pour avoir un retour terrain</li>
</ul>
<p>Réponds simplement à ce mail avec ce qui te bloque ou te manque, je m'occupe du reste.</p>
<p><strong>{{senderName}}</strong> — Syllabis</p>
`),
}

export const WELCOME_J0: EmailTemplate = {
  name: 'welcome_j0',
  subject: 'Bienvenue chez Syllabis 🎉 — voici par où commencer',
  text: `Bonjour {{firstName}},

Bienvenue dans Syllabis ! On est ravis de t'accompagner pour {{organisme}}.

Ton premier réflexe : connecte-toi sur https://syllabis.fr et lance ta première formation depuis un référentiel RNCP. Ça prend ~10 minutes pour avoir une formation complète + export SCORM.

Si tu veux qu'on se voie pour t'aider sur ta première formation : {{bookingLink}}

À très vite,
{{senderName}} — Syllabis

${FOOTER_TEXT}`,
  html: wrapHtml(`
<p>Bonjour {{firstName}},</p>
<p>Bienvenue dans <strong>Syllabis</strong> 🎉 ! On est ravis de t'accompagner pour <strong>{{organisme}}</strong>.</p>
<p><strong>Ton premier réflexe :</strong> connecte-toi sur <a href="https://syllabis.fr">syllabis.fr</a> et lance ta première formation depuis un référentiel RNCP. Ça prend ~10 minutes pour avoir une formation complète + export SCORM.</p>
<p>Si tu veux qu'on se voie pour t'aider sur ta première formation : <a href="{{bookingLink}}">prendre rendez-vous</a></p>
<p>À très vite,<br/><strong>{{senderName}}</strong> — Syllabis</p>
`),
}

export const WELCOME_J3: EmailTemplate = {
  name: 'welcome_j3',
  subject: '3 jours après ton arrivée chez Syllabis — comment ça se passe ?',
  text: `Bonjour {{firstName}},

Ça fait 3 jours que {{organisme}} est sur Syllabis. À ce stade, la plupart des nouveaux comptes ont :
- Lancé leur première génération IA depuis un référentiel
- Édité au moins une séance dans l'éditeur de blocs
- Exporté un SCORM pour tester sur leur LMS

Si tu en es là : bravo. Si tu es bloqué, ces 3 ressources peuvent débloquer 80 % des cas :
- Tutoriel express : https://syllabis.fr/fonctionnalites/generation-ia
- Comment utiliser l'éditeur : https://syllabis.fr/fonctionnalites/editeur
- Export SCORM : https://syllabis.fr/fonctionnalites/export-scorm

Et un appel de 15 min reste la solution la plus rapide : {{bookingLink}}

{{senderName}} — Syllabis

${FOOTER_TEXT}`,
  html: wrapHtml(`
<p>Bonjour {{firstName}},</p>
<p>Ça fait <strong>3 jours</strong> que <strong>{{organisme}}</strong> est sur Syllabis. À ce stade, la plupart des nouveaux comptes ont :</p>
<ul>
  <li>Lancé leur première génération IA depuis un référentiel</li>
  <li>Édité au moins une séance dans l'éditeur de blocs</li>
  <li>Exporté un SCORM pour tester sur leur LMS</li>
</ul>
<p>Si tu en es là : bravo. Si tu es bloqué, ces 3 ressources peuvent débloquer 80 % des cas :</p>
<ul>
  <li><a href="https://syllabis.fr/fonctionnalites/generation-ia">Tutoriel express : génération IA</a></li>
  <li><a href="https://syllabis.fr/fonctionnalites/editeur">Comment utiliser l'éditeur</a></li>
  <li><a href="https://syllabis.fr/fonctionnalites/export-scorm">Export SCORM</a></li>
</ul>
<p>Et un appel de 15 min reste la solution la plus rapide : <a href="{{bookingLink}}">prendre rendez-vous</a></p>
<p><strong>{{senderName}}</strong> — Syllabis</p>
`),
}

export const WELCOME_J14: EmailTemplate = {
  name: 'welcome_j14',
  subject: '2 semaines avec Syllabis — un petit retour ?',
  text: `Bonjour {{firstName}},

Ça fait deux semaines pile que {{organisme}} utilise Syllabis. C'est en général le bon moment pour faire un point.

Trois questions courtes (réponds en 1 ligne, c'est précieux) :
1. Quelle est LA fonctionnalité qui t'a le plus aidé(e) ?
2. Qu'est-ce qui t'a frustré ou bloqué cette semaine ?
3. À qui d'autre dans ton réseau (autre OF, CFA) Syllabis serait utile ?

Tes réponses arrivent directement dans ma boîte — je lis tout, et la moitié des évolutions de Syllabis viennent de ces retours.

Merci d'avance,
{{senderName}} — Syllabis

PS : si tu veux qu'on en parle de vive voix, {{bookingLink}}

${FOOTER_TEXT}`,
  html: wrapHtml(`
<p>Bonjour {{firstName}},</p>
<p>Ça fait <strong>deux semaines pile</strong> que <strong>{{organisme}}</strong> utilise Syllabis. C'est en général le bon moment pour faire un point.</p>
<p>Trois questions courtes (réponds en 1 ligne, c'est précieux) :</p>
<ol>
  <li>Quelle est LA fonctionnalité qui t'a le plus aidé(e) ?</li>
  <li>Qu'est-ce qui t'a frustré ou bloqué cette semaine ?</li>
  <li>À qui d'autre dans ton réseau (autre OF, CFA) Syllabis serait utile ?</li>
</ol>
<p>Tes réponses arrivent directement dans ma boîte — je lis tout, et la moitié des évolutions de Syllabis viennent de ces retours.</p>
<p>Merci d'avance,<br/><strong>{{senderName}}</strong> — Syllabis</p>
<p style="color:#6b7280;font-size:13px">PS : si tu veux qu'on en parle de vive voix, <a href="{{bookingLink}}">choisir un créneau</a></p>
`),
}

export const ALL_TEMPLATES: EmailTemplate[] = [
  RELANCE_NO_SHOW,
  RELANCE_POST_DEMO,
  WELCOME_J0,
  WELCOME_J3,
  WELCOME_J14,
]
