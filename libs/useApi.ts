export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useApi = () => ({
  // Verificar Tenant
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "burguer":
        return {
          name: "burguer",
          mainColor: "#ff0000",
          secondColor: "#00ff00",
        };
        break;

      case "pizza":
        return {
          name: "pizza",
          mainColor: "#0000ff",
          secondColor: "#00ff00",
        };
        break;
      default:
        return false;
    }
  },
});
