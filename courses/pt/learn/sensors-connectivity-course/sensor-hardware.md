---
title: "Liçao #2, Hardware do Sensor"
description: 'HARDWARE DO SENSOR'
lessonNumber: 2
metaOptions: [Aprenda, Conectividade de Sensores e Rede Descentralizada de Sensores]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Se você deseja participar do monitoramento do ar com a Rede de Sensores Descentralizados, você precisa obter uma placa de poluição do ar com sensores. Existem duas maneiras de fazer isso:

<List>

<li>encomendar todas as peças necessárias e montar a placa personalizada por si mesmo.</li>
<li>encomendar uma placa pronta para uso da equipe Robonomics.</li>

</List>

## Montagem Manual da Placa

Para construir sua própria placa, você precisa encontrar os seguintes componentes:

- Sensor Laser PM2.5 e PM10 [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- Módulo sem fio serial [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) baseado em ESP8266

- Conversor mini560 DC-DC de 5A [(exemplo)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- Conector DC [(exemplo)](https://www.amazon.com/CenryKay-DC-099-Threaded-Conectaror-Adapter/dp/B08CMMQMP6?th=1)

- Adaptador de energia 12V/2А [(exemplo)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- caixa de montagem [(exemplo)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Além disso, você pode instalar sensores adicionais:

<List  type="numbers">

<li>

Com interface I2C:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — temperatura e umidade

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — temperatura, umidade, pressão atmosférica

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — temperatura e umidade

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — compostos orgânicos voláteis, equivalente de CO2

</li>

</List>

</li>

<li>

Com interface de 1 fio:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — temperatura e umidade

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — temperatura

</li>

</List>

</li>

</List>

Você pode encontrar o processo de montagem no vídeo abaixo. Ele também mostra o processo de flash, mas falaremos sobre isso mais tarde.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Solicitar Placa Robonomics

Alternativamente, você pode solicitar a Placa Robonomics. Para fazer isso, envie um e-mail para um dos seguintes endereços:

- vm@multi-agent.io
- ping@airalab.org

A placa Robonomics é baseada no ESP8266 e é projetada para alimentação de 6-24V, usando o conversor DC-DC MINI560. Esta placa permite que você conecte o sensor de partículas SDS011 e vários sensores adicionais (verifique a lista acima). Também há um modelo MINI menor com uma lista reduzida de dispositivos conectáveis.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

Os projetos para ambos os modelos podem ser encontrados aqui: para o [modelo completo](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) e para o [modelo mini](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Vamos dar uma olhada mais de perto na placa. Ela possui várias portas de conexão (destacadas em azul e verde).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Bloco de terminais azul, da esquerda para a direita (todos os terminais são identificados):

<List>
  <li class="flex">

  <code>12V</code> — terminal para conectar a fonte de alimentação à placa; a voltagem recomendada é de 12 volts.

  </li>

  <li class="flex">

  <code>GND</code> de terra (ponto de potencial zero) — serve tanto para conexão do potencial zero da fonte de alimentação, quanto para conexão de sensores.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — saída de energia configurável à qual os sensores são conectados; a saída pode ser configurada para 3,3 ou 5 volts.

  </li>

  <li class="flex">

  <code>SDA</code> — linha de dados serial, é usada para conectar sensores via interface I2C.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — terminal configurável ao qual a linha de clock serial é conectada; usado para conectar sensores via interface I2C ou 1-Wire.

  </li>
</List>

A configuração da saída de energia para o sensor e a seleção da interface são feitas configurando os jumpers, marcados em amarelo na imagem (`5V`, `3V`, `I2C`, `1WIRE`). Os jumpers são instalados horizontalmente, os locais para instalação dos jumpers são identificados.


<RoboAcademyNote type="warning" title="WARNING">
Você pode escolher a voltagem para a fonte de alimentação configurando apenas um jumper para 3,3 volts ou 5 volts. Configurar dois jumpers para 3,3 e 5 volts danificará o dispositivo. A mesma regra se aplica ao escolher uma interface para sensores, instale apenas um jumper no lugar de I2C ou 1-Wire. Instalar dois jumpers pode danificar o dispositivo.
</RoboAcademyNote>

A placa possui um bloco adicional de entradas, marcado em verde na imagem (`GND`, `5V`, `SDA`, `SCL`).

No lado esquerdo da caixa azul há um interruptor de energia para forçar a reinicialização da placa. Ele está na posição `ON` por padrão.

Após configurar o sensor, tudo o que resta é fazer o flash e configurá-lo.