const d = new Date();
const dom = {
   adress: "hmelnickogo 7",
   year: 1999,
   kvart: [{
      nkomnat: 3,
      nzhilcov: 4,
      plosh: 80,
      etazh: 7,
      nkv: 144,
      getUtilities: function (d) {
         let k = 0;
         if (d.getMonth() >= 2 && d.getMonth() <= 9) {
            k = 1;
         } else {
            k = 1.8;
         }
         return k * this.plosh * this.nzhilcov / 2;
      }
   },
   {
      nkomnat: 2,
      nzhilcov: 2,
      plosh: 60,
      etazh: 3,
      nkv: 56,
      getUtilities: function (d) {
         let k = 0;
         if (d.getMonth() >= 2 && d.getMonth() <= 9) {
            k = 1;
         } else {
            k = 1.8;
         }
         return k * this.plosh * this.nzhilcov / 2;
      }
   },
   {
      nkomnat: 5,
      nzhilcov: 4,
      plosh: 100,
      etazh: 10,
      nkv: 200,
      getUtilities: function (d) {
         let k = 0;
         if (d.getMonth() >= 2 && d.getMonth() <= 9) {
            k = 1;
         } else {
            k = 1.8;
         }
         return k * this.plosh * this.nzhilcov / 2;
      }
   },
   {
      nkomnat: 1,
      nzhilcov: 2,
      plosh: 30,
      etazh: 3,
      nkv: 24,
      getUtilities: function (d) {
         let k = 0;
         if (d.getMonth() >= 2 && d.getMonth() <= 9) {
            k = 1;
         } else {
            k = 1.8;
         }
         return k * this.plosh * this.nzhilcov / 2;
      }
   },
   {
      nkomnat: 7,
      nzhilcov: 4,
      plosh: 72,
      etazh: 19,
      nkv: 300,
      getUtilities: function (d) {
         let k = 0;
         if (d.getMonth() >= 2 && d.getMonth() <= 9) {
            k = 1;
         } else {
            k = 1.8;
         }
         return k * this.plosh * this.nzhilcov / 2;
      }
   },
   {
      nkomnat: 4,
      nzhilcov: 4,
      plosh: 56,
      etazh: 5,
      nkv: 65,
      getUtilities: function (d) {
         let k = 0;
         if (d.getMonth() >= 2 && d.getMonth() <= 9) {
            k = 1;
         } else {
            k = 1.8;
         }
         return k * this.plosh * this.nzhilcov / 2;
      }
   }
   ],
   getLivingSpace: function () {
      let s = 0;
      for (let i = 0; i < this.kvart.length; i++) {
         s += this.kvart[i].plosh;
      }
      return s;
   },
   getPeople: function () {
      let s = 0;
      for (let i = 0; i < this.kvart.length; i++) {
         s += this.kvart[i].nzhilcov;
      }
      return s;
   },
   getYearUtilities: function () {
      return (4 * 1.8 + 8 * 1) * this.getLivingSpace() * this.getPeople() / 2;
   },
   getAreaPerPerson: function () {
      return this.getLivingSpace() / this.getPeople();
   }

}
console.log("Living space: " + dom.getLivingSpace());
console.log("Number of people: " + dom.getPeople());
console.log("Year utilities: " + dom.getYearUtilities());
console.log("Area per person: " + dom.getAreaPerPerson());
for (let i = 0; i < dom.kvart.length; i++) {
   console.log("utilities of " + dom.kvart[i].nkv + " flat: " + dom.kvart[i].getUtilities(d));
}
console.log(dom);