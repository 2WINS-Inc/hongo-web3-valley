import { Component } from "solid-js";
import { Profile } from "../components";

const Hackathon2022Page: Component = () => {
  return (
    <>
      {/* Event report section */}
      <section>
        <div class="relative">
          <img
            src="/images/event_report/top.jpg"
            alt="トップ画像"
            class="h-[calc(100vh-80px)] object-cover opacity-60 md:max-h-[calc(100vh-80px)] lg:w-full"
          />
          <div class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-8 text-center text-white">
            <div class="animate-fade-in-fwd">
              <img
                src="/images/logo/logo_event.png"
                alt="イベントロゴ"
                class="mx-auto my-2 h-44"
              />
              <p class="text-xs">SPONSORED BY</p>
              <img
                src="/images/logo/logo_wide.png"
                alt="イベントロゴ"
                class="mx-auto my-2 h-10"
              />
              <p class="my-4">
                <span class="my-2 block text-xl font-bold leading-10 tracking-wide">
                  Web3領域でこれからの日本を
                  <br />
                  創っていく若者の登竜門
                </span>
                <span class="block text-lg font-medium tracking-wide">
                  Dec. 3rd - Dec. 10th, 2022
                </span>
              </p>
              <div class="mt-6">
                <a
                  href="https://prtimes.jp/main/html/rd/p/000000005.000111066.html"
                  target="_blank"
                >
                  <button class="my-2 transform-gpu cursor-pointer rounded-sm bg-white px-8 py-2 text-black shadow-lg transition-all duration-300 hover:bg-black hover:text-white">
                    Event Report 2022
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsors section */}
      <section class="bg-white px-4 pb-4 pt-8 text-black md:px-8">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            SPONSORS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        {/* Gold Sponsors */}
        <div class="text-center lg:py-4">
          <h3 class="text-xl md:p-4">GOLD SPONSORS</h3>
          <div class="mx-auto grid w-full grid-cols-3 lg:w-4/5">
            <img
              src="/images/sponsors/blocksmith.png"
              alt="BLOCKSMITH & Co."
              class="m-auto h-20 object-contain md:h-24"
            />
            <img
              src="/images/sponsors/tecotech.jpg"
              alt="TECOTEC"
              class="m-auto h-20 object-contain md:h-24"
            />
            <img
              src="/images/sponsors/reazon.png"
              alt="REAZON HOLDINGS"
              class="m-auto h-20 object-contain p-4 md:h-24"
            />
          </div>
        </div>
        {/* Silver Sponsors */}
        <div class="text-center lg:py-4">
          <h3 class="text-xl md:p-4">SILVER SPONSORS</h3>
          <div class="mx-auto grid w-full grid-cols-2 lg:w-2/3">
            <img
              src="/images/sponsors/kddi.png"
              alt="KDDI∞Labo"
              class="m-auto h-20 object-contain p-4 md:h-24"
            />
            <img
              src="/images/sponsors/axell.png"
              alt="AXELL"
              class="m-auto h-20 object-contain p-4 md:h-24"
            />
          </div>
        </div>
        {/* Bronze Sponsors */}
        <div class="text-center lg:py-4">
          <h3 class="text-xl md:p-4">BRONZE SPONSORS</h3>
          <div class="mx-auto grid w-full grid-cols-2 lg:w-2/3">
            <img
              src="/images/sponsors/bitflyer.png"
              alt="Bit Flyer"
              class="m-auto h-20 object-contain md:h-24"
            />
            <img
              src="/images/sponsors/startbahn.jpg"
              alt="StartBahn"
              class="m-auto h-20 object-contain p-8 md:h-24"
            />
          </div>
        </div>
        {/* Special Sponsors */}
        <div class="text-center lg:py-4">
          <h3 class="text-xl md:p-4">SPECIAL SPONSORS</h3>
          <div class="mx-auto grid w-full grid-cols-1 lg:w-2/3">
            <img
              src="/images/sponsors/gumi.png"
              alt="Gumi"
              class="m-auto h-20 object-contain p-4 md:h-24"
            />
          </div>
        </div>
      </section>
      {/* Partners section */}
      <section class="bg-white px-4 pb-8 pt-4 text-black md:px-8">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            PARTNERS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="text-center lg:py-4">
          <div class="mx-auto grid w-full grid-cols-3 lg:w-4/5">
            <img
              src="/images/partners/cic.png"
              alt="CIC"
              class="m-auto h-20 object-contain md:h-24"
            />
            <img
              src="/images/partners/coinbase.png"
              alt="Coinbase"
              class="m-auto h-20 object-contain p-6 md:h-24"
            />
            <img
              src="/images/partners/comps.png"
              alt="Comps"
              class="m-auto h-20 object-contain p-6 md:h-24"
            />
            <img
              src="/images/partners/couger.png"
              alt="Couger"
              class="m-auto h-20 object-contain p-4 md:h-24"
            />
            <img
              src="/images/partners/mufg.png"
              alt="MUFG"
              class="m-auto h-20 object-contain p-4 md:h-24"
            />
            <img
              src="/images/partners/tvc.jpg"
              alt="Tokyo Venture Conference"
              class="m-auto h-20 object-contain md:h-24"
            />
          </div>
        </div>
      </section>
      {/* Details section */}
      <section class="bg-black px-4 pb-16 pt-8 text-white lg:px-8">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            DETAILS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-white"></span>
          </h2>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto grid w-5/6 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div class="pt-10 lg:p-8">
              <h3 class="my-auto text-lg md:text-2xl">
                DAY 1 &emsp; インプットセッション
                <span class="mx-auto my-2 block h-0.5 max-w-full bg-white"></span>
              </h3>
            </div>
            <img
              src="/images/details/day1.jpg"
              alt="DAY1 インプットセッション"
              class="lg:p-4"
            />
          </div>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto grid w-5/6 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div class="pt-10 lg:order-last lg:p-8">
              <h3 class="my-auto text-lg md:text-2xl">
                DAY 2 &emsp; 技術ワークショップ
                <span class="mx-auto my-2 block h-0.5 max-w-full bg-white"></span>
              </h3>
            </div>
            <img
              src="/images/details/day2.jpg"
              alt="DAY2 技術ワークショップ"
              class="lg:p-4"
            />
          </div>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto grid w-5/6 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div class="pt-10 lg:p-8">
              <h3 class="my-auto text-lg md:text-2xl">
                DAY 8 &emsp; ピッチ・懇親会
                <span class="mx-auto my-2 block h-0.5 max-w-full bg-white"></span>
              </h3>
            </div>
            <img
              src="/images/details/day8.jpg"
              alt="DAY8 ピッチ・懇親会"
              class="lg:p-4"
            />
          </div>
        </div>
      </section>
      {/* Speakers section */}
      <section class="bg-white px-8 pb-4 pt-8 text-black">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            SPEAKERS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="mx-auto grid w-2/3 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Profile
              src="/images/speakers/miyaguchi.png"
              alt="宮口あや氏"
              name="宮口 あや"
              company="Ethereum Foundation"
              title="エグゼクティブ・ディレクター"
              desciption="18年2月にEthereum Foundationのエグゼクティブ ・ディレクターに就任。財団のトップとして、創設者ヴィタリック・ブテリンと共にイーサリアムの研究開発とオープンソースのコミュニティの発展に務める。19年にWorld Economic Forumグローバルブロックチェーン理事、Ethereum Enterprise Alliance 理事にも就任。"
            />
            <Profile
              src="/images/speakers/saito.jpg"
              alt="齊藤達哉氏"
              name="齊藤 達哉"
              company="三菱UFJ信託銀行株式会社"
              dept="デジタル企画部デジタルアセット事業室"
              title="プロダクトマネージャー"
              desciption="2010年入社。法人営業として各種ファイナンス案件や不動産案件を担当。その後業務企画、IT企画に携わる。2016年、FinTech推進室設立後、1人目の専任担当として三菱UFJ信託銀行のFinTech戦略を企画・推進。情報銀行基盤「Dprime」、デジタル証券基盤「Progmat」、ステーブルコイン基盤「Progmat Coin」、機能型NFT基盤「Progmat UT」等を立ち上げる。現在はデジタルアセット事業推進のほか、新たな新ビジネスの企画にも従事。特許登録6件。"
            />
            <Profile
              src="/images/speakers/nishimura.png"
              alt="西村祥一氏"
              name="西村 祥一"
              company="Comps ITL Pte. Ltd."
              title="代表"
              desciption="ブロックチェーン関連のソフトウェア開発を行う Comps ITL Pte. Ltd. 代表。Ethereum/ERC20 対応ウォレットアプリ Tachyon ウォレットや企業向けの Layer2 技術である BURN Blockchain の開発を行う。また、デジタルクローンを標榜する AI 開発を行う株式会社オルツ、不正のない資金調達を目指す ICOVO AG にて CTO を務める。2016年、上海にて Devcon2 と同時開催された Global Blockchain Summitではブロックチェーン技術による位置情報プラットフォームを提案し、Best Innovation Awardを受賞。共著に「はじめてのブロックチェーンアプリケーション～Ethereumによるスマートコントラクト開発入門」（2017年、翔泳社）がある。"
            />
            <Profile
              src="/images/speakers/sada.jpg"
              alt="真田哲弥氏"
              name="真田 哲弥"
              company="KLab株式会社 取締役会長 /"
              dept="株式会社BLOCKSMITH & Co."
              title="代表取締役社長CEO"
              desciption="関西学院大学在学中から5回起業したシリアルアントレプレナー。1999年株式会社サイバードを共同創業し最短記録でJASDAQ市場に上場。2000年KLabを設立、2011年にマザーズ市場、2012年に東証一部に上場。2022年Web3関連事業の株式会社BLOCKSMITH&Co.を設立。2022年Social Quiz Platform「Quizo.ooo」開発中。2022年12月人気マンガIPを使った新感覚ブロックチェーンゲーム「キャプテン翼ライバルズ」リリース予定。"
            />
            <Profile
              src="/images/speakers/ebiwara.jpeg"
              alt="海老原秀幸氏"
              name="海老原 秀幸"
              company="PKSHA Capital"
              title="パートナー"
              desciption="マーケティング会社を経て2005年 シーエー・キャピタル （現サイバーエージェント・キャピタル）に入社。その後、日本国内でアーリーステージの企業を中心に20社以上の投資実行及び投資先の支援活動を経験。2012年からは韓国法人代表として拠点・ファンドの立上げ〜韓国企業への投資活動及び経営・グローバル展開の支援業務に従事。2017年 ハイブリット・ベンチャーズ設立、2019年5月より東大松尾研発のPKSHA Technology を母体とするPKSHA Capitalに加わり、パートナーを務める。2016年、Global Corporate Venturing Rising Star Awards 第7位。"
            />
            <Profile
              src="/images/speakers/kitazawa.png"
              alt="北澤直氏"
              name="北澤 直"
              company="Coinbase株式会社"
              title="代表取締役"
              desciption="慶応義塾大学法学部卒業　ペンシルバニア大学大学院修了。モルガン・スタンレー証券に投資銀行員として６年間在籍し、それ以前は弁護士として6年間、日本とNYにて法律業務を手がける。2014年株式会社お金のデザインの立ち上げにCOOとして参画。ロボアドバイザー「THEO」のローンチとビジネス拡大に携わる。一般社団法人Fintech協会の創立にも理事として3年間従事。2018年よりCoinbaseに参画。株式会社 Kyash社外取締役。AnyMind Group株式会社社外監査役。著書に「誰がFinTechを制するのか」（単著）（KADOKAWA）、「ロボアドバイザーの資産運用革命」（共著）（きんざい）など。"
            />
          </div>
        </div>
        <div class="mx-auto p-4 md:w-4/5 lg:w-3/4 lg:p-8">
          <img src="/images/banners/speakers.png" alt="登壇者バナー" />
        </div>
      </section>
      {/* Judges section */}
      <section class="bg-white px-8 pb-8 pt-4 text-black">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            JUDGES
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="mx-auto grid w-2/3 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Profile
              src="/images/judges/mabuchi.jpg"
              alt="馬淵邦美氏"
              name="馬淵 邦美"
              company="PwC コンサルティング合同会社"
              dept="パートナー執行役員 /"
              title="一般社団法人Metaverse Japan 共同代表"
              desciption="Sapient inc勤務後に、1998年にデジタル・エージェンシーを日本で設立、代表取締役社長に就任。2005年 英国デジタル・メディアエージェンシーProfero incとのジョイントベンチャーとしてProfero Tokyoを設立、両社の代表取締役社長に就任。2009年にオムニコム・グループであるTribal DDB Tokyo ジェネラル・マネージャー。2012年WPPグループ、オグルヴィ・ワン・ジャパン、ネオ・アット・オグルヴィの代表取締役に就任し、同グループ日本法人のデジタルビジネスを牽引、再生を成功させた。2016年フライシュマン・ヒラードSVP& Partner参画。2018年よりFacebook Japan Director執行役員　就任。現在は、PwC コンサルティング合同会社　パートナー執行役員。一般社団法人Metaverse Japan 共同代表。"
            />
            <Profile
              src="/images/judges/ishii.jpg"
              alt="石井敦氏"
              name="石井 敦"
              company="株式会社クーガー"
              title="代表取締役CEO"
              desciption="日本IBMを経て、楽天やライコスの大規模検索エンジン開発を担当。その後、日米韓を横断したオンラインゲーム開発の統括、Amazon Robotics Challenge上位チームへの技術支援、ホンダへのAI学習シミュレーター提供、NEDOクラウドロボティクス開発統括などを務める。ブロックチェーンコミュニティBlockchain EXE代表。現在、人型AIプラットフォーム「LUDENS」の開発を進めている。スタンフォード大学2018年AI特別講義の講師。電気通信大学 元客員研究員。Enterprise Ethereum Alliance日本支部代表。"
            />
            <Profile
              src="/images/judges/nishimura.png"
              alt="西村祥一氏"
              name="西村 祥一"
              company="Comps ITL Pte. Ltd."
              title="代表"
              desciption="ブロックチェーン関連のソフトウェア開発を行う Comps ITL Pte. Ltd. 代表。Ethereum/ERC20 対応ウォレットアプリ Tachyon ウォレットや企業向けの Layer2 技術である BURN Blockchain の開発を行う。また、デジタルクローンを標榜する AI 開発を行う株式会社オルツ、不正のない資金調達を目指す ICOVO AG にて CTO を務める。2016年、上海にて Devcon2 と同時開催された Global Blockchain Summitではブロックチェーン技術による位置情報プラットフォームを提案し、Best Innovation Awardを受賞。共著に「はじめてのブロックチェーンアプリケーション～Ethereumによるスマートコントラクト開発入門」（2017年、翔泳社）がある。"
            />
            <Profile
              src="/images/judges/tsutsumi.jpg"
              alt="堤隆道氏"
              name="堤隆 道"
              company="Ethereum Foundation"
              title="Software Engineer"
              desciption="Ethereum FoundationのPrivacy and Scaling Explorations(PSE)でソフトウェアエンジニアとして活動する。PSEでは、ゼロ知識証明や暗号プリミティブの研究開発やそれらを用いたユースケースの開発を行っている。（https://appliedzkp.org/）"
            />
            <Profile
              src="/images/judges/kyakuno.jpg"
              alt="客野一樹氏"
              name="客野 一樹"
              company="筑波大学客員准教授 /"
              title="ax株式会社取締役CTO"
              desciption="筑波大学大学院において各種初等関数のハードウェア実装の研究で博士号を取得。株式会社アクセル入社後、アミューズメント市場向けの動画・音声の圧縮アルゴリズムの開発に従事。2018年に世界最高水準の推論速度を実現したAIフレームワーク「ailia SDK」を開発。現在は「ailia SDK」を強みとした機械学習やブロックチェーンに関する新規事業に携わっている。2018年にブロックチェーン事業を展開する株式会社VIPPOOL取締役、2019年に顔認識に独自技術を保有するモーションポートレート株式会社取締役、現在はAIソリューションを提供するax株式会社の取締役CTOを兼任。2014年より筑波大学客員准教授。"
            />
            <Profile
              src="/images/judges/tsurizaki.jpg"
              alt="釣崎宏氏"
              name="釣崎 宏"
              company="株式会社テコテック"
              title="代表取締役"
              desciption="専門は医療分野における機械学習とリアルタイムCG。大学院修了後、2000年に株式会社セガに入社。AM2研に所属し、業務用オンライン基盤 及び PtoP通信ミドルウエアの開発に従事。その後、株式会社ドワンゴに入社し、モバイル用通信基盤の開発を統括。2007年にテコテックを設立。証券決済及びFXシグナル配信システム、投資管理サービスなどFintech関連の運営実績多数。ブロックチェーン技術の開発にも力を入れており、暗号資産交換業の取得経験から国内でのトークンの取り扱いについては法務・会計処理にも知見がある。"
            />
            <Profile
              src="/images/judges/tanaka.jpg"
              alt="田中謙司氏"
              name="田中 謙司"
              company="東京大学大学院"
              title="工学系研究科准教授"
              desciption="修士課程修了後、マッキンゼー、日本産業パートナーズを経て東京大学大学院工学研究科助教、特任准教授、19年2月より同技術経営戦略学専攻准教授。デジタル技術を用いたエネルギーシステムや物流システムの構築をはじめとした社会応用の研究を行っている。兼担としてIPCCの著書などの政府系委員や投資ファンドや会社の技術アドバイザー等も担当。著書「電力流通とP2P・ブロックチェーン」を監修。"
            />
            <Profile
              src="/images/judges/kim.jpg"
              alt="Dan Kim 氏"
              name="Dan Kim"
              company="Coinbase株式会社"
              title="VP Business Development"
              desciption="Dan Kim is VP Business Development at Coinbase, the world’s most trusted cryptocurrency exchange where he leads strategic partnerships with developers, creators, and users of the global web3 ecosystem. Dan also serves as Coinbase’s Head of Listings, and works with crypto project teams from all around the world so that their tokens can be bought, sold, and held in the safest way by more than 200 million Coinbase customers. Prior to joining Coinbase, Dan worked at Tesla as Global Head of Sales & Delivery, where he led a team of over 3,000 people to drive the zero-to-scale growth of Model 3. Dan also worked at Airbnb as Head of Supply for Airbnb Plus, a collection of premium homes with superior hospitality, comfort and design. While Dan’s first jobs were in investment banking and structured finance, he spent the majority of his career working for founder-led, mission-oriented technology companies. Dan also founded Red Mango, a health-focused frozen yogurt and smoothie franchise that he scaled to over 300 retail stores before selling the company to a private equity firm. Dan graduated from UC Berkeley’s Haas School of Business, and lives in Oakland, CA with his fiancée. His interests span from web3 gaming and interactive art to empowering creators and discovering new ways to converge the physical world with the digital universe."
            />
          </div>
        </div>
        <div class="mx-auto p-4 md:w-4/5 lg:w-3/4 lg:p-8">
          <img src="/images/banners/judges.png" alt="審査員バナー" />
        </div>
      </section>
      {/* Mentors section */}
      <section class="bg-white px-8 pb-8 pt-4 text-black">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            MENTORS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="mx-auto grid w-4/5 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Profile
              src="/images/mentors/nakamura.jpg"
              alt="中村智浩氏"
              name="中村 智浩"
              company="スタートバーン株式会社取締役"
              title="最高技術責任者（CTO）"
              desciption="早稲田大学大学院にてWebや機械学習を研究。新卒で入社したゴールドマン・サックスとエレクトロニック・アーツでのフルスタックエンジニア経験を経た後にウィキッズを創業。その後AnyPayにてCTOを務め、ペイメントサービスや ICO・STOサービスの開発を統括。また、ブロックチェーン系SaaSのスタートアップcatabiraにおいてもCTOを務めた。2020年よりスタートバーンに参画。Web3.0の世界観とフジロックが好き。"
            />
            <Profile
              src="/images/mentors/person.png"
              alt="堀龍之進氏"
              name="堀 龍之進"
              company="東京大学工学部機械工学科4年"
            />
            <Profile
              src="/images/mentors/person.png"
              alt="石川晴也氏"
              name="石川 晴也"
              company="慶應大学理工学部1年"
            />
            <Profile
              src="/images/mentors/person.png"
              alt="井出駿太氏"
              name="井出 駿太"
              company="慶應義塾大学理工学部1年"
            />
          </div>
        </div>
      </section>
      {/* Mentors section */}
      <section class="bg-white px-8 pb-8 pt-4 text-black">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            MEMBERS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="mx-auto grid w-4/5 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Profile
              src="/images/members/ogawa.jpg"
              alt="小川椋徹氏"
              name="小川 椋徹"
              company=""
            />
            <Profile
              src="/images/members/yoshimura.png"
              alt="吉村良太氏"
              name="吉村 良太"
              company=""
            />
            <Profile
              src="/images/members/kudo.jpg"
              alt="工藤丈氏"
              name="工藤 丈"
              company=""
            />
            <Profile
              src="/images/members/suzuki.jpg"
              alt="鈴木綾氏"
              name="鈴木 綾"
              company=""
            />
          </div>
        </div>
      </section>
      {/* Organizer section */}
      <section class="bg-black p-8 text-white">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            ORGANIZER
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-white"></span>
          </h2>
        </div>
        <img
          src="/images/logo/logo.png"
          alt="ロゴ"
          class="mx-auto w-2/3 md:w-1/2 lg:w-1/4"
        />
      </section>
      {/* Twitter section */}
      <section class="hide-scrollbar max-h-screen overflow-y-scroll bg-black p-8 text-white">
        <div class="mx-auto w-full text-center md:w-3/4 lg:w-1/2">
          <a
            href="https://twitter.com/todaiweb3?ref_src=twsrc%5Etfw"
            class="twitter-timeline"
            data-height="600"
            data-lang="ja"
            data-theme="dark"
          >
            @todaiweb3のツイート
          </a>
        </div>
      </section>
    </>
  );
};

export default Hackathon2022Page;
