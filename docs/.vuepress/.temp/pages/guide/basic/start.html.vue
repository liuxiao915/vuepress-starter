<template><div><h1 id="启动开发调试" tabindex="-1"><a class="header-anchor" href="#启动开发调试"><span>启动开发调试</span></a></h1>
<p>启动某个模块的服务进行开发调试。</p>
<p>用法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Usage: start <span class="token operator">&lt;</span>module<span class="token operator">></span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">serve a module <span class="token keyword">in</span> development mode</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -e, <span class="token parameter variable">--env</span> <span class="token punctuation">[</span>env-type<span class="token punctuation">]</span>             Add the specified env-type <span class="token keyword">for</span> starting the project <span class="token punctuation">(</span>default: <span class="token string">"dev"</span><span class="token punctuation">)</span></span>
<span class="line">  -h, <span class="token parameter variable">--help</span>                       output usage information</span>
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
<td style="text-align:left">-e, --env [env-type]</td>
<td style="text-align:left">接口环境类型</td>
<td style="text-align:left">否</td>
<td style="text-align:left">dev, pre, prod</td>
<td style="text-align:left">dev</td>
</tr>
</tbody>
</table>
<p><code v-pre>env-type</code>可选值说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left">可选值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">dev</td>
<td style="text-align:left">测试环境 dev</td>
</tr>
<tr>
<td style="text-align:left">pre</td>
<td style="text-align:left">预发布环境</td>
</tr>
<tr>
<td style="text-align:left">prod</td>
<td style="text-align:left">正式环境</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Example：</span>
<span class="line"></span>
<span class="line">// 启动 dev 环境下的 feature/first 模块</span>
<span class="line">liux start feature/first</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">liux start feature/first <span class="token parameter variable">-e</span> dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


