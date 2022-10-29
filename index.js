const deepl = require('deepl-node');
const authKey = "016c595f-94d6-fe51-f5a2-dc36ce89f86d:fx";
const translator = new deepl.Translator(authKey);
const asyncForEach = require('async-await-foreach');

(async () => {

  const text = `La foule se dirigeait vers l'opéra, où la première représentation de la pièce de théatre musical "Vivre pour créér" était donnée ce soir là. Le metteur en scène, un Américain nommé Lune Rouge, ayant été élevé parmi des Indiens Cherokee,  prétendait avoir flirté avec la folie lors de rituels chamaniques, ce qui l'aurait ensuite amené à une forme de clarté mentale supérieure à la moyenne. Ce sont ces expériences mystiques qui l'auraient amené à inventer un concept novateur de dramaturgie, visant à déclencher chez les spectateurs une révélation de nature spirituelle immédiate.`;

  const lang_pattern = [
    "FR",
    "EN-US",
    "DE",
    "SV",
    "UK",
    "ZH",
    "ID",
    "TR",
    "DA",
    "TR",
    "SV",
    "JA",
    "ZH",
    "UK",
    "ZH",
    "PL",
    "DA",
    "TR",
    "PL",
    "UK",
    "RU",
    "FR",
  ];
  
  console.log(`nous allons traduire ce texte : "${text}"`);
  let textToTranslate = text;

  for (let i = 0 ; i < lang_pattern.length - 1; i++) {
    const src_lang = lang_pattern[i];
    const dest_lang = lang_pattern[i+1];
    textToTranslate = await translate(textToTranslate, null, dest_lang);
    console.log(`[${dest_lang}] ${textToTranslate}`);
  }

  // await translate('hello world', "en", 'ES');
  // await translate('hello world', "EN", 'FR');

  async function translate(text, src_lang, dest_lang) {
    try {
      const result = await translator.translateText(text, src_lang, dest_lang);
      return result.text;
    }
    catch (e) {
      console.log(e);
    }
    // console.log(result);
  }

})();