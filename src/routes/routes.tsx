import AuthPage from 'pages/AuthPage';
import GamePage from 'pages/GamePage';
import App from 'App';

export const ROUTE_AUTH = '/auth';
export const ROUTE_GAME = '/game';
export const ROUTE_HOME = '/';
export const ROUTE_ABOUT = '/about';
// Add other route constants here

// Define a type for a route object
export type Route = {
  path: string;
  label: string;
  component: React.FC;
  children?: Route[]; // Nested routes
};

// List of all available routes
export const allRoutes: Route[] = [
  {
    path: ROUTE_HOME,
    label: 'Home',
    component: App,
    children: [
      // Nested routes for Home
      { path: ROUTE_AUTH, label: 'Auth', component: AuthPage }, // Nested Auth route
      { path: ROUTE_GAME, label: 'Game', component: GamePage }, // Nested Game route
    ],
  },
];
