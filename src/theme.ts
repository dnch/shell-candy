import { Theme } from "./interfaces";

const theme: Theme = {
  // A human-readable name, used when generating output
  name: "",

  // The set of hues to use as the base for each color in the theme
  bases: [
    {
      // Hex code for this hue
      color: "",

      // A name for this colour
      name: ""
    }
  ],

  // The list of shades to generate for each hue.
  shades: [
    {
      // Passed to `Chroma.lighten`; to darken, provide a negative number
      level: 0,

      // Name for this shade. Used when generating output
      name: ""
    }
  ],

  // The list of blends to generate for each shade
  blends: [
    {
      // the colour to blend with the shade
      color: "",

      // Blending mode; see https://gka.github.io/chroma.js/#chroma-blend
      mode: "darken",

      // Name for this shade. Used when generating output
      name: ""
    }
  ]
};

export default theme;
