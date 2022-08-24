(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{545:function(e,t,r){e.exports=r.p+"assets/img/20190811202549736.15465254.jpg"},546:function(e,t,r){e.exports=r.p+"assets/img/20200312220200479.9db4f666.jpg"},547:function(e,t,r){e.exports=r.p+"assets/img/20200312221321661.f35832e1.jpg"},548:function(e,t,r){e.exports=r.p+"assets/img/20190811182853537.c3eb28e7.jpg"},591:function(e,t,r){"use strict";r.r(t);var n=r(56),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"通过mediarecorder-mediasource实现h5直播-以及关于webrtc直播的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过mediarecorder-mediasource实现h5直播-以及关于webrtc直播的问题"}},[e._v("#")]),e._v(" 通过MediaRecorder+MediaSource实现H5直播，以及关于WebRTC直播的问题")]),e._v(" "),n("h2",{attrs:{id:"_2020-3-12更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2020-3-12更新"}},[e._v("#")]),e._v(" "),n("strong",[e._v("2020/3/12更新")])]),e._v(" "),n("p",[e._v("我开始做这个直播时用到的WebRTC主要包括3部分功能：获取媒体流（getUserMedia），媒体流传输（addstream），P2P连接（PeerConnection），我所谓的放弃WebRTC其实是不严谨的说法，因为我仍然使用了WebRTC的获取媒体流getUserMedia，使用了P2P连接（这一步纯属是开始就走歪了后面没时间改了，完全可以用套接字来实现），所谓的放弃是指没有用WebRTC的PeerConnection直接将getUserMedia获得的stream进行传输，我说的效果不好原因就在这里。")]),e._v(" "),n("p",[e._v("事实证明PeerConnection建立的连接还是非常可靠的，但传输getUserMedia捕获的媒体流的时候就不大行了。")]),e._v(" "),n("p",[e._v("先在最前面说明一下，虽然实现了WebRTC进行直播，但是最终并没有采用，因为效果实在是差强人意。最终是通过MediaRecorder+MediaSource实现的直播功能")]),e._v(" "),n("h2",{attrs:{id:"关于实现和放弃-部分-webrtc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于实现和放弃-部分-webrtc"}},[e._v("#")]),e._v(" 关于实现和放弃（部分）WebRTC")]),e._v(" "),n("p",[e._v("当时的目标是实现一个基于H5的直播功能，即播放和观看都是在浏览器端的。当时找了一圈最后是看上了WebRTC技术，主要看中的是它可以直接传输媒体流的那部分功能。得对刚接触或者不是很了解WebRTC的人说一下WebRTC是什么")]),e._v(" "),n("p",[n("strong",[e._v("Web Real-Time Communication网页即时通讯，是一个支持*"),n("em",[n("a",{attrs:{href:"https://baike.baidu.com/item/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[e._v("网页浏览器"),n("OutboundLink")],1),e._v("*"),n("em",[e._v("进行实时语音对话或视频对话的*")]),n("a",{attrs:{href:"https://baike.baidu.com/item/API",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),n("OutboundLink")],1),e._v("*")])])]),e._v(" "),n("p",[e._v("我最早接触WebRTC时候对它最深刻的印象是通过它实现的视频聊天，但实现视频聊天的传输媒体流并不是它的核心功能，从名字就能知道它的核心是在网页之间实现P2P的传输。即A和B两台电脑打开浏览器就可以进行数据交换（聊天、视频通话等等）而不需要服务器在中间进行中转，我在实现直播时，苦于不知道如何传输媒体流，看到WebRTC之后（特别是它视频聊天的示例），"),n("strong",[e._v("就想着，既然能够实现视频通话，那么我只要让电脑A与服务器建立视频通话，A的媒体流就能传输到服务器，然后电脑BCDEF分别于服务器建立视频通话，不就能变相实现直播功能了吗？")])]),e._v(" "),n("p",[e._v("大部分想用WebRTC做直播的人可能在百度的时候都看到过知乎上这么一个回答："),n("a",{attrs:{href:"https://www.zhihu.com/question/25497090",target:"_blank",rel:"noopener noreferrer"}},[e._v("可以用WebRTC来做视频直播吗？ - 知乎"),n("OutboundLink")],1),e._v("，回答中有悲观的也有乐观的，因为问题问的是WebRTC，自然也是围绕其P2P这个特点讨论的，你让直播方去与N多个客户端直接建立P2P连接，那么当观看人数N变多（或者说稍微多一点）的时候，直播发起方的浏览器真的很容易会因为建立太多的连接而崩溃，这一点是毋庸置疑的。")]),e._v(" "),n("p",[e._v("当时看到回答，嘴角微微上扬，我主播和用户不直接建立P2P连接，只用WebRTC捕获和传输媒体流这一部分功能，让服务器去与用户建立连接。不就避免了回答里面提到的缺陷了吗。")]),e._v(" "),n("p",[e._v("事实证明我还是太年轻了ヾ(-_-😉")]),e._v(" "),n("p",[e._v("当时没能看到的一个例子：（顺便发一下这个"),n("a",{attrs:{href:"https://webrtc.github.io/samples/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebRTC samples"),n("OutboundLink")],1),e._v("，很多WebRTC的示例，搭配上WebRTC的官方文档对于初次接触的人，就差不多能知道WebRTC能做什么了）")]),e._v(" "),n("p",[e._v("关键的是这个"),n("a",{attrs:{href:"https://webrtc.github.io/samples/src/content/peerconnection/multiple-relay/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peer connection relay"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("这个例子是展示WebRTC中的媒体流在经过多次转发后的效果，每点击一个Insert Realy就转发一次，右侧显示的是经过转发最终得到的摄像头画面，可以看到画面和声音在每次转发后都会损失一部分，画质降低、画面变卡，这些都是在直播中不可接受的。我所做的项目成功实现了我最初的想法：*电脑A与服务器建立视频通话，A的媒体流就能传输到服务器，然后电脑BCDEF分别与服务器建立视频通话。*测试时非常流畅，声音清晰，延迟只有1-2秒，但那仅限于局域网下。")]),e._v(" "),n("p",[e._v("当我把它部署到服务器上的时候，延迟达到10s而且画面卡顿完全不能流畅播放，声音缺失到无法辨别，一个惨字已经无法形容...当时使用的是阿里云的服务器1G带宽，仅仅转发了两次得到的结果比上面那个示例转发49次还要惨。而且WebRTC传输媒体流时的媒体质量是它自动控制的，你在不修改它底层代码的情况下完全无法自行控制它在媒体质量和速度上的选择。所以最终还是放弃了WebRTC（部分）。WebRTC中使用PeerConnection传输MediaStream还是更适用于单纯的P2P，像我这样的歪门邪道的P2P加中间服务器属实是迷惑行为，不合适。")]),e._v(" "),n("p",[e._v("所以我个人认为通过WebRTC自带的媒体流传输来实现直播是不太现实的一件事情。让直播发起者与观看者建立连接，前面说知乎的时候也提到过了，观看人数增多会导致浏览器负担增大容易崩溃。而按我这个思路来，由服务器进行转发，又会导致媒体流质量损失严重。不过也有服务器配置这一方面的原因，不过我后来MediaSource的实现在同一个的服务器上效果很好。")]),e._v(" "),n("p",[e._v("所以说，如果你只是想研究一下WebRTC的“无限可能”，或者说是像我一样做个学生项目交个作业就行了的话，WebRTC做个直播还是没问题的（在本地/局域网下运行的效果还是非常好的）而且如果你只是使用webrtc的p2p数据传输功能，那么它也是相当可靠的，我最后实现的直播传输视频blob的途径就是webrtc的p2p")]),e._v(" "),n("p",[e._v("关于WebRTC中建立连接时ice候选的使用可以看一下我上一篇博客："),n("a",{attrs:{href:"https://blog.csdn.net/Vikanill/article/details/95023859",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置TURN服务器实现NAT穿透_winka9587的博客-CSDN博客"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"其他传输媒体流的尝试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他传输媒体流的尝试"}},[e._v("#")]),e._v(" 其他传输媒体流的尝试")]),e._v(" "),n("p",[n("strong",[e._v("这里记录一下我碰壁过程中的其他想法与尝试，这些最终都失败了，如果你不关心可以直接跳到最后，这里叨叨一下我的整个心路历程。")])]),e._v(" "),n("p",[e._v("后来就想有没有其他的方法，毕竟我需要解决的是视频流的传输问题。之前在学习WebRTC时逛示例就看到这么一个：")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://mozdevs.github.io/MediaRecorder-examples/looping-mosaic.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Looping mosaic"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("很有意思的一个示例，这个例子中每隔一段时间执行MediaRecorder的stop操作，结合MediaRecorder的ondataavaiable事件就可以根据时间来切分摄像头的媒体流将其切分成多个小视频，")]),e._v(" "),n("p",[e._v("我想：既然可以生成20个视频，那么也就是说可以将摄像头录制的视频的切分成多个小视频，然后就像传输普通文件一样传输这一个个小视频，再在客户端按顺序播放，实现直播视频的传递。")]),e._v(" "),n("p",[n("strong",[e._v("结果是NO")]),e._v("，先不说浏览器在播放不同视频之间会出现闪烁的问题，自动播放过小的视频会因为Chrome的策略被拦截而不能自动播放（防止骚扰广告），倘若是不停地切换播放源与前面的想法思路重合，如果是不停地删除新建video标签效率会很低。而且视频在播放前的转圈卡顿也很影响体验")]),e._v(" "),n("p",[e._v("在学习WebRTC时试着写了一个使用MediaRecorder录制视频保存为Blob播放的示例，已经上传到了github")]),e._v(" "),n("p",[e._v("https://cx568151847.github.io/WebRTC/RecordVideo.html")]),e._v(" "),n("p",[e._v("这个没有设置分片时间，所以录制完成后生成的blob是一整个的，然后将这个blob直接赋给视频标签的srcObject就可以用来播放了。关于提到的分片时间，可以看一下官方文档中的start()条目：")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder",target:"_blank",rel:"noopener noreferrer"}},[e._v("MediaRecorder - Web APIs | MDN"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("简单说就是，只要在start函数中设置了时间参数，每隔一段时间，会生成一个小的blob，并同时激活ondataavailable事件。最终调用MediaRecorder的stop函数时，得到的chunks数组中有很多小的blob。我当时看到这个描述就试图用它来实现，但使用方法并不对，blob虽然被分成了片，但仍是一个整体，这么说可能不是很清楚，我来画个图：")]),e._v(" "),n("p",[e._v("假设一个媒体流设置了时间t，最终被切分成4个blob，第一个blob中存放着一些关键的信息（视频的格式啊等等），最终得到的blob数组chunks如下面A，如果我们对这个数组chunks做一些调整，比如删除第4个blob，然后我们使用blob的构造函数将生成新的blob，var blob = new Blob(chunks);然后将这个blob赋给video标签，B组是可以正常播放的，当然播放到原来4的部分时候就已经没有了。")]),e._v(" "),n("p",[e._v("而C组删除了第一个blob，最终是完全无法播放的。")]),e._v(" "),n("p",[e._v("D组删除了2，播放的时候可以播放1，然后到2的时间的时候视频会卡住，到3的时候能够继续播放直至4结束。")]),e._v(" "),n("p",[n("img",{attrs:{src:r(545),alt:"img"}}),n("img",{attrs:{src:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==",alt:"点击并拖拽以移动"}})]),e._v(" "),n("p",[e._v("看到了这个实验结果，给试图用blob来解决直播的我带来了很大的问题：大部分用户在观看直播时候，直播已经开始了。那么实时传输blob，观众肯定收不到第一个blob，那么后面的也就无法播放。")]),e._v(" "),n("p",[e._v("我当时想着，能不能不要用start里面的切片了，就直接每隔一段时间start，stop，直接生成一个小的但是是一整个的blob不就可以了吗？可这又回到我最初面临的问题了，这个问题其实上面也要面临，那就是直接给video标签换源，我最早想直接在video播放结束时使用video.src = xx，来“续”上新的视频，来实现直播，而现实是你在续的过程中视频会转圈圈加载，而且浏览器的自动播放很大概率是没法自动播放的，我试了很多自动播放的方法都失败了，其中最笨的方法是删除新建video标签，效率太低也没法实现我想要的效果。")]),e._v(" "),n("p",[n("strong",[e._v("其实我最终的实现方法就是上面这个思路，只不过当时没有找对解决的方向")])]),e._v(" "),n("p",[e._v("在反复试验了很多办法，我快放弃的时候看到一个外国老哥写的示例，就是这个给了我希望：https://media-source-writable.glitch.me/，这个示例展示的是视频的分段传输，在他的代码中我发现了MediaSource")]),e._v(" "),n("h2",{attrs:{id:"最终的解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最终的解决方案"}},[e._v("#")]),e._v(" 最终的解决方案")]),e._v(" "),n("p",[e._v("解决方案就是通过MediaRecorder+MediaSource，MediaSource的sourcebuffer中的appendBuffer来实现最关键的部分，将接收到的媒体流动态地添加到video标签中。使其实现持续播放。可参考其官方文档：")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaSource",target:"_blank",rel:"noopener noreferrer"}},[e._v("MediaSource - Web APIs | MDN"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("虽然下面这个问题只是提供了一个大概的结构，离最终成型的代码还差了很多的细节问题的处理，但最终是它给了我完整的思路。"),n("a",{attrs:{href:"https://stackoverflow.com/questions/50333767/html5-video-streaming-video-with-blob-urls#",target:"_blank",rel:"noopener noreferrer"}},[e._v("javascript - HTML5 Video: Streaming Video with Blob URLs - Stack Overflow"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("代码量太大了而且其中有些与主题无关，贴一部分代码。这里说一下，因为我在尝试WebRTC失败后并没有完全抛弃WebRTC，考虑到截止时间很近了，以及传输数据的部分不想再推翻重写了，所以下面的代码中传输blob使用的不是WebSocekt而是WebRTC的DataChannel，服务器端使用的是nodejs，代码就不贴了，只是转发以及建立断开连接，复杂又没什么东西。")]),e._v(" "),n("h2",{attrs:{id:"_2020-3-12更新-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2020-3-12更新-2"}},[e._v("#")]),e._v(" 2020/3/12更新")]),e._v(" "),n("p",[e._v("其实我这样绕了很大的弯路，WebRTC的PeerConnection建立的是P2P的连接，建立P2P连接的过程需要TURN服务器进行中转，我这是用户A和服务器建立P2P连接，用户B又和服务器建立P2P连接，绕了好大一个弯。**自己有服务器、又不用WebRTC的媒体流传输的情况直接用websocket来A直连服务器，B直连服务器才是是最方便的。**我纯属是因为一开始就没研究明白，结果后期时间不够了怕改完又一堆bug才接着用这个歪思路的，大家不要被带跑了。如果你是瞅准了webrtc的音视频处理那就另当别论，但是如我前面所说我体验并不是太好，而且利用MediaRecorder能达到更好的效果。")]),e._v(" "),n("p",[n("strong",[e._v("p2p是什么")])]),e._v(" "),n("p",[e._v("p2p就是两个对等的实体进行连接，不用服务器进行中转，给不了解计算机网络的朋友们大概说一下（我也是理论课苦手，大概说一下不谈细节）")]),e._v(" "),n("p",[e._v("一般使用WebSocket的情况，中转的服务器是区别于p2p最大的特征")]),e._v(" "),n("p",[n("img",{attrs:{src:r(546),alt:"img"}}),e._v(" websocket的情况")]),e._v(" "),n("p",[e._v("而使用p2p的情况，比如我们的WebRTC用PeerConnection建立的连接")]),e._v(" "),n("p",[e._v("这里涉及到计算机网络的知识了，因为我们使用的IP地址是有限的，为了能够有足够的IP地址用，一般来说我们的电脑是很难有一个自己单独用的公网IP的，比如你们学校的公网IP是AAA.BBB.CCC.DDD，那你们学校里几万人都共用这一个公网IP，更具体的细节可以去自行研究。那么回到我们的问题，当两台电脑AB想要建立P2P连接，他们该怎么样在网上找到对方？这俩电脑就像相亲的一男一女一样（这种例子虽然油腻，但特别形象，就这样吧），需要STUN/TURN服务器作为婚介所在中间牵线搭桥，俩人将自己的联系方式都放到STUN/TURN服务器这里，就可以互相找到对方了。")]),e._v(" "),n("p",[n("img",{attrs:{src:r(547),alt:"img"}}),e._v(" 类似于这种感觉")]),e._v(" "),n("p",[n("strong",[e._v("发送端")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//通过setTimeout函数，每隔一段时间调用MediaRecorder的start和stop\n//注意这个时间不宜太小，“太小”是相对于stop和start之间的这个间隔来说的\n//如果过小就会使得stop和start之间的这段间隔变得明显\nsetTimeout(RecordLoop,1000);\n\nfunction RecordLoop(){\n\tmediaRecorder.stop();\n\tmediaRecorder.start();\n\tsetTimeout(RecordLoop,1000);\n}\n\n//因为每次发送的大小有限制，所以需要每次将blob切分成几段发送\n//每次切分的大小\nconst chunkSize = 16384;\nfunction readSlice(file,file_offset){\n//文件传输开始前，先发送文件长度信息\nif(file_offset==0){\n\t//datachannel发送文件总长度\n\tvar fileinfo = {\n\t\t\"filesize\":file.size\n\t}\n\tdatachannel.send(JSON.stringify(fileinfo));\n\t//接收方只有在收到fileinfo之后才会开始收集传输到的数据\n}\n\t\t\t\t\n    //切分文件\n\tvar sliceOfFile = file.slice(file_offset,file_offset+chunkSize);\n    //读取完成后触发onloadend事件发送给接收方\n\treader.readAsArrayBuffer(sliceOfFile);\n\treturn file_offset+chunkSize;\n}\n\nreader.onloadend = function(event){\n\t//发送\n    datachannel.send(reader.result);\n\t//检查是否发送完成\n\tif(offset<file_ToSend.size){\n\t    offset = readSlice(file_ToSend,offset);\n    }\n}\n\nmediaRecorder.ondataavailable = function(e) {\n\tvar arr_temp = [];\n\tarr_temp.push(e.data);\n\tvar blob_temp = new Blob(arr_temp,{'type':'video/webm; codecs=opus,vp8'});\n\t\t\t\t\n\tvar file_ToSend = blob_temp;\n\tvar offset = 0;\n\tvar arraybuffer_toSend;\n\n\t\n\t//当数据可用时，readSlice切分blob并且send\n\toffset = readSlice(file_ToSend,offset);\n}\n")])])]),n("p",[n("strong",[e._v("接收端")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//当前正在接收的file的总size\nvar now_file_size = null;\n//已经收到的size\nvar now_received_size = 0;\n//用于拼接成blob\nvar arr = [];\n//DataChannel收到消息\nfunction dc_receive_message(event){\n\tif(typeof(event.data)=='string'){\n\t    //重置\n\t    now_file_size = null;\n\t    now_received_size = 0;\n\t    arr = [];\n\t\t\t\t\n\t    var obj = eval (\"(\" + event.data + \")\");\n\t    console.log('get file size : '+obj.filesize);\n\t    now_file_size = obj.filesize;\n\t}else{\n\t\tif(now_file_size != null){\n\t\tarr.push(event.data);\n\n\t\t//更新接收到的size\n\t\t//blob是size，arraybuffer是byteSize\n\t\tnow_received_size += event.data.byteLength;\t\t\n\t\t\t\t\t\n\t\tif(now_received_size==now_file_size){\n\t\t\tvar blob = new Blob(arr,{'type':'video/webm; codecs=opus,vp8'});\n\n\t\t\t//当FileReader读取完成后，将其的播放\n\t\t\treader.onloadend = function(e){\n\t\t\t\tsourcebuffer.appendBuffer(reader.result);\n\t\t\t}\n\t\t\treader.readAsArrayBuffer(blob);\n\n\t\t\t//组装完成后清空记录\n\t\t\tnow_file_size = null;\n\t\t\tnow_received_size = 0;\n\t\t\tarr = [];\n\n\t\t\tsourcebuffer.addEventListener('updateend',function(event){\n\t\t\t\tif(!sourcebuffer.updating){\n\t\t\t\t\t//设置持续时间\n\t\t\t\t\ttry{\n\t\t\t\t\t\tmediasource.duration = 5;//初始加载5s\n\t\t\t\t\t}catch(e){\n\t\t\t\t\t\tconsole.log(e);\n\t\t\t\t\t}\n\t\t\t}\n\t\t\t});\n\t\t\t\t\t\t\n\t\t\tif (RemoteVideo.buffered.length && RemoteVideo.buffered.end(RemoteVideo.buffered.length-1) - RemoteVideo.buffered.start(0) > buffered_time_limit){\n\t\t\t\tconsole.log('clear buffer from 0 to '+ (RemoteVideo.buffered.end(RemoteVideo.buffered.length-1) - buffered_time_limit));\n\t\t\t\tsourcebuffer.remove(0, RemoteVideo.buffered.end(RemoteVideo.buffered.length-1) - buffered_time_limit);\n\t\t\t\t\t\t\t\n\t\t\t}\n\t\t}\n\t\t\t\t\t\n\t}\n}\n}\n")])])]),n("p",[e._v("这是后来使用MediaRecorder切分视频进行传输，同样还是那个服务器，在保证画质与原摄像头几乎一致的情况下能够流畅播放（图片来自录屏，有点模糊因为受限于笔记本摄像头的像素，手机上效果会更好，不过已经懒得截图了...），声音损失很小，延迟能够控制在3-4秒左右，使用appendBuffer顺道实现了已缓冲部分的回看功能。")]),e._v(" "),n("p",[n("img",{attrs:{src:r(548),alt:"img"}})]),e._v(" "),n("p",[e._v("注意这个解决方案也是有缺陷的：（还挺要命的）")]),e._v(" "),n("p",[e._v("1、EDGE浏览器不支持MediaRecorder")]),e._v(" "),n("p",[e._v("2、不同的浏览器支持的MIMEType不同，有可能你在谷歌浏览器发起直播，而在火狐浏览器得到媒体流却不能播放。具体支持的格式请参考官方文档。")]),e._v(" "),n("p",[e._v("不过第二个问题在后期我找到了相应的解决办法，"),n("a",{attrs:{href:"https://axel.isouard.fr/blog/2016/05/24/streaming-webm-video-over-html5-with-media-source",target:"_blank",rel:"noopener noreferrer"}},[e._v("Streaming a video with Media Source Extensions - Axel Isouard"),n("OutboundLink")],1),e._v("中提到服务器端可以使用"),n("strong",[e._v("ffmpeg工具")]),e._v("来重新编码，不过那时候已经开始收尾了，也就再没有继续深入下去。")]),e._v(" "),n("h2",{attrs:{id:"其他的一些小坑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他的一些小坑"}},[e._v("#")]),e._v(" 其他的一些小坑")]),e._v(" "),n("p",[n("strong",[e._v("1、在使用****getUserMedia会出现黑屏的情况")]),e._v("，这是本地测试中经常会被忽略的问题，一个可能的原因是你的连接时使用的是不安全的连接，使用getUserMedia必须是https协议或者本地，平时一直是本地测试并没有注意到这一点。一直用的火狐还可以在http下调用摄像头，截止到我写完这篇，火狐在最近一次68.0更新后也不行了，退回之前的版本67.0.4仍然可以。")]),e._v(" "),n("p",[e._v("自己刚开始学习WebRTC的时候有个挺邪道的办法，把页面上传到github上，然后当做示例打开就是https了（安卓手机上的浏览器可能因为权限不足导致无法打开摄像头，谷歌和火狐都还可以，IOS需要Safari浏览器并且要求IOS11版本以上）")]),e._v(" "),n("p",[e._v("在github上部署示例的方法参考这篇："),n("a",{attrs:{href:"https://blog.csdn.net/u010011236/article/details/84759688",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何在GitHub上预览自己的demo_Andy·Wu的博客-CSDN博客"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("strong",[e._v("2、MediaRecorder")]),e._v("中"),n("strong",[e._v("start和stop")]),e._v("与"),n("strong",[e._v("pause和resume")]),e._v("的区别，start和stop会触发ondataavailable生成blob数组，而pause是单纯的暂停，并不会触发ondataavailable事件。")]),e._v(" "),n("p",[n("strong",[e._v("3、"),n("strong",[e._v("我在通过WebRTC实现直播的过程中因为")]),e._v("服务器端")]),e._v("也需要"),n("strong",[e._v("WebRTC")]),e._v("，需要nodejs安装额外的模块，我在github上找到了两个，第一个我没能成功使用，使用的是第二个。")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/vmolsa/webrtc-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub - vmolsa/webrtc-native: WebRTC for NodeJS"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/node-webrtc/node-webrtc",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub - node-webrtc/node-webrtc: node-webrtc is a Node.js Native Addon that provides bindings to WebRTC M87"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("蛋疼的一点是，我在阿里云服务器上使用nvm install wrtc 从来没有安装成功过…")]),e._v(" "),n("p",[e._v("偶然在腾讯云上尝试了一次就成功了，可能是使用的镜像不同？（这两个服务器都是CentOS系统）")]),e._v(" "),n("p",[n("strong",[e._v("4、wertc更新的非常快，其官方文档中变动的、待补充的、未实现的地方也很多。很多方便的函数在我写的时候还没有被实现，所以在看网上的各种代码时最好还是要以官方文档为基准，能少走很多弯路。")])])])}),[],!1,null,null,null);t.default=o.exports}}]);