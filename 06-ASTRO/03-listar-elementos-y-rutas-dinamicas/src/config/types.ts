interface PokemonSimple {
  name: string;
  url: string;
}

interface Pokemon {

}

interface PokemonSimpleData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSimple[];
}


// interface PokemonFull {  
//   cries: Cries;
//   id: number;
//   name: string;
//   sprites: Sprites;
//   types: Type[];
// }

// interface Type {
//   slot: number;
//   type: Ability;
// }

// interface Ability {
//   name: string;
//   url: string;
// }

// interface Sprites {  
//   other: Other;
// }

// interface Other {
//   'official-artwork': { front_default: string; };
// }

// interface Cries {
//   latest: string;
//   legacy: string;
// }



interface PokemonFull {
  abilities: Ability2[];
  base_experience: number;
  cries: Cries;
  forms: Ability[];
  game_indices: Gameindex[];
  height: number;
  held_items: Helditem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: Pastability[];
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: Versions;
}

interface Versions {
  'generation-i': Generationi;
  'generation-ii': Generationii;
  'generation-iii': Generationiii;
  'generation-iv': Generationiv;
  'generation-v': Generationv;
  'generation-vi': Generationvi;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}

interface Generationviii {
  icons: Icons;
}

interface Icons {
  front_default: string;
  front_female: string;
}

interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

interface Generationvi {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
}

interface Generationv {
  'black-white': Blackwhite;
}

interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Generationiv {
  'diamond-pearl': Diamondpearl;
  'heartgold-soulsilver': Diamondpearl;
  platinum: Diamondpearl;
}

interface Diamondpearl {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Generationiii {
  emerald: Officialartwork;
  'firered-leafgreen': Fireredleafgreen;
  'ruby-sapphire': Fireredleafgreen;
}

interface Fireredleafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Generationi {
  'red-blue': Redblue;
  yellow: Redblue;
}

interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
  showdown: Showdown;
}

interface Showdown {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Dreamworld {
  front_default: string;
  front_female: null;
}

interface Pastability {
  abilities: Ability3[];
  generation: Ability;
}

interface Ability3 {
  ability: null;
  is_hidden: boolean;
  slot: number;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  order: null | null | number | number;
  version_group: Ability;
}

interface Helditem {
  item: Ability;
  version_details: Versiondetail[];
}

interface Versiondetail {
  rarity: number;
  version: Ability;
}

interface Gameindex {
  game_index: number;
  version: Ability;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}


export type { PokemonSimple, PokemonSimpleData, PokemonFull };



