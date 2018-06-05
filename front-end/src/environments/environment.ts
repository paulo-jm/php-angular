// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endopoint: {
    doador: {
      endopoints: [
        {
          resource: 'paginate',
          path: "http://192.168.129.4:8110/doador/paginate?XDEBUG_SESSION_START=netbeans-xdebug",
        },
        {
          resource: 'findById',
          path: "http://192.168.129.4:8110/doador/findById/",
        },
        {
          resource: 'create',
          path: "http://192.168.129.4:8110/doador/create?XDEBUG_SESSION_START=netbeans-xdebug",
        },
        {
          resource: 'update',
          path: "http://192.168.129.4:8110/doador/update/",
        },
      ]
    },
    contribuicao: {
      endopoints: [
        {
          resource: 'paginate',
          path: "http://192.168.129.4:8110/contribuicao/contribuicao/paginate?XDEBUG_SESSION_START=netbeans-xdebug",
        },
        {
          resource: 'findById',
          path: "http://192.168.129.4:8110/contribuicao/contribuicao/findById/",
        },
        {
          resource: 'create',
          path: "http://192.168.129.4:8110/contribuicao/contribuicao/create?XDEBUG_SESSION_START=netbeans-xdebug",
        },
        {
          resource: 'update',
          path: "http://192.168.129.4:8110/contribuicao/contribuicao/update/",
        },
      ]
    },
    apadrinhado: {
      endopoints: [
        {
          resource: 'paginate',
          path: "http://192.168.129.4:8110/contribuicao/apadrinhado/paginate?XDEBUG_SESSION_START=netbeans-xdebug",
        },
        {
          resource: 'findById',
          path: "http://192.168.129.4:8110/contribuicao/apadrinhado/findById/",
        },
        {
          resource: 'create',
          path: "http://192.168.129.4:8110/contribuicao/apadrinhado/create?XDEBUG_SESSION_START=netbeans-xdebug",
        },
        {
          resource: 'update',
          path: "http://192.168.129.4:8110/contribuicao/apadrinhado/update/",
        },
      ]
    },
    user: {
      path: ""
    },
    security: {
      endopoints: [
        {
          resource: 'login',
          path: "http://192.168.129.4:8110/authentication/login?XDEBUG_SESSION_START=netbeans-xdebug",
        },
        {
          resource: 'logout',
          path: "http://192.168.129.4:8110/authentication/logout?XDEBUG_SESSION_START=netbeans-xdebug",
        }
      ]
    },
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
