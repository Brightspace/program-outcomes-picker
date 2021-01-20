import { LitElement } from 'lit-element/lit-element.js';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin.js';

import ar from '../build/lang/ar.js';
import da from '../build/lang/da.js';
import de from '../build/lang/de.js';
import en from '../build/lang/en.js';
import es from '../build/lang/es.js';
import fr from '../build/lang/fr.js';
import ja from '../build/lang/ja.js';
import ko from '../build/lang/ko.js';
import nb from '../build/lang/nb.js';
import nl from '../build/lang/nl.js';
import pt from '../build/lang/pt.js';
import sv from '../build/lang/sv.js';
import tr from '../build/lang/tr.js';
import zh from '../build/lang/zh.js';
import zhTW from '../build/lang/zh-tw.js';

const FALLBACK_LANGUAGE = 'en';
const translations = {
	ar: ar,
	da: da,
	de: de,
	en: en,
	es: es,
	fr: fr,
	ja: ja,
	ko: ko,
	nb: nb,
	nl: nl,
	pt: pt,
	sv: sv,
	tr: tr,
	zh: zh,
	['zh-cn']: zh,
	['zh-tw']: zhTW
};

class LocalizedLitElement extends LocalizeMixin( LitElement ) {
	
	static async getLocalizeResources( langs ) {
		let resolvedLanguage = FALLBACK_LANGUAGE;
		const languageDocument = Object.assign( {}, translations[FALLBACK_LANGUAGE] );
		
		langs.reverse().forEach( lang => {
			if( translations[lang] ) {
				resolvedLanguage = lang;
				Object.assign( languageDocument, translations[lang] );
			}
		});
		
		return {
			language: resolvedLanguage,
			resources: languageDocument
		};
	}
	
}

export default LocalizedLitElement;
