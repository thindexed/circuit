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
