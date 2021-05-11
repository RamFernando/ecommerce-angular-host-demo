// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverURL: 'http://localhost:8082/services/',
  firebaseConfig : {
    apiKey: "AIzaSyCZSaZmY-sU5lrDGY7YMrkcoNFdKzOFknc",
    authDomain: "ecommerce-dcc4b.firebaseapp.com",
    databaseURL: "https://ecommerce-dcc4b.firebaseio.com",
    projectId: "ecommerce-dcc4b",
    storageBucket: "ecommerce-dcc4b.appspot.com",
    messagingSenderId: "579888313021",
    appId: "1:579888313021:web:53208b8feaf73b6b67bdd4",
    measurementId: "G-3P3R9FM77X"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
