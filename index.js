jQuery(function () {
  jQuery("summary").hide();
  jQuery(".cdata-overlay").hide();

  jQuery("#checkout").click(function () {
    let size = jQuery("#size option:selected").val();
    let crust = jQuery("#crust option:selected").val();
    let topping = jQuery("#topping option:selected").val();
    let number = jQuery("#number").val();

    function order(s, c, t, n, total) {
      return { s, c, t, n, total };
    }
  });

  let price;
  let totalPrice;
  switch (size) {
    case (size = "small"):
      price = 300;
      if (crust === "stuffed crust") {
        totalPrice = price * number + 200;
      } else if (crust === "cracked crust") {
        totalPrice = price * number + 250;
      } else {
        totalPrice = price * number + 300;
      }
      break;
    case (size = "medium"):
      price = 600;
      if (crust === "stuffed crust") {
        totalPrice = price * number + 200;
      } else if (crust === "cracked crust") {
        totalPrice = price * number + 250;
      } else {
        totalPrice = price * number + 300;
      }
      break;
    case (size = "large"):
      price = 1000;
      if (crust === "stuffed crust") {
        totalPrice = price * number + 200;
      } else if (crust === "cracked crust") {
        totalPrice = price * number + 250;
      } else {
        totalPrice = price * number + 300;
      }
  }
});
