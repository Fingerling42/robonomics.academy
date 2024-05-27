---
title: "글쓰기: 문헌고찰"
description: AI 도구를 활용하여 학사 논문 빠르게 시작하기
metaOptions: [AI 도구를 활용하여 학사 논문 빠르게 배우기]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
그래서, 우리는 아마도 학술 작업에서 가장 지루한 부분을 쓰기 시작하고 있습니다 - 문헌 검색 및 찾은 자료의 분석입니다.
</RoboAcademyText>

첫눈에 보기에는 AI 어시스턴트가 이 작업을 다른 것보다 더 잘 처리할 수 있어야 합니다. 그것이 할 일은 인터넷에서 관련 작품을 찾아내어 어떤 형태로든 그 텍스트를 획득하고 분석하는 것뿐입니다. 그러나 이 작업에서 상당수의 함정이 발견되었으며, 이에 대해 더 자세히 논의할 것입니다.


## 첫 번째 시도

더 간단한 작업부터 시작해 봅시다. 기존의 소개 텍스트를 사용하여 해당 참고문헌과 인용을 추가하여 그 명제의 관련성을 확인할 것입니다. ChatGPT와 Bing Chat에 대한 초기 요청은 다음과 같습니다 (반드시 소스의 수를 지정하세요):

<RoboAcademyDialog>

Add 10 references and quotes for 소개duction part to support the statements in the text.
</RoboAcademyDialog>

두 챗봇 모두 소스를 텍스트 내에 올바르게 배치할 수 있었지만 실제 소스를 찾는 데 완전히 실패했습니다. 문제는 AI 어시스턴트가 실제로 존재하지 않는 소스(하지만 실제 소스와 매우 유사한)를 발명하기 시작했고, 그것들을 텍스트에 추가하고 심지어 허구의 저자를 인용했다는 것입니다.

<RoboAcademyDialog>

C. Li et al. "Blockchain-based secure and trustworthy data sharing scheme for smart homes." IEEE Transactions on Industrial Informatics, vol. 16, no. 2, pp. 1236-1245, 2020.

"The deployment of smart home systems has led to concerns over data security and privacy. Blockchain technology has been proposed as a solution to these concerns, as it enables secure and trustworthy data sharing among smart home devices. This paper proposes a blockchain-based secure and trustworthy data sharing scheme for smart homes. The proposed scheme uses blockchain to ensure the integrity and confidentiality of data generated by smart home devices."

</RoboAcademyDialog>

얼마나 자연스럽게 보이는지 주목하세요: 참고문헌 형식이 따라지며, 실제 IEEE 저널이 인용되었습니다. 사용을 막는 유일한 것은 Google Scholar에서 확인하는 것입니다.

<RoboAcademyNote title="Warning" type="warning">
 AI 어시스턴트가 제공한 링크, 인용 및 소스를 항상 두 번 확인하세요.
</RoboAcademyNote>

이 문제는 [환각 효과](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence))라고 불리며 현재 인공지능 전문가들 사이에서 많은 논란을 빚고 있습니다. 환각은 검증이 너무 비용이 많이 들 수 있는 수준에서 발생할 수 있으며(예를 들어, AI가 실제로 존재하지 않는 복잡한 유체역학 현상을 자세히 설명할 수 있음), 이는 신뢰성 부족으로 인해 AI 서비스의 모든 도움을 약화시킵니다.

비교를 위해 다양한 서비스의 통계를 여기에 제시합니다:

- ChatGPT: 10개 중 9개의 소스가 가짜임
- Bing Chat: 10개 중 7개의 소스가 가짜임
- Auto-GPT: 이유를 알 수 없이 참고문헌 웹사이트를 위한 파서를 개발하기 시작하여 작업을 완료하지 못했습니다.

인터넷에 액세스할 수 있는 경우 AI 서비스가 더 잘 작동하지만 동시에 실제로 존재하지 않는 소스에 직접적인 링크를 만어낼 수 있습니다. 물론 전반적인 결과는 인상적이지 않지만, 이 문제를 계속 염두에 두면서 계속해 봅시다.

## 요청 명확화

여러 번의 시도 끝에 최상의 전술은 소스를 요청하고 소개 텍스트를 단락별로 제공하는 것으로 밝혀졌습니다. 또한, AI는 과학 논문 대신 블로그, 포럼 및 일반 웹사이트의 기사에서 소스를 제공하는 것을 선호하는 것으로 밝혀졌습니다. 따라서, 어시스턴트가 기사를 선택해야 하는 특정 소스(IEEE, Springer 저널, arXiv 웹 아카이브 등)를 명시하는 것이 좋습니다:

<RoboAcademyDialog>

