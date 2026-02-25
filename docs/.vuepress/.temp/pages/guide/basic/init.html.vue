<template><div><h1 id="创建一个项目" tabindex="-1"><a class="header-anchor" href="#创建一个项目"><span>创建一个项目</span></a></h1>
<p>用法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Usage: init <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">generate a project from template quickly</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -t, <span class="token parameter variable">--type</span> <span class="token punctuation">[</span>type-name<span class="token punctuation">]</span>  Add the specified <span class="token builtin class-name">type</span> of template <span class="token punctuation">(</span>default: <span class="token punctuation">[</span><span class="token string">"h5"</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  -h, <span class="token parameter variable">--help</span>              output usage information</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">可选值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">项目名称</td>
<td style="text-align:left">是</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">-t, --type [type-name]</td>
<td style="text-align:left">模版类型</td>
<td style="text-align:left">否</td>
<td style="text-align:left">h5,admin</td>
<td style="text-align:left">h5</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">模版类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">h5</td>
<td style="text-align:left">H5模板</td>
</tr>
<tr>
<td style="text-align:left">admin</td>
<td style="text-align:left">运营后台（待支持）</td>
</tr>
</tbody>
</table>
<p>当然你可以使用<code v-pre>--type</code>属性，指定需要创建的项目类型。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Example：</span>
<span class="line"></span>
<span class="line">// 默认创建 h5 项目</span>
<span class="line">liux init first</span>
<span class="line"></span>
<span class="line">// 指定生成 h5 的项目</span>
<span class="line">liux init <span class="token parameter variable">-t</span> h5 first</span>
<span class="line"></span>
<span class="line">// 指定生成 admin 的项目</span>
<span class="line">liux init <span class="token parameter variable">-t</span> admin first</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会被提示是否立即安装新项目的依赖包，你可以立即安装，也可以后续自己再手动安装。</p>
<p>安装依赖包完成后，可以根据提示快速运行该模版。</p>
</div></template>


