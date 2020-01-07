<template>
    <main class="app">

        <div class="grid-container">

            <div class="grid-cell left">
                <aside>
                    <section class="doodle">

                        <vue-css-doodle
                            v-once
                            absolute
                            use="var(--ruleOne)"
                            click-to-update
                            demo-one
                        />

                    </section>
                    <section class="doodle">

                        <vue-css-doodle
                            v-once
                            absolute
                            use="var(--ruleTwo)"
                            click-to-update
                            demo-two
                        />

                    </section>
                    <section class="doodle">

                        <vue-css-doodle
                            v-once
                            absolute
                            click-to-update
                        >
                            <!-- eslint-disable -->
                            --translate: translateY(calc(-66vmin / @size() * @i()));

                            :doodle {
                                @grid: 45x1 / 100vmax;
                            }

                            :container {
                                transform: translateY( 100% );
                            }

                            :after,
                            :before {
                                content: '';
                                @place-cell: center;
                                @size: 100%;
                                background: radial-gradient( @p(#feca57, #e74c3c) @r(70%), transparent 0 ) @pn(30% 50%, 70% 50%, 50% 60%) / @r(.1vmin, 5vmin) @lr() no-repeat;
                            }

                            @place-cell: center;
                            @size: 100%;

                            will-change: transform;
                            animation: r 4s linear infinite;
                            animation-delay: calc(-4s / @size() * @i());

                            @keyframes r {
                                from { transform: var(--translate) rotate(0) }
                                to { transform: var(--translate) rotateZ(-1turn) }
                            }
                            <!-- eslint-enable -->
                        </vue-css-doodle>

                    </section>
                    <section class="doodle">

                        <vue-css-doodle
                            v-once
                            absolute
                            click-to-update
                        >
                            <!-- eslint-disable -->
                            :doodle {
                                @grid: 1x3 / 100vmax;
                            }

                            @size: 100% 150%;
                            position: absolute;

                            background: @m(100, ( linear-gradient( transparent, @p(#feca57@repeat(2, @p([0-9a-f])), #e74c3c@repeat(2, @p([0-9a-f]))) ) @r(0%, 100%) @r(0%, 100%) / @r(1px) @r(23vmin) no-repeat ));

                            will-change: transform;
                            animation: f 20s linear calc(-20s / @size() * @i()) infinite;

                            @keyframes f {
                                from { transform: translateY(-100%) }
                                to { transform: translateY(100%) }
                            }
                            <!-- eslint-enable -->
                        </vue-css-doodle>

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
    scoped
    lang="scss"
    src="./style-demo.scss"
></style>

<style
    lang="scss"
    src="./demo.scss"
></style>
