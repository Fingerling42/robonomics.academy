---
title: "プライベートスマートホーム向けオープンソースソリューションの紹介"
lastUpdate: Tue May 09 2023 13:56:49 GMT+0400 (Samara Standard Time)
description: 安価なスマートデバイスとオープンソースソリューションを統合して、スマートホームをクラウドに依存せずにプライベートに向けたものにする方法を学びます。
metaOptions: [学ぶ]
defaultName: Introduction to open source solution for private smart homes
---

<LessonImages src="smart-home-intro/open-source-private-smart-home-intro.png" imageClasses="mb full" />

<RoboAcademyText>
  みなさん、こんにちは！今日はスマートホームについてお話ししたいと思います。その必要性、構成要素、そして提供できるものについて。
</RoboAcademyText>

## スマートホーム：暖房と給湯の問題を解決する

2022年、私はキプロスに引っ越し、新しい場所での生活環境にすぐに慣れなければなりませんでした。ロシアから来た私にとって、エネルギー資源の使用に対する考え方の違いが特に鮮明に感じられます。例えば、キプロスには集中暖房がありません。そして12月まで、それについて考える必要はありませんでした。しかし、その後、私の寝室の温度が窓の外の温度と同じであることがわかりました。正直言って、+10℃で眠るのは不快です...ブルッ！

## スマートホームモニタリングで節約を増やす

さらに中央給湯もありません。屋根に設置され、太陽によって加熱されるボイラーがあります。しかし、冬には太陽の光が水槽を暖めるのに十分ではありません。アパートには、水槽内の加熱要素を起動するスイッチがあります。最初に不便なのは、事前にそれをオンにする必要があることです。シャワーを浴びる30分から1時間前。夜はまだ受け入れられるシナリオですが、朝は絶対にお湯が出ません。第二に、それをオフにするのを忘れることが簡単です。その結果、焼き切れた加熱要素と電気代が発生します。

ちなみに、ここでは電気代が非常に高く、2か月ごとに支払う必要があります。現時点では、主要な消費者を特定することは不可能です。エアコン、床暖房、照明などの主要な電気消費者に関する統計を持っていると便利です。リアルタイムの電力消費データを手元に持っていると、少なくとも何に使われているかを分析を始めることができます。

## スマートホームの必須コンポーネント：スイッチ、センサー、スマートメーター

最初のスマートデバイスの候補は、さまざまなスイッチと電力消費モタリングです。次に、おそらくスケジュールに従ってまたは温度の読み取りに従ってエアコンや床暖房を制御することを考えるでしょう。これは、温度および湿度センサー、床暖房を制御するリレー、エアコン用のIRリモコンが必要になることを意味します。すべての家には窓があり、窓には通常カーテンがあります - 寝る前にカーテンが自動的に閉まると便利です。したがって、スイッチ、センサー、スマートメーターがスマートホームの基盤を形成します。そして、具体的なニーズに基づいて夢を見ることができます。

## 適切なスマートホームソリューションの選択：KNX vs. Sonoff vs. Xiaomi

市場にはどのようなスマートホームおよび自動化ソリューションがあるのでしょうか？ KNXを考えることができます。これは、現在、家庭、オフィス、商業施設向けの中規模および大規模の自動化システムで最も一般的なソリューションの1つです。20年以上の歴史があり、現在は多くの主要な電気機器メーカーによってサポートされています。ただし、KNXソリューションを組み立てるには、多くのエンジニアリング作業が必要です。主要なロジックは、通常、別のスイッチボードキャビネットに組み立てられます。元々提供されていなかった場合、既存のアパートに取り付けることは難しいか、不可能かもしれません。さらに、KNXベースのソリューションはかなり高価です。

別のアプローチは、SonoffやXiaomiなどの中国メーカーからデバイスを購入することです。彼らの主な利点は価格、取り付けや設定の容易さです。ほとんどのセンサーやデバイスを自宅に設置できるようになります。例えば、スマートスイッチを取り付けるには電気技師が必要な場所もありますが、古いスイッチの代わりに取り付けるだけで、アパートのレイアウトを変更する必要はありません。メーカーはデバイスを管理するための単一のアプリケーションを提供しています。ただし、常にデータがサーバーに送信されること、およびデバイスとのすべての通信がインターネット接続なしでは不可能であることを覚えておく必要があります。


## DIYスマートホーム：完全な制御のためのホームサーバーの構築

スマートホームを構築する別のアプローチは、利可能なデバイスを同じ中国メーカーから使用する第二のアプローチに基づいており、さらにクラウドを排除するためにアパート/家にホームサーバーを追加することです。これは、私たちがスマートホームソリューションで取った道です。次の部分では、私たちのデモスタンドの組み立てとその機能について詳しく説明します。

<RoboAcademyText fWeight="500">
  今回は以上です！次のレッスンでは、スマートホームを構築する実践的な側面にさらに深く踏み込み、スマートホームボードの組み立て方を紹介します。お楽しみに、そして完全に機能し、自動化された家を作るための第一歩に備えてください。
</RoboAcademyText>