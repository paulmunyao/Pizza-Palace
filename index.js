jQuery(function () {
  jQuery("summary").hide();
  jQuery(".cdata-overlay").hide();

  jQuery("#checkout").click(function () {
      let size = jQuery("#size option:selected").val();
      let crust = jQuery("#crust option:selected").val();
      let topping = jQuery("#topping option:selected").val();
      let number = jQuery("#number").val();
  });
});
