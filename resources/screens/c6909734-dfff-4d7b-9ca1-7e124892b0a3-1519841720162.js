jQuery("#simulation")
  .on("click", ".s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_3","#s-Rectangle_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Image_17 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Image_17": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Image_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Image_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Input_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Input_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Button_2": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_3": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Button_1": {
                      "attributes": {
                        "opacity": "0.4"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
                      }
                    }
                  },{
                    "#s-c6909734-dfff-4d7b-9ca1-7e124892b0a3 #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)",
                        "filter": "alpha(opacity=40)"
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/20aaba36-5492-4aa4-bfee-f972015777c8"
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