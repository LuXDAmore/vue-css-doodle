<template>
    <div
        ref="doodle"
        :class="classes"
        :style="style"
        class="vue-css-doodle"
    >
        <css-doodle
            v-once
            :grid="grid"
            :title="title"
            :use="use"
            :click-to-update="clickToUpdateToString"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <slot :generate="generate" />
        </css-doodle>
    </div>
</template>

<script>
    // css-doodle import
    const cssDoodle = () => import(
        /* webpackChunkName: "css-doodle" */
        /* webpackMode: "eager" */
        'css-doodle'
    );

    // Component
    export default {
        name: 'vue-css-doodle',
        inheritAttrs: false,
        props: {
            grid: {
                type: [
                    String,
                    Number,
                ],
                default: null,
            },
            title: {
                type: String,
                default: null,
            },
            use: {
                type: String,
                default: null,
            },
            height: {
                type: String,
                default: null,
            },
            width: {
                type: String,
                default: null,
            },
            mxAuto: {
                type: Boolean,
                default: false,
            },
            fitWidth: {
                type: Boolean,
                default: false,
            },
            fitHeight: {
                type: Boolean,
                default: false,
            },
            fillHeight: {
                type: Boolean,
                default: false,
            },
            clickToUpdate: {
                type: Boolean,
                default: false,
            },
            absolute: {
                type: Boolean,
                default: false,
            },
            overflowHidden: {
                type: Boolean,
                default: false,
            },
        },
        data: () => (
            {
                doodle: null,
            }
        ),
        computed: {
            classes() {

                return {
                    'vue-css-doodle--mx-auto': this.mxAuto,
                    'vue-css-doodle--fit-width': this.fitWidth,
                    'vue-css-doodle--fit-height': this.fitHeight,
                    'vue-css-doodle--fill-height': this.fillHeight,
                    'vue-css-doodle--absolute': this.absolute,
                    'vue-css-doodle--overflow-hidden': this.overflowHidden,
                };

            },
            style() {

                return {
                    width: this.width,
                    height: this.height,
                };

            },
            clickToUpdateToString() {

                if( this.clickToUpdate )
                    return 'true';

                return null;

            },
        },
        async mounted() {

            try {

                await cssDoodle();

                this.$nextTick(
                    this.init,
                );

            } catch( e ) {

                if( process.env.NODE_ENV !== 'production' ) {

                    console.error(
                        e,
                    );

                }

            }

        },
        methods: {
            init() {

                this.doodle = this.$refs.doodle.firstElementChild;

                this.generate();

            },
            generate() {

                this.doodle.update();

            },
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
