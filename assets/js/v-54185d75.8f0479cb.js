"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93962],{10977:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-54185d75",path:"/devices/DJT11LM.html",title:"Xiaomi DJT11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi DJT11LM control via MQTT",description:"Integrate your Xiaomi DJT11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Meaning of strength value",slug:"meaning-of-strength-value",children:[]},{level:3,title:"Troubleshooting: device stops sending messages/disconnects from network",slug:"troubleshooting-device-stops-sending-messages-disconnects-from-network",children:[]},{level:3,title:"Sensitivity",slug:"sensitivity",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Vibration (binary)",slug:"vibration-binary",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Strength (numeric)",slug:"strength-numeric",children:[]},{level:3,title:"Sensitivity (enum)",slug:"sensitivity-enum",children:[]},{level:3,title:"Angle_x (numeric)",slug:"angle-x-numeric",children:[]},{level:3,title:"Angle_y (numeric)",slug:"angle-y-numeric",children:[]},{level:3,title:"Angle_z (numeric)",slug:"angle-z-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DJT11LM.md",git:{updatedTime:1641572076e3}}},63113:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(66252);const o=(0,a.uE)('<h1 id="xiaomi-djt11lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-djt11lm" aria-hidden="true">#</a> Xiaomi DJT11LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>DJT11LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara vibration sensor</td></tr><tr><td>Exposes</td><td>battery, vibration, action, strength, sensitivity, angle_x, angle_y, angle_z, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/DJT11LM.jpg" alt="Xiaomi DJT11LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the reset button for about 5 seconds. The LED lights up 3 times. Then press the button again every 2 seconds (maximum 20 times).</p><p><em>NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.</em></p><h3 id="meaning-of-strength-value" tabindex="-1"><a class="header-anchor" href="#meaning-of-strength-value" aria-hidden="true">#</a> Meaning of <code>strength</code> value</h3><p>The <code>strength</code> value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.</li></ul>',11),n=(0,a.Uk)("More detailed information about this can be found "),d={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("here"),s=(0,a.Uk)("."),c=(0,a.uE)('<h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity" aria-hidden="true">#</a> Sensitivity</h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><p>After setting the sensitivity you immediately have to start pressing the reset button with an interval of 1 second until you see Zigbee2MQTT publishing the new sensitivity to MQTT.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',4),l=(0,a.Uk)("How to use device type specific configuration"),h=(0,a.uE)('<ul><li><code>vibration_timeout</code>: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary" aria-hidden="true">#</a> Vibration (binary)</h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>vibration</code>, <code>tilt</code>, <code>drop</code>.</p><h3 id="strength-numeric" tabindex="-1"><a class="header-anchor" href="#strength-numeric" aria-hidden="true">#</a> Strength (numeric)</h3><p>Value can be found in the published state on the <code>strength</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="angle-x-numeric" tabindex="-1"><a class="header-anchor" href="#angle-x-numeric" aria-hidden="true">#</a> Angle_x (numeric)</h3><p>Value can be found in the published state on the <code>angle_x</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>.</p><h3 id="angle-y-numeric" tabindex="-1"><a class="header-anchor" href="#angle-y-numeric" aria-hidden="true">#</a> Angle_y (numeric)</h3><p>Value can be found in the published state on the <code>angle_y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>.</p><h3 id="angle-z-numeric" tabindex="-1"><a class="header-anchor" href="#angle-z-numeric" aria-hidden="true">#</a> Angle_z (numeric)</h3><p>Value can be found in the published state on the <code>angle_z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),u={},m=(0,i(83744).Z)(u,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),u=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[n,(0,a._)("a",d,[r,(0,a.Wm)(i)]),s]),c,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(u,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[l])),_:1})])]),h],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);