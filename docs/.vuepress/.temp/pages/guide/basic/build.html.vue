<template><div><h1 id="编译构建" tabindex="-1"><a class="header-anchor" href="#编译构建"><span>编译构建</span></a></h1>
<p>项目的打包编译构建，<code v-pre>build</code> 过程中有强制代码扫描，若校验不通过，则无法编译，不能构建成功。</p>
<p>用法：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Usage: build <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">build one or <span class="token function">more</span> modules <span class="token keyword">in</span> production mode with zero config</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -e, <span class="token parameter variable">--env</span> <span class="token operator">&lt;</span>env-type<span class="token operator">></span>             Add the specified env-type <span class="token keyword">for</span> building the project <span class="token punctuation">(</span>default: <span class="token string">"dev"</span><span class="token punctuation">)</span></span>
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
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">Example：</span>
<span class="line">// 构建 h5 项目所有模块</span>
<span class="line">liux build</span>
<span class="line"></span>
<span class="line">// 构建 dev 环境下 feature/first 模块</span>
<span class="line">liux build feature/first</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">liux build feature/first <span class="token parameter variable">-e</span> dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


