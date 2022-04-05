import "google-code-prettify/bin/prettify.min.css"

import {prettyPrint} from "google-code-prettify/bin/prettify.min"
import conf from "../Configuration";

export default class CodeDialog {

  constructor() {
  }

  show(figure) {
    let baseName = figure.NAME.replaceAll("_","/")
    let pathToCustom = conf.shapes.url + baseName + ".custom"
    $.get(pathToCustom, function (content) {
      $('#codePreviewDialog .prettyprint').text(content)
      $('#codePreviewDialog .prettyprint').removeClass("prettyprinted")
      prettyPrint()
      $('#codePreviewDialog').modal('show')
      $("#codePreviewDialog .editButton").off("click").on("click", () => {
        let baseName = figure.NAME.replaceAll("_","/")
        let pathToDesign = `../designer?timestamp=${new Date().getTime()}&global=${baseName}.shape`
        window.open(pathToDesign, "designer")
      })
      $("#codePreviewDialog .editButtonGuided").off("click").on("click", () => {
        let baseName = figure.NAME.replaceAll("_","/")
        let pathToDesign = `../designer?timestamp=${new Date().getTime()}&global=${baseName}.shape&tutorial=code`
        window.open(pathToDesign, "designer")
      })
    })
  }
}
