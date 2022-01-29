import { Routes, useRoutes } from 'solid-app-router';
import { lazy } from "solid-js";
const routes = import.meta.glob('./pages/**')

export default function() {
  const defineComponents = Object.entries(routes).map(([path, component]) => ({
    path: path
      .replace(/(\.\/pages)|(\.[tj]sx?)|(\/index)|]/g, '')
      .replace(/\[/g, ':'),
    component: lazy(component as any),
  }))

  const Routes = useRoutes(defineComponents);

  return (
    <Routes />
  );
}
