<template><div><h1 id="新建模块" tabindex="-1"><a class="header-anchor" href="#新建模块"><span>新建模块</span></a></h1>
<p>用法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Usage: create <span class="token operator">&lt;</span>module<span class="token operator">></span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">create a new module template powered by liux cli</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -t, <span class="token parameter variable">--type</span> <span class="token punctuation">[</span>feature-type-name<span class="token punctuation">]</span>  Add the specified feature-type-name <span class="token keyword">for</span> creating the <span class="token builtin class-name">type</span> of project page <span class="token punctuation">(</span>default: <span class="token string">"feature"</span><span class="token punctuation">)</span></span>
<span class="line">  -h, <span class="token parameter variable">--help</span>                      output usage information</span>
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
<td style="text-align:left">module</td>
<td style="text-align:left">模块名称</td>
<td style="text-align:left">是</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">-t, --type [feature-type-name]</td>
<td style="text-align:left">模块类型</td>
<td style="text-align:left">否</td>
<td style="text-align:left">activity，feature</td>
<td style="text-align:left">feature</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Example：</span>
<span class="line"></span>
<span class="line">// 创建 h5 项目下 feature 特性 template 模块</span>
<span class="line">liux create template</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">liux create <span class="token parameter variable">-t</span> feature template</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


