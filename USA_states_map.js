var nhrpStars = new Datamap({
  scope: 'usa',

  element: document.getElementById('container'),

  geographyConfig: {
    borderColor: '#aaa',
    highlightFillColor: '#99FF00',
    highlightBorderColor: '#99FF00',
    highlightBorderWidth: 3,

    popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + '<br>' + this.listStars(data.fillKey);
    },

    listStars: function(numStars) {
      var result = '';
      for (var i = 0; i < numStars; i++) {
        result += '<img src="./gold-star.jpg">';
      }
      return result;
    },
  },

  fills: {
    '1': '#CC4731',
    '2': '#EAA9A8',
    '3': '#EDDC4E',
    '4': '#A9C0DE',
    '5': '#306596',
  },

  data: {
    AL: {fillKey: 1},
    AK: {fillKey: 1},
    AZ: {fillKey: 1},
    AR: {fillKey: 2},
    CA: {fillKey: 4},
    CO: {fillKey: 2},
    CT: {fillKey: 5},
    DE: {fillKey: 3},
    FL: {fillKey: 2},
    GA: {fillKey: 3},
    HI: {fillKey: 2},
    ID: {fillKey: 1},
    IL: {fillKey: 2},
    IN: {fillKey: 2},
    IA: {fillKey: 4},
    KS: {fillKey: 3},
    KY: {fillKey: 2},
    LA: {fillKey: 1},
    ME: {fillKey: 4},
    MD: {fillKey: 2},
    MA: {fillKey: 4},
    MI: {fillKey: 2},
    MN: {fillKey: 3},
    MS: {fillKey: 1},
    MO: {fillKey: 2},
    MT: {fillKey: 1},
    NE: {fillKey: 3},
    NV: {fillKey: 2},
    NH: {fillKey: 1},
    NJ: {fillKey: 4},
    NM: {fillKey: 3},
    NY: {fillKey: 5},
    NC: {fillKey: 3},
    ND: {fillKey: 2},
    OH: {fillKey: 3},
    OK: {fillKey: 2},
    OR: {fillKey: 3},
    PA: {fillKey: 5},
    RI: {fillKey: 4},
    SC: {fillKey: 2},
    SD: {fillKey: 1},
    TN: {fillKey: 1},
    TX: {fillKey: 2},
    UT: {fillKey: 4},
    VT: {fillKey: 4},
    VA: {fillKey: 1},
    WA: {fillKey: 2},
    WV: {fillKey: 2},
    WI: {fillKey: 4},
    WY: {fillKey: 3},
  },
});
