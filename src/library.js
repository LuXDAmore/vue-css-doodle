/**
 * Creates an instance of the design system
 *
 * @function install
 * @param {VueInstance} Vue Vue instance.
 */

const plugin = {
    installed: false,
    install(
        Vue,
        options,
    ) {

        if( plugin.installed )
            return;

        plugin.installed = true;

        const OPTIONS = options;

        Vue.library = OPTIONS;
        Vue.prototype.$library = OPTIONS;

    },
};

export default plugin;
