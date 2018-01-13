'use strict';

const dependencies = new Map();

const instantiateController = Controller => {
  const controllerDependenciesName = Controller.getDependencies();
  const controllerDependencies = {};

  for(const { name } of controllerDependenciesName) {
    controllerDependencies[name] = dependencies.get(name);
  }

  return new Controller(controllerDependencies);
};

const lib = {
  declare: (name, item) => dependencies.set(name, item),
  instantiateController,
};

module.exports = lib;
