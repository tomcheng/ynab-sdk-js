"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_1 = require("./configuration");
var CodeGen = require("./api");
var utils_1 = require("./utils");
exports.utils = utils_1.default;
__export(require("./api"));
/**
 * The YNAB API client
 */
var api = /** @class */ (function () {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    function api(accessToken, endpointUrl) {
        if (endpointUrl === void 0) { endpointUrl = "https://api.youneedabudget.com/v1"; }
        this._configuration = new configuration_1.Configuration(accessToken, endpointUrl);
    }
    Object.defineProperty(api.prototype, "budgets", {
        /**
         * /budgets endpoints interface
         */
        get: function () {
            if (!this._budgets) {
                this._budgets = new CodeGen.BudgetsApi(this._configuration);
            }
            return this._budgets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "accounts", {
        /**
         * /budgets/{budget_id}/accounts endpoints interface
         */
        get: function () {
            if (!this._accounts) {
                this._accounts = new CodeGen.AccountsApi(this._configuration);
            }
            return this._accounts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "categories", {
        /**
         * /budgets/{budget_id}/categories endpoints interface
         */
        get: function () {
            if (!this._categories) {
                this._categories = new CodeGen.CategoriesApi(this._configuration);
            }
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "months", {
        /**
         * /budgets/{budget_id}/months endpoints interface
         */
        get: function () {
            if (!this._months) {
                this._months = new CodeGen.MonthsApi(this._configuration);
            }
            return this._months;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "payees", {
        /**
         * /budgets/{budget_id}/payees endpoints interface
         */
        get: function () {
            if (!this._payees) {
                this._payees = new CodeGen.PayeesApi(this._configuration);
            }
            return this._payees;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "payeeLocations", {
        /**
         * /budgets/{budget_id}/payee_locations endpoints interface
         */
        get: function () {
            if (!this._payeeLocations) {
                this._payeeLocations = new CodeGen.PayeeLocationsApi(this._configuration);
            }
            return this._payeeLocations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "transactions", {
        /**
         * /budgets/{budget_id}/transactions endpoints interface
         */
        get: function () {
            if (!this._transactions) {
                this._transactions = new CodeGen.TransactionsApi(this._configuration);
            }
            return this._transactions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(api.prototype, "scheduledTransactions", {
        /**
         * /budgets/{budget_id}/scheduled_transactions endpoints interface
         */
        get: function () {
            if (!this._scheduledTransactions) {
                this._scheduledTransactions = new CodeGen.ScheduledTransactionsApi(this._configuration);
            }
            return this._scheduledTransactions;
        },
        enumerable: true,
        configurable: true
    });
    return api;
}());
exports.API = api;
exports.api = api;
