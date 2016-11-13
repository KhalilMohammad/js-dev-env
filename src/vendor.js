/*This file contains reference to the vendor libraries
we are using in this project.This is used by webpack
in the production build only*.A seperate bundle for vendor
code is useful since it's unlikely to cahnge as often
as the application's code so all the libraries we reference
here will be written to vendor.js so they can be cached until
until one of them change.So basically,This avoids customers
having to download a huge JS file anytime a line of code changes.
They only have to download to download vendor.js when a  vendor
library changes which should be less frequent .Any file that are
not reference here will be bundled into main.js for production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
