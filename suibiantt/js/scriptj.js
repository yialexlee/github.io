﻿(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
{
title: 'Inside You',
artist: 'Milet',
album: 'Eyes',
cover: 'img/insideyou.jpg',
mp3: 'mp3/insideyou.mp3',
ogg: ''
},
{
title: '虹',
artist: '菅田将暉',
album: '',
cover: 'img/niji.jpg',
mp3: 'mp3/niji.mp3',
ogg: ''
},
{
title: 'テルーの唄 (covered by 蒼莉奈)',
artist: '手嶌葵',
album: 'ゲド戦記歌集',
cover: 'img/teru.jpg',
mp3: 'mp3/teru.mp3',
ogg: ''
},
{
title: '炎',
artist: 'LISA',
album: '炎',
cover: 'img/yan.jpg',
mp3: 'mp3/yan.mp3',
ogg: ''
},
{
title: 'Bless You',
artist: '家入レオ',
album: '',
cover: 'img/blessyou.jpg',
mp3: 'mp3/blessyou.mp3',
ogg: ''
},
{
title: '春はゆく',
artist: 'Aimer',
album: '春はゆく / marie',
cover: 'img/haruwayuku.jpg',
mp3: 'mp3/haruwayuku.mp3',
ogg: ''
},
{
title: 'DADDY ! DADDY ! DO ! feat. 鈴木愛理',
artist: '鈴木雅之',
album: 'ALL TIME ROCK N ROLL',
cover: 'img/daddy.jpg',
mp3: 'mp3/daddy.mp3',
ogg: ''
},
{
title: 'ハルジオン',
artist: 'YOASOBI',
album: '',
cover: 'img/halzion.jpg',
mp3: 'mp3/halzion.mp3',
ogg: ''
},
{
title: '夜に駆ける',
artist: 'YOASOBI',
album: '',
cover: 'img/yorunikakeru.jpg',
mp3: 'mp3/yorunikakeru.mp3',
ogg: ''
},
{
title: '夜に駆ける - THE HOME TAKE (幾田りら)',
artist: 'YOASOBI',
album: '',
cover: 'img/yorunikakeru-c.jpg',
mp3: 'mp3/yorunikakeru-c.mp3',
ogg: ''
},
{
title: '再会',
artist: 'LISA x Uru',
album: '',
cover: 'img/saikai.jpg',
mp3: 'mp3/saikai.mp3',
ogg: ''
},
{
title: 'Eden',
artist: 'MONKEY MAJIK',
album: '',
cover: 'img/eden.jpg',
mp3: 'mp3/eden.mp3',
ogg: ''
},
{
title: '打上花火',
artist: 'DAOKO×米津玄師',
album: '打上花火',
cover: 'img/hanabi.jpg',
mp3: 'mp3/hanabi.mp3',
ogg: ''
},
{
title: '僕が死のうと思ったのは',
artist: '中島美嘉',
album: '',
cover: 'img/shinohodo.jpg',
mp3: 'mp3/shinohodo.mp3',
ogg: ''
},
{
title: '夢と葉桜',
artist: 'ヲタみん',
album: '',
cover: 'img/hazakura.jpg',
mp3: 'mp3/hazakura.mp3',
ogg: ''
},
{
title: '生きていたんだよな',
artist: 'あいみょん',
album: '',
cover: 'img/ikite.jpg',
mp3: 'mp3/ikite.mp3',
ogg: ''
},
{
title: 'Who I Am',
artist: 'Milet',
album: '',
cover: 'img/whoiammilet.jpg',
mp3: '',
ogg: 'mp3/whoiammilet.ogg'
},
{
title: 'ぼくらのレットイットビー 針原 翼 / はりーP (feat. 初音ミク) (cover by 梦音)',
artist: '針原 翼（はりーP）',
album: '',
cover: 'img/bokura.jpg',
mp3: 'mp3/bokura.mp3',
ogg: ''
},
{
title: 'マリーゴールド',
artist: 'あいみょん',
album: '',
cover: 'img/marigorudo.jpg',
mp3: 'mp3/marigorudo.mp3',
ogg: ''
},
{
title: 'Secret Love',
artist: '安斉かれん',
album: '',
cover: 'img/secretlove.jpg',
mp3: 'mp3/secretlove.mp3',
ogg: ''
},
{
title: '群青',
artist: 'YOASOBI',
album: '',
cover: 'img/gunjo.jpg',
mp3: 'mp3/gunjo.mp3',
ogg: ''
},
{
title: '笑えれば (cover by さやカバー)',
artist: 'ウルフルズ',
album: '',
cover: 'img/waraeba.jpg',
mp3: 'mp3/waraeba.mp3',
ogg: ''
},
{
title: 'Etoile',
artist: 'OH MY GIRL',
album: '',
cover: 'img/etoile.jpg',
mp3: 'mp3/etoile.mp3',
ogg: ''
},
{
title: 'BLUE ROSE knows',
artist: 'MindaRyn',
album: '',
cover: 'img/blueroseknows.jpg',
mp3: 'mp3/blueroseknows.mp3',
ogg: ''
},
{
title: 'パプリカ',
artist: '米津玄師',
album: '',
cover: 'img/papurika.jpg',
mp3: 'mp3/papurika.mp3',
ogg: ''
},
{
title: '僕のこと (Covered by コバソロ & 鈴木瑛美子)',
artist: 'Mrs. GREEN APPLE ',
album: '',
cover: 'img/bokunokoto.jpg',
mp3: 'mp3/bokunokoto.mp3',
ogg: ''
},
{
title: 'マリーミー',
artist: 'Rude-α',
album: '',
cover: 'img/marimi.jpg',
mp3: 'mp3/marimi.mp3',
ogg: ''
},
{
title: 'おまじない',
artist: 'ほのかりん',
album: '',
cover: 'img/omajinai.jpg',
mp3: 'mp3/omajinai.mp3',
ogg: ''
},
{
title: 'ANIMA',
artist: 'ReoNa',
album: '',
cover: 'img/anima.jpg',
mp3: 'mp3/anima.mp3',
ogg: ''
},
{
title: 'Umbrella',
artist: 'SEKAI NO OWARI',
album: '',
cover: 'img/umbrella.jpg',
mp3: 'mp3/umbrella.mp3',
ogg: ''
},
{
title: '心做し [LIVE]',
artist: 'majiko / まじ娘',
album: '',
cover: 'img/kokoronashi.jpg',
mp3: 'mp3/kokoronashi.mp3',
ogg: ''
},
{
title: 'ひび割れた世界',
artist: 'majiko / まじ娘',
album: '',
cover: 'img/hibiwaretasekai.jpg',
mp3: 'mp3/hibiwaretasekai.mp3',
ogg: ''
},
{
title: '景色',
artist: '花譜',
album: '',
cover: 'img/keshiki.jpg',
mp3: 'mp3/keshiki.mp3',
ogg: ''
},
{
title: '嘘月',
artist: 'ヨルシカ',
album: '',
cover: 'img/usotsuki.jpg',
mp3: 'mp3/usotsuki.mp3',
ogg: ''
},
{
title: '裸の心',
artist: 'あいみょん',
album: '',
cover: 'img/hadakanokokoro.jpg',
mp3: 'mp3/hadakanokokoro.mp3',
ogg: ''
},
{
title: 'それを愛と呼ぶだけ',
artist: 'マフマフ',
album: '',
cover: 'img/sorewoaitoyobudake.jpg',
mp3: 'mp3/sorewoaitoyobudake.mp3',
ogg: ''
},
{
title: 'エイリアンエイリアン (cover by Raon Lee)',
artist: 'ナユタン星人',
album: '',
cover: 'img/alienalien.jpg',
mp3: 'mp3/alienalien.mp3',
ogg: ''
},
{
title: 'Neko',
artist: 'DISH',
album: '',
cover: 'img/neko.jpg',
mp3: 'mp3/neko.mp3',
ogg: ''
},
{
title: 'ポラリス',
artist: 'BLUE ENCOUNT',
album: '',
cover: 'img/polaris.jpg',
mp3: 'mp3/polaris.mp3',
ogg: ''
},
{
title: '未来コネクション',
artist: 'ReaL',
album: '',
cover: 'img/miraikoneshiyon.jpg',
mp3: 'mp3/miraikoneshiyon.mp3',
ogg: ''
},
{
title: 'プロローグ',
artist: 'Uru',
album: '',
cover: 'img/burogu.jpg',
mp3: 'mp3/burogu.mp3',
ogg: ''
},
{
title: 'Shine',
artist: '家入レオ',
album: '',
cover: 'img/shine.jpg',
mp3: 'mp3/shine.mp3',
ogg: ''
},
{
title: 'Summers Still Burning',
artist: '川口レイジ',
album: '',
cover: 'img/summersstillburning.jpg',
mp3: 'mp3/summersstillburning.mp3',
ogg: ''
},
{
title: 'あなたがいることで',
artist: 'Uru',
album: '',
cover: 'img/anatagairukotode.jpg',
mp3: 'mp3/anatagairukotode.mp3',
ogg: ''
},
{
title: 'YELLOW',
artist: '神山羊',
album: '',
cover: 'img/yellow.jpg',
mp3: 'mp3/yellow.mp3',
ogg: ''
},
{
title: 'D.D.D.D.',
artist: '(K)NoW_NAME',
album: '',
cover: 'img/dddd.jpg',
mp3: 'mp3/dddd.mp3',
ogg: ''
},
{
title: 'Blaaaw',
artist: 'lol-エルオーエル-',
album: '',
cover: 'img/blaaaw.jpg',
mp3: 'mp3/blaaaw.mp3',
ogg: ''
},
{
title: 'BaNG!!!',
artist: 'BAE',
album: '',
cover: 'img/bang.jpg',
mp3: 'mp3/bang.mp3',
ogg: ''
},
{
title: '雪の華',
artist: '中島美嘉',
album: '',
cover: 'img/yukinohane.jpg',
mp3: 'mp3/yukinohane.mp3',
ogg: ''
},
{
title: '別の人の彼女になたよ (cover by Kobasolo x 相沢)',
artist: 'Wacci',
album: '',
cover: 'img/betsunohitonokanojoninatayo.jpg',
mp3: 'mp3/betsunohitonokanojoninatayo.mp3',
ogg: ''
},
{
title: 'R・I・O・T',
artist: 'RAISE A SUILEN',
album: 'ERA',
cover: 'img/riot.jpg',
mp3: 'mp3/riot.mp3',
ogg: ''
},
{
title: '夢を打ち抜く瞬間に',
artist: 'Poppin Party',
album: '',
cover: 'img/yumewouchinukushunkanni.jpg',
mp3: 'mp3/yumewouchinukushunkanni.mp3',
ogg: ''
},
{
title: '命に嫌われている',
artist: 'まふまふ',
album: '',
cover: 'img/inochinikirawareteiru.jpg',
mp3: 'mp3/inochinikirawareteiru.mp3',
ogg: ''
},
{
title: 'A little love song (Full Covered by Kobasoro & apricot Masako)',
artist: 'MONGOL800',
album: '',
cover: 'img/alittlelovesong.jpg',
mp3: 'mp3/alittlelovesong.mp3',
ogg: ''
},
{
title: '平行線',
artist: '酸欠少女 さユり',
album: '',
cover: 'img/hekosen.jpg',
mp3: 'mp3/hekosen.mp3',
ogg: ''
},
{
title: 'Birthday song',
artist: '酸欠少女 さユり',
album: '',
cover: 'img/birthdaysong.jpg',
mp3: 'mp3/birthdaysong.mp3',
ogg: ''
},
{
title: 'No 1（Full Cover by Kobasolo & Lefty Hand Cream)',
artist: '西野カナ',
album: '',
cover: 'img/no1.jpg',
mp3: 'mp3/no1.mp3',
ogg: ''
},
{
title: 'まちがいさがし',
artist: '菅田将暉',
album: '',
cover: 'img/machigaisagashi.jpg',
mp3: 'mp3/machigaisagashi.mp3',
ogg: ''
},
{
title: 'Main actor',
artist: '美波',
album: '',
cover: 'img/mainactor.jpg',
mp3: 'mp3/mainactor.mp3',
ogg: ''
},
{
title: 'ホロネス',
artist: '美波',
album: '',
cover: 'img/hollowness.jpg',
mp3: 'mp3/hollowness.mp3',
ogg: ''
},
{
title: 'カワキヲアメク',
artist: '美波',
album: '',
cover: 'img/cryingforrain.jpg',
mp3: 'mp3/cryingforrain.mp3',
ogg: ''
},
{
title: 'だから僕は音楽を辞めた',
artist: 'ヨルシカ',
album: '',
cover: 'img/dakarabokuwaongakuwoyameta.jpg',
mp3: 'mp3/dakarabokuwaongakuwoyameta.mp3',
ogg: ''
},
{
title: 'Make you happy',
artist: 'NiziU',
album: '',
cover: 'img/makeuhappy.jpg',
mp3: 'mp3/makeuhappy.mp3',
ogg: ''
},
{
title: 'Tell me',
artist: 'Milet',
album: '',
cover: 'img/tellme.jpg',
mp3: 'mp3/tellme.mp3',
ogg: ''
},
{
title: '花に亡霊',
artist: 'ヨルシカ',
album: '盗作 (Plagiarism)',
cover: 'img/hananiborei.jpg',
mp3: 'mp3/hananiborei.mp3',
ogg: ''
},
{
title: '好きと言わせたい',
artist: 'IZ*ONE',
album: '',
cover: 'img/sukitoiwasetai.jpg',
mp3: 'mp3/sukitoiwasetai.mp3',
ogg: ''
},
{
title: 'Lonely days',
artist: '有華',
album: '',
cover: 'img/lonelydays.jpg',
mp3: 'mp3/lonelydays.mp3',
ogg: ''
},
{
title: 'Ref:rain',
artist: 'Aimer',
album: '',
cover: 'img/refrain.jpg',
mp3: 'mp3/refrain.mp3',
ogg: ''
},
{
title: 'ゼロ ユニバース',
artist: '山本彩',
album: '',
cover: 'img/zerouniverse.jpg',
mp3: 'mp3/zerouniverse.mp3',
ogg: ''
},
{
title: 'カムパネルラ',
artist: '米津玄師',
album: 'STRAY SHEEP',
cover: 'img/kamupanerura.jpg',
mp3: 'mp3/kamupanerura.mp3',
ogg: ''
},
{
title: '感電',
artist: '米津玄師',
album: 'STRAY SHEEP',
cover: 'img/kamupanerura.jpg',
mp3: 'mp3/ganden.mp3',
ogg: ''
},
{
title: 'SHINEMAGIC',
artist: 'ZOC',
album: '',
cover: 'img/shinemagic.jpg',
mp3: 'mp3/shinemagic.mp3',
ogg: ''
},
{
title: 'Lemon',
artist: '米津玄師',
album: '',
cover: 'img/lemon.jpg',
mp3: 'mp3/lemon.mp3',
ogg: ''
},
{
title: 'Pretender',
artist: '髭男dism',
album: '',
cover: 'img/pretender.jpg',
mp3: 'mp3/pretender.mp3',
ogg: ''
},
{
title: 'One Touch',
artist: 'Milet',
album: '',
cover: 'img/onetouch.jpg',
mp3: 'mp3/onetouch.mp3',
ogg: ''
},
{
title: 'アシンメトリー',
artist: '安田レイ',
album: '',
cover: 'img/ashinmetori.jpg',
mp3: 'mp3/ashinmetori.mp3',
ogg: ''
},
{
title: 'GirlsSpkOut (Feat.ちゃんみな)',
artist: '太妍(TAEYEON)',
album: 'GirlsSpkOut - The 2nd Album',
cover: 'img/girlsspkout.jpg',
mp3: 'mp3/girlsspkout.mp3',
ogg: ''
},
{
title: 'Let Me Hear',
artist: 'Fear, and Loathing in Las Vegas',
album: 'Feeling of Unity',
cover: 'img/letmehear.jpg',
mp3: 'mp3/letmehear.mp3',
ogg: ''
},
{
title: 'ダダダダ天使',
artist: 'アズマリム',
album: '',
cover: 'img/dadadadatenshi.jpg',
mp3: 'mp3/dadadadatenshi.mp3',
ogg: ''
},
{
title: 'Lady',
artist: 'ちゃんみな',
album: '未成年',
cover: 'img/lady.jpg',
mp3: 'mp3/lady.mp3',
ogg: ''
},
{
title: 'PAIN IS BEAUTY',
artist: 'ちゃんみな',
album: 'PAIN IS BEAUTY',
cover: 'img/painisbeauty.jpg',
mp3: 'mp3/painisbeauty.mp3',
ogg: ''
},
{
title: 'カタオモイ',
artist: 'Aimer',
album: 'Daydream',
cover: 'img/kataomoi.jpg',
mp3: 'mp3/kataomoi.mp3',
ogg: ''
},
{
title: 'ただ君に晴れ',
artist: 'ヨルシカ',
album: '2nd Mini Album 「負け犬にアンコールはいらない」',
cover: 'img/tadakiminihare.jpg',
mp3: 'mp3/tadakiminihare.mp3',
ogg: ''
},
{
title: 'BREAK OUT! (live sing by 櫻井佑音)',
artist: '相川七瀬',
album: '',
cover: 'img/breakout!.jpg',
mp3: 'mp3/breakout!.mp3',
ogg: ''
},
{
title: 'Be My Love',
artist: '阿部真央',
album: '',
cover: 'img/bemylove.jpg',
mp3: 'mp3/bemylove.mp3',
ogg: ''
},
{
title: '第六感',
artist: 'Reol',
album: '',
cover: 'img/dairokukan.jpg',
mp3: 'mp3/dairokukan.mp3',
ogg: ''
},
{
title: '水平線',
artist: 'back number',
album: '',
cover: 'img/suihesen.jpg',
mp3: 'mp3/suihesen.mp3',
ogg: ''
},
{
title: 'インフェルノ（Inferno)',
artist: 'Mrs. GREEN APPLE',
album: '',
cover: 'img/inferno.jpg',
mp3: 'mp3/inferno.mp3',
ogg: ''
},
{
title: 'Unlasting',
artist: 'LiSA',
album: '',
cover: 'img/unlasting.jpg',
mp3: 'mp3/unlasting.mp3',
ogg: ''
},
{
title: 'PLANET',
artist: 'ﾗﾑｼﾞ',
album: '3ﾗﾑｼﾞ',
cover: 'img/planet.jpg',
mp3: 'mp3/planet.mp3',
ogg: ''
},
{
title: 'ブルーバード',
artist: 'いきものがかり',
album: '',
cover: 'img/burubado.jpg',
mp3: 'mp3/burubado.mp3',
ogg: ''
},
{
title: 'aLIEz',
artist: '澤野弘之',
album: '',
cover: 'img/aliez.jpg',
mp3: 'mp3/aliez.mp3',
ogg: ''
},
{
title: 'Again',
artist: 'YUI',
album: '',
cover: 'img/againyui.jpg',
mp3: 'mp3/againyui.mp3',
ogg: ''
},
{
title: 'ヒトヒラのハナビラ',
artist: 'Stereopony',
album: '',
cover: 'img/hitohiranohanabira.jpg',
mp3: 'mp3/hitohiranohanabira.mp3',
ogg: ''
},
{
title: '正しくなれない',
artist: 'ずっと真夜中でいいのに',
album: '映画『約束のネバーランド』主題歌',
cover: 'img/tadashinarenai.jpg',
mp3: 'mp3/tadashinarenai.mp3',
ogg: ''
},
{
title: 'ハルカ',
artist: 'YOASOBI',
album: '',
cover: 'img/haruka.jpg',
mp3: 'mp3/haruka.mp3',
ogg: ''
},
{
title: 'て',
artist: '上野大樹',
album: '',
cover: 'img/te.jpg',
mp3: 'mp3/te.mp3',
ogg: ''
},
{
title: 'おぼせ',
artist: '上野大樹',
album: '',
cover: 'img/obose.jpg',
mp3: 'mp3/obose.mp3',
ogg: ''
},
{
title: 'アメヲマツ、',
artist: '美波',
album: '',
cover: 'img/amewomatsu.jpg',
mp3: 'mp3/amewomatsu.mp3',
ogg: ''
},
{
title: 'ノンシュガー',
artist: 'マカロニえんぴつ',
album: '愛を知らずに魔法は使えない',
cover: 'img/nonsugar.jpg',
mp3: 'mp3/nonsugar.mp3',
ogg: ''
},
{
title: '快眠！安眠！スヤリスト生活',
artist: '水瀨祈',
album: '',
cover: 'img/kaiminanminsuyarisutosekatsu.jpg',
mp3: 'mp3/kaiminanminsuyarisutosekatsu.mp3',
ogg: ''
},
{
title: 'あの夢をなぞって',
artist: 'YOASOBI',
album: '',
cover: 'img/anoyumewonazote.jpg',
mp3: 'mp3/anoyumewonazote.mp3',
ogg: ''
},
{
title: 'Unravel',
artist: '凛として時雨 ',
album: '',
cover: 'img/unravel.jpg',
mp3: 'mp3/unravel.mp3',
ogg: ''
},
{
title: 'Poupelle Of ChimneyTown · Lozareena',
artist: 'ロザリーナ',
album: '',
cover: 'img/lozareena.jpg',
mp3: 'mp3/lozareena.mp3',
ogg: ''
},
{
title: 'Poupelle Of ChimneyTown · Lozareena ( covered by 花譜 )',
artist: 'ロザリーナ',
album: '',
cover: 'img/lozareena-c.jpg',
mp3: 'mp3/lozareena-c.mp3',
ogg: ''
},
{
title: '何になりたくて、',
artist: 'ロザリーナ',
album: '',
cover: 'img/nanininaritakute.jpg',
mp3: 'mp3/nanininaritakute.mp3',
ogg: ''
},
{
title: 'バケモノと呼ばれて ',
artist: '藤川千愛',
album: '無能なナナ',
cover: 'img/bakemonotoyobarete.jpg',
mp3: 'mp3/bakemonotoyobarete.mp3',
ogg: ''
},
{
title: '香水',
artist: '瑛人',
album: '',
cover: 'img/koshui.jpg',
mp3: 'mp3/koshui.mp3',
ogg: ''
},
{
title: 'イカサマダンス',
artist: 'まふまふ',
album: '',
cover: 'img/ikasamadansu.jpg',
mp3: 'mp3/ikasamadansu.mp3',
ogg: ''
},
{
title: 'Nobodys fault',
artist: '櫻坂46',
album: '',
cover: 'img/nobodyisfault.jpg',
mp3: 'mp3/nobodyisfault.mp3',
ogg: ''
},
{
title: 'アンコール',
artist: 'YOASOBI',
album: '',
cover: 'img/ankoru.jpg',
mp3: 'mp3/ankoru.mp3',
ogg: ''
},
{
title: '怪物',
artist: 'YOASOBI',
album: '',
cover: 'img/gaibutsu.jpg',
mp3: 'mp3/gaibutsu.mp3',
ogg: ''
},
{
title: '轍～Wadachi～',
artist: 'SPYAIR',
album: '',
cover: 'img/wadachi.jpg',
mp3: 'mp3/wadachi.mp3',
ogg: ''
},
{
title: '瞬間ドラマチック',
artist: 'Saji',
album: '',
cover: 'img/shunkandoramachikku.jpg',
mp3: 'mp3/shunkandoramachikku.mp3',
ogg: ''
},
{
title: 'ハッピーになれよ',
artist: '瑛人',
album: 'すっからかん',
cover: 'img/happininareyo.jpg',
mp3: 'mp3/happininareyo.mp3',
ogg: ''
},
{
title: '空と青',
artist: '家入レオ',
album: '',
cover: 'img/soratoao.jpg',
mp3: 'mp3/soratoao.mp3',
ogg: ''
},
{
title: 'うっせぇわ',
artist: 'Ado',
album: '',
cover: 'img/usseewa.jpg',
mp3: 'mp3/usseewa.mp3',
ogg: ''
},
{
title: 'Echo (cover by DELUTAYA Δ.)',
artist: 'Crusher-P',
album: '',
cover: 'img/echodelutaya.jpg',
mp3: 'mp3/echodelutaya.mp3',
ogg: ''
},
{
title: 'Grandeur',
artist: 'Snow Man',
album: '',
cover: 'img/grandeur.jpg',
mp3: 'mp3/grandeur.mp3',
ogg: ''
},
{
title: '優しい彗星',
artist: 'YOASOBI',
album: '',
cover: 'img/yasashisuisei.jpg',
mp3: 'mp3/yasashisuisei.mp3',
ogg: ''
},
{
title: 'DEAR MY FRIEND',
artist: 'LITTLE GLEE MONSTER FEAT.PENTATONIX ',
album: '',
cover: 'img/dearmyfriend.jpg',
mp3: 'mp3/dearmyfriend.mp3',
ogg: ''
},
{
title: '春泥棒',
artist: 'ヨルシカ',
album: '',
cover: 'img/harudorobo.jpg',
mp3: 'mp3/harudorobo.mp3',
ogg: ''
},
{
title: '麻痺',
artist: 'yama',
album: '',
cover: 'img/mahi.jpg',
mp3: 'mp3/mahi.mp3',
ogg: ''
},
{
title: 'アイデンティティ',
artist: '秋山黄色',
album: '',
cover: 'img/aidenteitei.jpg',
mp3: 'mp3/aidenteitei.mp3',
ogg: ''
},
{
title: '季路',
artist: 'Aimer',
album: '',
cover: 'img/kiro.jpg',
mp3: 'mp3/kiro.mp3',
ogg: ''
},
{
title: 'ドライフラワー',
artist: '優里',
album: '',
cover: 'img/doraifurawa.jpg',
mp3: 'mp3/doraifurawa.mp3',
ogg: ''
},
{
title: '廻廻奇譚',
artist: 'Eve',
album: '',
cover: 'img/kaikaikitan.jpg',
mp3: 'mp3/kaikaikitan.mp3',
ogg: ''
},
{
title: '結証',
artist: '緑黄色社会',
album: '',
cover: 'img/kesshou.jpg',
mp3: 'mp3/kesshou.mp3',
ogg: ''
},
{
title: '衝撃',
artist: '安藤裕子',
album: '',
cover: 'img/shiyogeki.jpg',
mp3: 'mp3/shiyogeki.mp3',
ogg: ''
},
{
title: 'Moon',
artist: '家入レオ',
album: '',
cover: 'img/mooniede.jpg',
mp3: 'mp3/mooniede.mp3',
ogg: ''
},
{
title: '平行線',
artist: 'EVE × SUIS FROM ヨルシカ',
album: '',
cover: 'img/hekouseneve.jpg',
mp3: 'mp3/hekouseneve.mp3',
ogg: ''
},
{
title: '星を仰ぐ',
artist: '菅田将暉',
album: '',
cover: 'img/hoshiwoaogu.jpg',
mp3: 'mp3/hoshiwoaogu.mp3',
ogg: ''
},
{
title: '魔法',
artist: 'Myuk',
album: '',
cover: 'img/mahomyuk.jpg',
mp3: '',
ogg: 'mp3/mahomyuk.ogg'
},
{
title: '醜い生き物',
artist: 'CHiCO with HoneyWorks',
album: '',
cover: 'img/busaiikimonochico.jpg',
mp3: '',
ogg: 'mp3/busaiikimonochico.ogg'
},
{
title: 'チチンプイプイ',
artist: '真島ゆろ feat. flower・初音ミク（ RiMy × TOKU MIX cover. ）',
album: '',
cover: 'img/chichinpuipui.jpg',
mp3: '',
ogg: 'mp3/chichinpuipui.ogg'
},
{
title: 'ドライフラワー',
artist: 'Uru',
album: '',
cover: 'img/doraifurawauru.jpg',
mp3: '',
ogg: 'mp3/doraifurawauru.ogg'
},
{
title: 'Give It Up？',
artist: '96猫',
album: '',
cover: 'img/giveitup96neko.jpg',
mp3: '',
ogg: 'mp3/giveitup96neko.ogg'
},
{
title: '5センチ先の夢',
artist: 'H△G',
album: '',
cover: 'img/gosenchinoyume.jpg',
mp3: '',
ogg: 'mp3/gosenchinoyume.ogg'
},
{
title: 'STARTLINE',
artist: '大原櫻子',
album: '',
cover: 'img/sutarlineohara.jpg',
mp3: '',
ogg: 'mp3/sutarlineohara.ogg'
},
{
title: '素直になりたい子の話',
artist: 'りりあ',
album: '',
cover: 'img/sunaoninaritaikonohanashi.jpg',
mp3: '',
ogg: 'mp3/sunaoninaritaikonohanashi.ogg'
},
{
title: '激辛LOVE',
artist: 'ビヨーンズ',
album: '',
cover: 'img/gekikararabu.jpg',
mp3: '',
ogg: 'mp3/gekikararabu.ogg'
},
{
title: 'ギラギラ',
artist: 'Ado',
album: '',
cover: 'img/giragiraado.jpg',
mp3: '',
ogg: 'mp3/giragiraado.ogg'
},
{
title: 'キミとボクの歌',
artist: '安斉かれん',
album: '',
cover: 'img/kimitobokunoutaanzai.jpg',
mp3: '',
ogg: 'mp3/kimitobokunoutaanzai.ogg'
},
{
title: 'Unreachable love song',
artist: 'Tani Yuuki',
album: '',
cover: 'img/unreachablelovesongtani.jpg',
mp3: '',
ogg: 'mp3/unreachablelovesongtani.ogg'
},
{
title: '振り子',
artist: 'ぷらそにか Cover',
album: '',
cover: 'img/furikopurasonika.jpg',
mp3: '',
ogg: 'mp3/furikopurasonika.ogg'
},
{
title: '僕の戦争',
artist: 'かまって',
album: '',
cover: 'img/bokunosensoukamate.jpg',
mp3: '',
ogg: 'mp3/bokunosensoukamate.ogg'
},
{
title: 'チャイムの音で',
artist: 'Ayaho',
album: '',
cover: 'img/chaimunootodeayaho.jpg',
mp3: '',
ogg: 'mp3/chaimunootodeayaho.ogg'
},
{
title: '桜恋',
artist: 'もさを',
album: '',
cover: 'img/sakurakoimosao.jpg',
mp3: '',
ogg: 'mp3/sakurakoimosao.ogg'
},
{
title: '寝れない夜に feat.yama',
artist: 'くじ',
album: '',
cover: 'img/nerenaiyorunikuji.jpg',
mp3: '',
ogg: 'mp3/nerenaiyorunikuji.ogg'
},
{
title: 'ねむるまち feat.yama',
artist: 'くじ',
album: '',
cover: 'img/nemurumachikuji.jpg',
mp3: '',
ogg: 'mp3/nemurumachikuji.ogg'
},
{
title: '限りなく灰色へ',
artist: 'すりぃ feat.鏡音レン',
album: '',
cover: 'img/kagirinakuhaiiroesorii.jpg',
mp3: '',
ogg: 'mp3/kagirinakuhaiiroesorii.ogg'
},
{
title: '桜が降る夜は',
artist: 'あいみょん',
album: '',
cover: 'img/sakuragafuruyoruwaaimiyon.jpg',
mp3: '',
ogg: 'mp3/sakuragafuruyoruwaaimiyon.ogg'
},
{
title: 'Spotlight',
artist: 'Rude-α ',
album: 'Paradise',
cover: 'img/spotlightrudea.jpg',
mp3: '',
ogg: 'mp3/spotlightrudea.ogg'
},
{
title: 'Paradise',
artist: 'Rude-α ',
album: 'Paradise',
cover: 'img/spotlightrudea.jpg',
mp3: '',
ogg: 'mp3/paradiserudea.ogg'
},
{
title: '旅路',
artist: '藤井風',
album: '',
cover: 'img/tabijifujikaze.jpg',
mp3: '',
ogg: 'mp3/tabijifujikaze.ogg'
},
{
title: '私を殺さないで',
artist: 'CHiCO with HoneyWorks',
album: '',
cover: 'img/watashiokorosanaidechico.jpg',
mp3: '',
ogg: 'mp3/watashiokorosanaidechico.ogg'
},
{
title: 'ケダモノのフレンズ',
artist: 'にしな Nishina',
album: '',
cover: 'img/kedamonofurensunishina.jpg',
mp3: '',
ogg: 'mp3/kedamonofurensunishina.ogg'
},
{
title: 'Stand by me, Stand by you. / 平井大 (cover)',
artist: 'ぷらそにか',
album: '',
cover: 'img/standbymepurasonika.jpg',
mp3: '',
ogg: 'mp3/standbymepurasonika.ogg'
},
{
title: 'Centi',
artist: 'にしな',
album: '',
cover: 'img/centinishina.jpg',
mp3: '',
ogg: 'mp3/centinishina.ogg'
},
{
title: 'Not the End',
artist: '安田レイ',
album: '',
cover: 'img/yasudareinottheend.jpg',
mp3: '',
ogg: 'mp3/yasudareinottheend.ogg'
},
{
title: 'アルカシア',
artist: 'saji',
album: '',
cover: 'img/arukashiasaji.jpg',
mp3: '',
ogg: 'mp3/arukashiasaji.ogg'
},
{
title: 'ただいま',
artist: '手嶌葵',
album: '',
cover: 'img/aoiteshimatadaima.jpg',
mp3: '',
ogg: 'mp3/aoiteshimatadaima.ogg'
},
{
title: '旅人の唄',
artist: '大原ゆい子',
album: '',
cover: 'img/tabibitonoutaoharayuiko.jpg',
mp3: '',
ogg: 'mp3/tabibitonoutaoharayuiko.ogg'
},
{
title: 'Answer',
artist: '幾田りら',
album: '',
cover: 'img/answerikutarika.jpg',
mp3: '',
ogg: 'mp3/answerikutarika.ogg'
},
{
title: 'One Last Kiss',
artist: '宇多田ヒカル',
album: '',
cover: 'img/onelastkissutadahikaru.jpg',
mp3: '',
ogg: 'mp3/onelastkissutadahikaru.ogg'
},
{
title: 'たとえたとえ',
artist: '緑黄色社会',
album: '',
cover: 'img/tatoetatoe.jpg',
mp3: '',
ogg: 'mp3/tatoetatoe.ogg'
},
{
title: '誇り高きアイドル',
artist: 'HoneyWorks feat.Kotoha',
album: '',
cover: 'img/hokoritakakiaidoruhnwork.jpg',
mp3: '',
ogg: 'mp3/hokoritakakiaidoruhnwork.ogg'
},
{
title: 'Blaze',
artist: 'lol',
album: '',
cover: 'img/blazelol.jpg',
mp3: '',
ogg: 'mp3/blazelol.ogg'
},
{
title: 'フールフールフール',
artist: 'おくのほそみち feat. Ado',
album: '',
cover: 'img/foolfoolhosomichiado.jpg',
mp3: '',
ogg: 'mp3/foolfoolhosomichiado.ogg'
},
{
title: '三原色',
artist: 'YOASOBI',
album: '',
cover: 'img/sangenshokuyoasoobi.jpg',
mp3: '',
ogg: 'mp3/sangenshokuyoasoobi.ogg'
},
{
title: 'TAKE A PICTURE',
artist: 'NiziU',
album: '',
cover: 'img/takeapicniziu.jpg',
mp3: '',
ogg: 'mp3/takeapicniziu.ogg'
},
];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);
