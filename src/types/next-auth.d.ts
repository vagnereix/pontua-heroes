import 'next-auth';

declare module 'next-auth' {
  interface Session {
    /** Type of user returned by `reqres.in` API */
    user: {
      token: string;
    };
  }
}
