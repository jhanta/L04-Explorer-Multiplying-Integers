var sketch = {
  "metadata": {
    "width": 1211,
    "height": 732,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1070",
    "wsp-build-stamp": "8126303e6615/20200924134425",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L04 Explorer Multiplying Integers.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Papyrus\", sans-serif",
      "\"Comic Sans MS\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 40,
          "left": 18,
          "bottom": 772,
          "right": 1229
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "blue"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "rgb(255,128,0)"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 22,
              "font-weight": "bold"
            },
            "Measurement": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-weight": "bold"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 265,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "second integer",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 257
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 157
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "label": "vert spacing",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 155
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "6": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "rgb(255,128,0)"
          }
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "color": "rgb(255,128,0)"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 221
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "groups of>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 203
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "groups of<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8",
            "1": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8",
            "1": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 963,
              "y": 275
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 374
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "label": "zero",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "one",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 420
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "label": "two",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 443
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "three",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "label": "four",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 800,
              "y": 489
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "five",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 386
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1",
          "label": "-one",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 410
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-2",
          "label": "-two",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 434
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-3",
          "label": "-three",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 458
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-4",
          "label": "-four",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 875,
              "y": 482
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5",
          "label": "-five",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "9",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 299
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255+@1*0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "9",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 967,
              "y": 316
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*255",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "25": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 357,
              "y": 226
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "26": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "25"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 325,
              "y": 220
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "27"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "29": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 410,
              "y": 261
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "30": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "29"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 411,
              "y": 266
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "32": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "31"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 416,
              "y": 256
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "34": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "33"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "35": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 410,
              "y": 258
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "36": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "35"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "37": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 674
            }
          },
          "textMFS": "<T'Adding or removing groups of zero will still give zero.'>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal"
          }
        },
        "38": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 714
            }
          },
          "textMFS": "<T'0 groups of 0 is zero.'>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal"
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 322,
              "y": 257
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "40": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "39"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "41": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 262,
              "y": 260
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "42": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "41"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "43": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 326,
              "y": 224
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "44": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "43"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 148,
              "y": 236
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "45"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1.52592547379986",
          "label": "sign",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 193
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1.841059602649007",
          "label": "sign 2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 216
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 233
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "sign 2>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 250
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 267
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(sign 2>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 284
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50",
            "1": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1252,
              "y": 301
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1+-1*@1",
          "label": "sign2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "56": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "55"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1516,
              "y": 694
            }
          },
          "textMFS": "<H<T'Adding 0 groups of '><?1xC0001<H<T'5'>>><T' will still give zero.'>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal"
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[2]=0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 695
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "second integer<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 678
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "second integer>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 133
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 56,
              "y": 64
            }
          },
          "textMFS": "<T'Multiplying Two Integers Explorer '>",
          "style": {
            "text-decoration": "underline"
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -16,
              "y": 295
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "64",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "64",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "68": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "66",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "67",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "70": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "68"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 45
          }
        },
        "71": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "69"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(138,102,217)",
            "layerOrder": 50
          }
        },
        "72": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "70",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 55
          }
        },
        "73": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "71",
            "blue": "24",
            "green": "3",
            "red": "23"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 60
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "66",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "75": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "74",
            "center": "66"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "76": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "75",
            "center": "66"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "77": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "76",
            "p1": "75"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "78": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "77",
            "center": "66"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "79": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "80": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "79",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "81": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "80",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "82": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "81",
            "center": "80"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "83": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "center": "80"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "84": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "83",
            "p1": "82"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "85": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "84",
            "center": "80"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "80",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "87": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "86"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 46
          }
        },
        "88": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "87",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 56
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "79",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "90": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "89",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "91": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "90",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "92": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "91"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 51
          }
        },
        "93": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "92",
            "blue": "24",
            "green": "3",
            "red": "23"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 61
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "89",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "95",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "96",
            "center": "95"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "98": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "97",
            "center": "95"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "99": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "97"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "100": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "99",
            "center": "95"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "101": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "95",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "102": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "101"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "maroon",
            "layerOrder": 47
          }
        },
        "103": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "102",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 57
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "105": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "104",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "106": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "105",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "107": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "106"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "layerOrder": 52
          }
        },
        "108": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "107",
            "blue": "24",
            "green": "3",
            "red": "23"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 62
          }
        },
        "109": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "104",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "109",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "111": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "110",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111",
            "center": "110"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "110"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "114": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "113",
            "p1": "112"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "115": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "114",
            "center": "110"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "110",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "117": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "116"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 48
          }
        },
        "118": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "117",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 58
          }
        },
        "119": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "109",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "121": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "120",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "122": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "121"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "green",
            "layerOrder": 53
          }
        },
        "123": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "122",
            "blue": "24",
            "green": "3",
            "red": "23"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 63
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "126": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "distance": "2"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "126",
            "center": "125"
          },
          "angle": -0.78539816339745,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127",
            "center": "125"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "129": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "128",
            "p1": "127"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "130": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "129",
            "center": "125"
          },
          "angle": -1.5707963267949,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "131": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "125",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "132": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "131"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "navy",
            "layerOrder": 49
          }
        },
        "133": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "132",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 59
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "135": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "134",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "136": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "135",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "137": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "136"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 54
          }
        },
        "138": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "137",
            "blue": "24",
            "green": "3",
            "red": "23"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "blue",
            "layerOrder": 64
          }
        },
        "139": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 317,
              "y": 70
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "five",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "140": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 252,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5",
          "label": "-five",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "141": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 404,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "step",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "142": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "139",
            "1": "140",
            "2": "141"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/trunc((@0-@1)/@2)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "143": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 56,
              "y": 145
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "143"
          },
          "angle": 0,
          "distance": 200,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "145": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "143",
            "p1": "144"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "146": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "145"
          },
          "value": 0.8,
          "constraint": "PointOnPath",
          "label": "Y",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "144",
            "center": "143",
            "measure": "142"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "white",
            "radius": 2
          }
        },
        "148": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "obj0": "143",
            "obj1": "147",
            "obj2": "146"
          },
          "constraint": "MeasurementRatio",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "149": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "148"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "150": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "149"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "151": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "149"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 678,
              "y": 69
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "152": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "147",
            "center": "143",
            "measure": "150"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "153": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "147",
            "center": "143",
            "measure": "151"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "154": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "152",
            "1": "146"
          },
          "geom": {
            "loc": {
              "x": 65,
              "y": 146
            }
          },
          "label": "+",
          "style": {
            "color": "black"
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "+"
          ],
          "rate": 0
        },
        "155": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "153",
            "1": "146"
          },
          "geom": {
            "loc": {
              "x": 65,
              "y": 124
            }
          },
          "label": "\u2013",
          "style": {
            "color": "black"
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "\u2013"
          ],
          "rate": 0
        },
        "156": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "140",
            "1": "141",
            "2": "149"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 100,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1*@2",
          "label": "first integer",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "157": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "156"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "# groups=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "158": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "5",
            "1": "157"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 323
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "159": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "156"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0)",
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "160": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 341
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "161": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "160"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 969,
              "y": 364
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "162": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "163": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "17",
            "1": "162"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": 14
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "five<=m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "164": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "16",
            "1": "162"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -8
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "four<=m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "165": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "15",
            "1": "162"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "three<=m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "166": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "14",
            "1": "162"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -52
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "two<=m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "167": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "13",
            "1": "162"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 585,
              "y": -74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "one<=m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "168": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "162",
            "1": "61",
            "2": "161"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 755
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'3'>>><T' groups of '><?1xC0002<H<T'5'>>><T' '><SR1G1L100<T'blue'>><T' counters were removed leaving '><?1xC0003<H<T'15'>>><T' more '><SR100G1L1<T'red'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "font-weight": "normal"
          }
        },
        "169": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "162",
            "1": "61",
            "2": "161"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 733
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'3'>>><T' groups of '><?1xC0002<H<T'5'>>><T' '><SR100G1L1<T'red'>><T' counters were removed leaving '><?1xC0003<H<T'15'>>><T' more '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "font-weight": "normal"
          }
        },
        "170": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "162",
            "1": "61",
            "2": "161"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 667
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'3'>>><T' groups of '><?1xC0002<H<T'5'>>><T' '><SR100G1L1<T'red'>><T' counters were added giving a total of '><?1xC0003<H<T'15'>>><T' '><SR100G1L1<T'red'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "font-weight": "normal"
          }
        },
        "171": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "162",
            "1": "61",
            "2": "161"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 689
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'3'>>><T' groups of '><?1xC0002<H<T'5'>>><T' '><SR1G1L100<T'blue'>><T' counters were added giving a total of '><?1xC0003<H<T'15'>>><T' '><SR1G1L100<T'blue'>><T' counters.'>>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "font-weight": "normal"
          }
        },
        "172": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "159",
            "1": "55",
            "2": "162"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 645
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'3'>>><T'('><?1xC0002<H<T'5'>>><T') can be viewed as adding '><?1xC0003<H<T'3'>>><T' groups of '><?1xC0002<H<T'5'>>><T' to zero.'>>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "font-weight": "normal"
          }
        },
        "173": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "159",
            "1": "55",
            "2": "162"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 711
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'3'>>><T'('><?1xC0002<H<T'5'>>><T') can be viewed as removing '><?1xC0003<H<T'3'>>><T' groups of '><?1xC0002<H<T'5'>>><T' from zero.'>>>",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "font-weight": "normal"
          }
        },
        "174": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "162"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 135
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "175": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "13"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<one",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "176": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "175"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<one)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "177": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "176"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 413
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "178": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "14"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<two",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "179": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "178"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 544
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<two)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "180": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "179"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 457
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "181": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "15"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<three",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "182": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "181"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 566
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<three)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "183": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "182"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 501
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "184": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "16"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<four",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "185": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "184"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 588
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<four)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "186": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "185"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 545
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "187": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "17"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 795,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "label": "m[1]<five",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "188": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "187"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 869,
              "y": 610
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]<five)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "189": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "188"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1010,
              "y": 589
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "190": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "18"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-one",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "191": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "190"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 397
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "192": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 537
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-two",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "193": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "192"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 441
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "194": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "20"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-three",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "195": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "194"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 485
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "196": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-four",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "197": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "196"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 529
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "198": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159",
            "1": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1172,
              "y": 603
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "m[1]<=-five",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "199": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "198"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1268,
              "y": 573
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "200": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 642
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "first integer>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "201": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "200",
            "1": "60"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 712
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer>0)^(second integer>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "202": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "201"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "203": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "36",
            "center": "35",
            "measure": "202"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "204": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "203",
            "text": "170"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "205": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "200",
            "1": "59"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 729
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer>0)^(second integer<0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "206": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "205"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "207": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "34",
            "center": "33",
            "measure": "206"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "208": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "207",
            "text": "171"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "209": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "200"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "210": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "28",
            "center": "27",
            "measure": "209"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "211": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "210",
            "text": "172"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "212": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 798,
              "y": 659
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "first integer<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "213": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "212",
            "1": "60"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 746
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer<0)^(second integer>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "214": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "213"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "215": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "center": "29",
            "measure": "214"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "216": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "215",
            "text": "169"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "217": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "212",
            "1": "59"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 763
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(first integer<0)^(second integer<0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "218": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "217"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 587,
              "y": 403
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "32",
            "center": "31",
            "measure": "218"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "220": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "219",
            "text": "168"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "221": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "212"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 797,
              "y": 841
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "26",
            "center": "25",
            "measure": "221"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "223": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "222",
            "text": "173"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "224": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "159"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "225": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "224",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 824
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(m[2]=0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "226": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "225"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "46",
            "center": "45",
            "measure": "226"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "228": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "227",
            "text": "38"
          },
          "constraint": "Pegged",
          "style": {
            "font-family": 1,
            "font-size": 16,
            "font-weight": "normal"
          }
        },
        "229": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "224",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[1]=0)^(\u00ac(m[2]=0))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "230": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "229"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "231": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "42",
            "center": "41",
            "measure": "230"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "232": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "231",
            "text": "56"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "233": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "224"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 858,
              "y": 780
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[1]=0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "234": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "57",
            "1": "233"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 799,
              "y": 868
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[2]=0)^(\u00ac(m[1]=0))",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "235": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "234"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "236": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "40",
            "center": "39",
            "measure": "235"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "237": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "236",
            "text": "37"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "238": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "224"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 499,
              "y": 781
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "239": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "44",
            "center": "43",
            "measure": "238"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "240": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "239",
            "text": "172"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal"
          }
        },
        "241": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "156",
            "1": "1",
            "2": "160"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 465,
              "y": 126
            }
          },
          "textMFS": "<H<?1xC0001<H<T'3'>>><T'('><?1xC0002<H<T'5'>>><T') = '><?1xC0003<H<T'15'>>>>",
          "style": {
            "font-size": 24
          }
        },
        "242": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "156"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 248
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "# groups<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "243": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "163",
            "1": "61",
            "2": "242"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 704,
              "y": 21
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "244": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "134",
            "1": "125",
            "2": "135",
            "3": "131",
            "4": "136",
            "5": "132",
            "6": "137",
            "7": "133",
            "8": "138",
            "9": "126",
            "10": "127",
            "11": "128",
            "12": "129",
            "13": "130",
            "preimage0": "124",
            "map0image0": "125",
            "depth": "243"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "245": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "134",
            "map": "244"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "246": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "130",
            "map": "244"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "247": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "131",
            "map": "244"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "248": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "136",
            "map": "244"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "249": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "133",
            "map": "244"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 73
          }
        },
        "250": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "138",
            "map": "244"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 74
          }
        },
        "251": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "129",
            "map": "244"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "252": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "61",
            "2": "242"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 704,
              "y": -3
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "253": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "119",
            "1": "110",
            "2": "120",
            "3": "116",
            "4": "121",
            "5": "117",
            "6": "122",
            "7": "118",
            "8": "123",
            "9": "111",
            "10": "112",
            "11": "113",
            "12": "114",
            "13": "115",
            "preimage0": "109",
            "map0image0": "110",
            "depth": "252"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "254": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "119",
            "map": "253"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "255": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "115",
            "map": "253"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "256": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "116",
            "map": "253"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "257": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "121",
            "map": "253"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "258": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "118",
            "map": "253"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 71
          }
        },
        "259": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "123",
            "map": "253"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 72
          }
        },
        "260": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "114",
            "map": "253"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "261": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "165",
            "1": "61",
            "2": "242"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 698,
              "y": -27
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "262": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "104",
            "1": "95",
            "2": "105",
            "3": "101",
            "4": "106",
            "5": "102",
            "6": "107",
            "7": "103",
            "8": "108",
            "9": "96",
            "10": "97",
            "11": "98",
            "12": "99",
            "13": "100",
            "preimage0": "94",
            "map0image0": "95",
            "depth": "261"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "263": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "104",
            "map": "262"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "264": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "100",
            "map": "262"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "265": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "101",
            "map": "262"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "266": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "106",
            "map": "262"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "267": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "103",
            "map": "262"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 69
          }
        },
        "268": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "108",
            "map": "262"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 70
          }
        },
        "269": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "99",
            "map": "262"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "270": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "166",
            "1": "61",
            "2": "242"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 698,
              "y": -51
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "271": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "89",
            "1": "80",
            "2": "90",
            "3": "86",
            "4": "91",
            "5": "87",
            "6": "92",
            "7": "88",
            "8": "93",
            "9": "81",
            "10": "82",
            "11": "83",
            "12": "84",
            "13": "85",
            "preimage0": "79",
            "map0image0": "80",
            "depth": "270"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "272": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "89",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "273": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "85",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "274": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "86",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "275": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "91",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "276": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "88",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 67
          }
        },
        "277": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "93",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 68
          }
        },
        "278": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "84",
            "map": "271"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "279": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "167",
            "1": "61",
            "2": "242"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 698,
              "y": -75
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "280": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "65",
            "1": "66",
            "2": "67",
            "3": "68",
            "4": "69",
            "5": "70",
            "6": "71",
            "7": "72",
            "8": "73",
            "9": "74",
            "10": "75",
            "11": "76",
            "12": "77",
            "13": "78",
            "preimage0": "64",
            "map0image0": "66",
            "depth": "279"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "281": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "78",
            "map": "280"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "282": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "77",
            "map": "280"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "283": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "73",
            "map": "280"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 66
          }
        },
        "284": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "72",
            "map": "280"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 65
          }
        },
        "285": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "69",
            "map": "280"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "286": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "68",
            "map": "280"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "287": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "65",
            "map": "280"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "288": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "242"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 266
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "289": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "156"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 191
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "# groups>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "290": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "289"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 790,
              "y": 209
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "291": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "167",
            "1": "61",
            "2": "289"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "292": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "166",
            "1": "61",
            "2": "289"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -52
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "293": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "165",
            "1": "61",
            "2": "289"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -28
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "294": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "164",
            "1": "61",
            "2": "289"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": -4
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "295": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "163",
            "1": "61",
            "2": "289"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 975,
              "y": 20
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "296": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -18,
              "y": 289
            }
          },
          "label": "Z",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "297": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "296",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "298": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "297",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "299": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "298"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 75
          }
        },
        "300": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "299",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 80
          }
        },
        "301": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "297",
            "1": "298",
            "2": "299",
            "3": "300",
            "preimage0": "296",
            "map0image0": "297",
            "depth": "291"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "302": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "298",
            "map": "301"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "303": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "300",
            "map": "301"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 85
          }
        },
        "304": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "296",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "305": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "304",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "306": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "305",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "307": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "306"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 76
          }
        },
        "308": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "307",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 81
          }
        },
        "309": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "305",
            "1": "306",
            "2": "307",
            "3": "308",
            "preimage0": "304",
            "map0image0": "305",
            "depth": "292"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "310": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "308",
            "map": "309"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 86
          }
        },
        "311": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "306",
            "map": "309"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "312": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "304",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "313": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "312",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "314": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "313",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "315": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "314"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "layerOrder": 77
          }
        },
        "316": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "315",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 82
          }
        },
        "317": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "313",
            "1": "314",
            "2": "315",
            "3": "316",
            "preimage0": "312",
            "map0image0": "313",
            "depth": "293"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "318": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "316",
            "map": "317"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 87
          }
        },
        "319": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "314",
            "map": "317"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "320": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "312",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "321": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "320",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "322": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "321",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "323": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "322"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 78
          }
        },
        "324": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "323",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 83
          }
        },
        "325": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "321",
            "1": "322",
            "2": "323",
            "3": "324",
            "preimage0": "320",
            "map0image0": "321",
            "depth": "294"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "326": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "324",
            "map": "325"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 88
          }
        },
        "327": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "322",
            "map": "325"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "328": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "320",
            "distance": "5"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "329": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "328",
            "distance": "5"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "330": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "329",
            "radius": "2"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true
          }
        },
        "331": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "330"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "layerOrder": 79
          }
        },
        "332": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "331",
            "blue": "11",
            "green": "3",
            "red": "10"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 84
          }
        },
        "333": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "329",
            "1": "330",
            "2": "331",
            "3": "332",
            "preimage0": "328",
            "map0image0": "329",
            "depth": "295"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "334": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "332",
            "map": "333"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 89
          }
        },
        "335": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "330",
            "map": "333"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "336": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 566,
              "y": 265
            }
          },
          "textMFS": "<VL<T'Let\\'s explore what happens when you add multiply'><T'two integers using counters. '><S#E<T' '>><T'Use the \\\"+\\\" and \\\"-\\\" to change the first integer. Enter'><T'a number into the box to change the second integer.'><F110xxFFFFFFFFx20x90x>>",
          "style": {
            "font-weight": "normal"
          }
        }
      }
    }
  ]
};