Find 5 scientific sources that prove statements in this text. Use only arXiv, IEEE, Springer articles from 2018 to 2023: "THE_PARAGRAPH"
</RoboAcademyDialog>

이 요청은 ChatGPT가 인터넷 액세스가 부족하여 작업을 잘 처리하지 못했기 때문에 Bing Chat에만 사용되었습니다. 결과는 훨씬 나아졌습니다: Bing Chat은 때때로 모든 실제 소스를 제공하고 텍스트의 어떤 명제를 지원하는지 설명하는 간단한 설명까지 제공했습니다. 그러나 Bing Chat은 찾은 소스에 대한 bibtex 레코드를 만들지 못했으며(다시 환각을 유발하여), 결과적으로 Google Scholar의 수동 사용이 필요했습니다.


## 문헌고찰로 이동

이제 더 복잡한 작업으로 넘어갈 수 있습니다 - 학사 논문의 두 번째 섹션을 위한 전체 문헌 검색입니다. 먼저 계획을 따라 두 개의 소목을 다음 주제에 대해 작성해 보겠습니다:

<RoboAcademyDialog>

&mdash; 개요 of smart home technology and its security and privacy issues
<br/>&mdash; 소개duction to web3 technology and its potential benefits for smart homes
</RoboAcademyDialog>

다음 요청이 사용되었습니다:

<RoboAcademyDialog>

Write a literature review with "THE_TOPIC" in 300 words. Write as if you are writing part of a technical scientific article.
</RoboAcademyDialog>

AI가 기본적으로 블로그에 게시하기에 더 적합한 텍스트를 작성한다는 마지막 스타일에 대한 명확화가 추가되었습니다. 첫 번째 얻은 결과는 그다지 인상적이지 않았으며, Amazon의 스마트 기기를 광고하는 등 너무 많은 불필요한 세부 정보가 포함되어 있었습니다. 그러나 결과는 이 소목을 위한 계획으로 사용할 수 있으며, 이후 추가 요청이 가능합니다. 결과적으로 다음 구조가 달성되었습니다:

- 스마트 홈 기술 설명
- 장치 및 사용 사례 예시
- 스마트 홈 기술의 존재하는 문제
- 이 문제를 해결하기 위한 솔루션 예시:
- 기존 솔루션의 단점

전반적으로, 얻은 텍스트는 학사 논문에 사용할 수 있습니다. 두 번째 주제인 web3 기술에 대해서도 비슷한 과정을 거쳤으며, 그런 다음 각 소목에 대한 해당 소스를 찾아서 위에서 설명한 방식을 따랐습니다.

## 분석을 위한 기사 찾기

분석을 위한 표준 전술은 강력한 문헌 검색 서비스(Scopus, Web of Science, Google Scholar)를 사용하여 주제에 대한 가장 관련성이 높고 인용 많은 5-10개의 작품을 찾는 것입니다. 다음 요청을 사용하여 이를 시도해 보겠습니다:

<RoboAcademyDialog>

Find five most cited technical scientific articles about developing a smart home systems based of web3 or blockchain or smart contract among IEEE, Springer and arXiv articles from 2020 to 2023
</RoboAcademyDialog>

안타깝게도 결과는 좋지 않습니다:

- ChatGPT는 인터넷에 액세스할 수 없으며 2021년까지의 정보에 제한되어 있다고 강조했습니다. 제안된 다섯 개의 소스는 모두 존재하지 않는 것으로 나타났습니다.
- 빙 챗은 5개 대신 3개의 실제 소스를 찾았지만, 불행하게도 1) 그 중에서 두 개만 주제에 관련되었고, 2) 그들은 가장 인용이 많지 않았습니다 (그 중 하나는 전혀 인용이 없었습니다), 3) 일부 소스는 가짜였습니다 (AI는 그들에 대한 인용 횟수까지 제공했습니다).
- Auto-GPT는 주어진 주제에 대해 가장 정확했지만, 가장 인용이 많은 기사를 선택하지 못했으며, Google Scholar를 사용해야 한다는 것을 명확히 한 후에도 그렇지 못했습니다.

불행히도, 과학 논문을 위한 전문 문학 검색은 아직 이 AI 서비스의 능력 내에 없으므로 Google Scholar를 사용하여 가장 인용이 많은 5개의 기사를 찾는 것이 더 쉽고 빠릅니다.

## 관련 작품의 무차별 분석

이후에, 어떤 식으로든, 찾은 기사들의 전체 텍스트를 획득해야 합니다. 보통의 경우에는 각각을 개인적으로 읽어야 할 것이지만, AI 어시스턴트로부터 요약 텍스트를 요청해보겠습니다. 우리는 즉시 문제에 부딪힐 것입니다:

