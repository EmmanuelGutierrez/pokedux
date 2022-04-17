export const firstWordUp = (str: string) => {
  const res: string = str.charAt(0).toUpperCase() + str.slice(1);
  return res;
};
/* 
Object.defineProperty(String.prototype, "firstWordUp", {
  value: function () {
    const res: string = this.charAt(0).toUpperCase + this.slice(1);
    return res;
  },
  writable: true,
  configurable: true,
});
 */
