<template>
  <Page id="main" class="page">
    <ActionBar height="60" flat="true" title="magi" class="action-bar">
      <NavigationButton visibility="hidden" />
      <Image src="~/images/logo-xmg.png" marginTop="10" />
    </ActionBar>
    <PullToRefresh @refresh="refreshData">
      <GridLayout columns="*" rows="*, auto" class="page" backgroundColor="#ebf1f2">
        <!-- Scroll View -->
        <ScrollView row="0" orientation="vertical" scrollBarIndicatorVisible="false">
          <GridLayout rows="auto,70,*" col="auto">
            <!-- Exchanges Area -->
            <StackLayout row="0">
              <StackLayout height="100%" style="background: #021042; padding: 20 0 20 0;">
                <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
                  <WrapLayout orientation="horizontal">
                    <StackLayout orientation="vertical" class="card red overview" width="100" style="text-align: center; margin-left: 15;" @tap="openLink(exchange.btcpop.url)">
                      <FlexboxLayout flexDirection="column" style="padding: 15 10;">
                        <Image width="55" marginBottom="10" src="~/images/ico-btcpop.png" />
                        <StackLayout v-show="exchange.btcpop.loading" height="70" verticalAlignment="middle" horizontalAlignment="center">
                          <ActivityIndicator :busy="exchange.btcpop.loading" width="60" height="60" color="#021042" />
                        </StackLayout>
                        <Label v-show="!exchange.btcpop.loading" :text="exchange.btcpop.last" class="val" />
                        <Label v-show="!exchange.btcpop.loading" text="Satoshis" class="sub" />
                      </FlexboxLayout>
                      <Label v-show="!exchange.btcpop.loading" :text="`Vol. ${exchange.btcpop.vol}`" class="label" style="font-size: 13;" />
                    </StackLayout>
                    <StackLayout orientation="vertical" class="card green overview" width="100" style="text-align: center;" @tap="openLink(exchange.moondex.url)">
                      <FlexboxLayout flexDirection="column" style="padding: 15 10;">
                        <Image width="55" marginBottom="10" src="~/images/ico-moondex.png" />
                        <StackLayout v-show="exchange.moondex.loading" height="70" verticalAlignment="middle" horizontalAlignment="center">
                          <ActivityIndicator :busy="exchange.moondex.loading" width="60" height="60" color="#021042" />
                        </StackLayout>
                        <Label v-show="!exchange.moondex.loading" :text="exchange.moondex.last" class="val" />
                        <Label v-show="!exchange.moondex.loading" text="Satoshis" class="sub" />
                      </FlexboxLayout>
                      <Label v-show="!exchange.moondex.loading" :text="`Vol. ${exchange.moondex.vol}`" class="label" style="font-size: 13;" />
                    </StackLayout>
                  </WrapLayout>
                </ScrollView>
              </StackLayout>
            </StackLayout>
            <!-- Network Area -->
            <StackLayout class="network" row="1">
              <FlexboxLayout height="100%" width="100%" flexDirection="row" justifyContent="space-between" alignItems="center" style="padding: 0 15;" @tap="openLink(network.url)">
                <Image width="50" src="~/images/cpu.png" />
                <FlexboxLayout v-show="network.loading" flexDirection="column" justifyContent="center" flexGrow="1">
                  <ActivityIndicator :busy="network.loading" width="60" height="60" color="#ffffff" />
                </FlexboxLayout>
                <FlexboxLayout v-show="!network.loading" flexDirection="column" justifyContent="center" style="text-align: center; border-right-width: 2; border-color: rgba(255,255,255,0.1);" flexGrow="1">
                  <Label class="heading light">
                    <FormattedString>
                      <Span style="font-weight: 700;" :text="network.hashrate" />
                    </FormattedString>
                  </Label>
                  <Label class="subheading" text="Hashrate" />
                </FlexboxLayout>
                <FlexboxLayout v-show="!network.loading" flexDirection="column" justifyContent="center" style="text-align: center;" flexGrow="1">
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
              <StackLayout v-show="network.loading" height="80" verticalAlignment="middle" horizontalAlignment="center">
                <ActivityIndicator :busy="network.loading" width="60" height="60" color="#021042" />
              </StackLayout>
              <StackLayout v-show="!network.loading" orientation="vertical" style="padding: 10 0 ; margin: 0 15;">
                <StackLayout v-for="(block, i) in network.blocks" :key="i" @tap="openLink(`${network.url}block.dws?${block.height}.htm`)">
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
              <Label style="text-align:center;" class="icon fab" text.decode="&#xf379;" flexGrow="1" @tap="openLink(navigation.bitcointalk)" />
            </StackLayout>
            <StackLayout flexGrow="1" class="ico" height="100%">
              <Image class="ico-wrapper" width="100%" />
              <Label style="text-align:center;" class="icon fab" text.decode="&#xf392;" flexGrow="1" @tap="openLink(navigation.discord)" />
            </StackLayout>
            <Image class="ico-magi" width="100%" src="~/images/xmg.png" @tap="openLink(navigation.web)" />
            <StackLayout flexGrow="1" class="ico" height="100%">
              <Image class="ico-wrapper" width="100%" />
              <Label style="text-align:center;" class="icon fab" text.decode="&#xf099;" flexGrow="1" @tap="openLink(navigation.twitter)" />
            </StackLayout>
            <StackLayout flexGrow="1" class="ico" height="100%">
              <Image class="ico-wrapper" width="100%" />
              <Label style="text-align:center;" class="icon fas" text.decode="&#xf0c1;" flexGrow="1" @tap="openLink(navigation.blockchain)" />
            </StackLayout>
          </FlexboxLayout>
        </StackLayout>
      </GridLayout>
    </PullToRefresh>
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
          loading: true,
          last: "-",
          vol: "-",
          url: "https://btcpop.co/Exchange/XMG",
        },
        moondex: {
          loading: true,
          last: "-",
          vol: "-",
          url: "https://moondex.org/market/BTC-XMG",
        },
      },
      network: {
        loading: true,
        hashrate: "-",
        difficulty: "-",
        blocks: {},
        url: "https://chainz.cryptoid.info/xmg/",
      },
      navigation: {
        bitcointalk: "https://bitcointalk.org/index.php?topic=735170.0/",
        discord: "https://discord.gg/EPHw749/",
        web: "https://www.xmg.network/",
        twitter: "https://twitter.com/Coin_Magi_XMG",
        blockchain: "https://chainz.cryptoid.info/xmg/",
      },
    };
  },
  mounted() {
    this.getExchanges();
    this.getNetwork();
  },
  methods: {
    getExchanges() {
      // BTCPOP
      this.exchange.btcpop.loading = true;
      ApiService.fetchBtcpop().then((res) => {
        const coin = res.find((c) => c.ticker === "XMG");
        this.exchange.btcpop.last = coin.lastTradePrice * 100000000;
        this.exchange.btcpop.vol = "-";
      }).catch((err) => {
        console.error(err);
        this.exchange.btcpop.last = "-";
        this.exchange.btcpop.vol = "-";
      }).finally(() => {
        this.exchange.btcpop.loading = false;
      });
      // MOONDEX
      this.exchange.moondex.loading = true;
      ApiService.fetchMoondex().then((res) => {
        this.exchange.moondex.last = res.result.Last * 100000000;
        this.exchange.moondex.vol = `${Number(`${Math.round(`${res.result.Volume}e2`)}e-2`)}`;
      }).catch((err) => {
        console.error(err);
        this.exchange.moondex.last = "-";
        this.exchange.moondex.vol = "-";
      }).finally(() => {
        this.exchange.moondex.loading = false;
      });
    },
    getNetwork() {
      // CRYPTOID
      this.network.loading = true;
      ApiService.fetchCryptoid().then((res) => {
        this.network.hashrate = res.hashrate;
        this.network.difficulty = `${Number(`${Math.round(`${res.diff}e3`)}e-3`)}`;
        this.network.blocks = res.blocks;
      }).catch((err) => {
        console.error(err);
        this.network.hashrate = "-";
        this.network.difficulty = "-";
        this.network.blocks = {};
      }).finally(() => {
        this.network.loading = false;
      });
    },
    openLink(url) {
      utils.openUrl(url);
    },
    refreshData(args) {
      const pullRefresh = args.object;
      this.getExchanges();
      this.getNetwork();
      setTimeout(() => {
        pullRefresh.refreshing = false;
      }, 1000);
    },
  },
};
</script>
