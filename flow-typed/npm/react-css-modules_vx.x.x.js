// flow-typed signature: bfd19172518862688556e2563be85675
// flow-typed version: 18b77b0f2e/react-css-modules_v3.x.x/flow_>=v0.53.x

// @flow
import React from "react";

declare module "react-css-modules" {
  declare type StatelessComponent<P, S> = (props: P, state: S) => React$Element<any>;
  declare module.exports: <P, S, C: React$Component<P, S>, X>(
component: Class<C> | StatelessComponent<P, S>,
    styles: X,
    options?: {|
      allowMultiple?: boolean,
      errorWhenNotFound?: boolean,
      |},
    ) => Class<React$Component<$Diff<P, { styles: X }>, S>>;
    }
