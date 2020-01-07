<template>
    <div class="app">

        <div class="grid-container">

            <aside class="grid-cell left">
                <section v-if="activeDoodle === 2" class="doodle">

                    <vue-css-doodle
                        v-once
                        mx-auto
                        absolute
                        use="var(--ruleTwo)"
                        click-to-update
                        demo-two
                    />

                </section>
                <section v-else-if="activeDoodle === 3" class="doodle">

                    <vue-css-doodle
                        v-once
                        mx-auto
                        fit-width
                        fill-height
                        absolute
                    >
                        <!-- eslint-disable -->
                            :doodle {
                                @grid: 1x3 / 100vmax;
                                border-radius: 3px;
                                background-color: #2C3E50;
                            }

                            @size: 150% 100%;

                            background: @m(100, (linear-gradient( transparent, @p(#feca57@repeat(2, @p([0-9a-f])), #e74c3c@repeat(2, @p([0-9a-f]))) ) @r(0%, 100%) @r(0%, 100%) / @r(1px) @r(23vmin) no-repeat ));

                            will-change: transform;
                            animation: f 20s linear calc(-20s / @size() * @i()) infinite;

                            @keyframes f {
                                from { transform: translateY(-100%) }
                                to { transform: translateY(100%) }
                            }
                            <!-- eslint-enable -->
                    </vue-css-doodle>

                </section>
                <section v-else class="doodle">

                    <vue-css-doodle
                        v-once
                        mx-auto
                        absolute
                        use="var(--ruleOne)"
                        click-to-update
                        demo-one
                    />

                </section>
                <footer class="controls controls--bottom">
                    <label for="changeDoodle">
                        Try an other Doodle
                    </label>
                    <select id="changeDoodle" v-model="activeDoodle">
                        <option
                            v-for="option in doodles"
                            :key="option.value"
                            :value="option.value"
                            v-text="option.text"
                        />
                    </select>
                </footer>
            </aside>

            <main class="grid-cell right">
                <article class="readme">
                    <readme class="markdown-body" />
                </article>
            </main>

        </div>

    </div>
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
        data: () => (
            {
                activeDoodle: null,
                doodles: [
                    {
                        text: 'Inception',
                        value: null,
                    },
                    {
                        text: 'Picasso',
                        value: 2,
                    },
                    {
                        text: 'Rain',
                        value: 3,
                    },
                ],
            }
        ),
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
