// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCwhEoejP6TabjaYOOOp512BeHxF76tV0I',
    authDomain: 'angular-soccer.firebaseapp.com',
    databaseURL: 'https://angular-soccer.firebaseio.com',
    projectId: 'angular-soccer',
    storageBucket: 'angular-soccer.appspot.com',
    messagingSenderId: '1079019454546'
  }
};
