
// Module w3c/unhtml5
// Removes uses of HTML5 elements (e.g. section) and replaces them with HTML4 equivalents.
// Hopefully we won't need this for long.

define(
    ["core/utils"], // load this to be sure that the jQuery extensions are loaded
    function (utils) {
        return {
            run:    function (conf, doc, cb, msg) {
                msg.pub("start", "w3c/unhtml5");
                $("section", doc).renameElement("div").addClass("section");
                // $("section", doc).addClass("section").renameElement("div");
                // $("section", doc).each(function (i, sec) {
                //     $(sec).addClass("section").renameElement("div");
                // });
                msg.pub("end", "w3c/unhtml5");
                cb();
            }
        };
    }
);
