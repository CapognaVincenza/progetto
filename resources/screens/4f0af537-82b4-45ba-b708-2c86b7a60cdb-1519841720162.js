jQuery("#simulation")
  .on("click", ".s-4f0af537-82b4-45ba-b708-2c86b7a60cdb .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": "turn"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "pagina"
                },"Prenotazioni disdette" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d4bfb88e-084b-430a-b406-fbcc110de5b5",
                    "transition": "slidedown"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "idPrenotazione" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Button_6": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Button_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Button_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_13": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Rectangle_prenotazioniattive": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Rectangle_prenotazioniattive": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Rectangle_prenotazioniattive": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_14": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_11": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_15": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_12": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_8": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_7": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_4": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_6": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_2": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_10": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_3": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_5": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_9": {
                      "attributes": {
                        "opacity": "0.3"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                        "filter": "alpha(opacity=30)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_2","#s-Text_1","#s-Button_2","#s-Button_1","#s-Text_16" ],
                    "effect": {
                      "type": "explode",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Disdetta" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "PrenotazioniAttive" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/20aaba36-5492-4aa4-bfee-f972015777c8",
                    "transition": "flow"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_2","#s-Text_1","#s-Button_2","#s-Text_16","#s-Button_1" ],
                    "effect": {
                      "type": "explode",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Button_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Button_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Button_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Rectangle_prenotazioniattive": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Rectangle_prenotazioniattive": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Rectangle_prenotazioniattive": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_11": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_9": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-4f0af537-82b4-45ba-b708-2c86b7a60cdb #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": "flow"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Accesso"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "pagina" ],
                    "value": "Preferiti"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dd780ca9-59cf-4eec-b12b-a50141bd505f",
                    "transition": "slideup"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Accesso"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cb32bf1e-7443-4969-bfb1-2cf4b717602d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Accesso"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "pagina" ],
                    "value": "Messaggi"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dd780ca9-59cf-4eec-b12b-a50141bd505f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Accesso"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ba8b7b67-8166-4cc5-8d2d-4b5eb3bdbb75",
                    "transition": "slideup"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Accesso"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dd780ca9-59cf-4eec-b12b-a50141bd505f",
                    "transition": "slideup"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Accesso"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/20aaba36-5492-4aa4-bfee-f972015777c8",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-4f0af537-82b4-45ba-b708-2c86b7a60cdb .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "pagina"
                },"Prenotazioni disdette" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": "Prenotazioni disdette"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "pagina"
                },"Prenotazioni disdette" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nome"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Data"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_5" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Prezzo"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_6" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Indirizzo"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_7" ],
                    "value": {
                      "datatype": "variable",
                      "element": "OraVisitaPagamento"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });