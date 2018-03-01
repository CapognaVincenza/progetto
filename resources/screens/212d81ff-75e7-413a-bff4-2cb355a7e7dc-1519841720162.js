jQuery("#simulation")
  .on("click", ".s-212d81ff-75e7-413a-bff4-2cb355a7e7dc .click", function(event, data) {
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
                    "target": "screens/20aaba36-5492-4aa4-bfee-f972015777c8",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_exit")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_23": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_9": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Radio_button_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Radio_button_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_72 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_72": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_72": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_72": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_24": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_24": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_24": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_28": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_28": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_28": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_11": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_17": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_25": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_25": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_25": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_27": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_27": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_18": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_19": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_22": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Radio_button_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Radio_button_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_29": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_29": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_29": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_26": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_26": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_26": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_16": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_exit": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_exit": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_exit": {
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
    } else if(jFirer.is("#s-Image_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneData" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_6",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneMedico" ],
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
                    "variable": [ "ArchivioPrenotazioneOra" ],
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazionePrestazione" ],
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
                    "variable": [ "ArchivioPrenotazionePrezzo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_28",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneSede" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_20",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneID" ],
                    "value": "0003"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/349ca4f3-aaab-4162-bd1a-ae7b84b5c790",
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
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneData" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_23",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneMedico" ],
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
                    "variable": [ "ArchivioPrenotazioneOra" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_27",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazionePrestazione" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_7",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazionePrezzo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_29",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneSede" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_24",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneID" ],
                    "value": "0004"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/349ca4f3-aaab-4162-bd1a-ae7b84b5c790",
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
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_2": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_23": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_71": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_9": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_8": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_24": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_24": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_24": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_7": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_10 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_10": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_20": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_28": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_28": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_28": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_31": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_31": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_31": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_30": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_30": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_30": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_11": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_6": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_34": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_34": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_34": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_4": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_25": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_25": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_25": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_32": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_32": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_32": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_3": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_27": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_27": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_27": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_18": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_12": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_10": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_33": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_33": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_33": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_8": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_14": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_13": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_5": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Image_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_7": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_3": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_29": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_29": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_29": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_5": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_26": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_26": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_26": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_4": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_16": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_6": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_6": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Rectangle_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_15": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Text_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_1": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Input_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_exit": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_exit": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-212d81ff-75e7-413a-bff4-2cb355a7e7dc #s-Button_exit": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazionePrestazione" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_13",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneMedico" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_14",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneSede" ],
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
                    "variable": [ "ArchivioPrenotazionePrezzo" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneData" ],
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
                    "variable": [ "ArchivioPrenotazioneOra" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_25",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ArchivioPrenotazioneID" ],
                    "value": "0002"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/349ca4f3-aaab-4162-bd1a-ae7b84b5c790",
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
  });