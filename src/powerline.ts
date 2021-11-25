export const enum CodePoints {
  LeftSegment = 0xE0B0,
  RightSegment = 0xE0B2,
  LeftSubSegment = 0xE0B1,
  RightSubSegment = 0xE0B3,
}

export const left = () : string => String.fromCodePoint(CodePoints.LeftSegment);
export const right = () : string => String.fromCodePoint(CodePoints.RightSegment);

export const subLeft = () : string => String.fromCodePoint(CodePoints.LeftSubSegment);
export const subRight = () : string => String.fromCodePoint(CodePoints.RightSubSegment);
