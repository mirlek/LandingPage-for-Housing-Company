import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsStore } from '@mobx/services/SettingsStore';
import { observer } from 'mobx-react-lite';
import { useInjection } from 'inversify-react';
import { LOCALES } from '@shared/utils/i18n/locales';

const LanguageSelector = observer(() => {
  const settingsStore = useInjection(SettingsStore);
  const { i18n } = useTranslation();
  const ruButtonRef = useRef(null);
  const kzButtonRef = useRef(null);

  useEffect(() => {
    const currentLanguage = i18n.language;
    ruButtonRef.current.style.color = currentLanguage === 'ru' ? 'white' : 'gray';
    kzButtonRef.current.style.color = currentLanguage === 'kz' ? 'white' : 'gray';
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    settingsStore.changeLanguage(lng);
    ruButtonRef.current.style.color = lng === LOCALES.RU ? 'white' : 'gray';
    kzButtonRef.current.style.color = lng === LOCALES.KZ ? 'white' : 'gray';

    const locale = lng === LOCALES.RU ? 'ru' : 'kz';

    i18n.changeLanguage(locale);
  };

  return (
    <div className="d-flex align-items-center">
      <button type={'button'} ref={ruButtonRef} onClick={() => changeLanguage(LOCALES.RU)} className="pl-0">
        RU
      </button>
      <div className="vl" />
      <button type={'button'} ref={kzButtonRef} onClick={() => changeLanguage(LOCALES.KZ)} className="pr-0">
        KZ
      </button>
    </div>
  );
});

export default LanguageSelector;
