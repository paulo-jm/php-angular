export const environment = {
  production: true,
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
