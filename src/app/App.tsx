import { observer } from 'mobx-react-lite';
import '@app/styles/app.scss';
import { Providers as SetupProviders } from '@app/setup/setupProviders';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/routes';

export const App = observer(() => (
  <SetupProviders>
    <RouterProvider router={router} />
  </SetupProviders>
));
