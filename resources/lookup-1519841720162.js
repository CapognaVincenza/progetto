(function(window, undefined) {
  var dictionary = {
    "212d81ff-75e7-413a-bff4-2cb355a7e7dc": "Le mie visite",
    "9bf41eeb-ed52-4e80-aca2-92e04acb619e": "Pagamento effettuato",
    "e3e5b632-2147-49f8-838e-1032c4f7e7ec": "Prenotazioni Attive",
    "349ca4f3-aaab-4162-bd1a-ae7b84b5c790": "Archivio prenotazione dettagli",
    "da7a3086-3e3c-4ab6-853c-148da24cd8a1": "Notifiche",
    "a722af5b-297c-42b1-862a-bd6269edf8b9": "Tariffe",
    "074166d7-a7c5-4f6f-b47b-0604b38de5a6": "Dettaglio medico",
    "1b27f14f-b83a-4936-9368-abf78cda5345": "A pagamento el",
    "cb32bf1e-7443-4969-bfb1-2cf4b717602d": "Preferiti",
    "55b15dcd-cbc8-4b95-8296-c97e2ef8c1c0": "Paga le tue visite",
    "c6909734-dfff-4d7b-9ca1-7e124892b0a3": "Prenotazione Effettuata",
    "38d5ac60-b54f-4b21-8fc9-cb82fb5172e7": "Pagamento ricetta bianca carta di credito",
    "e28dc09c-76f2-42e8-9d19-1565781419f5": "Altre opinioni",
    "20aaba36-5492-4aa4-bfee-f972015777c8": "Benvenuto",
    "dd780ca9-59cf-4eec-b12b-a50141bd505f": "Login",
    "4e3953c6-60df-4587-871b-9d0bdb19c7e0": "Conferma pagamento paypal",
    "8f6bef9f-26c9-4eda-a631-3d7f89d7e397": "Visite pagate",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "1d849fec-3b3d-4c99-87ca-90179266a7ab": "Informazioni dottori",
    "e021d876-894c-4ffd-8416-dcfe46d99ad3": "Pagamento ricetta bianca",
    "5d3d5cbf-e1b2-45de-8d57-026efeaf269d": "conferma prenotazione",
    "ba8b7b67-8166-4cc5-8d2d-4b5eb3bdbb75": "Messaggi",
    "fa6ed3e0-d65b-4585-95d7-da9ce751893e": "Referti",
    "2f70f722-6d9b-436c-9f09-df6074838cd5": "Profilo Dottore",
    "cc673946-7a54-4b1a-bda9-f95284312b88": "Chat",
    "83d39a1d-adf7-4c97-838b-a468f500b69b": "Prenotazione ricetta bianca",
    "d4bfb88e-084b-430a-b406-fbcc110de5b5": "Prenotazioni disdette",
    "4f0af537-82b4-45ba-b708-2c86b7a60cdb": "Dettaglio prenotazioni attive",
    "21bd5fd8-b198-4b8b-a3d5-e04c4d125150": "Ora disponibilità",
    "d311f3e6-1f62-4493-a143-f220945bfd2d": "Sintesi ricetta",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);