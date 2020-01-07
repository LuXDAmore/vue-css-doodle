<template>
    <main class="app">

        <div class="grid-container">

            <div class="grid-cell left">
                <aside>
                    <section>

                        <vue-css-doodle
                            absolute
                            use="var(--ruleOne)"
                            click-to-update
                        />

                    </section>
                </aside>
            </div>

            <div class="grid-cell right">
                <section class="readme">
                    <readme class="markdown-body" />
                </section>
            </div>

        </div>

    </main>
</template>

<script>
    // Highlight
    import hljs from 'highlight.js/lib/highlight';
    import bash from 'highlight.js/lib/languages/bash';
    import javascript from 'highlight.js/lib/languages/javascript';
    import 'highlight.js/styles/github.css';

    // Markdown
    import readme from '../../README.md';

    // Highlight config
    hljs.registerLanguage(
        'bash',
        bash,
    );

    hljs.registerLanguage(
        'javascript',
        javascript,
    );

    // App
    export default {
        name: 'v-app',
        components: {
            readme,
        },
        mounted() {

            this.$nextTick(
                () => {

                    this.initHighlight();
                    this.initReadmeLinks();

                },
            );

        },
        methods: {
            initHighlight() {

                const PRE = document.querySelectorAll(
                    'pre',
                );

                PRE.forEach(
                    block => hljs.highlightBlock(
                        block,
                    ),
                );

            },
            initReadmeLinks() {

                const links = document.querySelectorAll(
                    '.readme > article a',
                );

                for( let i = 0; i < links.length; i ++ ) {

                    links[ i ].setAttribute(
                        'target',
                        '_blank',
                    );

                }

            },
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>

<style
    lang="scss"
    src="./demo.scss"
></style>
