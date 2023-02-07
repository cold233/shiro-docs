import{_ as s,c as a,o as n,a as l}from"./app.1c37d856.js";const i=JSON.parse('{"title":"\u8FC1\u79FB\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"v1 \u27A1\uFE0F v2","slug":"v1-\u27A1\uFE0F-v2","link":"#v1-\u27A1\uFE0F-v2","children":[{"level":3,"title":"BotPlugin","slug":"botplugin","link":"#botplugin","children":[]},{"level":3,"title":"ArrayMsg","slug":"arraymsg","link":"#arraymsg","children":[]},{"level":3,"title":"MessageHandler","slug":"messagehandler","link":"#messagehandler","children":[]}]}],"relativePath":"migration.md","lastUpdated":1675753727000}'),p={name:"migration.md"},o=l(`<h1 id="\u8FC1\u79FB\u6307\u5357" tabindex="-1">\u8FC1\u79FB\u6307\u5357 <a class="header-anchor" href="#\u8FC1\u79FB\u6307\u5357" aria-hidden="true">#</a></h1><h2 id="v1-\u27A1\uFE0F-v2" tabindex="-1">v1 \u27A1\uFE0F v2 <a class="header-anchor" href="#v1-\u27A1\uFE0F-v2" aria-hidden="true">#</a></h2><h3 id="botplugin" tabindex="-1">BotPlugin <a class="header-anchor" href="#botplugin" aria-hidden="true">#</a></h3><blockquote><p>\u79FB\u9664 <code>BotPlugin</code> \u4E2D\u6240\u6709\u65B9\u6CD5\u7684 <code>@NotNull</code> \u6CE8\u89E3</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// v1</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onAnyMessage</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">NotNull</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Bot</span><span style="color:#A6ACCD;"> bot</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">NotNull</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">AnyMessageEvent</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> MESSAGE_IGNORE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// v2</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onAnyMessage</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Bot</span><span style="color:#A6ACCD;"> bot</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">AnyMessageEvent</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> MESSAGE_IGNORE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="arraymsg" tabindex="-1">ArrayMsg <a class="header-anchor" href="#arraymsg" aria-hidden="true">#</a></h3><blockquote><p>\u5143\u7D20\u7684\u7C7B\u578B\u7531\u5B57\u7B26\u4E32\u53D8\u66F4\u4E3A\u679A\u4E3E</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// v1</span></span>
<span class="line"><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getArrayMsg</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">it </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getType</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">it </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// v2</span></span>
<span class="line"><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getArrayMsg</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">it </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> MsgTypeEnum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">image </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> it</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getType</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">it </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"></span></code></pre></div><h3 id="messagehandler" tabindex="-1">MessageHandler <a class="header-anchor" href="#messagehandler" aria-hidden="true">#</a></h3><blockquote><p><code>MessageHandler</code> \u6CE8\u89E3\u53D8\u66F4\u4E3A <code>AnyMessageHandler</code></p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// v1</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">MessageHandler</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Bot</span><span style="color:#A6ACCD;"> bot</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">AnyMessageEvent</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// v2</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">AnyMessageHandler</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Bot</span><span style="color:#A6ACCD;"> bot</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">AnyMessageEvent</span><span style="color:#A6ACCD;"> event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div>`,14),e=[o];function t(c,r,y,D,A,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
