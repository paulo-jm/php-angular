export const environment = {
  production: true,
  endopoint: {
    doador: {
      endopoints: [
        {
          resource: 'paginate',
          path: "http://vps8011.publiccloud.com.br:8110/doador/paginate",
        },
        {
          resource: 'findById',
          path: "http://vps8011.publiccloud.com.br:8110/doador/findById/",
        },
        {
          resource: 'create',
          path: "http://vps8011.publiccloud.com.br:8110/doador/create",
        },
        {
          resource: 'update',
          path: "http://vps8011.publiccloud.com.br:8110/doador/update/",
        },
      ]
    },
    contribuicao: {
      endopoints: [
        {
          resource: 'paginate',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/contribuicao/paginate",
        },
        {
          resource: 'findById',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/contribuicao/findById/",
        },
        {
          resource: 'create',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/contribuicao/create",
        },
        {
          resource: 'update',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/contribuicao/update/",
        },
      ]
    },
    apadrinhado: {
      endopoints: [
        {
          resource: 'paginate',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/apadrinhado/paginate",
        },
        {
          resource: 'findById',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/apadrinhado/findById/",
        },
        {
          resource: 'create',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/apadrinhado/create",
        },
        {
          resource: 'update',
          path: "http://vps8011.publiccloud.com.br:8110/contribuicao/apadrinhado/update/",
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
          path: "http://vps8011.publiccloud.com.br:8110/authentication/login",
        },
        {
          resource: 'logout',
          path: "http://vps8011.publiccloud.com.br:8110/authentication/logout",
        }
      ]
    },
  }
};
