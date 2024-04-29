import { SettingsStore } from '@mobx/services/SettingsStore';
import { Container } from 'inversify';
import { configurePersistable } from 'mobx-persist-store';

configurePersistable(
  { storage: window.localStorage, expireIn: 86400000, removeOnExpiration: true, stringify: true, debugMode: true },
  { fireImmediately: true }
);

const serviceContainer = new Container();

BindSettings();

function BindSettings() {
  serviceContainer.bind<SettingsStore>(SettingsStore).toSelf().inSingletonScope();
}

export default serviceContainer;
