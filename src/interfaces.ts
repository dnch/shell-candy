interface Base {
  color: string;
  name: string;
}

interface Shade {
  level: number;
  name: string;
}

interface Blend {
  color: string;
  mode: "multiply" | "darken" | "lighten" | "screen" | "overlay" | "burn" | "dodge";
  name: string;
}

interface Theme {
  name: string;
  bases: Array<Base>,
  shades?: Array<Shade>,
  blends?: Array<Blend>,
}

export {
  Base, Shade, Blend, Theme
};
