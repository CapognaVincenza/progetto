jQuery("#simulation")
  .on("click", ".s-d311f3e6-1f62-4493-a143-f220945bfd2d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_3" ],
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
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_2": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_72" ]
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
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_15" ],
                    "value": "Ospedale San Nicola Pellegrino"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_16" ],
                    "value": "Viale Padre Pio, 70059 Trani BT"
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
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "DataRicettaBianca" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_18",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "NomeOspedaleRicettaBianca" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_15",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "IndirizzoOspedaleRicettaBianca" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_16",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "OraVisitaRicettaBianca" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_19",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/83d39a1d-adf7-4c97-838b-a468f500b69b",
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
        },
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
                    "value": "Sintesi ricetta"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dd780ca9-59cf-4eec-b12b-a50141bd505f",
                    "transition": "slideandfade"
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
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ null,"23" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ null,"59" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ null,"0" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ null,"0" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_25")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ null,"23" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ null,"59" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_27")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ null,"0" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ null,"0" ]
              },
              "actions": [
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
                    "target": [ "#s-Dynamic_Panel_3" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_72" ]
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
    } else if(jFirer.is("#s-Image_73")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_3" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d311f3e6-1f62-4493-a143-f220945bfd2d #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_72" ]
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
    } else if(jFirer.is("#s-Text_cell_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Data" ],
                    "value": "05/02/2018"
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
                    "variable": [ "Indirizzo" ],
                    "value": null
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/21bd5fd8-b198-4b8b-a3d5-e04c4d125150",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-d311f3e6-1f62-4493-a143-f220945bfd2d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_15" ],
                    "value": "Ospedale San Nicola Pellegrino"
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
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_16" ],
                    "value": "Viale Padre Pio, 70059 Trani BT"
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