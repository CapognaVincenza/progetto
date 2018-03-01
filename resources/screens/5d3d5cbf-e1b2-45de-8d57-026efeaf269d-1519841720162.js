jQuery("#simulation")
  .on("click", ".s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/21bd5fd8-b198-4b8b-a3d5-e04c4d125150",
                    "transition": "slideright"
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
                    "value": "Prenotazione effettuata"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dd780ca9-59cf-4eec-b12b-a50141bd505f",
                    "transition": "fade"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_2","#s-Button_3","#s-Rectangle_2","#s-Text_8" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_10": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Button_1": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_15": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_5": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_12": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_3": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_6": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_13": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_4": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_7": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_2": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_14": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_9": {
                      "attributes": {
                        "opacity": "0.1"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)",
                        "filter": "alpha(opacity=10)"
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "PrimaPrenotazione"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "PrimaPrenotazione" ],
                    "value": "p"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "PrenotazioniAttive" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Prezzo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "pagina" ],
                    "value": "Conferma prenotazione"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "pagina" ],
                    "value": "Conferma prenotazione"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e021d876-894c-4ffd-8416-dcfe46d99ad3",
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_2","#s-Text_8","#s-Button_3","#s-Button_2" ],
                    "effect": {
                      "type": "explode",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Button_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100) progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100) alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100) progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100) alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100) progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100) alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100) progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100) alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "10px",
                        "height": "10px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1 .content": {
                      "attributes": {
                        "width": "10px",
                        "height": "10px"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Ellipse_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Image_43 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Image_43": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Image_43": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Image_43": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100) progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100) alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Line_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100) progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100) alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d #s-Text_14": {
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
  .on("pageload", ".s-5d3d5cbf-e1b2-45de-8d57-026efeaf269d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
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