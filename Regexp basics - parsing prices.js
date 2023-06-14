/*
DESCRIPTION:
Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.
*/

String.prototype.toCents = function () {
  return /^\$\d+\.\d\d$/.test(this) ? +this.replace(/[$.]/g, '') : null;
};
