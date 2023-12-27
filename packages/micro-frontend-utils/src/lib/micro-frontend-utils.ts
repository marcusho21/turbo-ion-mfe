import { type LoadRemoteModuleOptions } from '@angular-architects/native-federation';

export type RemoteOption = LoadRemoteModuleOptions & { className: string };

export const MICRO_FRONTEND = {
  newTodo: {
    className: 'AppComponent',
    exposedModule: './Component',
    remoteName: 'new-todo',
    remoteEntry: 'http://localhost:4201/remoteEntry.json',
  } as RemoteOption,
} as const;
