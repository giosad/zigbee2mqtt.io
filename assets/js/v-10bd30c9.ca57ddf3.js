"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81562],{56660:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-10bd30c9",path:"/advanced/remote-adapter/connect_to_a_remote_adapter.html",title:"Connect to a remote adapter",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. Install ser2net",slug:"_1-install-ser2net",children:[]},{level:2,title:"2(a). Configure ser2net (<4.0)",slug:"_2-a-configure-ser2net-4-0",children:[]},{level:2,title:"2(b). Configure ser2net (>=4.0)",slug:"_2-b-configure-ser2net-4-0",children:[]},{level:2,title:"3. Configure",slug:"_3-configure",children:[]}],filePathRelative:"advanced/remote-adapter/connect_to_a_remote_adapter.md",git:{updatedTime:1641572076e3}}},77422:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});const s=(0,a(66252).uE)('<h1 id="connect-to-a-remote-adapter" tabindex="-1"><a class="header-anchor" href="#connect-to-a-remote-adapter" aria-hidden="true">#</a> Connect to a remote adapter</h1><p>This how-to explains how to run Zigbee2MQTT with an adapter on a remote location. We will use ser2net for this which allows to connect to a serial port over TCP. In this way you can e.g. setup a Raspberry Pi Zero with the adapter connected while running Zigbee2MQTT on a different system. The instructions below have to be executed on the system where the adapter is connected to.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>WiFi-based Serial-to-IP bridges are not recommended as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections.</p></div><h2 id="_1-install-ser2net" tabindex="-1"><a class="header-anchor" href="#_1-install-ser2net" aria-hidden="true">#</a> 1. Install ser2net</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ser2net\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-a-configure-ser2net-4-0" tabindex="-1"><a class="header-anchor" href="#_2-a-configure-ser2net-4-0" aria-hidden="true">#</a> 2(a). Configure ser2net (&lt;4.0)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/ser2net.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Add the following entry, replace <code>/dev/ttyACM0</code> with the correct path to your adapter.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>20108:raw:0:/dev/ttyACM0:115200 8DATABITS NONE 1STOPBIT\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>After this reboot the system.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">reboot</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-b-configure-ser2net-4-0" tabindex="-1"><a class="header-anchor" href="#_2-b-configure-ser2net-4-0" aria-hidden="true">#</a> 2(b). Configure ser2net (&gt;=4.0)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/ser2net.yaml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Add the following entry, replace <code>/dev/ttyACM0</code> with the correct path to your adapter.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>connection: &amp;con01\n  accepter: tcp,20108\n  connector: serialdev,/dev/ttyACM0,115200n81,local\n  options:\n    kickolduser: true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>For a Slaesh coordinator, use the following configuration:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>connection: &amp;con01\n  accepter: tcp,20108\n  connector: serialdev,/dev/ttyACM0,115200n81,local,dtr=off,rts=off\n  options:\n    kickolduser: true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>After this reboot the system.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">reboot</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3-configure" tabindex="-1"><a class="header-anchor" href="#_3-configure" aria-hidden="true">#</a> 3. Configure</h2><p>Now edit the Zigbee2MQTT <code>configuration.yaml</code> accordingly, replace <code>192.168.2.13</code> with the IP or hostname of your system where the adapter is connected to.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;tcp://192.168.2.13:20108&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Done! Now you can start Zigbee2MQTT.</p>',23),t={},r=(0,a(83744).Z)(t,[["render",function(e,n){return s}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);