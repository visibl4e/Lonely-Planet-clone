const wfm = {
  delay(ms = 1000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },
  isUndefiend(d) {
    return typeof d === "undefined";
  },
};

export { wfm };
