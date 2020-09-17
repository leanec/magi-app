<template>
  <Page id="main" class="page">
    <ActionBar height="60" flat="true" title="magi" class="action-bar">
      <NavigationButton visibility="hidden" />
      <Image src="~/images/logo-xmg.png" marginTop="10" />
    </ActionBar>
    <GridLayout columns="*" rows="*, auto" class="page" backgroundColor="#ebf1f2">
      <!-- Scroll View -->
      <ScrollView row="0" orientation="vertical" scrollBarIndicatorVisible="false">
        <GridLayout rows="auto,70,*" col="auto">
          <!-- Exchanges Area -->
          <StackLayout row="0">
            <StackLayout height="100%" style="background: #021042; padding: 20 0 20 0;">
              <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
                <WrapLayout orientation="horizontal">
                  <StackLayout orientation="vertical" class="card red overview" width="100" style="text-align: center; margin-left: 15;">
                    <FlexboxLayout flexDirection="column" style="padding: 15 10;">
                      <Image width="55" marginBottom="10" src="~/images/ico-btcpop.png" />
                      <Label :text="exchange.btcpop.last" class="val" />
                      <Label text="Satoshis" class="sub" />
                    </FlexboxLayout>
                    <Label :text="`Vol. ${exchange.btcpop.vol}`" class="label" style="font-size: 13;" />
                  </StackLayout>
                  <StackLayout orientation="vertical" class="card green overview" width="100" style="text-align: center;">
                    <FlexboxLayout flexDirection="column" style="padding: 15 10;">
                      <Image width="55" marginBottom="10" src="~/images/ico-moondex.png" />
                      <Label :text="exchange.moondex.last" class="val" />
                      <Label text="Satoshis" class="sub" />
                    </FlexboxLayout>
                    <Label :text="`Vol. ${exchange.moondex.vol}`" class="label" style="font-size: 13;" />
                  </StackLayout>
                </WrapLayout>
              </ScrollView>
            </StackLayout>
          </StackLayout>
          <!-- Network Area -->
          <StackLayout class="network" row="1">
            <FlexboxLayout height="100%" width="100%" flexDirection="row" justifyContent="space-between" alignItems="center" style="padding: 0 15;">
              <Image width="50" src="~/images/cpu.png" />
              <FlexboxLayout flexDirection="column" justifyContent="center" style="text-align: center; border-right-width: 2; border-color: rgba(255,255,255,0.1);" flexGrow="1">
                <Label class="heading light">
                  <FormattedString>
                    <Span style="font-weight: 700;" :text="network.hashrate" />
                  </FormattedString>
                </Label>
                <Label class="subheading" text="Hashrate" />
              </FlexboxLayout>
              <FlexboxLayout flexDirection="column" justifyContent="center" style="text-align: center;" flexGrow="1">
                <Label class="heading light">
                  <FormattedString>
                    <Span :text="network.difficulty" style="font-weight: 700;" />
                    <Span style="font-weight: 400; font-size: 10;" text="" />
                  </FormattedString>
                </Label>
                <Label class="subheading" text="Difficulty" />
              </FlexboxLayout>
            </FlexboxLayout>
          </StackLayout>
          <!-- Blocks Area -->
          <StackLayout class="card blocks" orientation="vertical" row="2" style="margin: 10 15 0 15; padding: 0;">
            <FlexboxLayout width="100%" flexDirection="row" justifyContent="space-between" alignItems="flex-end" style="background: #d3d8dA; border-radius: 3 3 0 0;">
              <FlexboxLayout flexDirection="row-reverse" alignItems="center" class="objective" alignSelf="flex-start" style="padding-top: 20;">
                <Label class="subheading" text="Latest 10" style="padding-left: 10;" />
                <Label class="heading dark" text="XMG Blocks" />
              </FlexboxLayout>
            </FlexboxLayout>
            <StackLayout orientation="vertical" style="padding: 10 0 ; margin: 0 15;">
              <StackLayout v-for="(block, i) in network.blocks" :key="i">
                <FlexboxLayout class="list" flexDirection="row" alignItems="center">
                  <Image v-if="block.miner_id === 0" class="block-img" src="~/images/pos.png" />
                  <Image v-else class="block-img" src="~/images/pow.png" />
                  <FlexboxLayout flexGrow="1" flexDirection="column">
                    <Label class="block-num" :text="`#${block.height}`" />
                    <Label class="heading light" style="font-size: 16; color: #ff2e63; font-weight: 500; margin-bottom: 0; margin-top: 0;">
                      <FormattedString>
                        <Span :text="block.value" style="font-weight: 500;" />
                        <Span style="font-weight: 400; font-size: 10;" text=" XMG" />
                      </FormattedString>
                    </Label>
                  </FlexboxLayout>
                  <Label :text="`${block.tx} Tx`" style="font-size: 20; font-weight: 600; color: #d3d8dA; text-align: center; width: 50;" />
                </FlexboxLayout>
                <Image width="100%" src="" style="background: #d3d8dA; height: 1; margin: 6 0;" />
              </StackLayout>
            </StackLayout>
          </StackLayout>
        </GridLayout>
      </ScrollView>
      <!-- Bottom Navigation -->
      <StackLayout row="1" style="padding:10 15 10 15;" backgroundColor="#ebf1f2" class="bottom-nav-wrapper">
        <FlexboxLayout id="bottom-nav" alignItems="center" flexDirection="row">
          <StackLayout flexGrow="1" class="ico" height="100%">
            <Image class="ico-wrapper" width="100%" />
            <Label style="text-align:center;" class="icon fab" flexGrow="1" text.decode="&#xf379;" @tap="openLink(1)" />
          </StackLayout>
          <StackLayout flexGrow="1" class="ico" height="100%">
            <Image class="ico-wrapper" width="100%" />
            <Label style="text-align:center;" class="icon fab" flexGrow="1" text.decode="&#xf392;" @tap="openLink(2)" />
          </StackLayout>
          <Image class="ico-magi" width="100%" src="~/images/xmg.png" @tap="openLink(3)" />
          <StackLayout flexGrow="1" class="ico" height="100%">
            <Image class="ico-wrapper" width="100%" />
            <Label style="text-align:center;" class="icon fab" flexGrow="1" text.decode="&#xf099;" @tap="openLink(4)" />
          </StackLayout>
          <StackLayout flexGrow="1" class="ico" height="100%">
            <Image class="ico-wrapper" width="100%" />
            <Label style="text-align:center;" class="icon fas" flexGrow="1" text.decode="&#xf0c1;" @tap="openLink(5)" />
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "tns-core-modules/utils/utils";
import * as ApiService from "~/shared/api-service";

