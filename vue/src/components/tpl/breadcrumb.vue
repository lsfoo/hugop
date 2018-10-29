<template>
    <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 class="bd-title" id="content">Breadcrumb</h1>
        <p class="bd-lead">Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>

        <h2 id="overview">
            <div>Overview<a class="anchorjs-link " href="#overview" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div>
        </h2>

        <p>Separators are automatically added in CSS through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before"><code class="highlighter-rouge">::before</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content"><code class="highlighter-rouge">content</code></a>.</p>

        <div class="bd-example">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        </div>
        <div class="bd-clipboard"><button class="btn-clipboard" title="" data-original-title="复制到剪贴板">复制</button></div>
        <div class="highlight">
            <pre><code class="language-html" data-lang="html"><span class="nt">&lt;nav</span> <span class="na">aria-label=</span><span class="s">"breadcrumb"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;ol</span> <span class="na">class=</span><span class="s">"breadcrumb"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"breadcrumb-item active"</span> <span class="na">aria-current=</span><span class="s">"page"</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;/ol&gt;</span>
<span class="nt">&lt;/nav&gt;</span>

<span class="nt">&lt;nav</span> <span class="na">aria-label=</span><span class="s">"breadcrumb"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;ol</span> <span class="na">class=</span><span class="s">"breadcrumb"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"breadcrumb-item"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"breadcrumb-item active"</span> <span class="na">aria-current=</span><span class="s">"page"</span><span class="nt">&gt;</span>Library<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;/ol&gt;</span>
<span class="nt">&lt;/nav&gt;</span>

<span class="nt">&lt;nav</span> <span class="na">aria-label=</span><span class="s">"breadcrumb"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;ol</span> <span class="na">class=</span><span class="s">"breadcrumb"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"breadcrumb-item"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"breadcrumb-item"</span><span class="nt">&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Library<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"breadcrumb-item active"</span> <span class="na">aria-current=</span><span class="s">"page"</span><span class="nt">&gt;</span>Data<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;/ol&gt;</span>
<span class="nt">&lt;/nav&gt;</span></code></pre>
        </div>

        <h2 id="accessibility">
            <div>Accessibility<a class="anchorjs-link " href="#accessibility" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div>
        </h2>

        <p>Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as <code class="highlighter-rouge">aria-label="breadcrumb"</code> to describe the type of navigation provided in the <code class="highlighter-rouge">&lt;nav&gt;</code> element, as well as applying an <code class="highlighter-rouge">aria-current="page"</code> to the last item of the set to indicate that it represents the current page.</p>

        <p>For more information, see the <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">WAI-ARIA Authoring Practices for the breadcrumb pattern</a>.</p>

    </main>
</template>
