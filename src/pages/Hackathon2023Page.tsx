import { Component } from "solid-js";
import { Profile } from "../components";

const Hackathon2023Page: Component = () => {
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
                <span class="block text-base font-medium tracking-wide md:text-lg">
                  Dec. 9th (土) - Dec. 16th (土), 2023
                </span>
              </p>
              <div class="mt-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftkERIZvcAcItsLhuVWwGJG6yigvOD2hTQxFvtCdgT3z2CZA/viewform?usp=sf_link"
                  target="_blank"
                >
                  <button class="my-2 cursor-pointer rounded-sm bg-white px-8 py-2 font-medium text-black shadow-lg transition-all duration-300 hover:bg-black hover:text-white">
                    申し込みフォーム
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
        <div class="space-y-4 py-4 text-center">
          <h3 class="text-xl md:p-4">GOLD SPONSORS</h3>
          <div class="mx-auto grid w-1/2 grid-cols-1 lg:w-1/6">
            <img
              src="/images/sponsors_2023/axell.webp"
              alt="AXELL"
              class="m-auto aspect-auto object-contain"
            />
          </div>
        </div>
        {/* Silver Sponsors */}
        <div class="space-y-4 py-4 text-center">
          <h3 class="text-xl md:p-4">SILVER SPONSORS</h3>
          <div class="mx-auto grid w-11/12 grid-cols-2 gap-4 lg:w-1/3 lg:gap-8">
            <img
              src="/images/sponsors_2023/cryptobase.webp"
              alt="CryptoBase"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/sponsors_2023/freebit.webp"
              alt="freebit"
              class="m-auto aspect-auto object-contain"
            />
          </div>
        </div>
        {/* Bronze Sponsors */}
        <div class="space-y-4 py-4 text-center">
          <h3 class="text-xl md:p-4">BRONZE SPONSORS</h3>
          <div class="mx-auto grid w-11/12 grid-cols-3 gap-4 lg:w-1/2 lg:gap-8">
            <img
              src="/images/sponsors_2023/tecotec.webp"
              alt="TecoTec"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/sponsors_2023/cryptogames.webp"
              alt="cryptogames"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/sponsors_2023/skyland.webp"
              alt="skyland"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/sponsors_2023/akindo.webp"
              alt="akindo"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/sponsors_2023/cmps.webp"
              alt="cmps"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/sponsors_2023/tvc.webp"
              alt="tokyo venture conference"
              class="m-auto aspect-auto object-contain"
            />
          </div>
        </div>
        {/* Global Partner */}
        <div class="space-y-8 py-4 text-center">
          <h3 class="text-xl md:p-4">GLOBAL PARTNER</h3>
          <div class="mx-auto grid w-2/3 grid-cols-1 lg:w-1/4">
            <img
              src="/images/sponsors_2023/pacificmeta.webp"
              alt="pacificmeta"
              class="m-auto aspect-auto object-contain"
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
        {/* Global Partners */}
        <div class="space-y-8 py-4 text-center">
          <h3 class="text-xl md:p-4">PARTNERS</h3>
          <div class="mx-auto grid w-11/12 grid-cols-3 gap-4 lg:w-1/2 lg:gap-8">
            <img
              src="/images/partners_2023/astar.webp"
              alt="astar"
              class="m-auto aspect-auto object-cover"
            />
            <img
              src="/images/partners_2023/descitokyo.webp"
              alt="descitokyo"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/mori.webp"
              alt="mori"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/fractonsq.webp"
              alt="fractonsq"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/refijapan.webp"
              alt="refijapan"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/hakuhodo.webp"
              alt="hakuhodo"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/questry.webp"
              alt="questry"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/worldcoin.webp"
              alt="worldcoin"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/tib.webp"
              alt="tib"
              class="m-auto aspect-auto object-contain"
            />
          </div>
        </div>
        {/* Student's Partners */}
        <div class="mb-8 space-y-8 py-4 text-center lg:mb-20">
          <h3 class="text-xl md:p-4">STUDENT'S PARTNERS</h3>
          <div class="mx-auto grid w-11/12 grid-cols-5 gap-4 lg:w-1/2 lg:gap-8">
            <img
              src="/images/partners_2023/hongo.webp"
              alt="hongo"
              class="m-auto aspect-auto object-cover"
            />
            <img
              src="/images/partners_2023/wecreate.webp"
              alt="wecreate"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/rits.webp"
              alt="rits"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/nagoya.webp"
              alt="nagoya"
              class="m-auto aspect-auto object-contain"
            />
            <img
              src="/images/partners_2023/keio.webp"
              alt="keio"
              class="m-auto aspect-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* About section */}
      <section class="bg-black px-4 pb-16 pt-8 text-white lg:px-8">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-2xl md:text-3xl">
            ハッカソンについて
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-white"></span>
          </h2>
        </div>
        <div class="mx-auto space-y-3 p-4 text-justify text-base leading-8 md:w-3/4 md:p-8 md:text-lg md:leading-10 lg:w-2/3 lg:leading-10">
          <p>
            Blockchain Hackathon for
            Studentsは本郷web3バレーによる学生ハッカーのためのハッカソンです。
          </p>
          <p>
            ブロックチェーン×サステナビリティをテーマとした現役東大生が主催する唯一のブロックチェーンハッカソンで、今年度で二度目の開催となります。ブロックチェーン開発に興味のある全ての学生を対象とした国内初の学生主導のハッカソンとなります。
          </p>
          <p>
            近頃注目を浴びるリアルワールドアセット領域の中でも特にサステナビリティに焦点を当ててブロックチェーン開発をしていただきます。
          </p>
          <p>
            12/09(土)に開催予定のオープニングセッションにご参加の方、またはエントリーを希望する方はこのページより登録をお願いします。こちらへ事前登録をされた方へエントリーページをご案内します。
          </p>
        </div>
      </section>
      {/* Details section */}
      <section class="bg-white px-4 pb-16 pt-8 text-black lg:px-8">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl tracking-wide">
            DETAILS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="space-y-4 text-center lg:p-8">
          <h3 class="my-auto text-xl md:text-2xl">Prize</h3>
          <ul class="mx-auto w-60 space-y-3 md:text-lg">
            <li class="flex justify-between">
              <span>グランドプライズ</span>
              <span>30万円</span>
            </li>
            <li class="flex justify-between">
              <span>テックプライズ</span>
              <span>10万円</span>
            </li>
            <li class="flex justify-between">
              <span>ビジネスプライズ</span>
              <span>5万円</span>
            </li>
            <li class="flex justify-between">
              <span>CryptoGames賞</span>
              <span>5万円</span>
            </li>
            <li class="flex justify-between">
              <span>ERC-6551賞</span>
              <span>5万円</span>
            </li>
          </ul>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto grid w-5/6 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div class="pt-10 lg:p-8">
              <h3 class="my-auto text-lg md:text-2xl md:tracking-wider">
                DAY 1 &emsp; オープニングセッション
                <span class="mx-auto my-2 block h-0.5 max-w-full bg-black"></span>
              </h3>
            </div>
            <div class="space-y-4 rounded-xl bg-gray-50 p-8 shadow-md">
              <p class="font-medium leading-8 tracking-wide md:text-lg">
                12/9（土）12:00 ~ 18:30&emsp;
                <br class="block md:hidden" />@{" "}
                <a
                  href="https://tib.metro.tokyo.lg.jp/"
                  class="text-blue-500 underline decoration-blue-500 decoration-1 underline-offset-4 transition-all duration-200 hover:opacity-70"
                  target="_blank"
                >
                  TIB
                </a>
              </p>
              <ul class="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>ReFi インプットセッション</li>
                <li>DeSci インプットセッション</li>
                <li>ネットワーキング</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto grid w-5/6 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div class="pt-10 lg:order-last lg:p-8">
              <h3 class="my-auto text-lg md:text-2xl md:tracking-wider">
                DAY 2 &emsp; 開発セッション
                <span class="mx-auto my-2 block h-0.5 max-w-full bg-black"></span>
              </h3>
            </div>
            <div class="space-y-4 rounded-xl bg-gray-50 p-8 shadow-md">
              <p class="font-medium leading-8 tracking-wide md:text-lg">
                12/10（日）13:00 ~ 15:00&emsp;
                <br class="block md:hidden" />@ オンライン
              </p>
              <ul class="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>
                  yukiさんによるハンズオン
                  <br class="block md:hidden" />
                  <span class="ml-5 block md:ml-0 md:inline">セッション</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto grid w-5/6 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div class="pt-10 lg:p-8">
              <h3 class="my-auto text-lg md:text-2xl md:tracking-wider">
                DAY 2 - DAY 7 &emsp; 開発期間
                <span class="mx-auto my-2 block h-0.5 max-w-full bg-black"></span>
              </h3>
            </div>
            <div class="space-y-4 rounded-xl bg-gray-50 p-8 shadow-md">
              <p class="font-medium leading-8 tracking-wide md:text-lg">
                12/10（日）~ 12/15（金）
              </p>
              <ul class="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>メンター様との30分面談</li>
                <li>メンター様への技術的質問</li>
                <li>
                  12/15 23:59プロダクト提出
                  <br class="block md:hidden" />
                  <span class="ml-5 block md:ml-0 md:inline">締め切り</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto grid w-5/6 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div class="pt-10 lg:order-last lg:p-8">
              <h3 class="my-auto text-lg md:text-2xl md:tracking-wider">
                DAY 8 &emsp; フィナーレ
                <span class="mx-auto my-2 block h-0.5 max-w-full bg-black"></span>
              </h3>
            </div>
            <div class="space-y-4 rounded-xl bg-gray-50 p-8 shadow-md">
              <p class="font-medium leading-8 tracking-wide md:text-lg">
                12/16（土）12:00~18:30&emsp;
                <br class="block md:hidden" />@{" "}
                <a
                  href="https://cryptobase.green/"
                  class="text-blue-500 underline decoration-blue-500 decoration-1 underline-offset-4 transition-all duration-200 hover:opacity-70"
                  target="_blank"
                >
                  CryptoBase
                </a>
              </p>
              <ul class="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>プロダクトピッチ</li>
                <li>懇親会</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Speakers section */}
      <section class="bg-black px-8 pb-4 pt-8 text-white">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            SPEAKERS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-white"></span>
          </h2>
        </div>
        <div class="pb-20 pt-8">
          <div class="mx-auto grid w-5/6 grid-cols-1 gap-x-8 gap-y-24 md:w-3/4 md:grid-cols-2 lg:w-2/3 lg:grid-cols-3 lg:gap-y-16">
            <Profile
              src="/images/speakers_2023/ftaro.webp"
              alt="F太郎氏"
              name="F太郎"
              company="Founder of ReFi Japan"
              desciption="2017年からクリプトの世界に参入。プロジェクトへの投資やサポートを通じて、クリプトやブロックチェーンへの理解を深める。昨年からクリプトの力で世界を変えられる可能性のある「ReFi（再生金融）」に興味を持ち、ReFiプロジェクトである「KlimaDAO」のContributorとして日本での活動を開始。また、日本でより多くの方にReFiを知ってもらうために、「ReFi Japan」を設立し、毎週ニュースレターを発信中。"
            />
            <Profile
              src="/images/speakers_2023/yuki.webp"
              alt="yuki氏"
              name="yuki"
              company="Astar Network JP DevRel"
            />
            <Profile
              src="/images/speakers_2023/hamada.webp"
              alt="濵田太陽氏"
              name="濵田 太陽"
              company="Founder of DeSci Tokyo"
              desciption="神経科学者（博士）。シニアリサーチャー（株式会社アラヤ）。沖縄科学技術大学院大学(OIST)科学技術研究科博士課程修了。2022年より、Moonshot R&Dプログラム (目標9)「逆境の中でも前向きに生きられる社会の実現」(山田PMグループ)のPrincipal Investigatorとして前向き状態に関するモデル化に従事している。研究テーマは好奇心の神経計算メカニズムの解明や大規模神経活動の原理解明、脳データの共有インフラ。データ共有サイエンスの新たな可能性を模索している中で、DeSciに注目している。"
            />
            <Profile
              src="/images/speakers_2023/ito.webp"
              alt="伊東謙介氏"
              name="伊東 謙介"
              company="アーティスト / 東京大学ブロックチェーン"
              title="寄附講座特任研究員"
              desciption="略歴：アーティスト、東京大学ブロックチェーン寄付講座特任研究員、およびスタートバーン株式会社リサーチャー。学部1~2年次のころに村上隆氏の有限会社カイカイキキにてアルバイトを行い、2014年大学院進学と同時に現在の社長と共にスタートバーン株式会社を創業。2023年6月に合意形成と制度設計を題材とした初個展を開催する。個人史および研究の詳細についてはブログ（knskito.com）をご参照ください。"
            />
            <Profile
              src="/images/speakers_2023/miura.webp"
              alt="三浦千哲氏"
              name="三浦 千哲"
              company="Founder of Giant"
              desciption="東京大学工学系研究科、材料物性の研究を経て現在はScience of Science分野博士課程に在籍。self-organizing collaborative research(研究プロジェクトの自己組織化)とacademic mechanism(知識生産メカニズム)に関する研究を行う。"
            />
            <Profile
              src="/images/speakers_2023/osawa.webp"
              alt="大澤哲也氏"
              name="大澤 哲也"
              company="Co-Founder of SINRA"
              desciption="国内ITコンサルティングファーム、欧州系戦略コンサルティングファームでの勤務を経て、2015年に三ッ輪産業株式会社に入社。経営戦略部の部長に就任し、経営改革を実行。電力事業を行うグループ会社のイーネットワークシステムズの事業立ち上げにも注力し、Coincheck社との提携により、日本初のビットコインによる公共料金支払いのシステム化を推進した。2019年11月に三ッ輪ホールディングスの取締役兼経営戦略本部本部長に就任。2023年6月にNext Commons Lab、TART社とともに株式会社paramitaを設立。共同代表としてSINRA、Local Coopといったサービスを推進。"
            />
            <Profile
              src="/images/speakers_2023/hashimura.webp"
              alt="橋村純氏"
              name="橋村 純"
              company="Founder of Mori NFT"
              desciption="メガバンク系インフラファンド、EY Japanを経て、エネルギー・インフラ分野における投融資、投資先ハンズオン支援、アドバイザリー等の幅広い立場の経験を有する。その後、証券会社の代表取締役として2,000億円超を取り扱う日本最大のクラウドファンディングプラットフォームを運営。2022年より森林×Web3をテーマとしたビジネスを展開。"
            />
            <Profile
              src="/images/speakers_2023/ibe.webp"
              alt="伊部智信氏"
              name="伊部 智信"
              company="Founder of Questry"
              desciption="東京大学卒業後、2011年ゴールドマン・サックスに入社。2年のニューヨーク本社勤務を含め、外国為替営業部、債券営業部にて計11年勤務後、2022年9月、QUESTRYを立ち上げる。"
            />
          </div>
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
          <div class="mx-auto grid w-5/6 grid-cols-1 gap-x-8 gap-y-24 md:w-3/4 md:grid-cols-2 lg:w-2/3 lg:grid-cols-3 lg:gap-y-16">
            <Profile
              src="/images/judges_2023/kyakuno.webp"
              alt="客野一樹氏"
              name="客野 一樹"
              company="株式会社アクセル 常務取締役 事業開発グループゼネラルマネージャ /"
              title="ax株式会社 CTO / 筑波大学客員准教授"
              desciption="筑波大学大学院において各種初等関数のハードウェア実装の研究で博士号を取得。株式会社アクセル入社後、アミューズメント市場向けの動画・音声の圧縮アルゴリズムの開発に従事。独自のAIフレームワークであるailia SDKを企画、開発。AIを専門に行うax株式会社設立、CTOに就任。現在は先端技術分野を中心にR&Dおよび事業化を行っている。"
            />
            <Profile
              src="/images/judges_2023/kamei.webp"
              alt="亀井聡彦氏"
              name="亀井 聡彦"
              company="Co-Founder of Fracton Ventures"
            />
            <Profile
              src="/images/judges_2023/nagumo.webp"
              alt="南雲悠太郎氏"
              name="南雲 悠太郎"
              company="CMPS合同会社 Co-Founder"
            />
            <Profile
              src="/images/judges_2023/seto.webp"
              alt="瀬戸智寛氏"
              name="瀬戸 智寛"
              company="CryptoGames株式会社 CTO"
            />
          </div>
        </div>
        <div class="mx-auto mt-20 w-full lg:mt-10 lg:w-2/3">
          <img
            src="/images/judges_2023/flyer.webp"
            alt="フライヤー"
            class="aspect-auto object-contain"
          />
        </div>
      </section>
      {/* Members section */}
      <section class="bg-white px-8 pb-8 pt-4 text-black">
        <div class="flex py-8 text-center">
          <h2 class="mx-auto text-center text-3xl">
            MEMBERS
            <span class="mx-auto my-1 block h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="pb-20 pt-4">
          <div class="mx-auto grid w-5/6 grid-cols-1 gap-x-8 gap-y-24 md:w-3/4 md:grid-cols-2 lg:w-2/3 lg:grid-cols-3 lg:gap-y-16">
            <Profile
              src="/images/members_2023/sako.webp"
              alt="迫嵩明氏"
              name="迫 嵩明"
              company="本郷web3バレー共同代表"
            />
            <Profile
              src="/images/members_2023/takagi.webp"
              alt="髙木俊輔氏"
              name="髙木 俊輔"
              company="本郷web3バレー副代表"
            />
            <Profile
              src="/images/members_2023/tokunaga.webp"
              alt="徳永ひかる氏"
              name="徳永 ひかる"
              company="本郷web3バレー副代表"
            />
            <Profile
              src="/images/members_2023/nakajima.webp"
              alt="中島伶那氏"
              name="中島 伶那"
              company="本郷web3バレー共同代表"
            />
            <Profile
              src="/images/members_2023/matsuura.webp"
              alt="松浦拓夢氏"
              name="松浦 拓夢"
              company="本郷web3バレー共同代表"
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
      <section class="hide-scrollbar max-h-screen space-y-8 overflow-y-scroll bg-black p-8 text-white">
        <div class="mx-auto w-full text-center md:w-3/4 lg:w-1/2">
          <a
            href="https://twitter.com/students_web3?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-show-count="false"
          >
            Follow @students_web3
          </a>
        </div>
        <div class="mx-auto w-full text-center md:w-3/4 lg:w-1/2">
          <a
            class="twitter-timeline"
            href="https://twitter.com/students_web3?ref_src=twsrc%5Etfw"
          >
            Tweets by @students_web3
          </a>
        </div>
      </section>
    </>
  );
};

export default Hackathon2023Page;
