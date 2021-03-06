declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { width?: number; height?: number }
  >;

  export default ReactComponent;
}
