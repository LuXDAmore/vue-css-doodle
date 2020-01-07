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
        /* webpackMode: "lazy" */
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
                    'vue-css-doodle--overflow-hidden': this.overflowHidden,
                    'vue-css-doodle--absolute': this.absolute,
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

            await cssDoodle();

            this.$nextTick(
                this.init,
            );

        },
        methods: {
            updated() {

                this.$emit(
                    'input',
                    this.doodle,
                );

            },
            init() {

                this.doodle = this.$refs.doodle.firstElementChild;

                this.updated();

            },
            generate() {

                this.doodle.update();

                this.updated();

            },
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
