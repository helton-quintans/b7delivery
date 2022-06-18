export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useApi = () => ({
  // Verificar Tenant
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "b7burger":
        return {
          name: "b7burger",
          mainColor: "#ff0000",
          secondColor: "#00ff00",
        };
        break;

      case "b7pizza":
        return {
          name: "b7pizza",
          mainColor: "#0000ff",
          secondColor: "#00ff00",
        };
        break;
      default:
        return false;
    }
  },
});
