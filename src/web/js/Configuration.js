//
export default {
  fileSuffix: ".brain",
  fileNew: "NewCircuit",
  appName: "Simulator",
  loginRedirect: "circuit",

  fileScreen: {
    title: "Circuit Library",
    addFolderButton: "Library",
    addFileButton: "Circuit"
  },

  backend: {

    shared: {
      get:    file  => `../brains/shared/get?filePath=${file}`,
      save:            `../brains/shared/save`,
    },

    user: {
      list:   path => `../brains/user/list?path=${path}`,
      get:    file => `../brains/user/get?filePath=${file}`,
      image:  file => `../brains/user/image?filePath=${file}`,
      delete:         `../brains/user/delete`,
      rename:         `../brains/user/rename`,
      save:           `../brains/user/save`,
      folder:         `../brains/user/folder`
    },

    global:{
      list:   path => `../brains/global/list?path=${path}`,
      get:    file => `../brains/global/get?filePath=${file}`,
      image:  file => `../brains/global/image?filePath=${file}`,
      delete:         `../brains/global/delete`,
      rename:         `../brains/global/rename`,
      save:           `../brains/global/save`,
      folder:         `../brains/global/folder`
    }
  },

  shapes: {
    url: "../shapes/global/",
    version: "0.0.0" // updated during after loading from the index.json file
  }
};
