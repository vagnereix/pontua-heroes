# Documentação da Aplicação

> Estrutura dos principais arquivos e diretórios da aplicação:

```shell
src
├── app
│   ├── (private)
│   │   ├── dashboard
│   │   │   ├── components # componentes específicos da página de Dashboard
│   │   │   │   ├── List.tsx
│   │   │   │   └── Skeleton.tsx
│   │   │   ├── error.tsx # página responsável por exibir erros caso ocorram ao carregar a página de listagem
│   │   │   ├── loading.tsx # página responsável por exibir um `loading` enquanto os agentes estão sendo carregados
│   │   │   └── page.tsx # página de listagem de todos os agentes
│   │   ├── layout.tsx # layout padrão das páginas privadas
│   │   └── profile
│   │       └── [id]
│   │           ├── error.tsx # página responsável por exibir erros caso ocorram ao carregar a página de perfil
│   │           ├── loading.tsx # página responsável por exibir um `loading` enquanto o agente selecionado está sendo carregados
│   │           └── page.tsx # página de perfil de agente, busca o mesmo pelo seu `id` recebido via params
│   ├── (public)
│   │   ├── layout.tsx # layout padrão das páginas públicas
│   │   ├── password-resetted
│   │   │   ├── components # componentes específicos da página
│   │   │   │   └── ButtonSignIn.tsx
│   │   │   └── page.tsx # página de senha recuperada
│   │   ├── reset-password
│   │   │   ├── components # componentes específicos da página
│   │   │   │   └── ResetPasswordForm.tsx
│   │   │   └── page.tsx # página de recuperar senha
│   │   ├── select-hero # página privada que utiliza o `layout` de rotas públicas, por isso está localizada aqui
│   │   │   ├── components # componentes específicos da página
│   │   │   │   └── SelectHero.tsx
│   │   │   └── page.tsx # página de selecionar agente preferido após autenticação
│   │   └── sign-in
│   │       ├── components # componentes específicos da página
│   │       │   └── SignInForm.tsx
│   │       └── page.tsx # página de autenticação
│   ├── api
│   │   └── auth
│   │       └── [...nextauth]
│   │           └── route.ts # lógica de autenticação utilizando `next-auth`
│   └── layout.tsx # `layout` global da aplicação
├── components # diretório com componentes gerais da aplicação
│   ├── AvailableTabs.tsx
│   ├── Card.tsx
│   ├── Divider.tsx
│   ├── Form # componentes específicos de formulários
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── InputSearch.tsx
│   ├── Header.tsx
│   ├── HeroInfo.tsx
│   ├── Pagination.tsx
│   ├── Sidebar
│   │   ├── MenuItem.tsx # componente específico da Sidebar
│   │   └── index.tsx
│   └── Tab.tsx
├── constants
│   └── routes.ts # rotas da aplicação
├── contexts
│   └── useSearch.tsx # contexto responsável por buscar dados dos agentes e por gerenciar a paginação dos mesmos
├── middleware.ts # controle de acesso às rotas da aplicação
├── providers
│   └── NextAuthProvider.tsx # provê informações do usuário autenticado para toda a aplicação
├── services
│   └── api.ts # arquivo de configurações do `axios`, incluindo seus `interceptors`
├── styles
│   └── globals.scss # estilos globais
├── types
│   ├── hero.ts # tipos utilizados em vários arquivos
│   └── next-auth.d.ts # tipagem do usuário autenticado
└── utils
    └── functions.ts # funções úteis
```

## Principais tecnologias utilizadas e suas versões

![Tecnologias](/.github/technologies.png 'Tecnologias utilizadas')

## Fluxo de uso da aplicação - [**Pontua Heroes**](https://pontua-heroes.vercel.app/)

- Ao entrar na aplicação, o usuário verá a tela de `login` no sistema, com a opção de visualizar a senha digitada e suas validações;

  - **IMPORTANTE**: Para realizar login com sucesso deverá ser enviado obrigatoriamente o e-mail `eve.holt@reqres.in` e `qualquer senha`. Caso seja enviado qualquer outro e-mail será gerado um erro de `Credenciais incorretas`.
  <h1 align='center'>
    <img src='.github/login.png' align='center' width='920' />
  </h1>

- Ao realizar seu `login`, o usuário verá a tela de seleção de agente favorito, dentre os 10 primeiros retornados pela api da `Marvel`;
  <h1 align='center'>
    <img src='.github/select-hero.png' align='center' width='920' />
  </h1>

- Ao selecionar um agente o usuário é redirecionado para a página de visualização do perfil do agente selecionado;
  <h1 align='center'>
    <img src='.github/profile.png' align='center' width='920' />
  </h1>

- Ao clicar no menu `Home`, será exibida uma lista com todos os heróis divididos em `N` páginas;
  <h1 align='center'>
    <img src='.github/home.png' align='center' width='920' />
  </h1>

- Ao clicar em um agente dentre os listados, verá a tela de perfil do mesmo;
- Ao clicar no menu `Perfil` estando na página `Home`, verá novamente o perfil do agente selecionado ao realizar `login`;
- Ao clicar em sair, o usuário será redirecionado novamente para a página de `login`.
- Ao clicar em `Esqueceu a senha?`, o usuário verá um novo formulário onde fornecerá um e-mail de recuperação;

  - Ao fornecer um e-mail e clicar em `enviar link`, o usuário verá uma tela de sucesso com o botão de `voltar para o login`;
    <h1 align='center'>
      <img src='.github/reset-password.png' align='center' width='920' />
    </h1>
    <h1 align='center'>
      <img src='.github/password-resetted.png' align='center' width='920' />
    </h1>

  - Essa opção está totalmente `mockada` pois a api mock escolhida para este teste, a [[`reqres.in`](https://reqres.in/)] não conta com um mock para recuperação de senha.
    <h1 align='center'>
      <img src='.github/reqres.png' align='center' width='920' />
    </h1>

## Como testar localmente

```shell
$ git clone git@github.com:vagnereix/pontua-heroes.git

$ cd pontua-heroes

$ pnpm install

# Caso eu já tenha retirado o arquivo original `.env`, copie o arquivo `.env.template` localizado na raiz do projeto para um novo arquivo `.env` ou `.env.local`, e o preencha com suas variáveis de ambiente

$ pnpm dev

# Para testar a versão de `build`
$ pnpm build

$ pnpm start

# Para realizar login com sucesso na aplicação, enviar obrigatoriamente o e-mail `eve.holt@reqres.in` e qualquer senha.
# Qualquer outro valor enviado para o campo de e-mail resultará em erro de credenciais.

```

A aplicação também está disponível [**aqui**](https://pontua-heroes.vercel.app/).
