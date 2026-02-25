<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1>
<p><code v-pre>liux CLI</code>需要 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> (推荐 <code v-pre>12</code>及以上版本)。你可以使用 <a href="https://github.com/creationix/nvm" target="_blank" rel="noopener noreferrer">nvm</a> 或 <a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noopener noreferrer">nvm-windows</a> 在同一台电脑中管理多个 Node 版本。</p>
<p>可以使用下列方法安装这个新的包：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">// 代码库地址：</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> </span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> liux-cli</span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装之后，你就可以在命令行中访问 <code v-pre>liux</code> 命令。你可以通过简单运行 <code v-pre>liux</code> ，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。</p>
<p>你还可以用这个命令来检查其版本是否正确：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">liux <span class="token parameter variable">-v</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">liux <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


