import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { MICRO_FRONTEND } from 'micro-frontend-utils';

const data = MICRO_FRONTEND;

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: data.newTodo.remoteEntry,
        remoteName: data.newTodo.remoteName,
        exposedModule: data.newTodo.exposedModule,
      }).then((m) => m[data.newTodo.className]),
  },
];
