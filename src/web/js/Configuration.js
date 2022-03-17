// This configuration file will be overridden if the application
// is provided by a node.js server. In this case we store all
// circuits and shapes on the local node.js server instead of
// using the global available repository.
// Check the special route in the ./server/main.js for this.
//
// This is useful if you want run the DigitalTrainingStudio local on
// RaspberryPi or another IoT device
//
//
export default {
  fileSuffix: ".brain",
  appName: "Brainbox Simulator",
  loginRedirect: "circuit",

  backend: {

    shared: {
      get:    file  => `../api/shared/brain/get?filePath=${file}`,
      save:            `../api/shared/brain/save`,
    },

    user: {
      list:   path => `../api/user/brain/list?path=${path}`,
      get:    file => `../api/user/brain/get?filePath=${file}`,
      image:  file => `../api/user/brain/image?filePath=${file}`,
      delete:         `../api/user/brain/delete`,
      rename:         `../api/user/brain/rename`,
      save:           `../api/user/brain/save`,
      folder:         `../api/user/brain/folder`
    },

    global:{
      list:   path => `../api/global/brain/list?path=${path}`,
      get:    file => `../api/global/brain/get?filePath=${file}`,
      image:  file => `../api/global/brain/image?filePath=${file}`,
      delete:         `../api/global/brain/delete`,
      rename:         `../api/global/brain/rename`,
      save:           `../api/global/brain/save`,
      folder:         `../api/global/brain/folder`
    }
  },

  updates: {
    url: "../api/updates",
    shapes: "../api/updates/shapes"
  },

  shapes: {
    url: "../shapes/global/",
    version: "0.0.0" // updated during after loading from the index.json file
  }
};
