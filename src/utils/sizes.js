import {Dimensions} from 'react-native';

export const screen = Dimensions.get('screen');

export const SPACE_XS = 5;
export const SPACE_XS2 = 10;
export const SPACE_SM = 10;
export const SPACE_SM2 = 20;
export const SPACE_MD = 20;
export const SPACE_MD2 = 40;
export const SPACE_LG = 30;
export const SPACE_LG2 = 60;

export const BORDER_RADIUS_SM = 5;
export const BORDER_RADIUS_MD = 10;
export const BORDER_RADIUS_LG = 15;

export const FONT_SIZE_SM = 14;
export const FONT_SIZE_MD = 16;
export const FONT_SIZE_XM = 18;
export const FONT_SIZE_LG = 22;
export const FONT_SIZE_XL = 26;


export const MOVIE_CONTENT_WIDTH = screen.width - SPACE_MD2 * 2;
export const MOVIE_CONTENT_HEIGHT = screen.height / 2;

export const POSTER_CONTAINER_WIDTH = screen.width / 16 * 12;
export const POSTER_CONTAINER_HEIGHT = screen.height / 5 * 2;

export const POSTER_IMAGE_HEIGHT = POSTER_CONTAINER_HEIGHT;