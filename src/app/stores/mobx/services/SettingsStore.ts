import { autorun, makeAutoObservable } from 'mobx';
import { injectable } from 'inversify';
import { LOCALE, LOCALES } from '@shared/utils/i18n/locales';
import { createIntl, IntlShape } from 'react-intl';
import { messages } from '@shared/utils/i18n';
import 'moment/min/locales';
import moment from 'moment';
import i18next from 'i18next';

@injectable()
export class SettingsStore {
  locale: LOCALE = LOCALES.RU;

  intl: IntlShape;

  constructor() {
    makeAutoObservable(this);
    this.intl = createIntl({
      locale: this.locale,
      messages: messages[this.locale]
    });

    autorun(() => {
      this.intl = createIntl({
        locale: this.locale,
        messages: messages[this.locale]
      });
    });
  }

  changeLanguage = (language: LOCALE) => {
    this.locale = language;
    if (language.slice(0, 2) === 'kz') {
      i18next.changeLanguage('kk');
      moment().locale('kk');
      return;
    }
    i18next.changeLanguage('ru');
    moment().locale('ru');
  };
}
