const fs = require("fs");

// Supprimer l'ancien dossier blocks
fs.rmSync("schemaTypes/blocks", { recursive: true, force: true });

// Schema: service (un seul service)
fs.writeFileSync("schemaTypes/service.ts", [
  'import {defineType, defineField} from "sanity"',
  '',
  'export default defineType({',
  '  name: "service",',
  '  title: "Service",',
  '  type: "document",',
  '  fields: [',
  '    defineField({',
  '      name: "title",',
  '      title: "Nom du service",',
  '      type: "string",',
  '      validation: (rule) => rule.required(),',
  '    }),',
  '    defineField({',
  '      name: "description",',
  '      title: "Description",',
  '      type: "text",',
  '      rows: 3,',
  '    }),',
  '    defineField({',
  '      name: "icon",',
  '      title: "Icone (emoji ou nom)",',
  '      type: "string",',
  '    }),',
  '    defineField({',
  '      name: "order",',
  '      title: "Ordre d affichage",',
  '      type: "number",',
  '    }),',
  '  ],',
  '  orderings: [',
  '    {',
  '      title: "Ordre",',
  '      name: "orderAsc",',
  '      by: [{ field: "order", direction: "asc" }],',
  '    },',
  '  ],',
  '  preview: {',
  '    select: { title: "title", subtitle: "description" },',
  '  },',
  '});',
].join("\n"));

// Index: enregistrer uniquement service
fs.writeFileSync("schemaTypes/index.ts", [
  'import service from "./service"',
  '',
  'export const schemaTypes = [service]',
].join("\n"));

// Supprimer l'ancien page.ts
try { fs.unlinkSync("schemaTypes/page.ts"); } catch(e) {}

console.log("Schemas Sanity simplifies !");
