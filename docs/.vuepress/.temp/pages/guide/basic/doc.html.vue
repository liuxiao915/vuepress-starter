<template><div><nav class="table-of-contents"><ul><li><router-link to="#查看本地-cli-文档1">查看本地 CLI 文档1</router-link><ul><li><router-link to="#查看本地-cli-文档2">查看本地 CLI 文档2</router-link></li></ul></li></ul></nav>
<!-- 把当前页面的目录添加到 Markdown 内容中，你可以使用 [[toc]] 语法。 -->
<h1 id="查看本地-cli-文档" tabindex="-1"><a class="header-anchor" href="#查看本地-cli-文档"><span>查看本地 CLI 文档</span></a></h1>
<p>可离线查看 CLI 文档。</p>
<h2 id="查看本地-cli-文档1" tabindex="-1"><a class="header-anchor" href="#查看本地-cli-文档1"><span>查看本地 CLI 文档1</span></a></h2>
<p>可离线查看 CLI 文档。</p>
<h3 id="查看本地-cli-文档2" tabindex="-1"><a class="header-anchor" href="#查看本地-cli-文档2"><span>查看本地 CLI 文档2</span></a></h3>
<p>可离线查看 CLI 文档。</p>
<!-- 相对路径 -->
<p><RouteLink to="/">首页</RouteLink><br>
<RouteLink to="/more/">更多</RouteLink></p>
<!-- 绝对路径 -->
<p><RouteLink to="/guide/installation.html">指南 &gt; 介绍</RouteLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
<!-- {1,7-9}用来高亮1,7-9这几行代码 -->
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title=".vuepress/config.ts">
    <span>.vuepress/config.ts</span>
  </div>
  <div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line highlighted"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这是一个提示</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这是一个警告</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>这是一个危险警告</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>这是一个信息</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>这是一个重要信息</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>这是一个备注</p>
</div>
<details class="hint-container details"><summary>详情</summary>
<p>这是一个 details 标签</p>
</details>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">liux doc</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


