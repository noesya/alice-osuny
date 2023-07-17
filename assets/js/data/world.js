export const WORLD = {
  width: 2500,
  height: 1016,
  characters: {
    scale: 0.8
  },
  cities: {
    scale: 0.4
  },
  area: {
    left: 0,
    top: -100,
    right: 3000,
    bottom: 1400
  },
  collisions: {
    size: 64,
    visible: false,
    matrice: [
        '0000000000000000000000000000000000011000',
        '0000000000000000000000000000000000111100',
        '0000000000000000000000000000000111111110',
        '0000110000000011111100000001111111111000',
        '0000111111100110000111111111111111110000',
        '0001111111111100000001111111111111100000',
        '0011111111111111100001111111111111000000',
        '0011111111111111111111111111111111000000',
        '0011111111111111111111111111111111000000',
        '0000001111111111111111111111111111100000',
        '0000001111111111111111111111111110000000',
        '0111001111111111111100001000000000000000',
        '0111111111111111111100000000000000000000',
        '0111111111001110001000000000000000000000',
        '0111111000000000000000000000000000000000',
        '0000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000',
        '0000000000000000000000000000000000000000',
    ]
  }
}