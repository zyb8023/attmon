
declare interface Routers {
  components ?: () => JSX.Element,
  title ?: string,
  path: string,
  redirect ?: string | any,
  children ?: Array<Routers>,
  exact ?: Boolean | any
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}