
// TYPES
export const RAND_FIRST = 'RAND_FIRST';
export const RAND_LAST = 'RAND_LAST';
export const TO_DIRECTION = 'TO_DIRECTION';


export const toDirection = (value) => ({
  type: TO_DIRECTION,
  value,
});

export const randFirst = (color) => ({
  type: RAND_FIRST,
  color,
});

export const randLast = (color) => ({
  type: RAND_LAST,
  color,
});
