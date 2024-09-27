/* eslint-disable @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */

const componentMap = {
  "action-button": () => import("msComponents/registerActionButton"),
  "date-range-picker": () => import("msComponents/registerDateRangePicker"),
};

const generateComponentMap = async () => {
  const componentsMap = {};
  const componentsAll = await import("msComponents/exposedComponents");
  console.log("componentsAll", componentsAll);
  for (const [nameFunction, registerFunction] of Object.entries(
    componentsAll.exposedComponents
  )) {
    console.log(registerFunction);
    const tag = nameFunction.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    componentsMap[tag] = () => import(registerFunction);
  }
  console.log("componentMap", componentMap);
  console.log("componentsMap", componentsMap);
  return componentsMap;
};

const registerAllMsComponents = async () => {
  const componentsMap = await generateComponentMap();

  for (const [wcTag, loadComponent] of Object.entries(componentsMap)) {
    try {
      console.log("wcTag", wcTag);
      console.log("loadComponent", loadComponent);
      // eslint-disable-next-line
      // const registerFunction = (await loadComponent()).default;
      const registerFunction = await import(loadComponent);
      console.log("registerFunction", registerFunction);
      registerFunction(wcTag);
    } catch (error) {
      console.error(`Ошибка при регистрации компонента ${wcTag}:`, error);
    }
  }
};
export default registerAllMsComponents();