1) 기사들은 보통 PDF 형식으로 제공되며, 대부분 두 개의 열 텍스트로 이루어져 있습니다. 챗봇은 간단히 PDF 파일을 읽을 수 없으며, Auto-GPT는 현재 이 형식을 읽을 수 없습니다 (하지만 이 문제에 대한 해결책을 찾아보려고 했습니다, 비록 실패했지만!)

<RoboAcademyTerminal title="AutoGPT Terminal">

**SYSTEM:**  Command read_file returned: Error: 'utf-8' codec can't decode byte 0xe2 in position 10: invalid continuation byte
THOUGHTS:  It looks like I am encountering an encoding issue while trying to open the edgechain PDF file. I can try to extract text from the PDF using the 'tika' library and analyze the contents. I'll use the 'execute_shell' command to install the 'tika' library before using it to extract text from the PDF file.

**REASONING:**  Due to encoding issues trying to read the PDF file, I need a different approach to read the contents of the PDF file in order to analyze and summarize the article.

</RoboAcademyTerminal>

어쨌든, PDF 기사들은 이미지와 표를 제외한 일반 텍스트 형식으로 변환되어야 합니다. 이를 위해 [PyMuPDF](https://pymupdf.readthedocs.io/en/latest/), [GROBID](https://grobid.readthedocs.io/en/latest/소개duction/), [PDFMiner](https://pdfminersix.readthedocs.io/en/latest/)와 같은 소프트웨어를 사용할 수 있습니다.

2) 전체 기사를 분석하기 위해 이 AI 도구들을 사용하는 데 본질적으로 방해되는 훨씬 더 심각한 문제가 있습니다. 불행히도, 현재의 형태에서 GPT는 제한된 컨텍스트 길이를 가지고 있어 Auto-GPT가 분석을 시작하는 것을 단순히 거부하게 하며, 챗봇들은 대화의 시작 부분을 잃어버립니다:

<RoboAcademyTerminal title="AutoGPT Terminal">

openai.error.InvalidRequestError: This model's maximum context length is 8191 tokens, however you requested 15615 tokens (15615 in your prompt; 0 for the completion). Please reduce your prompt; or completion length.

</RoboAcademyTerminal>

## 관련 작품의 단계별 분석

그러므로 우리는 약간의 속임수를 사용하고 기사들을 페이지별로 AI를 통해 실행하며, 매번 받은 텍스트의 간단한 요약을 요청할 것입니다. 그런 다음 이러한 요약을 모아 기사의 최종 분석을 얻을 것입니다. 이를 위해 ChatGPT와 같은 것을 사용할 수 있습니다. 예를 들어, 결과 중 하나:

<RoboAcademyDialog>

<ChatGPT/>

EdgeChain: An Edge-IoT Framework and Prototype Based on Blockchain and Smart Contracts

This article describes EdgeChain, a framework, which addresses scalability and security challenges in the Internet of Things domain by leveraging edge computing, blockchain technology, and smart contracts. Authors highlight the weaknesses of IoT devices and centralized cloud computing and proposes edge computing as a solution. The framework employs a permissioned blockchain and an internal currency system to connect IoT devices with edge cloud resources. Smart contracts enforce regulations and automate policy enforcement.

The paper outlines the key features of the EdgeChain framework, including permissioned blockchain, credit-based resource management, smart contract enforcement, compatibility with legacy devices, and distributed deployment options. It explains the modules of the framework, such as the IoT Proxy, smart contracts interface, blockchain server, and application interface.

Furthermore, the text delves into the deployment of blockchain, development of smart contracts, device registration, and IoT behavior regulation within the EdgeChain framework. It emphasizes thorough testing, legacy device support, and monitoring of device behaviors for policy enforcement.

Overall, the EdgeChain framework shows promise in addressing scalability and security challenges in the IoT domain through the integration of edge computing, blockchain, and smart contracts. The prototype evaluation indicates its potential as a secure and distributed platform for future IoT applications.

</RoboAcademyDialog>

후에, 남은 기사들에 대해 동일한 분석 과정을 반복해야 하며, 그렇게 하면 우리의 학사 논문을 위한 완전한 문헌 검토가 완성됩니다. 마지막으로, 우리는 최고의 기사를 선택하고, 그들의 텍스트를 추출하고, AI가 생성한 결과를 검증한 후에 이를 참고문과 함께 일관된 텍스트로 편집하기 전에 이를 모아야 합니다. 전체 작업은 표준 2-3주 대신 약 2일이 걸렸습니다.

<RoboAcademyText>

이제 우리는 논문의 본질인 우리 작업의 방법에 대한 설명으로 넘어갈 수 있습니다.

</RoboAcademyText>