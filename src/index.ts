import Handlebars from "handlebars";
import chalk from "chalk";

const { log } = console;

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

const neutralTheme: Theme = {
  name: "Neutral",
  bases: [
    {
      name: "000",
      color: "#0D0D0D",
    },

    {
      name: "002",
      color: "#252423",
    },

    {
      name: "002",
      color: "#403F3D",
    },

    {
      name: "003",
      color: "#737272",
    },

    {
      name: "004",
      color: "#BFBCBA",
    },

    {
      name: "005",
      color: "#F2ECE9",
    },

  ]
};

const tonesTheme: Theme = {
  name: "Tones",

  bases: [
    {
      name: "red",
      color: "#D93636",
    },

    {
      name: "rng",
      color: "#F27830",
    },

    {
      name: "ylw",
      color: "#F2B441",
    },

    {
      name: "grn",
      color: "#2A8C43",
    },

    {
      name: "cyn",
      color: "#30BFB1",
    },

    {
      name: "blu",
      color: "#4195D5",
    },

    {
      name: "ind",
      color: "#33368E",
    },

    {
      name: "vio",
      color: "#9E4FA1",
    },
  ]
};

namespace Powerline {
  export const enum CodePoints {
    Block = 0x2588,
    LeftSegment = 0xE0B0,
    RightSegment = 0xE0B2,
    LeftSubSegment = 0xE0B1,
    RightSubSegment = 0xE0B3,
  }
}

const fgColorHelper = function fgColorHelper(
  this: any,
  color: string,
  options: Handlebars.HelperOptions
): Handlebars.SafeString {
  return new Handlebars.SafeString(chalk.hex(color)(options.fn(this)));
};

Handlebars.registerHelper("fg", fgColorHelper);

const bgColorHelper = function bgColorHelper(
  this: any,
  color: string,
  options: Handlebars.HelperOptions
): Handlebars.SafeString {
  return new Handlebars.SafeString(chalk.bgHex(color)(options.fn(this)));
};

Handlebars.registerHelper("bg", bgColorHelper);

Handlebars.registerHelper("block", (length) => new Handlebars.SafeString(
  String.fromCodePoint(Powerline.CodePoints.Block).repeat(length)
));

Handlebars.registerHelper("lSegment", () => new Handlebars.SafeString(
  String.fromCodePoint(Powerline.CodePoints.LeftSegment)
));

Handlebars.registerHelper("rSegment", () => new Handlebars.SafeString(
  String.fromCodePoint(Powerline.CodePoints.RightSegment)
));

Handlebars.registerHelper("lSubSegment", () => new Handlebars.SafeString(
  String.fromCodePoint(Powerline.CodePoints.LeftSubSegment)
));

Handlebars.registerHelper("rSubSegment", () => new Handlebars.SafeString(
  String.fromCodePoint(Powerline.CodePoints.RightSubSegment)
));

Handlebars.registerPartial("colorChip", "{{#fg chip.color}}{{rSegment}}{{block chip.size}}{{lSegment}}{{/fg}}");
Handlebars.registerPartial("labelledColorChip",
  `{{#fg chip.color ~}}
     {{rSegment}}{{block 5}}
     {{~#bg chip.color}}{{#fg chip.labelColor }}{{chip.label}}{{/fg}}{{/bg~}}
     {{block 5}}{{lSegment}}
   {{~/fg}}`);

const demo = Handlebars.compile("{{>labelledColorChip}} {{ chip.label }}");

tonesTheme.bases.forEach((base: Base) => {
  log(demo({
    chip: {
      color: base.color,
      labelColor: "#fff",
      label: base.name,
      size: 20,
    }
  }));
});

neutralTheme.bases.forEach((base: Base) => {
  log(demo({
    chip: {
      color: base.color,
      labelColor: "#fff",
      label: base.name,
      size: 20,
    }
  }));
});
