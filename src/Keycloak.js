import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "keycloak-login",
 clientId: "keycloak-login",
});

export default keycloak;