// src/utils/generate-slug.ts
function generateSlug(text) {
  return text.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}

export {
  generateSlug
};
