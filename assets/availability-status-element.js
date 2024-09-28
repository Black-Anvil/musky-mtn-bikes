class AvailabilityStatus extends HTMLElement {
  constructor() {
    super();

    document.addEventListener("afterVariantChange", (event) => {
      let newColor = event.detail.variant.option1;
      this.handleChangeColor(newColor);
    });

    this.selectedColor = this.dataset.initialcolor;
    this.selectedLocation = "New York";
    this.stockData = undefined;

    //status elements
    this.activeLocationTexts = this.querySelectorAll(".active-location-text");

    this.delivery_status = this.querySelector("#availability-delivery-status");
    this.delivery_text = this.querySelector("#availability-delivery-text");

    this.store_status = this.querySelector("#availability-store-status");
    this.store_text = this.querySelector("#availability-store-text");

    //control elements
    this.change_location_btn = this.querySelector("#change-location-btn");
    this.change_location_btn.addEventListener(
      "click",
      this.handleChangeLocation.bind(this)
    );

    //init
    this.fetchVariantStockData(this.selectedColor);
    this.updateUI();
  }

  async handleChangeColor(color) {
    //fetch new stock data based on new color
    //then update UI()
  }

  async fetchVariantStockData(color) {}

  handleChangeLocation() {
    //if Location = New York -> set to Los Angeles, otherwise set to New York
    //then updateUI()
  }

  updateUI() {
    if (this.stockData) {
    }
  }
}
customElements.define("availability-status", AvailabilityStatus);
