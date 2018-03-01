jQuery("#simulation")
  .on("click", ".s-83d39a1d-adf7-4c97-838b-a468f500b69b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "PrezzoRicettaBianca" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_26",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_PrenotaEpaga","#s-Button_PrenotaSenzaPagare","#s-Text_DesideriPagareLaTuaVisita","#s-Rectangle_PrenotazioneVisita","#s-Image_73" ],
                    "effect": {
                      "type": "explode",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_1" ]
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
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
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
    } else if(jFirer.is("#s-Button_PrenotaEpaga")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_PrenotaEpaga": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_PrenotaEpaga": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_PrenotaEpaga": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
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
                    "value": "b"
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
                    "variable": [ "RicettaBianca" ],
                    "value": "1"
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
                    "variable": [ "pagina" ],
                    "value": "Prenotazione ricetta bianca"
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
                    "target": "screens/e021d876-894c-4ffd-8416-dcfe46d99ad3",
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
    } else if(jFirer.is("#s-Button_PrenotaSenzaPagare")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_PrenotaSenzaPagare": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_PrenotaSenzaPagare": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_PrenotaSenzaPagare": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_PrenotaSenzaPagare_1","#s-Text_DesideriPagareLaTuaVisita_1","#s-Rectangle_PrenotazioneVisita_1","#s-Button_PrenotaEpaga_1" ],
                    "effect": {
                      "type": "explode",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_73" ]
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
    } else if(jFirer.is("#s-Button_PrenotaEpaga_1")) {
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
                    "value": "b"
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
                    "variable": [ "RicettaBianca" ],
                    "value": "1"
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
                    "target": "screens/c6909734-dfff-4d7b-9ca1-7e124892b0a3"
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
    } else if(jFirer.is("#s-Button_PrenotaSenzaPagare_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_PrenotaSenzaPagare_1","#s-Button_PrenotaEpaga","#s-Text_DesideriPagareLaTuaVisita_1","#s-Button_PrenotaSenzaPagare","#s-Text_DesideriPagareLaTuaVisita","#s-Rectangle_PrenotazioneVisita_1","#s-Rectangle_PrenotazioneVisita","#s-Button_PrenotaEpaga_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_16": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_24": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_24": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_24": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_25": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_25": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_25": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_23": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_22": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_26": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_26": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_26": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
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
    } else if(jFirer.is("#s-Image_73")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_16": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_24": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_24": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_24": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_25": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_25": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_25": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_27": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_28": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Image_72": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_23": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_22": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_26": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_26": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_26": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-83d39a1d-adf7-4c97-838b-a468f500b69b #s-Text_8": {
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_PrenotaEpaga","#s-Button_PrenotaSenzaPagare","#s-Text_DesideriPagareLaTuaVisita","#s-Rectangle_PrenotazioneVisita_1","#s-Rectangle_PrenotazioneVisita","#s-Image_73" ]
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
  .on("pageload", ".s-83d39a1d-adf7-4c97-838b-a468f500b69b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_5")) {
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
                      "element": "NomeOspedaleRicettaBianca"
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
                      "element": "DataRicettaBianca"
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
    } else if(jFirer.is("#s-Text_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_14" ],
                    "value": {
                      "datatype": "variable",
                      "element": "OraVisitaRicettaBianca"
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
    } else if(jFirer.is("#s-Text_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_26" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Text_20",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-Text_21",
                          "property": "jimGetValue"
                        } ]
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Text_22",
                          "property": "jimGetValue"
                        },{
                          "datatype": "property",
                          "target": "#s-Text_23",
                          "property": "jimGetValue"
                        } ]
                      } ]
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
    } else if(jFirer.is("#s-Text_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_28" ],
                    "value": {
                      "datatype": "variable",
                      "element": "IndirizzoOspedaleRicettaBianca"
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