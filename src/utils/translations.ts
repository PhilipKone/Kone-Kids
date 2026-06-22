export type Dialect = 'en' | 'twi' | 'ga' | 'ewe';

export interface TranslationResult {
  text: string;
  phonetic: string;
}

const DICTIONARY: Record<string, Record<Exclude<Dialect, 'en'>, TranslationResult>> = {
  // General & Greeting
  'Hi! Ready to build the future?': {
    twi: {
      text: 'Mema wo aha! Wosiesie wo ho sɛ yɛbɛyɛ daakye no?',
      phonetic: 'May-ma wo aha! Wo siesie wo ho seh yeh-beh-yeh daa-kyeh no?'
    },
    ga: {
      text: 'Minao aha! Oasila kɛha daakye lɛ?',
      phonetic: 'Mee-nawo aha! Wa-see-lah keh-ha daa-tsheh leh?'
    },
    ewe: {
      text: 'Ndi na wò! Èle klalo be nàtu etsɔme?',
      phonetic: 'Ndi na wo! Eh-leh klah-lo beh nah-to et-sor-meh?'
    }
  },
  'Hello World!': {
    twi: {
      text: 'Mema wo aha wiase!',
      phonetic: 'May-ma wo aha wee-ah-seh!'
    },
    ga: {
      text: 'Minao aha je!',
      phonetic: 'Mee-nawo aha jeh!'
    },
    ewe: {
      text: 'Ndi na xexeame!',
      phonetic: 'Ndi na she-she-ah-meh!'
    }
  },
  // Alerts & Errors
  'Your workspace is empty! Drag some blocks in first. 👆': {
    twi: {
      text: 'Wo adwumayɛbea hɔ yɛ hyehyeehye! Twi nneɛma bi gu so ansa. 👆',
      phonetic: 'Wo adjoomayeh-beyah hor yeh sheh-shee-sheh! Twee nee-eh-mah bee goo so ansa. Up.'
    },
    ga: {
      text: 'Okasegbɛ lɛ yɛ faŋŋ! Gbalamɔ nɔ ko gu mli ya. 👆',
      phonetic: 'Okaseh-gbeh leh yeh fang! Gbalamor nor ko goo mli yah. Up.'
    },
    ewe: {
      text: 'Wò dɔwɔƒe le ƒuƒlu! Hee nuxexlɛ dzesi aɖewo de eme gbɔ. 👆',
      phonetic: 'Wo dor-wor-feh leh foofloo! Hee noosheshe dzesi adewor deh emeh gbor. Up.'
    }
  },
  'Your workspace is empty! Drag some blocks in first.': {
    twi: {
      text: 'Wo adwumayɛbea hɔ yɛ hyehyeehye! Twi nneɛma bi gu so ansa.',
      phonetic: 'Wo adjoomayeh-beyah hor yeh sheh-shee-sheh! Twee nee-eh-mah bee goo so ansa.'
    },
    ga: {
      text: 'Okasegbɛ lɛ yɛ faŋŋ! Gbalamɔ nɔ ko gu mli ya.',
      phonetic: 'Okaseh-gbeh leh yeh fang! Gbalamor nor ko goo mli yah.'
    },
    ewe: {
      text: 'Wò dɔwɔƒe le ƒuƒlu! Hee nuxexlɛ dzesi aɖewo de eme gbɔ.',
      phonetic: 'Wo dor-wor-feh leh foofloo! Hee noosheshe dzesi adewor deh emeh gbor.'
    }
  },
  'You need at least 1 blocks for this mission. Keep building!': {
    twi: {
      text: 'Ehia sɛ wonya block baako ansa! Kɔ so yɛ!',
      phonetic: 'Ehee-ah seh wonyah block bahko ansa! Kor so yeh!'
    },
    ga: {
      text: 'Ehia ni onya block kome kɛha nitsumo nɛɛ! Yaa nɔ obua!',
      phonetic: 'Ehee-ah nee onyah block kohmeh kehha neetsumor neh! Yah nor obwah!'
    },
    ewe: {
      text: 'Èhiã nuxexlɛ dzesi ɖeka teti na dɔ sia! Yi dɔwɔwɔ dzi!',
      phonetic: 'Eh-heeah noosheshe dzesi dekah teti na dor see-ah! Yee dor-wor-wor dzee!'
    }
  },
  'Well done! Mission accomplished!': {
    twi: {
      text: 'Ayekoo! Woyɛɛ adwuma no yie!',
      phonetic: 'Ah-yeh-koo! Wo-yehh adjooma no yee!'
    },
    ga: {
      text: 'Oye odzogbaŋŋ! Okasegbe lɛ egbe naa!',
      phonetic: 'O-yeh o-dzo-bang! O-kah-seh-gbeh leh eh-gbeh nah!'
    },
    ewe: {
      text: 'Wòe dɔ! Èwu dɔ la nu dzidzedzetɔe!',
      phonetic: 'Woe dor! Eh-woo dor lah noo dzi-dze-dze-toe!'
    }
  },

  // Mission 1 Briefings & Elements
  "Welcome to the Lab, Engineer! I'm Byte, your coding assistant. Let's start with something simple — teach me to talk! Drag the 'Say' block and make me say Hello World!": {
    twi: {
      text: "Akwaaba gu Lab hɔ, Engineer! Me din de Byte, w'adwuma boafo. Ma yɛnhyɛ aseɛ ne biribi a ɛnyɛ den — kyerɛ me kasa! Twi 'Kasa' block no na ma me nka Hello World!",
      phonetic: "Ah-kwaa-bah goo Lab hor, Engineer! Meh deen deh Byte, wadjooma boafo. Mah yehn-sheh ahsee-eh neh beer-ee-bee ah eng-yeh den - shereh meh kah-sah! Twee Kasa block no nah mah meh nkah Hello World!"
    },
    ga: {
      text: "Ofri kɛba Lab lɛ mli, Engineer! Mi din ji Byte, okasemo yelikɛlɔ. Haa wɔje shishi kɛ nɔ ko ni waaa — tsɔɔmɔ mi wiemo! Gbalamɔ 'Kɛmɔ' block lɛ ni oha mi kɛ Hello World!",
      phonetic: "Ofri keh-bah Lab leh mli, Engineer! Mee deen jee Byte, okah-seh-mor yeh-lee-keh-lor. Haa wor-jeh shee-shee keh nor ko nee waaa - tsor-mor mee wee-eh-mor! Gbalamor Kemor block leh nee oha mee keh Hello World!"
    },
    ewe: {
      text: "Woezɔ de Lab la me, Mɔɖeka! Ŋunyenyie nye Byte, wò dɔwɔkpɛ. Na míadzidze nane si le bɔbɔe kpɔ — fia numagblɔ! Hee 'Gblɔ' block la eye nàna magblɔ Hello World!",
      phonetic: "Woe-zor deh Lab lah meh, Mor-de-kah! Ngoong-yen-yee nye Byte, wo dor-wor-kpeh. Nah mee-ah-dzee-dze nah-neh see leh bor-boe kpor - fee-ah noo-mah-gblor! Hee Gblor block lah eye nah-nah mah-gblor Hello World!"
    }
  },
  'First Hello': {
    twi: {
      text: 'Nkyea Diakan',
      phonetic: 'N-chiah Dee-ah-kan'
    },
    ga: {
      text: 'Klenklen Minaoo',
      phonetic: 'Klen-klen Mee-nawo'
    },
    ewe: {
      text: 'Gbedoname Gbãtɔ',
      phonetic: 'Gbe-do-na-meh Gbahn-tor'
    }
  },
  'Teach the mascot to greet the world with its very first spoken word.': {
    twi: {
      text: 'Kyerɛ mascot no sɛnea ɔkyea wiase ne ne kasa a ɛdi kan.',
      phonetic: 'Shereh mascot no seh-neh-ah o-chiah wee-ah-seh neh neh kah-sah ah eh-dee kan.'
    },
    ga: {
      text: 'Tsɔɔmɔ mascot lɛ bɔ ni eeeha je lɛ wiemo kɛ wiemo gbãtɔ.',
      phonetic: 'Tsor-mor mascot leh bor nee ee-ee-ha jeh leh wee-eh-mor keh wee-eh-mor gbahn-tor.'
    },
    ewe: {
      text: 'Fia mascot la be nàgbe xexeame kple eƒe nya gbãtɔ.',
      phonetic: 'Fee-ah mascot lah beh nah-gbeh she-she-ah-meh kple eh-feh nyah gbahn-tor.'
    }
  },
  'Drag a "Say" block into the workspace and make the mascot say "Hello World!"': {
    twi: {
      text: "Twi 'Kasa' block gu adwumayɛbea hɔ na ma mascot no nka 'Hello World!'",
      phonetic: "Twee Kah-sah block goo adjoomayeh-beyah hor nah mah mascot no nkah Hello World!"
    },
    ga: {
      text: "Gbalamɔ 'Kɛmɔ' block kɛya okasegbɛ lɛ mli ni oha mascot lɛ kɛ 'Hello World!'",
      phonetic: "Gbalamor Keh-mor block keh-yah o-kah-seh-gbeh leh mli nee oha mascot leh keh Hello World!"
    },
    ewe: {
      text: "Hee 'Gblɔ' block de dɔwɔƒe la eye nàna mascot la nagblɔ be 'Hello World!'",
      phonetic: "Hee Gblor block deh dor-wor-feh lah eye nah-nah mascot lah nah-gblor beh Hello World!"
    }
  },

  // Mission 2 Briefings & Elements
  "Great job on Mission 1! Now let's learn about timing. Computers can do actions in a sequence — one after another. Build me a wave, a pause, and a blink!": {
    twi: {
      text: "Woyɛɛ adwuma pa gu Mission 1 so! Afei yɛbɛsua afa bere ho. Kọmputa betumi ayɛ nneyɛe anatoɔ so — mmiako mmiako. Yɛ wave, pause, ne blink ma me!",
      phonetic: "Wo-yeh-eh adjooma pah goo Mission 1 so! Ah-feh yeh-beh-swah ah-fah beh-reh ho. Kom-pu-tah beh-toomee ah-yeh n-neh-yeh-ee ah-na-tor so - mee-ahko mee-ahko. Yeh wave, pause, neh blink mah meh!"
    },
    ga: {
      text: "Oye odzogbaŋŋ yɛ Mission 1 mli! Afei wɔkase nii yɛ be he. Kọmputa baanyɛ afee nibii anatoɔ mli — kome sɛɛ kome. Fee wave, pause, kɛ blink kɛha mi!",
      phonetic: "O-yeh o-dzo-bang yeh Mission 1 mli! Ah-fee wor-kah-seh nee yeh beh heh. Kom-pu-tah baa-nyeh ah-fee nee-bee ah-nah-tor mli - koh-meh seh koh-meh. Fee wave, pause, keh blink keh-ha mee!"
    },
    ewe: {
      text: "Wòe dɔ yɛ Mission 1 me! Fifia míasrɔ̃ nu tso ɣeyiɣi ŋu. Kɔmpiutawo teŋu wɔa dɔwo ɖeka le evelia yome. Wɔ wave, pause, kple blink nam!",
      phonetic: "Woe dor yeh Mission 1 meh! Fee-fee-ah mee-ah-srorn noo tso yeyi-yee ngu. Kom-piu-tah-wo teh-ngoo wor-ah dor-wo de-kah leh eh-ve-lee-ah yo-meh. Wor wave, pause, kple blink nam!"
    }
  },
  'Rhythm Master': {
    twi: {
      text: 'Bere Hene',
      phonetic: 'Beh-reh Heh-neh'
    },
    ga: {
      text: 'Be He Mantsɛ',
      phonetic: 'Beh Heh Man-tsheh'
    },
    ewe: {
      text: 'Gametsi Fia',
      phonetic: 'Gah-meh-tsee Fee-ah'
    }
  },
  'Build a timed sequence of actions — the foundation of all programming logic.': {
    twi: {
      text: 'Yɛ nneyɛe a wɔahyɛ bere nneyɛe a ɛdi akyi — nnyinasoɔ kọmputa dwumadie nyinaa.',
      phonetic: 'Yeh n-neh-yeh-ee ah wor-ah-sheh beh-reh n-neh-yeh-ee ah eh-dee ah-chee - n-nyee-nah-so com-pu-tah djooma-dee-eh n-yee-nah.'
    },
    ga: {
      text: 'Fee nibii ni ahe be kɛha nitsumɔ — sisilɛ kasegbɛ kọmputa nitsumɔ nyinaa.',
      phonetic: 'Fee nee-bee nee ah-heh beh keh-ha nee-tsu-mor - see-see-leh kah-seh-gbeh kom-pu-tah nee-tsu-mor n-yee-nah.'
    },
    ewe: {
      text: 'Wɔ dɔwɔwɔ siwo si ɣeyiɣi le na — gɔmeɖoanyi kɔmpiuta nuxexlɛ nyinaa.',
      phonetic: 'Wor dor-wor-wor see-wo see yeyi-yee leh nah - gorm-eh-dor-an-yee kom-piu-tah noo-she-shle n-yee-nah.'
    }
  },
  'Make the mascot wave, pause for 2 seconds, then blink — all in order.': {
    twi: {
      text: 'Ma mascot no nnwene ne nsa, ɔkɔgyina mfeɛ mmienu, na ɔnhwɛ anim — nyinaa ndidisoɔ so.',
      phonetic: 'Mah mascot no n-nwe-neh neh n-sah, o-cor-jee-nah m-fee-eh m-mee-eh-noo, nah orn-hweh ah-neem - n-yee-nah n-dee-dee-sor so.'
    },
    ga: {
      text: 'Haa mascot lɛ nnwɛ ne nsa, okogyina miniti enyɔ, ni ohala anim — nyinaa yɛ natoo mli.',
      phonetic: 'Haa mascot leh n-nweh neh n-sah, o-ko-jee-nah mee-nee-tee eh-nyor, nee o-ha-lah ah-neem - n-yee-nah yeh nah-too mli.'
    },
    ewe: {
      text: 'Na mascot la nawave, natsi ɖe aɖabaƒoƒo eve, eye wòablank — katã le ɖoɖo nu.',
      phonetic: 'Nah mascot lah nah-wave, nah-tsee de ah-dah-bah-for-for eh-veh, eye wor-ah-blank - kah-tahn leh dor-dor noo.'
    }
  }
};

export function getTranslation(text: string, dialect: Dialect): TranslationResult {
  if (dialect === 'en') {
    return { text, phonetic: text };
  }

  // Exact Match Check
  const key = text.trim();
  if (DICTIONARY[key]?.[dialect]) {
    return DICTIONARY[key][dialect];
  }

  // Fallback translation: Try mapping common keywords or just return English text phonetically
  return { text, phonetic: text };
}
