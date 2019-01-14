'use strict';

/**
 * Constants
 * Note: Don't import log helper file from utils here
 */

import { pkginfo } from '../utils/pkginfo';

const { productName, description, name, author, version } = pkginfo;

export const APP_NAME = `${productName}`;

export const APP_VERSION = `${version}`;

export const AUTHOR_EMAIL = `${author.email}`;

export const APP_TITLE = `${description}`;

export const APP_IDENTIFIER = `${name}`;

/*

/!* eslint-disable no-undef *!/

export const APP_NAME = `${PKG_PRODUCT_NAME}`;

export const APP_VERSION = `${PKG_VERSION}`;

export const AUTHOR_EMAIL = `${PKG_AUTHOR.email}`;

export const APP_TITLE = `${PKG_DESCRIPTION}`;

export const APP_IDENTIFIER = `${PKG_NAME}`;

/!* eslint-enable no-undef: off *!/
*/
