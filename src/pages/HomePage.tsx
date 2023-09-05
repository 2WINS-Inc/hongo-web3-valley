import { Component } from "solid-js";
import { Profile } from "../components";

const HomePage: Component = () => {
  return (
    <>
      {/* Event report section */}
      <section>
        <div class="relative">
          <img
            src="/hongo-web3-valley/images/event_report/top.jpg"
            alt="トップ画像"
            class="max-h-[calc(100vh-80px)] w-full object-cover opacity-70"
          />
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <img
              src="/hongo-web3-valley/images/logo/logo_event.png"
              alt="イベントロゴ"
              class="mx-auto my-4 h-44"
            />
            <p>SPONSORED BY</p>
            <img
              src="/hongo-web3-valley/images/logo/logo_wide.png"
              alt="イベントロゴ"
              class="mx-auto my-4 h-8"
            />
            <p class="my-4">
              <span class="block">
                Web3領域でこれからの日本を創っていく若者の”登竜門”
              </span>
              <span class="block">Dec. 3rd - Dec. 10th, 2022</span>
            </p>
            <div class="mt-4">
              <a
                href="https://prtimes.jp/main/html/rd/p/000000005.000111066.html"
                target="_blank"
              >
                <button class="my-2 px-8 py-2 bg-white text-black rounded-sm shadow-lg cursor-pointer">
                  Event Report 2022
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsors section */}
      <section class="px-8 pt-8 pb-4 bg-white text-black">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            SPONSORS
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        {/* Gold Sponsors */}
        <div class="py-4 text-center">
          <h3 class="p-4 text-xl">GOLD SPONSORS</h3>
          <div class="w-4/5 mx-auto grid grid-cols-3">
            <img
              src="/hongo-web3-valley/images/sponsors/blocksmith.png"
              alt="BLOCKSMITH & Co."
              class="m-auto h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/sponsors/tecotech.jpg"
              alt="TECOTEC"
              class="m-auto h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/sponsors/reazon.png"
              alt="REAZON HOLDINGS"
              class="m-auto p-4 h-24 object-contain"
            />
          </div>
        </div>
        {/* Silver Sponsors */}
        <div class="py-4 text-center">
          <h3 class="p-4 text-xl">SILVER SPONSORS</h3>
          <div class="w-2/3 mx-auto grid grid-cols-2">
            <img
              src="/hongo-web3-valley/images/sponsors/kddi.png"
              alt="KDDI∞Labo"
              class="m-auto p-4 h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/sponsors/axell.png"
              alt="AXELL"
              class="m-auto p-4 h-24 object-contain"
            />
          </div>
        </div>
        {/* Bronze Sponsors */}
        <div class="py-4 text-center">
          <h3 class="p-4 text-xl">BRONZE SPONSORS</h3>
          <div class="w-2/3 mx-auto grid grid-cols-2">
            <img
              src="/hongo-web3-valley/images/sponsors/bitflyer.png"
              alt="Bit Flyer"
              class="m-auto h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/sponsors/startbahn.jpg"
              alt="StartBahn"
              class="m-auto p-8 h-24 object-contain"
            />
          </div>
        </div>
        {/* Special Sponsors */}
        <div class="py-4 text-center">
          <h3 class="p-4 text-xl">SPECIAL SPONSORS</h3>
          <div class="w-2/3 mx-auto grid grid-cols-1">
            <img
              src="/hongo-web3-valley/images/sponsors/gumi.png"
              alt="Gumi"
              class="m-auto p-4 h-24 object-contain"
            />
          </div>
        </div>
      </section>
      {/* Partners section */}
      <section class="px-8 pt-4 pb-8 bg-white text-black">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            PARTNERS
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4 text-center">
          <div class="w-4/5 mx-auto grid grid-cols-3">
            <img
              src="/hongo-web3-valley/images/partners/cic.png"
              alt="CIC"
              class="m-auto h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/partners/coinbase.png"
              alt="Coinbase"
              class="m-auto p-6 h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/partners/comps.png"
              alt="Comps"
              class="m-auto p-6 h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/partners/couger.png"
              alt="Couger"
              class="m-auto p-4 h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/partners/mufg.png"
              alt="MUFG"
              class="m-auto p-4 h-24 object-contain"
            />
            <img
              src="/hongo-web3-valley/images/partners/tvc.jpg"
              alt="Tokyo Venture Conference"
              class="m-auto h-24 object-contain"
            />
          </div>
        </div>
      </section>
      {/* Details section */}
      <section class="p-8 bg-black text-white">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            DETAILS
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-white"></span>
          </h2>
        </div>
        <div class="p-8">
          <div class="w-5/6 mx-auto grid grid-cols-2 gap-8">
            <div class="p-8">
              <h3 class="my-auto text-2xl">
                DAY 1 &emsp; インプットセッション
                <span class="block my-2 mx-auto h-0.5 max-w-full bg-white"></span>
              </h3>
            </div>
            <img
              src="/hongo-web3-valley/images/details/day1.jpg"
              alt="DAY1 インプットセッション"
              class="p-4"
            />
          </div>
        </div>
        <div class="p-8">
          <div class="w-5/6 mx-auto grid grid-cols-2 gap-8">
            <div class="p-8 order-last">
              <h3 class="my-auto text-2xl">
                DAY 2 &emsp; 技術ワークショップ
                <span class="block my-2 mx-auto h-0.5 max-w-full bg-white"></span>
              </h3>
            </div>
            <img
              src="/hongo-web3-valley/images/details/day2.jpg"
              alt="DAY2 技術ワークショップ"
              class="p-4"
            />
          </div>
        </div>
        <div class="p-8">
          <div class="w-5/6 mx-auto grid grid-cols-2 gap-8">
            <div class="p-8">
              <h3 class="my-auto text-2xl">
                DAY 8 &emsp; ピッチ・懇親会
                <span class="block my-2 mx-auto h-0.5 max-w-full bg-white"></span>
              </h3>
            </div>
            <img
              src="/hongo-web3-valley/images/details/day8.jpg"
              alt="DAY8 ピッチ・懇親会"
              class="p-4"
            />
          </div>
        </div>
      </section>
      {/* Speakers section */}
      <section class="px-8 pt-8 pb-4 bg-white text-black">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            SPEAKERS
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="w-2/3 mx-auto grid grid-cols-3 gap-8">
            <Profile
              src="/hongo-web3-valley/images/speakers/miyaguchi.png"
              alt="宮口あや氏"
              name="宮口 あや"
              company="Ethereum Foundation"
              title="エグゼクティブ・ディレクター"
            />
            <Profile
              src="/hongo-web3-valley/images/speakers/saito.jpg"
              alt="齊藤達哉氏"
              name="齊藤 達哉"
              company="三菱UFJ信託銀行株式会社"
              dept="デジタル企画部デジタルアセット事業室"
              title="プロダクトマネージャー"
            />
            <Profile
              src="/hongo-web3-valley/images/speakers/nishimura.png"
              alt="西村祥一氏"
              name="西村 祥一"
              company="Comps ITL Pte. Ltd."
              title="代表"
            />
            <Profile
              src="/hongo-web3-valley/images/speakers/sada.jpg"
              alt="真田哲弥氏"
              name="真田 哲弥"
              company="KLab株式会社 取締役会長 /"
              dept="株式会社BLOCKSMITH & Co."
              title="代表取締役社長CEO"
            />
            <Profile
              src="/hongo-web3-valley/images/speakers/ebiwara.jpeg"
              alt="海老原秀幸氏"
              name="海老原 秀幸"
              company="PKSHA Capital"
              title="パートナー"
            />
            <Profile
              src="/hongo-web3-valley/images/speakers/kitazawa.png"
              alt="北澤直氏"
              name="北澤 直"
              company="Coinbase株式会社"
              title="代表取締役"
            />
          </div>
        </div>
      </section>
      {/* Judges section */}
      <section class="px-8 pt-4 pb-8 bg-white text-black">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            JUDGES
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="w-2/3 mx-auto grid grid-cols-3 gap-8">
            <Profile
              src="/hongo-web3-valley/images/judges/mabuchi.jpg"
              alt="馬淵邦美氏"
              name="馬淵 邦美"
              company="PwC コンサルティング合同会社"
              dept="パートナー執行役員 /"
              title="一般社団法人Metaverse Japan 共同代表"
            />
            <Profile
              src="/hongo-web3-valley/images/judges/ishii.jpg"
              alt="石井敦氏"
              name="石井 敦"
              company="株式会社クーガー"
              title="代表取締役CEO"
            />
            <Profile
              src="/hongo-web3-valley/images/judges/nishimura.png"
              alt="西村祥一氏"
              name="西村 祥一"
              company="Comps ITL Pte. Ltd."
              title="代表"
            />
            <Profile
              src="/hongo-web3-valley/images/judges/tsutsumi.jpg"
              alt="堤隆道氏"
              name="堤隆 道"
              company="Ethereum Foundation"
              title="Software Engineer"
            />
            <Profile
              src="/hongo-web3-valley/images/judges/kyakuno.jpg"
              alt="客野一樹氏"
              name="客野 一樹"
              company="筑波大学客員准教授 /"
              title="ax株式会社取締役CTO"
            />
            <Profile
              src="/hongo-web3-valley/images/judges/tsurizaki.jpg"
              alt="釣崎宏氏"
              name="釣崎 宏"
              company="株式会社テコテック"
              title="代表取締役"
            />
            <Profile
              src="/hongo-web3-valley/images/judges/tanaka.jpg"
              alt="田中謙司氏"
              name="田中 謙司"
              company="東京大学大学院"
              title="工学系研究科准教授"
            />
            <Profile
              src="/hongo-web3-valley/images/judges/kim.jpg"
              alt="Dan Kim 氏"
              name="Dan Kim"
              company="Coinbase株式会社"
              title="VP Business Development"
            />
          </div>
        </div>
      </section>
      {/* Mentors section */}
      <section class="px-8 pt-4 pb-8 bg-white text-black">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            MENTORS
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="w-4/5 mx-auto grid grid-cols-4 gap-8">
            <Profile
              src="/hongo-web3-valley/images/mentors/nakamura.jpg"
              alt="中村智浩氏"
              name="中村 智浩"
              company="スタートバーン株式会社取締役"
              title="最高技術責任者（CTO）"
            />
            <Profile
              src="/hongo-web3-valley/images/mentors/person.png"
              alt="堀龍之進氏"
              name="堀 龍之進"
              company="東京大学工学部機械工学科4年"
            />
            <Profile
              src="/hongo-web3-valley/images/mentors/person.png"
              alt="石川晴也氏"
              name="石川 晴也"
              company="慶應大学理工学部1年"
            />
            <Profile
              src="/hongo-web3-valley/images/mentors/person.png"
              alt="井出駿太氏"
              name="井出 駿太"
              company="慶應義塾大学理工学部1年"
            />
          </div>
        </div>
      </section>
      {/* Mentors section */}
      <section class="px-8 pt-4 pb-8 bg-white text-black">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            MEMBERS
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-black"></span>
          </h2>
        </div>
        <div class="py-4">
          <div class="w-4/5 mx-auto grid grid-cols-4 gap-8">
            <Profile
              src="/hongo-web3-valley/images/members/ogawa.jpg"
              alt="小川椋徹氏"
              name="小川 椋徹"
              company=""
            />
            <Profile
              src="/hongo-web3-valley/images/members/yoshimura.png"
              alt="吉村良太氏"
              name="吉村 良太"
              company=""
            />
            <Profile
              src="/hongo-web3-valley/images/members/kudo.jpg"
              alt="工藤丈氏"
              name="工藤 丈"
              company=""
            />
            <Profile
              src="/hongo-web3-valley/images/members/suzuki.jpg"
              alt="鈴木綾氏"
              name="鈴木 綾"
              company=""
            />
          </div>
        </div>
      </section>
      {/* Organizer section */}
      <section class="p-8 bg-black text-white">
        <div class="py-8 text-center flex">
          <h2 class="mx-auto text-3xl text-center">
            ORGANIZER
            <span class="block my-1 mx-auto h-0.5 max-w-full bg-white"></span>
          </h2>
        </div>
        <img
          src="/hongo-web3-valley/images/logo/logo.png"
          alt="ロゴ"
          class="mx-auto w-1/4"
        />
      </section>
      {/* Twitter section */}
      <section class="p-8 bg-black text-white">
        <div class="mx-auto w-1/2 text-center">
          <a
            class="twitter-timeline"
            data-lang="ja"
            data-theme="dark"
            data-tweet-limit="3"
            href="https://twitter.com/todaiweb3?ref_src=twsrc%5Etfw"
          >
            @todaiweb3のツイート
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