export default {
  data() {
    return {
      exchange: {
        btcpop: {
          last: "-",
          vol: "-",
        },
        moondex: {
          last: "-",
          vol: "-",
        },
      },
      network: {
        hashrate: "-",
        difficulty: "-",
        blocks: {},
      },
    };
  },
  mounted() {
    this.getExchanges();
    this.getNetwork();
  },
  methods: {
    getExchanges() {
      ApiService.fetchBtcpop().then((res) => {
        const coin = res.find((c) => c.ticker === "XMG");
        this.exchange.btcpop.last = coin.lastTradePrice * 100000000;
        this.exchange.btcpop.vol = "-";
      }).catch((err) => {
        console.error(err);
        this.exchange.btcpop.last = "-";
        this.exchange.btcpop.vol = "-";
      });
      ApiService.fetchMoondex().then((res) => {
        this.exchange.moondex.last = res.result.Last * 100000000;
        this.exchange.moondex.vol = `${Number(`${Math.round(`${res.result.Volume}e2`)}e-2`)}`;
      }).catch((err) => {
        console.error(err);
        this.exchange.moondex.last = "-";
        this.exchange.moondex.vol = "-";
      });
    },
    getNetwork() {
      ApiService.fetchCryptoid().then((res) => {
        this.network.hashrate = res.hashrate;
        this.network.difficulty = `${Number(`${Math.round(`${res.diff}e3`)}e-3`)}`;
        this.network.blocks = res.blocks;
      }).catch((err) => {
        console.error(err);
        this.network.hashrate = "-";
        this.network.difficulty = "-";
        this.network.blocks = {};
      });
    },
    openLink(number) {
      switch (number) {
        case 1:
          utils.openUrl("https://bitcointalk.org/index.php?topic=735170.0/");
          break;
        case 2:
          utils.openUrl("https://discord.gg/EPHw749/");
          break;
        case 3:
          utils.openUrl("https://www.xmg.network/");
          break;
        case 4:
          utils.openUrl("https://twitter.com/Coin_Magi_XMG");
          break;
        case 5:
          utils.openUrl("https://chainz.cryptoid.info/xmg/");
          break;
      }
    },
  },
};
</script>
