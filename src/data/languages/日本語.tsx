import { FaGithub } from "react-icons/fa";
import { Languages } from "../i18n";

export default {
	language: Languages.日本語,
	title: 'Strinova マップアシスタント',
	announcement: "Announcement",
	friendlink: "Friend Link",
	sitelist: "Switch Server",
	announcementdata: {
		notshowntoday: "今日不再显示",
		pin: {
			title: "正式版发布",
			date: "2024.11.12",
			summary: "网站正式版已上线，欢迎使用！有任何问题可以通过网页最下方联系我们。",
			data: {}
		},
		history: []
	},
	friendlinkdata: {
		classify: {
			official: "official",
			wiki: "Wiki",
			others: "Others"
		},
		official:
			[{
				name: "",
				icon: <img style={{ height: "35px", filter: "brightness(1000%) drop-shadow(0 0 2px rgba(var(--semi-grey-7))" }} src='https://game.gtimg.cn/images/kq/m/web20230505/sec_ordlogo.png' />,
				url: "https://klbq.qq.com/",
			}, {
				name: "",
				icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src='https://klbq-web-cms.strinova.com/prod/strinova_static/home_v12/img/icon/logo-white.png' />,
				url: "https://www.strinova.com/",
			}],
		wiki:
			[{
				name: "",
				icon: <img style={{ height: "32px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src='https://s2.loli.net/2024/10/01/NQTMvDZ5ah4omYR.png' />,
				url: "https://wiki.biligame.com/klbq/",
			}, {
				name: "Strinovajp Wiki",
				icon: <></>,
				url: "https://www.strinovajp-wiki.jp/index.html",
			}, {
				name: "",
				icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))" }} src='https://s2.loli.net/2024/10/01/R4UxmBPGd2f8kQ7.webp' />,
				url: "https://strinova.wiki.gg/wiki/Strinova_Wiki",
			}, {
				name: "Miraheze Meta",
				icon: <></>,
				url: "https://strinova.org/wiki/",
			}, {
				name: "日本語wiki",
				icon: <img style={{ height: "28px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src='https://w.atwiki.jp/common/_img/atwiki_logo_small.svg?t=741a51e81c8c8d5fe9627b874ecad193' />,
				url: "https://w.atwiki.jp/calabiyau_jp/",
			},],
		others:
			[{
				name: "自建房助手",
				icon: <img style={{ height: "35px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src='https://s2.loli.net/2024/10/01/pmYnw16rL2PQWBy.png' />,
				url: "https://klbq.fsltech.cn/",
			}],
		contact: {
			content: <div style={{ width: "100%", textAlign: "center" }}>
				添加友链请联系 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a>
			</div>
		}
	},
	sitelistdata: {
		content: <>
			<div>为了提供更快的访问速度以及减轻服务器压力，</div>
			<div>我们开设了不同节点</div>
		</>,
		Global: [
			{
				icon: <><FaGithub style={{ color: "rgba(var(--semi-grey-9), 1)", fontSize: "20px", marginRight: "10px" }} /></>,
				content: "Github Page",
				url: "https://strinova.fsltech.cn/"
			}
		],
		CN: [
			{
				icon: <></>,
				content: "腾讯云CDN -  上海 - 1",
				url: "https://sh-1.strinova.fsltech.cn/"
			},
			{
				icon: <></>,
				content: "腾讯云CDN - 香港 - 1",
				url: "https://hk-1.strinova.fsltech.cn/"
			}
		],
	},
	supportusdata: {
		content: <>
			<div><strong>卡拉彼丘地图助手</strong>是一款开源应用，</div>
			<div>因此你可以免费在 GPL-3.0 开源协议的范畴下使用本应用。</div>
			<div>美术资料与部分UI版权归原作者与官方所有，</div>
			<div>请咨询对应作者与官方授权！</div>
			<br />
			<div>但即便如此，你的赞助也可以给予开发者前进的动力，让这个项目变得更好。</div>
			<div>无论你使用何种形式赞助，你都可以在<strong>卡拉彼丘地图助手</strong>的 GitHub 项目主页和网站展示您的信息（个人主页、公司主页、GitHub 资料页等）。</div>
			<div>如需展示，请在留言中留下需要展示的内容或将内容连同赞助收据发送至 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a></div>
		</>,
		global: "国际",
		CN: "中国境内",
		list: "赞助列表"
	},
	sidebar: {
		attact: 'Attack',
		defense: 'Defense',
		mapsetting: 'マップの設定',
		character: 'キャラクター（超弦体）',
		skill: 'スキル',
		grenade: '戦術アイテム',
		lineup: '戦術アイテムのポイント',
		skilllineup: 'スキルポイント',
		mobaisuperjump: '白墨スーパージャンプ',
		bugpoint: 'プログラムエラー',
		bugpointwarning: (
			<div style={{ fontSize: '12px', textAlign: 'left' }}>
				<div>ここにリストされているエラーは参照用です！</div>
				<div>私たちはこれらの脆弱性を悪用する禁止令には責任を負いません。</div>
			</div>
		),
		learnmore: '詳細',
		supportus: 'SUPPORT US',
		supportusContent: <></>
	},
	mapsetting: {
		choosemap: 'マップ',
		maps: {
			WindyTown: 'ウィンディタウン',
			SpaceLab: 'スペース研究センター',
			Khesmet: '科斯迷特',
			CauchyDistrict: 'コーシー街区',
			EulerPort: 'オイラー港',
			Area88: '88街区',
			Base404: '404基地'
		},
		TeamHighlight: 'チームハイライト',
		TeamHighlightOptions: {
			prepare: '表示',
			blank: '非表示'
		},
		Landmarks: 'ランドマーク'
	},
	lineupsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	skilllineupsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	mobaisuperjumpsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	bugpointsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	factions: {
		PUS: 'PUS',
		TheScissors: 'シザーズ',
		Urbino: 'ウルビノ'
	},
	characters: {
		PUS: {
			Michele: 'ミシェル',
			Nobunaga: '信長',
			Kokona: '心夏',
			Yvette: 'イヴェット',
			Flavia: 'フラヴィア',
			Yugiri: "Yugiri"
		},
		TheScissors: {
			Ming: 'ミン',
			Lawine: 'ラヴィーネ',
			Meredith: 'メレディス',
			Reiichi: '令一',
			Kanami: '香奈美',
			Eika: 'アイカ',
			Fragrans: 'フラグランス'
		},
		Urbino: {
			Celestia: '星理恵',
			Audrey: 'オードリー',
			Maddelena: 'マダレーナ',
			Fuchsia: 'フューシャ',
			BaiMo: '白墨',
			Galatea: 'ガラテア'
		}
	},
	characterInfo: {
		Michele: {
			Name: "ミシェル",
			Type: "センチネル",
			skillActiveName: `ミャウミャウ！タレット`,
			skillActiveDescription: `ミシェルは小さなタレットを投げ、プレイヤー以外の表面に設置します。タレットは自動的に敵を攻撃し（3ダメージ/秒）、減速させます。`,
			skillPassiveName: `キャットセンス`,
			skillPassiveDescription: `ミシェルにダメージを与えた敵は、ミシェルとそのチームメイトにハイライト表示されます。`,
			skillUltimateName: `ウルトラ！ミャウミャウ！`,
			skillUltimateDescription: `ミシェルは強力な火力を持つ大きなミャウミャウドローンを展開します。より大きなダメージと範囲で敵を自動的に攻撃します。`
		},
		Nobunaga: {
			Name: "信長",
			Type: "センチネル",
			skillActiveName: `オブザーバー`,
			skillActiveDescription: `信長は地面に装置を設置し、その範囲内にいる時に射撃速度、リロード速度が上昇し、アーマーが回復します。最大2チャージ。2つのオブザーバーが互いの範囲内に設置されると、バフ効果が増加します。破壊可能です。`,
			skillPassiveName: `ブラインディングパルス`,
			skillPassiveDescription: `ADSの際、信長のライフルにエネルギーが蓄積されます。フルチャージ時に敵がこの充電ショットに命中すると、敵のADSクロスヘアがグリッチします。信長の基本アーマー+10`,
			skillUltimateName: `E.M.P`,
			skillUltimateDescription: `地面にパルス装置を設置し、広範囲のパルス波を放出します。範囲内の敵は継続的にハイライト表示され、沈黙状態になります。あらゆる武器で破壊可能です。`
		},
		Kokona: {
			Name: "ココナ",
			Type: "サポーター",
			skillActiveName: `ヒーリングドローン`,
			skillActiveDescription: `ここなは選択した味方または自身を回復しアーマーを回復するドローンを送ります。ドローンの近くにいる味方も回復します。`,
			skillPassiveName: `エマージェンシーレスキュー`,
			skillPassiveDescription: `ここなはダウンした味方を自動で蘇生するドローンを召喚できます。複数の味方を同時に蘇生可能です。蘇生された味方のHPは50です。またここなは毎秒2HPを回復します。`,
			skillUltimateName: `リビルド`,
			skillUltimateDescription: `ここなはK.I.A端末を開き、ドローンを使用して味方を復活させることができます。復活した味方はHPとアーマーが全回復します。ここなが復活前に倒されるか、復活中のドローンが破壊されるとキャンセルされます。`
		},
		Yvette: {
			Name: "イヴェット",
			Type: "コントローラー",
			skillActiveName: `フェイ`,
			skillActiveDescription: `イヴェットは彼女のテディベアのフェイを召喚し、本物の熊に変身させます。スキルを再度押すとフェイを操作でき、フェイは前方にダッシュして敵を打ち上げ、氷の地面を残します（2チャージ）。敵はスライドしより多くのダメージを受けます。右クリック長押しでフェイを呼び戻します。フェイを操作中のイヴェットは無防備です。`,
			skillPassiveName: `ヒドゥンスノー`,
			skillPassiveDescription: `イヴェットは数秒間じっとしているとステルス状態になります。ステルス範囲に近づくと検知されます。`,
			skillUltimateName: `コールドブリーズ`,
			skillUltimateDescription: `イヴェットは激怒したフェイを召喚し、地面を3回叩きつけ、叩くたびに大きくなる氷の地面を作ります。範囲内の敵はスライドし、より多くのダメージを受け、リロード速度、ADS速度、射撃速度が低下します。`
		},
		Flavia: {
			Name: "フラヴィア",
			Type: "デュエリスト",
			skillActiveName: `幻影のファントム`,
			skillActiveDescription: `フラヴィアはファントムバタフライを召喚し5秒間追従させます。この間1HPのダメージを受けると2秒間無敵になり、その場にファントムオーブを生成します。ファントムオーブは周囲の敵の視界を制限し、破壊可能です。スキルを再度使用すると無敵状態を即座にキャンセルできます。`,
			skillPassiveName: `リバースサークル`,
			skillPassiveDescription: `フラヴィアが15ダメージを受けるごとに、幻影のファントムのクールダウンが1秒減少します。160ダメージを受けるごとに、現在のラウンドで有効な一時的なアルティメットポイントを1獲得します。フラヴィアの基本アーマー+5`,
			skillUltimateName: `ドリームバタフライトランスフォーメーション`,
			skillUltimateDescription: `フラヴィアは自身を中心に幻影フィールドを作成します。フィールド内でノックダウンすると、フラヴィアは蝶に変身し3秒後に復活します（アルティメット終了まで繰り返し）。フィールド外の敵はフラヴィアを見ることができませんが、攻撃することは可能で、フラヴィアに攻撃された場合は見えるようになります。フィールド外の敵に倒された場合、自動復活は発動せず即座に死亡します。`
		},
		Yugiri: {
			Name: "夕霧",
			Type: "コントローラー",
			skillActiveName: `蚀甲毒雾`,
			skillActiveDescription: `布置一个蜗牛装置，激活后可产生球形毒雾，临时腐蚀附近敌方角色的护甲。`,
			skillPassiveName: `毒雾爆发`,
			skillPassiveDescription: `使用主武器对敌方角色造成一定量的生命值伤害后，会引爆敌人体内的腐蚀性毒素，临时腐蚀附近敌方角色的护甲。`,
			skillUltimateName: `凌毒侵蚀`,
			skillUltimateDescription: `召唤大范围的毒雾向前方缓慢推进，腐蚀范围内敌方角色的护甲上限。`
		},
		Ming: {
			Name: "明",
			Type: "デュエリスト",
			skillActiveName: `プラズマボール`,
			skillActiveDescription: `最大距離に達するか敵のスーパーストリングに命中すると自動的に爆発する電気の球を発射します。スキルキーを再度押すことで手動で爆発させることもできます。範囲内のすべての敵ユニット（召喚物を含む）のアーマーを破壊し、減速させます。ミンは電場に入ると移動速度が上昇します。`,
			skillPassiveName: `アーマー吸収`,
			skillPassiveDescription: `ミンが銃火器とアクティブスキルで敵のアーマーやシールドにダメージを与えた時、ダメージ量に応じてアーマーが回復します。アルティメット中は、一時的なアーマーを回復し、回復量が増加します。`,
			skillUltimateName: `プラズマアーマー`,
			skillUltimateDescription: `ミンは一時的なアーマーを獲得し、ショットに重ね掛け可能な減速効果を付与します。ミンが銃やアクティブスキルで敵のアーマーにダメージを与えると、スキルの継続時間が延長され、一時的なアーマーが回復します。`
		},
		Lawine: {
			Name: "ラヴィーネ",
			Type: "イニシエーター",
			skillActiveName: `パルスナイフ`,
			skillActiveDescription: `パルスナイフを投げて大きな磁場を作り、範囲内の敵をラヴィンとそのチームメイトにゆっくりとハイライト表示します。スキャンに失敗するとパルスナイフは直ちに消滅します。パルスナイフは最大3回スキャンでき、あらゆる武器とグレネードで破壊可能です。`,
			skillPassiveName: `露出トレース`,
			skillPassiveDescription: `ラヴィンのプライマリーウェポンに命中した敵がハイライト表示されます。ラヴィンのみが見ることができます。`,
			skillUltimateName: `エスケープザシャドウ`,
			skillUltimateDescription: `ラヴィンは前方に長方形の磁場を作成します。磁場に入るとラヴィンは透明になります。透明化中は武器を使用できません。`
		},
		Meredith: {
			Name: "メレディス",
			Type: "コントローラー",
			skillActiveName: `サンドヒートウェーブ`,
			skillActiveDescription: `メレディスは敵や障害物に当たると砂場を作るエネルギーオーブを発射します。範囲内の敵は減速し、リロード速度が低下し、HPが時間とともに減少します。`,
			skillPassiveName: `タイムワープ`,
			skillPassiveDescription: `エイム中、スキルやグレネードを使用中のメレディスの落下速度が低下します。`,
			skillUltimateName: `クイックサンドバリアル`,
			skillUltimateDescription: `メレディスはピラミッドのアーティファクトを投げ、巨大な砂嵐を作り出します。範囲内の敵は視界が制限され、HPが時間とともに減少し、中心に引き寄せられながら減速します。味方も視界が制限されます。`
		},
		Reiichi: {
			Name: "令一",
			Type: "コントローラー",
			skillActiveName: `暁のカーテン`,
			skillActiveDescription: `霊一は傘を使って、縦または横に展開できる紙のエネルギー光のカーテンを作り出し、視界を遮ります。`,
			skillPassiveName: `暁の洞察`,
			skillPassiveDescription: `ADS時、霊一のスナイパーにエネルギーが蓄積されます。フルチャージ時、前方の小範囲をスキャンし、すべての敵を自身とチームメイトにハイライト表示します。`,
			skillUltimateName: `聖なる守護のスクリーン`,
			skillUltimateDescription: `直ちに暁のカーテンをリフレッシュし、敵の弾を遮断できるように強化します。この遮断効果は事前に使用した暁のカーテンにも適用されます。`
		},
		Kanami: {
			Name: "香奈美",
			Type: "イニシエーター",
			skillActiveName: `シンフォニー`,
			skillActiveDescription: `カナミは自身のスナイパーにメロディーを注入し、任意の表面に射撃すると共鳴し、範囲内のすべての敵をカナミとチームメイトにハイライト表示します。`,
			skillPassiveName: `ソニックブーム`,
			skillPassiveDescription: `弾が標的に命中すると、敵とユーティリティを壁越しに一時的にハイライト表示します。`,
			skillUltimateName: `ショータイム`,
			skillUltimateDescription: `カナミは自身のホログラムを召喚し、音楽が流れ始め、敵のADSスコープをグリッチさせながら、減速させ中心に引き寄せます。`
		},
		Eika: {
			Name: "アイカ",
			Type: "デュエリスト",
			skillActiveName: `ヘルファイアケージ`,
			skillActiveDescription: `アイカの前方に火のケージを作成し、境界を通過する敵を燃焼させます。ケージ内に敵がいなくなると早期に消滅します。アイカがケージに入ると、ケージ内の敵に対してショットガンが追加の燃焼ダメージを与えます。ヒートゲージが100の状態でスキルを使用すると、炎が青色に変化し、敵がより多くのダメージを受けます。`,
			skillPassiveName: `リザーブフレア`,
			skillPassiveDescription: `アイカが敵にダメージを与えると、ヒートゲージに少量のヒートを蓄積し、最大100まで貯めることができます。最大ヒート時、ペーパーモードの敵に対するボーナスダメージが増加し、アビリティが強化されます。`,
			skillUltimateName: `ファイアストーム`,
			skillUltimateDescription: `最大3つのファイアボールを投げ出し、竜巻に爆発し、敵を持ち上げ（風爆効果のように）引き寄せながら、継続的な火炎ダメージを与えます。ヒートゲージが100の状態でスキルを使用すると、竜巻のサイズとダメージが増加し、範囲内の敵をハイライト表示（壁越しは不可）します。`
		},
		Fragrans: {
			Name: "フレグランス",
			Type: "サポーター",
			skillActiveName: `バイブラントアンドフレグラント`,
			skillActiveDescription: `フレグランスは2種類の限定量の香りを放出できます。放出後、自身を中心に香りの領域を作り出し、その領域内で味方の射撃速度または移動速度を上昇させます。香りの効果は時間とともに徐々に減少し、最終的に消滅します。`,
			skillPassiveName: `リバイブザアロマ`,
			skillPassiveDescription: `フレグランスは回復の微かな香りを放出し、近くの味方と自身のHPがゆっくりと回復します。`,
			skillUltimateName: `インテンスフレグランス`,
			skillUltimateDescription: `フレグランスは自身を中心に強烈な香りの領域を作り出し、範囲内の味方は高い射撃速度、移動速度上昇、HP回復を得ます。効果は減衰せず、フレグランスは放出中に武器を使用できませんが、大幅なダメージ軽減を受けます。`
		},
		Celestia: {
			Name: "星理恵",
			Type: "サポーター",
			skillActiveName: `ガーディアンオブザスター`,
			skillActiveDescription: `セレスティアは味方キャラクターにガーディアンスターを付与し、一時的なアーマーを回復させます。スターは彼女に戻り、元の効果の半分を彼女に付与します。`,
			skillPassiveName: `コスモス`,
			skillPassiveDescription: `味方がフーシンの近くにいる時、味方と自身のアーマーが時間とともに回復します（+2/秒）。`,
			skillUltimateName: `スターゲート`,
			skillUltimateDescription: `フーシンはスターゲートを開き、マップ上の味方を選択し、即座に自身と選択した味方に大量の追加アーマーを付与し、その後エネルギーを蓄積し始めます。フルチャージ時、フーシンは選択した味方の位置にテレポートします。一定量のダメージを受けるかスキルを再度使用するとキャンセル可能です。キャンセル時、フーシンはスキルを使用した場所に戻りますが、追加アーマーバフは失われません。`
		},
		Audrey: {
			Name: "オードリー",
			Type: "センチネル",
			skillActiveName: `ヘビーファイア`,
			skillActiveDescription: `オードリーは固定状態となり移動不可能になります。彼女のマシンガンの射撃速度と最大シールド限界が大幅に上昇します。マシンガンはリロードが不要になりますが、時間とともにオーバーヒートします。オードリーのマシンガンの反動がなくなります。`,
			skillPassiveName: `ロイヤルシールド`,
			skillPassiveDescription: `オードリーはADS時に30の追加アーマーを獲得します。このアーマーはシールドが破壊された直後に回復します。オードリーの基本アーマー+5`,
			skillUltimateName: `ボンバードメント`,
			skillUltimateDescription: `オードリーは固定状態となり、6発の焼夷弾を発射するグレネードランチャーを召喚します。各弾は壁で跳ね返り、地面に当たると爆発し、継続的なダメージを与える3つの小さな火炎地帯を作り出します。`
		},
		Maddelena: {
			Name: "マダレーナ",
			Type: "コントローラー",
			skillActiveName: `カラーバインディング`,
			skillActiveDescription: `マッデレーナは塗料の水たまりを発射し、この水たまりを通過する敵は減速しペーパーモードを使用できなくなります。`,
			skillPassiveName: `カラーフットプリント`,
			skillPassiveDescription: `マッデレーナのプライマリーウェポンまたはスキルに命中した敵は減速し、足跡を残します。`,
			skillUltimateName: `カラーバブル`,
			skillUltimateDescription: `マッデレーナは時間とともに大きくなる巨大なバブルを発射し、バブル内の敵はペーパーモードを使用できず、足跡を残します。バブルが爆発すると、爆発範囲内の敵に減速と脆弱化効果を与えます。`
		},
		Fuchsia: {
			Name: "フューシャ",
			Type: "デュエリスト",
			skillActiveName: `プレデターズセンス`,
			skillActiveDescription: `フクシアは周囲の敵を感知し、フルHPの敵を一時的に、負傷した敵を継続的にハイライト表示します。敵を感知すると短時間フクシアの移動速度が上昇します。`,
			skillPassiveName: `ファイトトゥフィード`,
			skillPassiveDescription: `フクシアがキルまたはアシストを獲得すると、死亡した敵がエネルギークリスタルをドロップします。近づいて吸収すると素早く50HPを回復します。`,
			skillUltimateName: `ブラッドバス`,
			skillUltimateDescription: `フクシアは大幅な射撃速度、リロード速度、ADS速度、移動速度を獲得します。プレデターズセンスが強化され、視界内のすべての敵をハイライト表示します。エネルギークリスタルを吸収すると継続時間が延長されます。`
		},
		BaiMo: {
			Name: "白墨",
			Type: "デュエリスト",
			skillActiveName: `スカイダンス`,
			skillActiveDescription: `バイモは素早く前方にダッシュし、即座にショットガンに2発をリロードします。キルを獲得するとスキルがリフレッシュされます。`,
			skillPassiveName: `ヒップホップブームカラー`,
			skillPassiveDescription: `バイモが敵に50以上のダメージを与えると、数秒間ペーパーモードが無効になります。`,
			skillUltimateName: `レッツロック！`,
			skillUltimateDescription: `バイモは選択した場所にリスポーンビーコンを設置し、音楽が流れ始めます。倒されるかスキルを再度使用すると、バイモはビーコンに戻りHPが全回復します。`
		},
		Galatea: {
			Name: "ガラテア",
			Type: "イニシエーター",
			skillActiveName: `フライングカーズフラッシュ`,
			skillActiveDescription: `ガラテアは弧を描いて飛ぶカードを放出し、カードが地面や壁に触れるとクローンが生成されます。ガラテアは相互作用ボタンを押してクローンの位置にテレポートでき、クローンは破壊可能です。各クローンは10メートル範囲内の可視の敵を検知し、ガラテアとすべてのチームメイトに露見させ、さらにクローンを攻撃する敵も短時間露見させます。`,
			skillPassiveName: `フロードゥレントシャドウ`,
			skillPassiveDescription: `ガラテアが壁から離れる時、壁のステッカーにクローンを残し、壁から降りるたびに再度出現します。クローンがダメージを受けると、パッシブにクールダウンに入ります。`,
			skillUltimateName: `シャドウカードトリック`,
			skillUltimateDescription: `ガラテアは前方に複数のカードを投げ、それぞれがクローンを生成し、ガラテアをテレポートさせます。`
		}
	},
	characterTypes: {
		Sentinel: 'センチネル',
		Support: 'サポーター',
		Controller: 'コントローラー',
		Duellist: 'デュエリスト',
		Vanguard: 'イニシエーター'
	},
	grenades: {
		Flashbang: '閃光弹',
		FragGrenade: 'フラググレネード',
		HealingGrenade: '回復グレネード',
		Interceptor: 'インターセプター',
		SlowGrenade: '减速ボム',
		SmokeBomb: '煙幕弾',
		Alarm: '警報器',
		WindstormGrenade: '風雷ボム',
		SnowBall: '雪玉'
	},
	markbox: {
		mark: 'マーク',
		straightline: '直線',
		arrowline: 'Arrow Line',
		color: 'カラー',
		undo: '戻す',
		clear: '消去',
		clearwarning: {
			title: '全てのマークを消去しますか?',
			content: 'この操作は元に戻せません',
			ok: '確認',
			cancel: 'キャンセル',
			success: '全てのマークを消去しました',
			failure: 'マークの削除に失敗しました'
		}
	}
}