"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
var cli_1 = require("./cli");
var inversify_1 = require("inversify");
var default_template_1 = require("./templates/default.template");
var feature_request_template_1 = require("./templates/feature-request.template");
var merge_request_template_1 = require("./templates/merge-request.template");
function index() {
    var container = new inversify_1.Container();
    container.bind('DefaultTemplate').to(default_template_1.DefaultTemplate).inSingletonScope();
    container.bind('FeatureRequest').to(feature_request_template_1.FeatureRequest).inSingletonScope();
    container.bind('MergeRequest').to(merge_request_template_1.MergeRequest).inSingletonScope();
    container.bind('CLI').to(cli_1.CLI).inSingletonScope();
    return container.get('CLI');
}
exports.index = index;
index();
