"use strict";(self.webpackChunkshiro_docs=self.webpackChunkshiro_docs||[]).push([[827],{1207:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-7465afa1",path:"/quickstart/",title:"快速开始",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"引入 Shiro",slug:"引入-shiro",children:[{level:3,title:"从 Maven 引入",slug:"从-maven-引入",children:[]},{level:3,title:"从 Gradle 引入",slug:"从-gradle-引入",children:[]}]},{level:2,title:"编写插件",slug:"编写插件",children:[{level:3,title:"注解方式",slug:"注解方式",children:[]},{level:3,title:"重写 BotPlugin",slug:"重写-botplugin",children:[]}]},{level:2,title:"连接 Shiro",slug:"连接-shiro",children:[{level:3,title:"下载 Client",slug:"下载-client",children:[]},{level:3,title:"配置文件",slug:"配置文件",children:[]}]}],filePathRelative:"quickstart/README.md",git:{updatedTime:1642314653e3,contributors:[{name:"Zero",email:"i@mikuac.com",commits:1}]}}},8142:(n,a,e)=>{e.r(a),e.d(a,{default:()=>mn});var s=e(6252);const t=(0,s.uE)('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><h2 id="引入-shiro" tabindex="-1"><a class="header-anchor" href="#引入-shiro" aria-hidden="true">#</a> 引入 Shiro</h2><h3 id="从-maven-引入" tabindex="-1"><a class="header-anchor" href="#从-maven-引入" aria-hidden="true">#</a> 从 Maven 引入</h3>',3),l={class:"custom-container warning"},r=(0,s._)("p",{class:"custom-container-title"},"注意",-1),o=(0,s.Uk)("请访问 "),p={href:"https://search.maven.org/search?q=com.mikuac.shiro",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("Maven Repo"),i=(0,s.Uk)(" 查看最新版本，并替换 "),u=(0,s._)("code",null,"version",-1),h=(0,s.Uk)(" 内的 "),d=(0,s._)("code",null,"latest version",-1),k=(0,s.uE)('<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.mikuac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>shiro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>latest version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="从-gradle-引入" tabindex="-1"><a class="header-anchor" href="#从-gradle-引入" aria-hidden="true">#</a> 从 Gradle 引入</h3>',2),m={class:"custom-container warning"},b=(0,s._)("p",{class:"custom-container-title"},"注意",-1),g=(0,s.Uk)("请访问 "),_={href:"https://search.maven.org/search?q=com.mikuac.shiro",target:"_blank",rel:"noopener noreferrer"},v=(0,s.Uk)("Maven Repo"),f=(0,s.Uk)(" 查看最新版本，并替换 "),y=(0,s._)("code",null,"latest version",-1),U=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>implementation &#39;com.mikuac:shiro:latest version&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="编写插件" tabindex="-1"><a class="header-anchor" href="#编写插件" aria-hidden="true">#</a> 编写插件</h2><h3 id="注解方式" tabindex="-1"><a class="header-anchor" href="#注解方式" aria-hidden="true">#</a> 注解方式</h3>',3),x=(0,s.Uk)("点击跳转"),w=(0,s._)("h3",{id:"重写-botplugin",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#重写-botplugin","aria-hidden":"true"},"#"),(0,s.Uk)(" 重写 BotPlugin")],-1),W=(0,s.Uk)("点击跳转"),B=(0,s._)("h2",{id:"连接-shiro",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#连接-shiro","aria-hidden":"true"},"#"),(0,s.Uk)(" 连接 Shiro")],-1),E=(0,s._)("h3",{id:"下载-client",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#下载-client","aria-hidden":"true"},"#"),(0,s.Uk)(" 下载 Client")],-1),q={class:"custom-container tip"},M=(0,s._)("p",{class:"custom-container-title"},"提示",-1),S=(0,s.Uk)("Shiro 以 "),C={href:"https://github.com/botuniverse/onebot-11",target:"_blank",rel:"noopener noreferrer"},Y=(0,s.Uk)("OneBot-v11"),A=(0,s.Uk)(" 标准协议进行开发，兼容所有支持反向WebSocket的OneBot协议客户端"),I=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"项目地址"),(0,s._)("th",null,"平台"),(0,s._)("th",null,"核心作者"),(0,s._)("th",null,"备注")])],-1),O={href:"https://github.com/Yiwen-Chan/OneBot-YaYa",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("Yiwen-Chan/OneBot-YaYa"),G={href:"https://www.xianqubot.com/",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("先驱"),T=(0,s._)("td",null,"kanri",-1),D=(0,s._)("td",null,null,-1),F={href:"https://github.com/richardchien/coolq-http-api",target:"_blank",rel:"noopener noreferrer"},L=(0,s.Uk)("richardchien/coolq-http-api"),H=(0,s._)("td",null,"CKYU",-1),K=(0,s._)("td",null,"richardchien",-1),Q=(0,s.Uk)("可在 Mirai 平台使用 "),X={href:"https://github.com/iTXTech/mirai-native",target:"_blank",rel:"noopener noreferrer"},Z=(0,s.Uk)("mirai-native"),j=(0,s.Uk)(" 加载"),z={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},J=(0,s.Uk)("Mrs4s/go-cqhttp"),N={href:"https://github.com/Mrs4s/MiraiGo",target:"_blank",rel:"noopener noreferrer"},V=(0,s.Uk)("MiraiGo"),$=(0,s._)("td",null,"Mrs4s",-1),nn=(0,s._)("td",null,null,-1),an={href:"https://github.com/yyuueexxiinngg/cqhttp-mirai",target:"_blank",rel:"noopener noreferrer"},en=(0,s.Uk)("yyuueexxiinngg/cqhttp-mirai"),sn={href:"https://github.com/mamoe/mirai",target:"_blank",rel:"noopener noreferrer"},tn=(0,s.Uk)("Mirai"),ln=(0,s._)("td",null,"yyuueexxiinngg",-1),rn=(0,s._)("td",null,null,-1),on={href:"https://github.com/takayama-lily/onebot",target:"_blank",rel:"noopener noreferrer"},pn=(0,s.Uk)("takayama-lily/onebot"),cn={href:"https://github.com/takayama-lily/oicq",target:"_blank",rel:"noopener noreferrer"},un=(0,s.Uk)("OICQ"),hn=(0,s._)("td",null,"takayama",-1),dn=(0,s._)("td",null,null,-1),kn=(0,s.uE)('<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这里以 <code>go-cqhttp</code> 为例，配置反向 <code>websocket</code> 连接到 <code>shiro</code></p></div><p>编辑 <code>go-cqhttp</code> 目录下的 <code>config.yml</code> 文件，并修改如下内容</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># 连接服务列表</span>\n<span class="token key atrule">servers</span><span class="token punctuation">:</span>\n  <span class="token comment"># 添加方式，同一连接方式可添加多个，具体配置说明请查看文档</span>\n  <span class="token comment">#- http: # http 通信</span>\n  <span class="token comment">#- ws:   # 正向 Websocket</span>\n  <span class="token comment">#- ws-reverse: # 反向 Websocket</span>\n  <span class="token comment">#- pprof: #性能分析服务器</span>\n  <span class="token comment"># 反向WS设置</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">ws-reverse</span><span class="token punctuation">:</span>\n      <span class="token comment"># 反向WS Universal 地址</span>\n      <span class="token comment"># 注意 设置了此项地址后下面两项将会被忽略</span>\n      <span class="token key atrule">universal</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>5000/ws/shiro\n      <span class="token comment"># 反向WS API 地址</span>\n      <span class="token key atrule">api</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//your_websocket_api.server\n      <span class="token comment"># 反向WS Event 地址</span>\n      <span class="token key atrule">event</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//your_websocket_event.server\n      <span class="token comment"># 重连间隔 单位毫秒</span>\n      <span class="token key atrule">reconnect-interval</span><span class="token punctuation">:</span> <span class="token number">3000</span>\n      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>\n        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># 引用默认中间件</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',4),mn={render:function(n,a){const e=(0,s.up)("OutboundLink"),mn=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("div",l,[r,(0,s._)("p",null,[o,(0,s._)("a",p,[c,(0,s.Wm)(e)]),i,u,h,d])]),k,(0,s._)("div",m,[b,(0,s._)("p",null,[g,(0,s._)("a",_,[v,(0,s.Wm)(e)]),f,y])]),U,(0,s._)("p",null,[(0,s.Wm)(mn,{to:"/annotation_event/#%E7%A4%BA%E4%BE%8B%E6%8F%92%E4%BB%B6"},{default:(0,s.w5)((()=>[x])),_:1})]),w,(0,s._)("p",null,[(0,s.Wm)(mn,{to:"/override_event/#%E7%A4%BA%E4%BE%8B%E6%8F%92%E4%BB%B6"},{default:(0,s.w5)((()=>[W])),_:1})]),B,E,(0,s._)("div",q,[M,(0,s._)("p",null,[S,(0,s._)("a",C,[Y,(0,s.Wm)(e)]),A])]),(0,s._)("table",null,[I,(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",O,[R,(0,s.Wm)(e)])]),(0,s._)("td",null,[(0,s._)("a",G,[P,(0,s.Wm)(e)])]),T,D]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",F,[L,(0,s.Wm)(e)])]),H,K,(0,s._)("td",null,[Q,(0,s._)("a",X,[Z,(0,s.Wm)(e)]),j])]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",z,[J,(0,s.Wm)(e)])]),(0,s._)("td",null,[(0,s._)("a",N,[V,(0,s.Wm)(e)])]),$,nn]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",an,[en,(0,s.Wm)(e)])]),(0,s._)("td",null,[(0,s._)("a",sn,[tn,(0,s.Wm)(e)])]),ln,rn]),(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("a",on,[pn,(0,s.Wm)(e)])]),(0,s._)("td",null,[(0,s._)("a",cn,[un,(0,s.Wm)(e)])]),hn,dn])])]),kn],64)}}}}]);