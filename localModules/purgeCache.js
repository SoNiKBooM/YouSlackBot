
// CREDIT: http://stackoverflow.com/a/14801711/6740845

/**
 * purgeCache() Deletes a cached module by name so it can be run again with new variables
 * @param {string} moduleName The module by the variable name it was instantiated with
 *
 ** searchCache() Traverses the cache to search for all the cached files of the specified module name
 ** @param {string} moduleName Pulled string from purgeCache()
 ** @param {function} callback
 */
module.exports = function purgeCache(moduleName) {

    function searchCache(moduleName, callback) {
        // Resolve the module identified by the specified name
        var mod = require.resolve(moduleName);

        // Check if the module has been resolved and found within
        // the cache
        if (mod && ((mod = require.cache[mod]) !== undefined)) {
            // Recursively go over the results
            (function traverse(mod) {
                // Go over each of the module's children and
                // traverse them
                mod.children.forEach(function (child) {
                    traverse(child);
                });

                // Call the specified callback providing the
                // found cached module
                callback(mod);
            }(mod));
        }
    }
    // Traverse the cache looking for the files
    // loaded by the specified module name
    searchCache(moduleName, function (mod) {
        delete require.cache[mod.id];
    });

    // Remove cached paths to the module.
    // Thanks to @bentael for pointing this out.
    Object.keys(module.constructor._pathCache).forEach(function(cacheKey) {
        if (cacheKey.indexOf(moduleName)>0) {
            delete module.constructor._pathCache[cacheKey];
        }
    });
};

