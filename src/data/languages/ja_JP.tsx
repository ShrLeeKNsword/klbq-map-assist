import { FaGithub } from "react-icons/fa";
import { Languages } from "../../types/interface";

export default {
	language: Languages.ja_JP,
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
			skillActiveName: `ネコさん砲`,
			skillActiveDescription: `ミシェルは建物に付着するネコ型タレットを設置する。タレットは一定範囲内の敵を自動で攻撃し、スロー効果を付与する。タレットはミシェルから一定距離離れると休止状態になる`,
			skillPassiveName: `索敵ジャミング`,
			skillPassiveDescription: `ミシェルが敵からダメージを受けると、その敵は可視化状態になる`,
			skillUltimateName: `ネコ型ガンドローン`,
			skillUltimateDescription: `ミシェルは強力な火力を持つガンドローンを配置する。ガンドローンは一定範囲内の敵を自動で攻撃する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Nobunaga: {
			Name: "信長",
			Type: "センチネル",
			skillActiveName: `ウォッチング・アイ`,
			skillActiveDescription: `信長は最大2つのウォッチングアイを配置できる。ウォッチング・アイが作動するドメイン内では、信長の発射速度、エルゴノミクス、アーマー回復が向上する。また、ウォッチング・アイのドメインが重なると、これらの増益効果が強化される`,
			skillPassiveName: `ブラインドパルス`,
			skillPassiveDescription: `信長はADSモードで弾をチャージできる。完全にチャージされた弾が敵に命中すると、敵の照準線が消える`,
			skillUltimateName: `オーバーロード`,
			skillUltimateDescription: `信長はパルス発生装置を設置する。この装置から発射されるパルスにスキャンされた敵は可視化され、沈黙状態になる。可視化された敵の姿はチーム全体に共有される`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Kokona: {
			Name: "心夏",
			Type: "サポート",
			skillActiveName: `ヒーリングドローン`,
			skillActiveDescription: `心夏は自分または味方をターゲットにしてヒーリングドローンを生成する。ドローンはターゲットのアーマーを回復し、首位の味方全員のHPを回復する`,
			skillPassiveName: `救急処置`,
			skillPassiveDescription: `戦闘を離脱すると自身のHPをゆっくり回復する。心夏が味方を救援する時に、ヒーリングドローンを放出してチームメイトを戦場に復帰させる`,
			skillUltimateName: `リモデリング`,
			skillUltimateDescription: `心夏は死亡した味方を一人選び、自分の近くで復活させる`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Yvette: {
			Name: "イヴェット",
			Type: "コントローラー",
			skillActiveName: `ガオガオ、フェイ出撃`,
			skillActiveDescription: `イヴェットはクマ「フェイ」を召喚する。アクティブスキルを再発動するとフェイの視点に切り替え、フェイを操作する。フェイの操作中に攻撃キーを押すと、フェイは前方に向かって突進し、障害物にぶつかると停止する。そして、停止した位置に氷雪地帯を生成する。敵が氷雪地帯にいるとスリップ効果と弱体化（被ダメージ増加）が付与される`,
			skillPassiveName: `コソコソゆきがくれ`,
			skillPassiveDescription: `イヴェットは静止した状態で一定時間が経過するとカモフラージュ状態に入り、遠方の敵には見えなくなり、敵が近づくと徐々に姿が現れる`,
			skillUltimateName: `ブルブルぶりざーど`,
			skillUltimateDescription: `イヴェットは巨大なシロクマを召喚し、3回連続で極寒フィールドを展開する。フィールド内の敵はスリップ状態と弱体化状態になり、発射速度とエルゴノミクスが低下する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Flavia: {
			Name: "フラヴィア",
			Type: "デュエリスト",
			skillActiveName: `幻惑の蝶`,
			skillActiveDescription: `フラヴィアが幻惑蝶を召喚する。幻惑蝶が存在する間、フラヴィアがダメージを受けると、一時的に無敵状態となり、ファントムオーブを生成する。オーブは敵の視界を遮断し、一定のダメージを受けると破壊される`,
			skillPassiveName: `生々流転`,
			skillPassiveDescription: `フラヴィアはダメージを受けるたびにアクティブスキルのクールダウンが短縮される。大きなダメージを受けると、一時的なアルティメットポイントを獲得する。スキルで獲得したポイントはそのラウンド内のみ有効`,
			skillUltimateName: `胡蝶の夢`,
			skillUltimateDescription: `フラヴィアは自身を中心にフィールドを生成する。フィールド内の敵に倒されると、フラヴィアは蝶に変身し、短時間後に戦闘を続ける。フィールド外の敵にはこの効果は適用されない。フィールド外の敵はフラヴィアからの攻撃を受けると、フラヴィアを可視化できる`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Yugiri: {
			Name: "ユウギリ",
			Type: "コントローラー",
			skillActiveName: `ドクギリマイマイ`,
			skillActiveDescription: `カタツムリ型の装置を設置する。インタラクションキーで起動すると、敵のアーマーを一時的に減少させる球状の有毒な霧を生成する`,
			skillPassiveName: `トキシックミスト`,
			skillPassiveDescription: `メインウェポンを使用して敵のHPに一定量のダメージを与えたとき、敵の体内の腐食性毒素が爆発し、周囲の敵のアーマーを一時的に低下させる`,
			skillUltimateName: `ポイズンフォグ`,
			skillUltimateDescription: `広範囲の毒霧を召喚してゆっくりと前進し、範囲内の敵キャラクターのアーマー上限を減少させる、腐食性の毒素を注入する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Ming: {
			Name: "明",
			Type: "デュエリスト",
			skillActiveName: `プラズマフィールド`,
			skillActiveDescription: `明が球電を発射し、最大距離に達するか、敵に接触または再発動すると爆発する。爆発は範囲内のすべての敵ユニット(召喚物を含む)のアーマーを破壊し、スロー効果を付与するプラズマフィールドを形成する。明がフィールド内に入ると移動速度が増加する`,
			skillPassiveName: `エナジードレイン`,
			skillPassiveDescription: `明は、武器やアクティブスキルで敵のアーマーやシールドにダメージを与えると、そのダメージに基づいて自身のアーマーを回復できる。アルティメットの持続時間中、パッシブで一時的なアーマーが回復し、回復量が増加する`,
			skillUltimateName: `プラズマアーマー`,
			skillUltimateDescription: `明は一時的なアーマーを獲得し、バレットが敵にヒットするとスロー効果を付与する。この効果は最大4層まで重ねられる。敵のアーマーにダメージを与えると、アルティメットの持続時間が延長され、アーマーも回復する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Lawine: {
			Name: "ラヴィーネ",
			Type: "イニシエーター",
			skillActiveName: `影狩り`,
			skillActiveDescription: `ラヴィーネはパルスナイフを投げ、パルス磁場を生成する。磁場内の敵はチームに可視化される。パルスナイフは敵を検出しない場合、または3回スキャン後に消失する`,
			skillPassiveName: `影映し`,
			skillPassiveDescription: `メイン武器で敵にダメージを与えると、敵が一時的にラヴィーネに可視化される`,
			skillUltimateName: `影の帳`,
			skillUltimateDescription: `ラヴィーネは前方に長方形の地場を生成する。磁場に入るとラヴィーネはステルス状態になり、攻撃とスキル発動が禁止される`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Meredith: {
			Name: "メレディス",
			Type: "コントローラー",
			skillActiveName: `風塵`,
			skillActiveDescription: `メレディスは弦力オーブを投げ、着地地点で風塵を引き起こす。風塵はフィールド内の敵の移動速度とエルゴノミクスを一時的に低下し、HPを継続的に減少する`,
			skillPassiveName: `マミータイム`,
			skillPassiveDescription: `メレディスが滞空中に武器、スキル、または戦術アイテムを使用し、敵を照準すると、落下速度が減少する`,
			skillUltimateName: `ドゥアトへの砂葬`,
			skillUltimateDescription: `メレディスはピラミッドを投げだし、巨大な砂嵐フィールドを生成する。砂嵐は敵の視界を遮り、HPを継続的に減少する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Reiichi: {
			Name: "令一",
			Type: "コントローラー",
			skillActiveName: `オプティカルベール`,
			skillActiveDescription: `令一が自分の傘を用いて、縦または横に展開可能な光の幕を作り出し、視界を遮る`,
			skillPassiveName: `夜明けのインサイト`,
			skillPassiveDescription: `ADSモード中、令一は周期的に前方の敵と召喚物をスキャンする。検出された敵の姿が一時的に令一に可視化される`,
			skillUltimateName: `聖光のバリア`,
			skillUltimateDescription: `令一のアクティブスキルは即座にリセットされ、光の幕がバリアにアップグレードされる。敵の弾丸はバリアに遮断される`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Kanami: {
			Name: "香奈美",
			Type: "イニシエーター",
			skillActiveName: `エコーチャンバー`,
			skillActiveDescription: `香奈美の次のショットはソナーディスクを発射し、着地地点の前方180°の範囲をスキャンして遮蔽物のない敵を検知する。検知された敵はチーム全体に可視化される`,
			skillPassiveName: `サウンドポップ`,
			skillPassiveDescription: `メイン武器の弾丸が着地するとソナーゾーンを生成する。ソナーゾーン内の敵は香奈美に短時間表示される`,
			skillUltimateName: `ショータイム`,
			skillUltimateDescription: `香奈美はホログラムライブを展開し、周囲の敵を引き寄せる。香奈美の歌に魅了された敵は減速し、照準もジャミングされる同時に、スタンされ、発射速度が低下する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Eika: {
			Name: "アイカ",
			Type: "デュエリスト",
			skillActiveName: `イグニッションファイア`,
			skillActiveDescription: `目の前に炎の檻を生成して、檻の壁を通過する敵に炎ダメージを与える。アイカが檻の中にいるとき、メイン武器が檻の中の敵へ追加の炎ダメージを与える。100ヒート：壁のダメージが増加する`,
			skillPassiveName: `イグナイト`,
			skillPassiveDescription: `銃撃が敵にあたると、最大100ヒートを獲得する。ヒートが最大のとき、弦化している敵に追加ダメージを与える。また、最大ヒート時に全てのヒートを消費して次のスキルを強化する`,
			skillUltimateName: `プロミネンス`,
			skillUltimateDescription: `最大3つの火炎嵐を放つ。嵐は敵を強制的に吹き飛ばして炎ダメージを与える。100ヒート：範囲が拡大、ダメージが増加して、敵が強調表示される`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Fragrans: {
			Name: "フラグランス",
			Type: "サポート",
			skillActiveName: `活力のトワレ`,
			skillActiveDescription: `フラグランスは回数制限のある2種類の香水を放つことができる。発動後、フラグランスを中心に香水のエリアが生成され、エリア内の味方の射撃速度、または移動速度が上昇する。このバフ効果は時間とともに徐々に減少していき、効果時間が切れると消滅する`,
			skillPassiveName: `癒しのアロマ`,
			skillPassiveDescription: `フラグランスは周囲の味方と自身のヘルスを徐々に回復する`,
			skillUltimateName: `激情のパルファム`,
			skillUltimateDescription: `フラグランスが自身を中心とした強力な香水エリアを生成し、エリア内の味方の射撃速度、移動速度を大幅に上昇させ、ヘルスを回復させる。効果時間中、フラグランスは弦化および武器の使用ができなくなる代わりに大幅なダメージ軽減効果を獲得する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Celestia: {
			Name: "星理恵",
			Type: "サポート",
			skillActiveName: `ステラアーク`,
			skillActiveDescription: `星理恵がアクティブスキルを発動すると、ステラが自動的に周囲の味方1人を追跡し、その味方に一時的なアーマーを付与する。その後、ステラは星理恵に戻り、同じ効果を付与する`,
			skillPassiveName: `ステラリング`,
			skillPassiveDescription: `星理恵は周囲の味方と自身のアーマーを徐々に回復する`,
			skillUltimateName: `ステラゲート`,
			skillUltimateDescription: `アルティメット発動後、味方の距離マーカーが表示される。星理恵は味方を一人選び、自身とその味方のアーマーを増加し、相手の位置にテレポートする。ゲージが消える前に、アルティメットキーを押すと、テレポートはキャンセルされる。(アーマーの増加は維持される)`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Audrey: {
			Name: "オードリー",
			Type: "センチネル",
			skillActiveName: `火力全開`,
			skillActiveDescription: `オードリーがマシンガンを銃架に設置して展開モードに入ると、発射速度が大幅に上昇する。リコイルが消え、リロードも不要になる。連続射撃により、ゲージがMAXになるとオーバーヒート状態になり、一時的に射撃ができなくなる`,
			skillPassiveName: `ロイヤルシールド`,
			skillPassiveDescription: `オードリーがADSモードまたは展開モードに入ると、正面に防御シールドを生成する。展開モード中はシールドの最大値が増加する`,
			skillUltimateName: `戦術爆撃`,
			skillUltimateDescription: `オードリーは6発のグレネードを発射できるグレネードランチャーを設置する。グレネードが着地すると爆発し、破片が敵と自身にダメージを与える火炎地帯を生成する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Maddelena: {
			Name: "マダレーナ",
			Type: "コントローラー",
			skillActiveName: `ペイントショット`,
			skillActiveDescription: `マダレーナがペイントを射出し、着弾地点にペイントエリアを作り出す。エリア内では、敵が減速し、弦化が禁止され、足跡が可視化される`,
			skillPassiveName: `ペイントトラック`,
			skillPassiveDescription: `マダレーナのメイン武器で敵にダメージを与えると、敵にスロー状態になり、足跡が可視化される`,
			skillUltimateName: `ペイントバブル`,
			skillUltimateDescription: `マダレーナは巨大なバブルを発射する。バブル内の敵は弦化禁止状態になり、足跡が可視化される。バブルが破裂すると、爆発範囲内の敵にスロー効果と弱体化を追加で付与する`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Fuchsia: {
			Name: "フューシャ",
			Type: "デュエリスト",
			skillActiveName: `ロレンチーニ`,
			skillActiveDescription: `フューシャは並外れた近くで周囲の敵を探知し、自身にのみ一時的に可視化する。敵のHPが100以下になると、可視化が持続する。スキル範囲内に敵がいる場合、フューシャの移動速度が上昇する`,
			skillPassiveName: `ホエールフォール`,
			skillPassiveDescription: `フューシャがキルまたはアシストを取ると、倒された敵はその位置にエネルギー結晶をドロップする。フューシャが結晶に近づくと、自動的に吸収して自身のHPを回復する。ラウンド中に初めて結晶を獲得するとヒュｰシャのHPの最大値が増加する。この増加効果はラウンドが終了するまで継続する`,
			skillUltimateName: `アドレナリン`,
			skillUltimateDescription: `発射速度とエルゴノミクスが大幅に上昇する。アクティブスキルが発動すると、視界内の敵全体がハイライト表示される。エネルギー結晶を吸収すると、アルティメットの持続時間が延長される`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		BaiMo: {
			Name: "ハクボク",
			Type: "デュエリスト",
			skillActiveName: `空で踊るぜ`,
			skillActiveDescription: `弦化した白墨は前方に急速に突進し、メイン武器に弾薬を2発装填する。キルまたはアシストを取ると、クールダウンがリセットされる`,
			skillPassiveName: `セイ・ホー！`,
			skillPassiveDescription: `白墨のメイン武器からの単発射撃が敵に50以上のダメージを与えると、敵に弦化禁止状態を付与する`,
			skillUltimateName: `リサイタルだ！`,
			skillUltimateDescription: `ハクボクはビーコンを設置する。設置後、キーを再度押すと、ビーコンの位置にテレポートし、HPが完全に回復する。死亡またはダウンした場合も、ビーコンの位置でリスポーンできる`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Galatea: {
			Name: "ガラテア",
			Type: "イニシエーター",
			skillActiveName: `ピルエット`,
			skillActiveDescription: `ガラテアがカードを放ち、壁や床に触れると破壊可能な分身を作り出す。ガラテアの分身は発生した瞬間に周囲の敵と召喚物を可視化状態にし、ガラテアと味方に共有する。また、分身を破壊した敵を一時的に可視化する。インタラクションボタンを押すと分身を破壊してテレポートする`,
			skillPassiveName: `ミスディレクション`,
			skillPassiveDescription: `ガラテアが壁張りつきを解除すると分身を残す。分身が破壊されるとクールダウンが発生する`,
			skillUltimateName: `イリュージョン`,
			skillUltimateDescription: `ガラテアがカードを3枚放ち、3体の分身を生成する。各分身にテレポートすることができる`,
			subName: `subName`,
			subDescription: `subDescription`,
		}
	},
	characterTypes: {
		Sentinel: 'センチネル',
		Support: 'サポート',
		Controller: 'コントローラー',
		Duellist: 'デュエリスト',
		Initiator: 'イニシエーター'
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