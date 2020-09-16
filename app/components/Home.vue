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
                      <Label text="77" class="val" />
                      <Label text="Sat" class="sub" />
                    </FlexboxLayout>
                    <Label text="VOL 0.0000" class="label" style="font-size: 13;" />
                  </StackLayout>
                  <StackLayout orientation="vertical" class="card green overview" width="100" style="text-align: center;">
                    <FlexboxLayout flexDirection="column" style="padding: 15 10;">
                      <Image width="55" marginBottom="10" src="~/images/ico-moondex.png" />
                      <Label text="80" class="val" />
                      <Label text="Sat" class="sub" />
                    </FlexboxLayout>
                    <Label text="VOL 0.0000" class="label" style="font-size: 13;" />
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
                    <Span text="63.537 MH/s" style="font-weight: 700;" />
                  </FormattedString>
                </Label>
                <Label class="subheading" text="Hashrate" />
              </FlexboxLayout>
              <FlexboxLayout flexDirection="column" justifyContent="center" style="text-align: center;" flexGrow="1">
                <Label class="heading light">
                  <FormattedString>
                    <Span text="1.22" style="font-weight: 700;" />
                    <Span style="font-weight: 400; font-size: 10;" text=" UP" />
                  </FormattedString>
                </Label>
                <Label class="subheading" text="Difficulty" />
              </FlexboxLayout>
            </FlexboxLayout>
          </StackLayout>
          <!-- Blocks Area -->
          <StackLayout class="card blocks" orientation="vertical" row="2" style="margin: 10 15 0 15;padding: 0;">
            <FlexboxLayout width="100%" flexDirection="row" justifyContent="space-between" alignItems="flex-end" style="background: #fafbfc; border-radius: 3 3 0 0;">
              <FlexboxLayout flexDirection="row-reverse" alignItems="center" class="objective" alignSelf="flex-start" style="padding-top: 20;">
                <Label class="subheading" text="Latest 10" style="padding-left: 10;" />
                <Label class="heading dark" text="XMG Blocks" />
              </FlexboxLayout>
            </FlexboxLayout>
            <StackLayout orientation="vertical" style="padding: 15 0 ; margin: 0 15;">
              <FlexboxLayout class="list" flexDirection="row" alignItems="center">
                <Image class="block-img" src="~/images/pow.png" />
                <FlexboxLayout flexGrow="1" flexDirection="column">
                  <Label class="block-num" text="#2768586" />
                  <Label class="heading light" style="font-size: 16; color: #ff2e63; font-weight: 500; margin-bottom: 0; margin-top: 0;">
                    <FormattedString>
                      <Span text="33.80191196" style="font-weight: 500;" />
                      <Span style="font-weight: 400; font-size: 10;" text="  XMG" />
                    </FormattedString>
                  </Label>
                </FlexboxLayout>
                <Label text="01 Tx" style="font-size: 20; font-weight: 600; color: #ebf1f2; text-align: center; width: 50;" />
              </FlexboxLayout>
              <Image width="100%" src="" style="background: #ebf1f2; height: 1; margin:15 0;" />
              <FlexboxLayout class="list" flexDirection="row" alignItems="center">
                <Image class="block-img" src="~/images/pos.png" />
                <FlexboxLayout flexGrow="1" flexDirection="column">
                  <Label class="block-num" text="#2768585" />
                  <Label class="heading light" style="font-size: 16; color: #ff2e63; font-weight: 500; margin-bottom: 0; margin-top: 0;">
                    <FormattedString>
                      <Span text="550.53101009" style="font-weight: 500;" />
                      <Span style="font-weight: 400; font-size: 10;" text=" XMG" />
                    </FormattedString>
                  </Label>
                </FlexboxLayout>
                <Label text="02 Tx" style="font-size: 20; font-weight: 600; color: #ebf1f2; text-align: center; width: 50;" />
              </FlexboxLayout>
              <Image width="100%" src="" style="background: #ebf1f2; height: 1; margin: 15 0;" />
              <FlexboxLayout class="list" flexDirection="row" alignItems="center">
                <Image class="block-img" src="~/images/pos.png" />
                <FlexboxLayout flexGrow="1" flexDirection="column">
                  <Label class="block-num" text="#2768584" />
                  <Label class="heading light" style="font-size: 16; color: #ff2e63; font-weight: 500; margin-bottom: 0; margin-top: 0;">
                    <FormattedString>
                      <Span text="558.58151272" style="font-weight: 500;" />
                      <Span style="font-weight: 400; font-size: 10;" text=" XMG" />
                    </FormattedString>
                  </Label>
                </FlexboxLayout>
                <Label text="03 Tx" style="font-size: 20; font-weight: 600; color: #ebf1f2; text-align: center; width: 50;" />
              </FlexboxLayout>
              <Image width="100%" src="" style="background: #ebf1f2; height: 1; margin: 15 0;" />
              <FlexboxLayout class="list" flexDirection="row" alignItems="center">
                <Image class="block-img" src="~/images/pow.png" />
                <FlexboxLayout flexGrow="1" flexDirection="column">
                  <Label class="block-num" text="#2768583" />
                  <Label class="heading light" style="font-size: 16; color: #ff2e63; font-weight: 500; margin-bottom: 0; margin-top: 0;">
                    <FormattedString>
                      <Span text="558.58151272" style="font-weight: 500;" />
                      <Span style="font-weight:400; font-size:10;" text=" XMG" />
                    </FormattedString>
                  </Label>
                </FlexboxLayout>
                <Label text="04 Tx" style="font-size: 20; font-weight: 600; color: #ebf1f2; text-align: center; width: 50;" />
              </FlexboxLayout>
            </StackLayout>
          </StackLayout>
        </GridLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
export default {
};
</script>
