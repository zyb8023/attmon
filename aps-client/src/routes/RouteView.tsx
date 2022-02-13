import React from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';

type IProps = {
  defaultConfig?: Array<Routers>,
  routers?: Array<Routers>
}

export default function RouterView({ defaultConfig, routers }: IProps) {    
  const routeConfig = routers ? routers : defaultConfig || [];
  const routerDataPath = routeConfig.filter(v => !v.redirect);
  const routerDirect = routeConfig.filter(v => v.redirect);
  const defautlRedirect = routerDirect.map((d, i) => <Redirect key={i} path={d.path} to={d.redirect} exact={d.exact || false} />)
  return (
    <Switch>
      {
        !!routerDataPath.length && routerDataPath.map((item, index) => {
          // jsx 不具有构造签名或调用签名
          const Com  = item.components as React.ElementType;
          return (
            <Route
              path={item.path} key={'key' + index}
              exact={item.exact}
              render={(prop) => {
                document.title = item.title || 'title'
                return  <Com routers={item.children} {...prop} />;
              }}
            />
          );
        }).concat(defautlRedirect)
      }
    </Switch>
  );
}