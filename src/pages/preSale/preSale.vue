<template>
  <div class="preSaleContainer">
    <div class="preSaleOverlay" />

    <div class="connectWalletButton">Connect Wallet</div>

    <div class="pageContentContainer">
      <h1 class="title">PRE-SALE</h1>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos
        esse, soluta optio corporis eum ducimus beatae dignissimos hic saepe
        fuga quia perspiciatis quo, rem magni impedit consequuntur nemo
        repellat, corrupti provident similique doloribus omnis autem? Maxime,
        mollitia? Recusandae iste quis ipsam qui hic fugit, facere laudantium
        ullam eveniet nostrum.
      </p>

      <p>Maximum Allocation : 10 BNB</p>
      <p>Minimum Allocation : 0.1 BNB</p>
      <p>1 BNB = 3400 PLOT tokens</p>

      <div class="inputContainer">
        <div class="inputWrapper">
          <input
            type="number"
            placeholder="How many BNBs?"
            min="0"
            v-model="bnbCount"
            class="bnbInput"
          />
          <p class="plotSummary">
            Total PLOT: {{ bnbCount * plotPerBNBCount }}
          </p>
        </div>
        <button class="buyNowButton">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreSale",
  data: () => ({
    plotPerBNBCount: 3400,
    bnbCount: null,
  }),
};
</script>

<style src="./preSale.css" scoped></style>
