/* eslint-disable func-names */
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    // eslint-disable-next-line object-shorthand
    addListener: function () {},
    // eslint-disable-next-line object-shorthand
    removeListener: function () {},
  };
};
/* eslint-enable func-names */

export default window.matchMedia;
