<template><div><h1 id="发布部署" tabindex="-1"><a class="header-anchor" href="#发布部署"><span>发布部署</span></a></h1>
<p>发布构建后的文件到指定环境的服务器，目前仅支持发布到开发环境。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"></span>
<span class="line">Usage: deploy <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">deploy one or <span class="token function">more</span> modules <span class="token keyword">in</span> production mode to the target server</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -e, <span class="token parameter variable">--env</span> <span class="token punctuation">[</span>env-type<span class="token punctuation">]</span>  Add the specified env-type <span class="token function">which</span> you want to deploying <span class="token punctuation">[</span>dev<span class="token punctuation">]</span> <span class="token punctuation">(</span>default: <span class="token string">"dev"</span><span class="token punctuation">)</span></span>
<span class="line">  -h, <span class="token parameter variable">--help</span>            output usage information</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">dev</td>
<td style="text-align:left">dev</td>
</tr>
</tbody>
</table>
</div></template>


