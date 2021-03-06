import { Tenant } from "../types/Tenant";

export const useApi = () => ({
  // Verificar Tenant
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case "burguer":
        return {
          slug: "burguer",
          name: "burguer",
          mainColor: "#ff0000",
          secondColor: "#00ff00",
        };
        break;

      case "pizza":
        return {
          slug: "pizza",
          name: "pizza",
          mainColor: "#000",
          secondColor: "#0000ff",
        };
        break;
      default:
        return false;
    }
  },
});
