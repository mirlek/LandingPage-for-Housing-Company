import { HelmetProvider } from 'react-helmet-async';
import { rootContainer } from '@mobx/root';
import NotistackProvider from '@shared/components/NotistackProvider';
import { observer } from 'mobx-react-lite';
import { Provider as DIProvider } from 'inversify-react';
import ThemePrimaryColor from '@shared/components/ThemePrimaryColor';
import RtlLayout from '@shared/components/RtlLayout';
import { SettingsProvider } from '../contexts/SettingsContext';
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
import ThemeConfig from '../../shared/theme';
import { LanguageConfig } from './languageConfig';
import { DateTimeLocalizationProvider } from './DateTimeLocalizationProvider';

export const Providers = observer(({ children }: { children: JSX.Element }) => (
  <HelmetProvider>
    <DIProvider container={rootContainer}>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <ThemeConfig>
            <ThemePrimaryColor>
              <RtlLayout>
                <NotistackProvider autoHideDuration={1500}>
                  {/* <LoadingWrapper> */}
                  <LanguageConfig>
                    <DateTimeLocalizationProvider>{children}</DateTimeLocalizationProvider>
                  </LanguageConfig>
                  {/* </LoadingWrapper> */}
                </NotistackProvider>
              </RtlLayout>
            </ThemePrimaryColor>
          </ThemeConfig>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </DIProvider>
  </HelmetProvider>
));
