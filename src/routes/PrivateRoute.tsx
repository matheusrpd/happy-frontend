import React, { useEffect, useState } from "react";
import { Redirect, RouteProps as ReactDOMRuteProps } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import api from "../services/api";

interface RouteProps extends ReactDOMRuteProps {
  role?: string;
  component: React.ComponentType
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  role,
  ...rest
}) => {
  const [permissions, setPermissions] = useState([] as string[]);

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get("/roles");
      const findRole = response.data.some((r: string) =>
        role?.split(",").includes(r)
      );
      setPermissions(findRole);
    }

    loadRoles();
  }, [role]);

  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/login" />;
  }

  if (!role && user) {
    return <Component {...rest} />;
  }

  return permissions ? <Component {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;