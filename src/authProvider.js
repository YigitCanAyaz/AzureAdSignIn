import { MsalAuthProvider, LoginType } from "react-aad-msal";
// Msal Configurations
const config = {
  auth: {
    authority: "https://login.microsoftonline.com/common",
    clientId: "0c2d5be6-edb1-4ba0-b90b-bd0b250d1799",
    redirectUri: "http://localhost:3000/callback",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

// Authentication Parameters
const authenticationParameters = {
  scopes: ["user.read"],
};

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + "/auth.html",
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);
